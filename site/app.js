import { filterAngels, focusTerms, normalizeAngel } from './data-model.mjs';

const $ = (selector) => document.querySelector(selector);
const els = {
  form: $('#filters'), query: $('#query'), focus: $('#focus'), stage: $('#stage'),
  checkSize: $('#check-size'), sort: $('#sort'), reset: $('#reset'), cards: $('#cards'),
  empty: $('#empty'), resultCount: $('#result-count'), angelCount: $('#angel-count'),
};

const escapeHtml = (value) => String(value ?? '').replace(/[&<>'"]/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
})[char]);

const safeUrl = (value) => {
  try { const url = new URL(value); return ['http:', 'https:'].includes(url.protocol) ? url.href : null; }
  catch { return null; }
};

function reachLinks(reach) {
  return String(reach || '').split(';').map((part) => part.trim()).filter(Boolean).map((part) => {
    const raw = part.replace(/^@/, 'x.com/');
    const candidate = raw.startsWith('http') ? raw : `https://${raw}`;
    const href = safeUrl(candidate);
    return href ? `<a href="${escapeHtml(href)}" target="_blank" rel="noopener">${escapeHtml(part)} ↗</a>` : escapeHtml(part);
  }).join('<span aria-hidden="true"> · </span>');
}

function card(row) {
  const sources = row.source_urls.map((url, index) => {
    const href = safeUrl(url);
    return href ? `<a href="${escapeHtml(href)}" target="_blank" rel="noopener">Source ${index + 1} ↗</a>` : '';
  }).filter(Boolean).join('');
  const investments = row.investments.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  return `<article class="angel-card">
    <div class="card-top">
      <div><p class="focus">${escapeHtml(row.focus)}</p><h3>${escapeHtml(row.name)}</h3></div>
      <span class="freshness ${row.freshness.tone}">${escapeHtml(row.freshness.label)}</span>
    </div>
    <p class="description">${escapeHtml(row.what_they_do)}</p>
    <dl>
      <div><dt>Check size</dt><dd>${escapeHtml(row.check_size || 'Not publicly stated')}</dd></div>
      <div><dt>Stage</dt><dd>${escapeHtml(row.stage || 'Not publicly specified')}</dd></div>
    </dl>
    ${investments ? `<div class="investments"><h4>Selected AI investments</h4><ul>${investments}</ul></div>` : ''}
    <div class="reach"><strong>Public reach</strong><div>${reachLinks(row.reach) || 'No public pitch channel found'}</div></div>
    <div class="evidence"><p>${escapeHtml(row.last_verified_activity)}</p><div>${sources}</div></div>
  </article>`;
}

function currentFilters() {
  return { query: els.query.value, focus: els.focus.value, stage: els.stage.value, checkSize: els.checkSize.value };
}

function render(rows) {
  let shown = filterAngels(rows, currentFilters());
  shown = [...shown].sort(els.sort.value === 'name'
    ? (a, b) => a.name.localeCompare(b.name)
    : (a, b) => a.freshness.ageMonths - b.freshness.ageMonths || a.name.localeCompare(b.name));
  els.cards.innerHTML = shown.map(card).join('');
  els.resultCount.textContent = `${shown.length} of ${rows.length} angels`;
  els.empty.hidden = shown.length !== 0;
}

async function start() {
  try {
    const response = await fetch('./data/angels.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (!Array.isArray(data)) throw new Error('dataset is not an array');
    const rows = data.map((row) => normalizeAngel(row));
    els.angelCount.textContent = rows.length;
    for (const term of focusTerms(rows)) {
      const option = document.createElement('option'); option.value = term; option.textContent = term; els.focus.append(option);
    }
    els.form.addEventListener('input', () => render(rows));
    els.form.addEventListener('change', () => render(rows));
    els.reset.addEventListener('click', () => { els.form.reset(); render(rows); els.query.focus(); });
    render(rows);
  } catch (error) {
    els.resultCount.textContent = 'The explorer could not load the dataset.';
    els.cards.innerHTML = '<p class="empty">Use the complete sourced list in the <a href="https://github.com/conorbronsdon/ai-angels#the-list">GitHub README</a>.</p>';
    console.error(error);
  }
}

start();
