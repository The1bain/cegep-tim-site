// ====== FILTRE / RECHERCHE DES STAGES ======
const stageSearch = document.getElementById('stage-search');
const stageRows = document.querySelectorAll('#stage-tbody tr');
const stageChips = document.querySelectorAll('.stage-chip');

if (stageRows.length) {
  function applyStageFilters() {
    const term = stageSearch ? stageSearch.value.toLowerCase() : '';
    const activeChip = document.querySelector('.stage-chip.active');
    const typeFilter = activeChip ? activeChip.dataset.type : 'all';

    stageRows.forEach(row => {
      const text = row.textContent.toLowerCase();
      const rowType = row.dataset.type || 'autre';

      const matchText = text.includes(term);
      const matchType = typeFilter === 'all' || rowType === typeFilter;

      row.style.display = matchText && matchType ? '' : 'none';
    });
  }

  if (stageSearch) {
    stageSearch.addEventListener('input', applyStageFilters);
  }

  stageChips.forEach(chip => {
    chip.addEventListener('click', () => {
      stageChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      applyStageFilters();
    });
  });
}
