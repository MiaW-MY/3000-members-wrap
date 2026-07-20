(function () {
  try {
    const C = window.CONTENT;
    if (!C) throw new Error('Config failed to load. Use a local server (see start.command).');

    const deck = document.getElementById('deck');
    const progressEl = document.getElementById('progress');
    const toastEl = document.getElementById('toast');
    const screens = [];
    let momentIndex = 0;

    const THANK_INDEX = { members: 5, speakers: 6, partners: 7, volunteers: 8 };

    const STAT_SVG = {
      members: '<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="2"><circle cx="14" cy="9" r="3"/><circle cx="7" cy="11" r="2.5"/><circle cx="21" cy="11" r="2.5"/><path d="M8 22a6 6 0 0 1 12 0"/><path d="M2.5 21a5 5 0 0 1 8-3.9"/><path d="M17.5 17.1a5 5 0 0 1 8 3.9"/></svg>',
      calendar: '<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="6" width="18" height="17" rx="2"/><path d="M9 3v6M19 3v6M5 11h18"/><path d="M10 15h.1M14 15h.1M18 15h.1M10 19h.1M14 19h.1M18 19h.1"/></svg>',
      linkedin: '<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="18" height="18" rx="3"/><path d="M10 13v6"/><path d="M10 10.2v.1"/><path d="M14 19v-6"/><path d="M14 15.5c0-1.6 1-2.8 2.6-2.8 1.8 0 2.9 1.2 2.9 3.3v3"/></svg>',
      partners: '<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 18 2 2a3 3 0 0 0 4.2 0l3.2-3.2a3 3 0 0 0 0-4.2l-1.2-1.2"/><path d="m15 8-2-2a3 3 0 0 0-4.2 0L5.6 9.2a3 3 0 0 0 0 4.2l1.2 1.2"/><path d="m9 14 10-10"/><path d="m19 14-10 10"/></svg>',
      speaker: '<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="10" r="4"/><path d="M5 24a7 7 0 0 1 14 0"/><path d="M21 7l1.5-2.5M23 12h2M20.5 17l2 2"/></svg>',
      handsHeart: '<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 15 5 13l-2 4 6 6h4"/><path d="m19 15 4-2 2 4-6 6h-4"/><path d="M14 9.5 12.8 8.3a3 3 0 0 0-4.2 4.2L14 18l5.4-5.5a3 3 0 0 0-4.2-4.2L14 9.5z"/></svg>',
      globe: '<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="2"><circle cx="14" cy="14" r="10"/><path d="M4 14h20M14 4a15 15 0 0 1 0 20M14 4a15 15 0 0 0 0 20"/></svg>',
      star: '<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="2"><polygon points="14 4 17.1 10.4 24 11.4 19 16.3 20.2 23.2 14 19.9 7.8 23.2 9 16.3 4 11.4 10.9 10.4 14 4"/></svg>',
    };

    const THANK_SVG = {
      members: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.7"/><path d="M16 3.2a4 4 0 0 1 0 7.6"/></svg>',
      speakers: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"><path d="M31.5 51.5C20.2 39.6 13.1 30.2 13.4 22.3c.2-5.6 4.2-9.7 9.3-9.5 4.1.1 7 2.8 8.7 6.6 2.3-4.2 6-7.5 11.1-7 5.8.5 9.2 5.4 8.6 11.2-.9 8.4-9 16.1-19.6 27.9z"/><circle cx="44.3" cy="29.1" r="2.2"/></svg>',
      partners: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m11 17 2 2a3 3 0 0 0 4.2 0l3.1-3.1a3 3 0 0 0 0-4.2l-1.1-1.1"/><path d="m13 7-2-2a3 3 0 0 0-4.2 0L3.7 8.1a3 3 0 0 0 0 4.2l1.1 1.1"/><path d="m8 12 8-8"/><path d="m16 12-8 8"/></svg>',
      volunteers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21.2l7.7-7.7 1.1-1.1a5.5 5.5 0 0 0 0-7.8z"/><path d="M12 5.7v15.5"/></svg>',
    };

    const JOURNEY_SVG = {
      sprout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22V12"/><path d="M12 12c-4 0-7-3-7-7 4 0 7 3 7 7z"/><path d="M12 12c4 0 7-3 7-7-4 0-7 3-7 7z"/></svg>',
      people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M14 18a5 5 0 0 1 7 2"/></svg>',
      flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 22V4"/><path d="M5 4h12l-2 4 2 4H5"/></svg>',
      party: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m4 20 5-14 9 9-14 5z"/><path d="m13 5 1-3"/><path d="m18 10 3-1"/><path d="m16 3 2 2"/><path d="m21 4-2 2"/></svg>',
    };

    /* ── Helpers ── */

    function asset(path) {
      if (!path) return '';
      if (path.startsWith('http')) return path;
      const rel = path.startsWith('assets/') ? path.slice(7) : path;
      return `assets/${rel.split('/').map(encodeURIComponent).join('/')}`;
    }

    function imgHtml(src, fallback, cls, alt) {
      const primary = asset(src);
      const fb = fallback ? asset(fallback) : '';
      return `<img class="${cls}" src="${primary}" alt="${alt || ''}" onerror="if(this.dataset.fallback){this.src=this.dataset.fallback;this.dataset.fallback=''}else{this.classList.add('is-missing')}" ${fb ? `data-fallback="${fb}"` : ''} />`;
    }

    function el(tag, cls, html) {
      const e = document.createElement(tag);
      if (cls) e.className = cls;
      if (html != null) e.innerHTML = html;
      return e;
    }

    function topbar() {
      const b = C.brand;
      return `
        <header class="topbar">
          <div class="topbar__brand">
            ${imgHtml(b.logoIcon, b.logoIconFallback, 'topbar__logo topbar__logo--brand', 'BA Career')}
            <span class="topbar__name">${b.name}</span>
          </div>
        </header>`;
    }

    function sectionHead(title, sub) {
      return `<div class="animate-in"><h2 class="section-title">${title}</h2>${sub ? `<p class="section-sub">${sub}</p>` : ''}</div>`;
    }

    function swipeHint(text = 'Swipe up to next') {
      return `<p class="swipe-hint animate-in"><span class="swipe-hint__arrow">↑</span> ${text}</p>`;
    }

    function screen(cls, innerHTML, id) {
      const s = el('section', `screen ${cls}`);
      s.dataset.screenId = id;
      s.innerHTML = `
        <div class="screen-decor" aria-hidden="true">
          <span class="screen-decor__spark screen-decor__spark--1">✦</span>
          <span class="screen-decor__spark screen-decor__spark--2">♡</span>
          <span class="screen-decor__spark screen-decor__spark--3">✧</span>
        </div>
        <div class="screen__inner">${innerHTML}</div>
        <div class="wave-bottom" aria-hidden="true"></div>`;
      deck.appendChild(s);
      screens.push(s);
      return s;
    }

    /* ── Screens ── */

    function buildOpening() {
      const o = C.opening;
      const photos = o.collage
        .map(
          (p, i) =>
            `<div class="opening-photo opening-photo--${i + 1}">${imgHtml(p, null, 'opening-photo__img', 'Community photo')}</div>`
        )
        .join('');

      const s = el('section', 'screen screen--opening');
      s.dataset.screenId = 'opening';
      s.innerHTML = `
        <div class="screen__inner screen__inner--opening">
          <div class="opening-body">
            <div class="opening-sparkles" aria-hidden="true">
              <span class="opening-sparkles__s opening-sparkles__s--1">✦</span>
              <span class="opening-sparkles__s opening-sparkles__s--2">✧</span>
              <span class="opening-confetti opening-confetti--1"></span>
              <span class="opening-confetti opening-confetti--2"></span>
              <span class="opening-confetti opening-confetti--3"></span>
              <span class="opening-confetti opening-confetti--4"></span>
              <span class="opening-confetti opening-confetti--5"></span>
              <span class="opening-confetti opening-confetti--6"></span>
            </div>
            <div class="opening-hero animate-in">
              <div class="opening-brand">
                ${imgHtml(C.brand.logoFull, C.brand.logoFallback, 'opening-brand__img', 'BA Career')}
              </div>
              <span class="badge badge--pill">${o.badge}</span>
              <h1 class="opening-title">
                <span class="opening-title__num">${o.headline.replace(',', '')}</span>
                <span class="opening-title__word">${o.headlineScript}</span>
              </h1>
              <p class="opening-sub">
                <span class="opening-sub__line opening-sub__line--heart">Thank you for being part of our journey.<span class="opening-heart" aria-hidden="true">♥</span></span>
              </p>
            </div>
            <div class="opening-collage animate-in">
              ${photos}
              <button class="opening-play" type="button" aria-label="Play video">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--purple-main)"><polygon points="8,5 19,12 8,19"/></svg>
              </button>
            </div>
          </div>
          <div class="opening-wave animate-in">
            <span class="opening-wave__chev">⌃</span>
            <span class="opening-wave__text">Swipe up to explore</span>
          </div>
        </div>`;
      deck.appendChild(s);
      screens.push(s);
    }

    function buildJourneyIntro() {
      const j = C.journey;
      const nodes = j.timeline
        .map(
          (t) => `
          <div class="journey-tl__item${t.highlight ? ' journey-tl__item--highlight' : ''}">
            <div class="journey-tl__icon">${JOURNEY_SVG[t.icon] || JOURNEY_SVG.sprout}</div>
            <div class="journey-tl__body">
              <div class="journey-tl__year">${t.year}</div>
              <p class="journey-tl__text">${t.text}</p>
            </div>
          </div>`
        )
        .join('');

      screen('', `${topbar()}<div class="screen__content screen__content--top journey-intro-content">${sectionHead(j.title, j.subtitle)}<div class="journey-tl animate-in">${nodes}</div></div>${swipeHint()}`, 'journey-intro');
    }

    function buildJourneyDetail(items) {
      const cards = items
        .map(
          (d) => `
          <div class="journey-card${d.highlight ? ' journey-card--highlight' : ''} animate-in">
            <div class="journey-card__year">${d.year}</div>
            <div class="journey-card__title">${d.title}</div>
            <p class="journey-card__text">${d.text}</p>
          </div>`
        )
        .join('');

      screen('', `${topbar()}<div class="screen__content screen__content--top">${sectionHead(C.journey.title, '')}<div class="journey-cards">${cards}</div></div>${swipeHint()}`, 'journey-detail');
    }

    function buildStats(items) {
      const cards = items
        .map(
          (s) => `
          <div class="stat-card animate-in">
            <div class="stat-card__icon stat-card__icon--${s.color}${s.iconImage ? ' stat-card__icon--image' : ''}">${s.iconImage ? imgHtml(s.iconImage, null, 'stat-card__icon-img', s.label) : (STAT_SVG[s.icon] || STAT_SVG.members)}</div>
            <div>
              <div class="stat-card__value"${s.value != null ? ` data-count="${s.value}" data-suffix="${s.suffix || ''}"` : ''}>${s.value != null ? `0${s.suffix || ''}` : s.valueText}</div>
              <div class="stat-card__label">${s.label}</div>
              ${s.subtitle ? `<div class="stat-card__sub">${s.subtitle}</div>` : ''}
            </div>
          </div>`
        )
        .join('');

      screen('', `${topbar()}<div class="screen__content screen__content--top stats-content">${sectionHead(C.stats.title, C.stats.subtitle)}<div class="stat-list">${cards}</div><p class="stats-note animate-in"><span class="stats-note__heart">♡</span><span class="stats-note__text">${C.stats.note}</span></p></div>${swipeHint()}`, 'stats');
    }

    function buildMoments() {
      const photos = C.moments
        .slice(0, 5)
        .map(
          (m, i) => `
          <div class="moments-tile moments-tile--${i + 1}">
            ${imgHtml(m.image, null, 'moments-tile__img', m.caption)}
          </div>`
        )
        .join('');

      screen('', `
        ${topbar()}
        <div class="screen__content screen__content--top moments-content">
          <div class="animate-in moments-head">
            <h2 class="section-title">Community<br>Moments</h2>
            <p class="section-sub">Behind every milestone are the people,<br>stories and conversations that brought us here.</p>
          </div>
          <div class="moments-deco" aria-hidden="true">♡</div>
          <div class="moments-collage animate-in">
            ${photos}
          </div>
        </div>
        ${swipeHint()}
      `, 'moments');
    }

    function buildThankDetail(key) {
      const cat = C.thankYou.categories[key];
      const copy = cat.text.join(' ');
      const titleDecor = {
        speakers: 'decor/speakers-heart-transparent.png',
        partners: 'decor/partners-handshake-transparent.png',
        volunteers: 'decor/volunteers-heart-hand-transparent.png',
      }[key];
      let feature = '';

      if (key === 'speakers') {
        feature = `
          <div class="thank-layout thank-layout--speakers animate-in">
            <div class="speaker-feature">
              ${imgHtml('thanks/speakers-1.jpg', null, 'thank-photo__img', 'Speaker presenting')}
              <span class="speaker-feature__badge">Featured Talk</span>
            </div>
            <div class="thank-mini-grid">
              <div class="thank-photo">${imgHtml('thanks/speakers-2.jpg', null, 'thank-photo__img', 'Speaker moment')}</div>
              <div class="thank-quote thank-quote--purple">Every talk adds a new perspective.</div>
              <div class="thank-quote thank-quote--gold">Ideas shared today, impact tomorrow.</div>
              <div class="thank-photo">${imgHtml('thanks/speakers-3.jpg', null, 'thank-photo__img', 'Q and A')}</div>
            </div>
          </div>`;
      } else if (key === 'partners') {
        const logoCards = (cat.logos || [])
          .map((logo) => `<div class="partner-logo-card">${imgHtml(logo.logo, null, 'partner-logo-card__img', `${logo.name} logo`)}</div>`)
          .join('');
        feature = `
          <div class="thank-layout thank-layout--partners animate-in">
            <div class="partners-logo-grid">
              ${logoCards}
            </div>
            <div class="partners-impact">
              <span class="partners-impact__icon">${THANK_SVG.members}</span>
              <span class="partners-impact__copy"><strong>Stronger together.</strong><br>Shared goals. Greater impact.</span>
              <span class="partners-impact__heart">${imgHtml('decor/speakers-heart-transparent.png', null, 'partners-impact__heart-img', 'Heart')}</span>
            </div>
          </div>`;
      } else {
        feature = `
          <div class="thank-layout thank-layout--volunteers animate-in">
            <div class="volunteer-hero">${imgHtml('thanks/volunteers-1.jpg', null, 'thank-photo__img', 'Volunteers group')}</div>
            <div class="volunteer-grid">
              <div class="volunteer-card">
                ${imgHtml('thanks/volunteers-2.jpg', null, 'thank-photo__img', 'Planning with care')}
                <span>Planning with care</span>
              </div>
              <div class="volunteer-card">
                ${imgHtml('thanks/volunteers-3.jpg', null, 'thank-photo__img', 'Helping with heart')}
                <span>Helping with heart</span>
              </div>
            </div>
            <div class="volunteer-note">
              <span class="volunteer-note__heart">${imgHtml('decor/speakers-heart-transparent.png', null, 'volunteer-note__heart-img', 'Heart')}</span>
              <span class="volunteer-note__copy"><strong>Your dedication makes the difference.</strong><br>Grateful for all you do.</span>
              <span class="volunteer-note__sparkles" aria-hidden="true"><i>✦</i><i>✦</i></span>
            </div>
          </div>`;
      }

      screen('', `
        ${topbar()}
        <div class="screen__content screen__content--top thank-page thank-page--${key}">
          <div class="thank-page__head animate-in">
            <div class="thank-title-row">
              <h2 class="thank-page__title">${cat.title.replace('Our ', 'Our<br>')}</h2>
              <span class="thank-title-icon thank-title-icon--${key}">
                ${titleDecor ? imgHtml(titleDecor, null, 'thank-title-icon__img', `${cat.title} decoration`) : THANK_SVG[key]}
              </span>
            </div>
            <p class="thank-page__intro">${copy}</p>
          </div>
          ${feature}
        </div>
        ${swipeHint()}
      `, `thank-${key}`);
    }

    function buildWhatsNext() {
      const w = C.whatsNext;
      const items = w.items
        .map(
          (it, i) => `
          <div class="next-item next-item--${i + 1} animate-in">
            <span class="next-item__icon">${imgHtml(it.icon, null, 'next-item__icon-img', it.text)}</span>
            <span class="next-item__copy"><strong>${it.text}</strong><em>${it.detail}</em></span>
          </div>`
        )
        .join('');

      screen('', `${topbar()}<div class="screen__content screen__content--top whats-next-content">${sectionHead(w.title, w.subtitle)}<div class="next-list">${items}</div></div>${swipeHint('Swipe to continue')}`, 'whats-next');
      screens[screens.length - 1].querySelector('.screen__content')?.insertAdjacentHTML('beforeend', `
        <div class="next-photo-card animate-in">
          ${imgHtml(w.bottomImage, null, 'next-photo-card__img', 'Community group photo')}
          <p>Still growing, together. <span>♡</span></p>
        </div>`);
    }

    function buildFeedback() {
      const f = C.feedback;
      screen('', `
        ${topbar()}
        <div class="screen__content screen__content--top feedback-content">
          <div class="feedback-head animate-in">
            <div class="feedback-title-row">
              <h2 class="feedback-title">${f.title}</h2>
              <span class="feedback-title__heart">${imgHtml('decor/speakers-heart-transparent.png', null, 'feedback-title__heart-img', 'Heart')}</span>
            </div>
            <p class="feedback-subtitle">${f.subtitle}</p>
          </div>
          <div class="feedback-question animate-in">
            <p class="feedback-question__main">${f.question}</p>
            <p class="feedback-question__sub">${f.prompt}</p>
          </div>
          <form class="feedback-form animate-in" id="feedback-form">
            <label class="feedback-field">
              <textarea name="message" placeholder="${f.placeholder}" maxlength="${f.maxLength}" required></textarea>
              <span class="feedback-form__counter"><span id="char-count">0</span> / ${f.maxLength}</span>
            </label>
            <button class="btn-primary feedback-submit" type="submit">
              <span>Share your message</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4 20-7z"/><path d="M22 2 11 13"/></svg>
            </button>
          </form>
          <div class="feedback-success animate-in" id="feedback-success" hidden>
            <span class="feedback-success__label">${f.successTitle}</span>
            <p class="feedback-success__message" id="feedback-shared-message"></p>
          </div>
          <div class="feedback-note-card animate-in" id="feedback-note-card" hidden>
            <span class="feedback-note-card__icon">${imgHtml('feedback/envelope-heart.png', null, 'feedback-note-card__img', 'Message envelope')}</span>
            <p>${f.note}</p>
          </div>
        </div>
      `, 'feedback');
    }

    function buildClosing() {
      const c = C.closing;

      screen('screen--closing', `
        <div class="closing-full-art animate-in">
          ${imgHtml(c.image, null, 'closing-full-art__img', '3000 members closing')}
        </div>
      `, 'closing');
    }

    /* ── Build & init ── */

    function buildAll() {
      deck.innerHTML = '';
      screens.length = 0;
      progressEl.innerHTML = '';
      buildOpening();
      buildJourneyIntro();
      buildStats(C.stats.items);
      buildMoments();
      ['speakers', 'partners', 'volunteers'].forEach(buildThankDetail);
      buildWhatsNext();
      buildFeedback();
      buildClosing();
      screens.forEach((_, i) => {
        progressEl.appendChild(el('div', `progress__dot${i === 0 ? ' progress__dot--active' : ''}`));
      });
    }

    function initObserver() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            const idx = screens.indexOf(entry.target);
            if (idx < 0) return;
            progressEl.querySelectorAll('.progress__dot').forEach((d, i) => {
              d.classList.toggle('progress__dot--active', i === idx);
            });
            progressEl.classList.toggle('progress--on-wave', idx === 0);
            if (entry.target.dataset.screenId === 'stats') runCountUp(entry.target);
          });
        },
        { threshold: 0.55 }
      );
      screens.forEach((s) => observer.observe(s));
    }

    function scrollToScreen(idx) {
      screens[idx]?.scrollIntoView({ behavior: 'smooth' });
    }

    function runCountUp(screenEl) {
      screenEl.querySelectorAll('[data-count]').forEach((node) => {
        if (node.dataset.done) return;
        node.dataset.done = '1';
        const target = parseInt(node.dataset.count, 10);
        const suffix = node.dataset.suffix || '';
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / 1200, 1);
          const val = Math.floor(target * (1 - Math.pow(1 - p, 3)));
          node.textContent = val.toLocaleString() + suffix;
          if (p < 1) requestAnimationFrame(tick);
          else node.textContent = target.toLocaleString() + suffix;
        };
        requestAnimationFrame(tick);
      });
    }

    function renderMoment(i) {
      const slide = document.getElementById('moment-slide');
      const count = document.getElementById('moment-count');
      const dots = document.getElementById('moment-dots');
      if (!slide) return;

      const m = C.moments[i];
      const src = asset(m.image);
      slide.innerHTML = `
        <img class="carousel__img" src="${src}" alt="${m.caption}" onerror="this.classList.add('is-missing')" />
        <span class="carousel__caption">${m.caption}</span>`;
      count.textContent = `${i + 1}/${C.moments.length}`;

      if (dots && !dots.children.length) {
        C.moments.forEach((_, j) => dots.appendChild(el('div', `carousel__dot${j === 0 ? ' carousel__dot--active' : ''}`)));
      }
      dots?.querySelectorAll('.carousel__dot').forEach((d, j) => d.classList.toggle('carousel__dot--active', j === i));
      momentIndex = i;
    }

    function initEvents() {
      deck.addEventListener('click', (e) => {
        const card = e.target.closest('[data-goto]');
        if (card) scrollToScreen(parseInt(card.dataset.goto, 10));
        if (e.target.closest('[data-moment-prev]')) renderMoment((momentIndex - 1 + C.moments.length) % C.moments.length);
        if (e.target.closest('[data-moment-next]')) renderMoment((momentIndex + 1) % C.moments.length);
      });

      const form = document.getElementById('feedback-form');
      const textarea = form?.querySelector('textarea');
      const charCount = document.getElementById('char-count');
      const successCard = document.getElementById('feedback-success');
      const sharedMessage = document.getElementById('feedback-shared-message');
      const noteCard = document.getElementById('feedback-note-card');
      textarea?.addEventListener('input', () => { if (charCount) charCount.textContent = textarea.value.length; });

      const showSharedMessage = (message) => {
        form.hidden = true;
        if (sharedMessage) sharedMessage.textContent = message;
        if (successCard) successCard.hidden = false;
        if (noteCard) noteCard.hidden = false;
        textarea.value = '';
        if (charCount) charCount.textContent = '0';
      };

      form?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const message = textarea.value.trim();
        if (!message) return;
        const endpoint = C.feedback.submitEndpoint || C.feedback.formspreeEndpoint;
        if (endpoint) {
          try {
            const res = await fetch(endpoint, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
              body: JSON.stringify({ message, _subject: 'BA Career 3000 Wrap — New Message' }),
            });
            if (!res.ok) throw new Error();
            showSharedMessage(message);
          } catch {
            toast('Something went wrong. Please try again.');
          }
        } else {
          showSharedMessage(message);
        }
      });

      let touchStartX = 0;
      document.getElementById('moments-carousel')?.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
      document.getElementById('moments-carousel')?.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 40) {
          renderMoment(dx < 0 ? (momentIndex + 1) % C.moments.length : (momentIndex - 1 + C.moments.length) % C.moments.length);
        }
      }, { passive: true });
    }

    function toast(msg) {
      toastEl.textContent = msg;
      toastEl.classList.add('toast--show');
      setTimeout(() => toastEl.classList.remove('toast--show'), 2800);
    }

    buildAll();
    renderMoment(0);
    initObserver();
    initEvents();
    screens[0]?.classList.add('is-visible');
  } catch (err) {
    console.error(err);
    const deck = document.getElementById('deck');
    if (deck) {
      deck.innerHTML = `<div style="padding:32px 24px;text-align:center;font-family:sans-serif">
        <p style="font-size:18px;font-weight:700;color:#5B3A8C;margin-bottom:12px">Page failed to load</p>
        <p style="font-size:14px;color:#666">${err.message}</p>
        <p style="font-size:13px;color:#999;margin-top:16px">Double-click <b>start.command</b> in Finder</p>
      </div>`;
    }
  }
})();
