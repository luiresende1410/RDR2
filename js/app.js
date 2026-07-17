/**
 * RDR2 Interactive Map - Main Application
 * Leaflet.js com CRS.Simple para mapa não-geográfico
 * 100% estático - funciona no GitHub Pages
 */

(function() {
  'use strict';

  // === CONFIG ===
  const MAP_BOUNDS = [[0, 0], [100, 150]];
  const MAP_CENTER = [50, 75];
  const MAP_ZOOM = 2;
  const MAP_MIN_ZOOM = 1;
  const MAP_MAX_ZOOM = 5;
  const STORAGE_KEY = 'rdr2map_progress';
  const STORAGE_FILTERS_KEY = 'rdr2map_filters';

  // Imagem do mapa RDR2 (usar uma imagem de alta resolução)
  // Para GitHub Pages, colocar na pasta assets/
  const MAP_IMAGE_URL = 'assets/rdr2-map.png';

  // === STATE ===
  let map;
  let markersLayer;
  let markerObjects = {};
  let progress = loadProgress();
  let activeFilters = loadFilters();

  // === INIT MAP ===
  function initMap() {
    map = L.map('map', {
      crs: L.CRS.Simple,
      minZoom: MAP_MIN_ZOOM,
      maxZoom: MAP_MAX_ZOOM,
      zoomControl: true,
      attributionControl: false,
    });

    // Adicionar imagem do mapa como overlay
    L.imageOverlay(MAP_IMAGE_URL, MAP_BOUNDS).addTo(map);
    map.fitBounds(MAP_BOUNDS);
    map.setMaxBounds(MAP_BOUNDS);

    // Layer para marcadores
    markersLayer = L.layerGroup().addTo(map);

    // Renderizar marcadores
    renderMarkers();
  }

  // === MARKERS ===
  function renderMarkers() {
    markersLayer.clearLayers();
    markerObjects = {};

    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();

    MARKERS.forEach(function(m) {
      // Verificar filtro de categoria
      if (!activeFilters[m.cat]) return;

      // Verificar busca
      if (searchTerm && !m.name.toLowerCase().includes(searchTerm) && !m.desc.toLowerCase().includes(searchTerm)) return;

      const cat = CATEGORIES.find(function(c) { return c.id === m.cat; });
      if (!cat) return;

      const isFound = progress[m.id] || false;

      // Criar ícone customizado
      var icon = L.divIcon({
        className: 'custom-marker' + (isFound ? ' found' : ''),
        html: '<div style="background:' + cat.color + ';">' + cat.icon + '</div>',
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });

      var marker = L.marker(m.coords, { icon: icon });

      // Popup
      var popupContent = '<div class="marker-popup">' +
        '<h4>' + escHtml(m.name) + '</h4>' +
        '<p>' + escHtml(m.desc) + '</p>' +
        '<button class="popup-btn ' + (isFound ? 'found' : '') + '" onclick="window.RDR2Map.toggleFound(\'' + m.id + '\')">' +
        (isFound ? '? Encontrado' : 'Marcar encontrado') +
        '</button></div>';

      marker.bindPopup(popupContent, { maxWidth: 250 });
      marker.addTo(markersLayer);
      markerObjects[m.id] = marker;
    });

    updateProgress();
  }

  // === PROGRESS ===
  function toggleFound(id) {
    if (progress[id]) {
      delete progress[id];
    } else {
      progress[id] = true;
    }
    saveProgress();
    renderMarkers();
  }

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch(e) { return {}; }
  }

  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  function resetProgress() {
    if (confirm('Tem certeza que deseja resetar todo o progresso?')) {
      progress = {};
      saveProgress();
      renderMarkers();
    }
  }

  function updateProgress() {
    var total = MARKERS.filter(function(m) { return activeFilters[m.cat]; }).length;
    var found = MARKERS.filter(function(m) { return activeFilters[m.cat] && progress[m.id]; }).length;
    var pct = total > 0 ? Math.round((found / total) * 100) : 0;

    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressText').textContent = found + ' / ' + total + ' encontrados (' + pct + '%)';
  }

  // === FILTERS ===
  function loadFilters() {
    try {
      var saved = JSON.parse(localStorage.getItem(STORAGE_FILTERS_KEY));
      if (saved) return saved;
    } catch(e) {}
    // Default: todos ativos
    var filters = {};
    CATEGORIES.forEach(function(c) { filters[c.id] = true; });
    return filters;
  }

  function saveFilters() {
    localStorage.setItem(STORAGE_FILTERS_KEY, JSON.stringify(activeFilters));
  }

  function toggleCategory(catId) {
    activeFilters[catId] = !activeFilters[catId];
    saveFilters();
    renderCategories();
    renderMarkers();
  }

  // === SIDEBAR ===
  function renderCategories() {
    var container = document.getElementById('categories');
    var html = '';

    CATEGORIES.forEach(function(cat) {
      var total = MARKERS.filter(function(m) { return m.cat === cat.id; }).length;
      var found = MARKERS.filter(function(m) { return m.cat === cat.id && progress[m.id]; }).length;
      var isActive = activeFilters[cat.id];

      html += '<div class="category-group">' +
        '<div class="category-header" onclick="window.RDR2Map.toggleCategory(\'' + cat.id + '\')">' +
        '<span class="cat-icon">' + cat.icon + '</span>' +
        '<span class="cat-name">' + cat.name + '</span>' +
        '<span class="cat-count">' + found + '/' + total + '</span>' +
        '<span class="cat-toggle ' + (isActive ? 'active' : '') + '">?</span>' +
        '</div></div>';
    });

    container.innerHTML = html;
  }

  function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('visible');
    sidebar.classList.toggle('hidden');
  }

  // === SEARCH ===
  function onSearch() {
    renderMarkers();
  }

  // === UTILS ===
  function escHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // === EVENTS ===
  function bindEvents() {
    document.getElementById('sidebarToggle').addEventListener('click', toggleSidebar);
    document.getElementById('sidebarClose').addEventListener('click', toggleSidebar);
    document.getElementById('btnReset').addEventListener('click', resetProgress);
    document.getElementById('searchInput').addEventListener('input', debounce(onSearch, 300));
  }

  function debounce(fn, delay) {
    var timer;
    return function() {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    };
  }

  // === BOOT ===
  function init() {
    initMap();
    renderCategories();
    bindEvents();

    // Mobile: sidebar começa fechada
    if (window.innerWidth <= 768) {
      document.getElementById('sidebar').classList.add('hidden');
    }
  }

  // Expor funções para onclick inline
  window.RDR2Map = {
    toggleFound: toggleFound,
    toggleCategory: toggleCategory,
  };

  // Iniciar quando DOM pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
