const DATE_PREFIX = /^(\d{4})(?:-(0[1-9]|1[0-2]))?(?!\d)/;

export function verifiedMonth(value) {
  const match = String(value || '').match(DATE_PREFIX);
  if (!match) return null;
  const year = Number(match[1]);
  // Some records intentionally cite only a verification year. Treat those as
  // January so the freshness badge errs toward earlier review, not false precision.
  const month = match[2] ? Number(match[2]) : 1;
  return { year, month, precision: match[2] ? 'month' : 'year', key: year * 12 + month };
}

export function freshness(value, now = new Date()) {
  const verified = verifiedMonth(value);
  if (!verified) return { ageMonths: Infinity, tone: 'due', label: 'Date needs review' };
  const currentKey = now.getUTCFullYear() * 12 + (now.getUTCMonth() + 1);
  const ageMonths = Math.max(0, currentKey - verified.key);
  if (ageMonths >= 18) return { ageMonths, tone: 'due', label: 'Re-check due' };
  if (ageMonths >= 12) return { ageMonths, tone: 'soon', label: 'Review soon' };
  return { ageMonths, tone: 'current', label: 'Current evidence' };
}

export function focusTerms(rows) {
  return [...new Set(rows.flatMap((row) => String(row.focus || '').split(',').map((term) => term.trim()).filter(Boolean)))]
    .sort((a, b) => a.localeCompare(b));
}

export function stageBucket(stage) {
  const value = String(stage || '').toLowerCase();
  if (!value) return 'unspecified';
  if (value.includes('pre-seed') || value.includes('pre-company')) return 'pre-seed';
  if (value.includes('series b') || value.includes('series c') || value.includes('series d')) return 'series b+';
  if (value.includes('series a')) return 'series a';
  if (value.includes('seed')) return 'seed';
  return 'other';
}

export function normalizeAngel(row, now = new Date()) {
  const sources = Array.isArray(row.source_urls) ? row.source_urls.filter(Boolean) : [];
  return {
    ...row,
    name: String(row.name || '').trim(),
    what_they_do: String(row.what_they_do || '').trim(),
    focus: String(row.focus || '').trim(),
    check_size: row.check_size ? String(row.check_size) : null,
    stage: row.stage ? String(row.stage) : null,
    reach: String(row.reach || '').trim(),
    investments: Array.isArray(row.notable_ai_investments) ? row.notable_ai_investments.map(String) : [],
    source_urls: sources,
    last_verified_activity: String(row.last_verified_activity || '').trim(),
    freshness: freshness(row.last_verified_activity, now),
    stageBucket: stageBucket(row.stage),
    searchText: [row.name, row.what_they_do, row.focus, row.check_size, row.stage, row.reach, ...(row.notable_ai_investments || [])]
      .filter(Boolean).join(' ').toLowerCase(),
  };
}

export function filterAngels(rows, filters) {
  const query = filters.query.trim().toLowerCase();
  return rows.filter((row) => {
    if (query && !row.searchText.includes(query)) return false;
    if (filters.focus && !row.focus.toLowerCase().split(',').map((x) => x.trim()).includes(filters.focus.toLowerCase())) return false;
    if (filters.stage && row.stageBucket !== filters.stage) return false;
    if (filters.checkSize === 'published' && !row.check_size) return false;
    if (filters.checkSize === 'unpublished' && row.check_size) return false;
    return true;
  });
}
