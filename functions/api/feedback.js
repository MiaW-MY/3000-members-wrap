/**
 * POST /api/feedback — saves a message to Airtable (server-side only).
 *
 * Cloudflare Pages env vars (Settings → Environment variables):
 *   AIRTABLE_TOKEN       Personal Access Token
 *   AIRTABLE_BASE_ID     e.g. appXXXXXXXXXXXXXX
 *   AIRTABLE_TABLE_NAME  e.g. Feedback
 */

const MAX_LENGTH = 500;

export async function onRequestPost({ request, env }) {
  const token = env.AIRTABLE_TOKEN;
  const baseId = env.AIRTABLE_BASE_ID;
  const tableName = env.AIRTABLE_TABLE_NAME || 'Feedback';

  if (!token || !baseId) {
    return Response.json({ error: 'Feedback storage is not configured.' }, { status: 503 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const message = String(body.message || '').trim();
  if (!message) {
    return Response.json({ error: 'Message is required.' }, { status: 400 });
  }
  if (message.length > MAX_LENGTH) {
    return Response.json({ error: `Message must be ${MAX_LENGTH} characters or fewer.` }, { status: 400 });
  }

  const airtableRes = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
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
    return Response.json({ error: 'Could not save message.' }, { status: 502 });
  }

  return Response.json({ ok: true }, {
    headers: { 'Cache-Control': 'no-store' },
  });
}
