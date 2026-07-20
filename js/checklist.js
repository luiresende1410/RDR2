/** RDR2 Map — Checklist 100% */
(function () {
  'use strict';

  // Items required for 100% completion in RDR2
  const CHECKLIST_GROUPS = [
    {
      name: 'Missões da História',
      items: [
        { label: 'Completar todas as missões principais', manual: true },
        { label: 'Completar 10 Stranger Missions', manual: true },
      ]
    },
    {
      name: 'Colecionáveis',
      items: [
        { label: 'Gravuras Rupestres (10/10)', cat: 'rock_carvings', total: 10 },
        { label: 'Filtros dos Sonhos (20/20)', cat: 'dreamcatchers', total: 20 },
        { label: 'Ossos de Dinossauro (30/30)', cat: 'dinosaur_bones', total: 30 },
      ]
    },
    {
      name: 'Animais Lendários',
      items: [
        { label: 'Caçar todos os Animais Lendários', cat: 'legendary_animals', total: 16 },
        { label: 'Pescar todos os Peixes Lendários', cat: 'legendary_fish', total: 13 },
      ]
    },
    {
      name: 'Desafios',
      items: [
        { label: 'Bandit (10 desafios)', manual: true },
        { label: 'Explorer (10 desafios)', manual: true },
        { label: 'Gambler (10 desafios)', manual: true },
        { label: 'Herbalist (10 desafios)', manual: true },
        { label: 'Horseman (10 desafios)', manual: true },
        { label: 'Master Hunter (10 desafios)', manual: true },
        { label: 'Sharpshooter (10 desafios)', manual: true },
        { label: 'Survivalist (10 desafios)', manual: true },
        { label: 'Weapons Expert (10 desafios)', manual: true },
      ]
    },
    {
      name: 'Atividades',
      items: [
        { label: 'Encontrar 5 acampamentos de gangues', manual: true },
        { label: 'Jogar todos os minigames', manual: true },
        { label: 'Visitar todos os banhos turcos', manual: true },
        { label: 'Assistir todos os shows de teatro', manual: true },
      ]
    },
  ];

  const CHECKLIST_KEY = 'rdr2map_checklist';

  function getChecklistState() {
    try { return JSON.parse(localStorage.getItem(CHECKLIST_KEY)) || {}; }
    catch (_) { return {}; }
  }

  function saveChecklistState(state) {
    localStorage.setItem(CHECKLIST_KEY, JSON.stringify(state));
  }

  function renderChecklist() {
    const panel = document.getElementById('checklistPanel');
    if (!panel) return;
    const state = getChecklistState();
    const progress = JSON.parse(localStorage.getItem('rdr2map_progress') || '{}');

    let html = '<h3 class="checklist-title">🏆 Checklist 100%</h3>';

    CHECKLIST_GROUPS.forEach((group, gi) => {
      html += `<div class="checklist-group"><h4>${group.name}</h4>`;
      group.items.forEach((item, ii) => {
        const key = `${gi}_${ii}`;
        let checked = false;
        let countText = '';

        if (item.manual) {
          checked = state[key] || false;
        } else if (item.cat) {
          const catMarkers = (typeof MARKERS !== 'undefined') ? MARKERS.filter(m => m.cat === item.cat) : [];
          const found = catMarkers.filter(m => progress[m.id]).length;
          checked = found >= (item.total || catMarkers.length);
          countText = ` (${found}/${item.total || catMarkers.length})`;
        }

        html += `<label class="checklist-item${checked ? ' done' : ''}">
          <input type="checkbox" ${checked ? 'checked' : ''} data-key="${key}" data-manual="${item.manual || false}">
          <span>${item.label}${countText}</span>
        </label>`;
      });
      html += '</div>';
    });

    panel.innerHTML = html;

    // Bind manual checkboxes
    panel.querySelectorAll('input[data-manual="true"]').forEach(cb => {
      cb.addEventListener('change', function () {
        const s = getChecklistState();
        s[this.dataset.key] = this.checked;
        saveChecklistState(s);
        renderChecklist();
      });
    });
  }

  function toggleChecklist() {
    const panel = document.getElementById('checklistPanel');
    if (!panel) return;
    panel.classList.toggle('visible');
    if (panel.classList.contains('visible')) renderChecklist();
  }

  window.RDR2Checklist = { renderChecklist, toggleChecklist };
})();
