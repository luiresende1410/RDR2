/** RDR2 Interactive Map — aplicação estática para GitHub Pages. */
(function () {
  'use strict';

  const TILES_URL = 'https://oyster.ignimgs.com/ignmedia/wikimaps/red-dead-redemption-2/hi-res/{z}/{x}-{y}.jpg';
  const MAP_BOUNDARY = L.latLngBounds(L.latLng(-190, 0), L.latLng(0, 256));
  const MOBILE_VIEWPORT = window.matchMedia('(max-width: 768px)');
  const STORAGE_KEY = 'rdr2map_progress';
  const FILTERS_KEY = 'rdr2map_filters';

  let map;
  let markersLayer;
  let markerObjects = {};
  let progress = readStorage(STORAGE_KEY, {});
  let activeFilters = normalizeFilters(readStorage(FILTERS_KEY, {}));

  function readStorage(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; }
    catch (_) { return fallback; }
  }

  function normalizeFilters(saved) {
    const normalized = {};
    CATEGORIES.forEach(cat => { normalized[cat.id] = saved[cat.id] !== false; });
    return normalized;
  }

  function initMap() {
    map = L.map('map', {
      crs: L.CRS.Simple,
      minZoom: 2,
      maxZoom: 7,
      zoomSnap: 0.25,
      zoomDelta: 0.5,
      attributionControl: false,
      maxBoundsViscosity: 0.85,
      preferCanvas: true
    });

    L.tileLayer(TILES_URL, {
      minZoom: 2,
      maxZoom: 7,
      noWrap: true,
      tms: true
    }).addTo(map);

    map.fitBounds(MAP_BOUNDARY);
    map.setMaxBounds(MAP_BOUNDARY.pad(0.05));

    // Show coordinates on mouse move
    const coordsDisplay = document.createElement('div');
    coordsDisplay.id = 'coordsDisplay';
    coordsDisplay.style.cssText = 'position:fixed;bottom:8px;right:8px;z-index:1000;padding:5px 10px;background:#171512ee;color:#d4a953;border:1px solid #544735;border-radius:3px;font:12px monospace;pointer-events:none;';
    document.body.appendChild(coordsDisplay);
    map.on('mousemove', function(e) {
      coordsDisplay.textContent = '[' + e.latlng.lat.toFixed(1) + ', ' + e.latlng.lng.toFixed(1) + ']';
    });

    markersLayer = L.layerGroup().addTo(map);
    renderMarkers();

    setTimeout(() => document.getElementById('mapHint').classList.add('hidden'), 5000);
  }

  function renderMarkers() {
    markersLayer.clearLayers();
    markerObjects = {};
    const term = document.getElementById('searchInput').value.toLocaleLowerCase('pt-BR').trim();
    const chapter = window.RDR2Spoiler ? window.RDR2Spoiler.getSelectedChapter() : 7;
    let visible = 0;

    MARKERS.forEach(item => {
      if (!activeFilters[item.cat]) return;
      if (term && !(`${item.name} ${item.desc}`).toLocaleLowerCase('pt-BR').includes(term)) return;
      if (window.RDR2Spoiler && !window.RDR2Spoiler.isMarkerVisible(item.coords, chapter)) return;

      const category = CATEGORIES.find(cat => cat.id === item.cat);
      if (!category) return;
      const found = Boolean(progress[item.id]);
      const icon = L.divIcon({
        className: '',
        html: `<div class="custom-marker${found ? ' found' : ''}" style="--marker-color:${category.color}" title="${escapeHtml(item.name)}"><span>${category.icon}</span></div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -14]
      });

      const marker = L.marker(item.coords, { icon, title: item.name, riseOnHover: true });
      marker.bindPopup(buildPopup(item, category, found), { maxWidth: 290, minWidth: 220 });
      marker.addTo(markersLayer);
      markerObjects[item.id] = marker;
      visible += 1;
    });

    document.getElementById('visibleMarkersCount').textContent = `${visible} ${visible === 1 ? 'local' : 'locais'}`;
    updateProgress();
  }

  function buildPopup(item, category, found) {
    const tipHtml = item.tip ? `<div class="popup-tip">💡 <em>${escapeHtml(item.tip)}</em></div>` : '';
    const imgHtml = item.image ? `<div class="popup-image"><img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy"></div>` : '';
    const coordsHtml = `<p style="color:#9d9383;font-size:10px;margin:0 0 10px;">coords: [${item.coords[0]}, ${item.coords[1]}]</p>`;

    return `<article class="marker-popup">
      <span class="popup-cat" style="--cat-color:${category.color}">${category.icon} ${escapeHtml(category.name)}</span>
      <h2>${escapeHtml(item.name)}</h2>
      ${imgHtml}
      <p>${escapeHtml(item.desc)}</p>
      ${tipHtml}
      ${coordsHtml}
      <button class="popup-btn${found ? ' found' : ''}" type="button" onclick="window.RDR2Map.toggleFound('${item.id}')">
        ${found ? '✓ Coletado — desfazer' : '○ Marcar como coletado'}
      </button>
    </article>`;
  }

  function toggleFound(id) {
    if (progress[id]) delete progress[id]; else progress[id] = true;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    renderCategories();
    renderMarkers();
    const marker = markerObjects[id];
    if (marker) marker.openPopup();
  }

  function resetProgress() {
    if (!confirm('Remover todo o progresso salvo neste dispositivo?')) return;
    progress = {};
    localStorage.setItem(STORAGE_KEY, '{}');
    renderCategories();
    renderMarkers();
  }

  function updateProgress() {
    const total = MARKERS.length;
    const found = MARKERS.filter(item => progress[item.id]).length;
    const percent = total ? Math.round((found / total) * 100) : 0;
    document.getElementById('progressFill').style.width = `${percent}%`;
    document.getElementById('progressText').textContent = `${found} / ${total} (${percent}%)`;
  }

  function toggleCategory(categoryId) {
    activeFilters[categoryId] = !activeFilters[categoryId];
    saveFilters();
    renderCategories();
    renderMarkers();
  }

  function setAllCategories(enabled) {
    CATEGORIES.forEach(cat => { activeFilters[cat.id] = enabled; });
    saveFilters();
    renderCategories();
    renderMarkers();
  }

  function saveFilters() {
    localStorage.setItem(FILTERS_KEY, JSON.stringify(activeFilters));
  }

  function updateSelectAll() {
    const checkbox = document.getElementById('selectAllCategories');
    const enabled = CATEGORIES.filter(cat => activeFilters[cat.id]).length;
    checkbox.checked = enabled === CATEGORIES.length;
    checkbox.indeterminate = enabled > 0 && enabled < CATEGORIES.length;
  }

  function renderCategories() {
    const container = document.getElementById('categories');
    container.innerHTML = CATEGORIES.map(category => {
      const total = MARKERS.filter(item => item.cat === category.id).length;
      const found = MARKERS.filter(item => item.cat === category.id && progress[item.id]).length;
      return `<button class="category-item${activeFilters[category.id] ? ' active' : ''}" type="button"
        style="--cat-color:${category.color}" onclick="window.RDR2Map.toggleCategory('${category.id}')"
        aria-pressed="${activeFilters[category.id]}">
        <span class="cat-checkbox" aria-hidden="true"></span>
        <span class="cat-icon" aria-hidden="true">${category.icon}</span>
        <span class="cat-name">${escapeHtml(category.name)}</span>
        <span class="cat-count">${found}/${total}</span>
      </button>`;
    }).join('');
    updateSelectAll();
  }

  function toggleSidebar(forceOpen) {
    const sidebar = document.getElementById('sidebar');
    const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : !sidebar.classList.contains('visible');
    sidebar.classList.toggle('visible', shouldOpen);
    sidebar.classList.toggle('hidden', !shouldOpen);
    document.body.classList.toggle('sidebar-closed', !shouldOpen);
    setTimeout(() => map.invalidateSize(), 320);
  }

  function escapeHtml(value) {
    const node = document.createElement('div');
    node.textContent = value;
    return node.innerHTML;
  }

  function debounce(fn, delay) {
    let timer;
    return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); };
  }

  function syncSidebarForViewport(event) {
    toggleSidebar(!event.matches);
  }

  function bindEvents() {
    document.getElementById('sidebarToggle').addEventListener('click', () => toggleSidebar(true));
    document.getElementById('sidebarClose').addEventListener('click', () => toggleSidebar(false));
    document.getElementById('btnReset').addEventListener('click', resetProgress);
    document.getElementById('btnExport').addEventListener('click', () => window.RDR2Backup.exportProgress());
    document.getElementById('btnImport').addEventListener('click', () => window.RDR2Backup.importProgress());
    document.getElementById('selectAllCategories').addEventListener('change', event => setAllCategories(event.target.checked));
    document.getElementById('searchInput').addEventListener('input', debounce(renderMarkers, 180));
    document.getElementById('chapterSelect').addEventListener('change', function (e) {
      if (window.RDR2Spoiler) window.RDR2Spoiler.setChapter(parseInt(e.target.value));
      renderMarkers();
    });
    window.addEventListener('resize', debounce(() => map.invalidateSize(), 150));
    MOBILE_VIEWPORT.addEventListener('change', syncSidebarForViewport);
  }

  function init() {
    renderCategories();
    bindEvents();
    initMap();
    syncSidebarForViewport(MOBILE_VIEWPORT);
    // Restore chapter selection
    if (window.RDR2Spoiler) {
      document.getElementById('chapterSelect').value = window.RDR2Spoiler.getSelectedChapter();
    }
  }

  window.RDR2Map = { toggleFound, toggleCategory };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();





