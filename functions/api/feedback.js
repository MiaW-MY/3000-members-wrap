/**
 * POST /api/feedback — saves a message to Airtable (server-side only).
 *
 * Cloudflare Pages env vars (Settings → Environment variables):
 *   AIRTABLE_TOKEN       Personal Access Token
 *   AIRTABLE_BASE_ID     e.g. appXXXXXXXXXXXXXX
 *   AIRTABLE_TABLE_NAME  e.g. Feedback
 */

const MAX_LENGTH = 500;
const MAX_NAME_LENGTH = 60;
const NAME_FIELD = 'Name or nickname';

function airtableHint(status) {
  if (status === 401 || status === 403) return 'Check AIRTABLE_TOKEN scope (data.records:write) and base access.';
  if (status === 404) return 'Check AIRTABLE_BASE_ID (app…) and table name (e.g. "Table 1").';
  if (status === 422) return `Check column names: ${NAME_FIELD}, Message (long text), and Source (single line text).`;
  return `Airtable returned ${status}.`;
}

export async function onRequestPost({ request, env }) {
  const token = env.AIRTABLE_TOKEN;
  const baseId = env.AIRTABLE_BASE_ID;
  const tableRef = env.AIRTABLE_TABLE_ID || env.AIRTABLE_TABLE_NAME || 'Table 1';

  if (!token || !baseId) {
    return Response.json({ error: 'Feedback storage is not configured.' }, { status: 503 });
  }

  if (!baseId.startsWith('app')) {
    return Response.json({
      error: 'AIRTABLE_BASE_ID must start with "app", not the base display name.',
    }, { status: 503 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const message = String(body.message || '').trim();
  const name = String(body.name || '').trim();
  if (!name) {
    return Response.json({ error: 'Name or nickname is required.' }, { status: 400 });
  }
  if (name.length > MAX_NAME_LENGTH) {
    return Response.json({ error: `Name must be ${MAX_NAME_LENGTH} characters or fewer.` }, { status: 400 });
  }
  if (!message) {
    return Response.json({ error: 'Message is required.' }, { status: 400 });
  }
  if (message.length > MAX_LENGTH) {
    return Response.json({ error: `Message must be ${MAX_LENGTH} characters or fewer.` }, { status: 400 });
  }

  const airtableRes = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableRef)}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              [NAME_FIELD]: name,
              Message: message,
              Source: '3000 Wrap',
            },
          },
        ],
      }),
    }
  );

  if (!airtableRes.ok) {
    const detail = await airtableRes.text();
    console.error('Airtable error:', airtableRes.status, detail);
    return Response.json({
      error: 'Could not save message.',
      hint: airtableHint(airtableRes.status),
    }, { status: 502 });
  }

  return Response.json({ ok: true }, {
    headers: { 'Cache-Control': 'no-store' },
  });
}
