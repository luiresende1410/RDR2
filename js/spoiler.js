/** RDR2 Map — Filtro de Spoiler por Capítulo */
(function () {
  'use strict';

  const SPOILER_KEY = 'rdr2map_chapter';

  // Regiões acessíveis por capítulo
  // Capítulo 1: Apenas Colter/Grizzlies (lat > -50 aproximadamente)
  // Capítulo 2-3: New Hanover, West Elizabeth (norte), Lemoyne
  // Capítulo 4-5: Tudo exceto New Austin
  // Capítulo 6: Tudo exceto New Austin
  // Epílogo: Tudo (incluindo New Austin)
  const CHAPTER_REGIONS = {
    1: { maxLat: 0, minLat: -55, minLng: 90, maxLng: 180 },
    2: { maxLat: 0, minLat: -135, minLng: 60, maxLng: 220 },
    3: { maxLat: 0, minLat: -135, minLng: 60, maxLng: 220 },
    4: { maxLat: 0, minLat: -135, minLng: 0, maxLng: 256 },
    5: { maxLat: 0, minLat: -135, minLng: 0, maxLng: 256 },
    6: { maxLat: 0, minLat: -135, minLng: 0, maxLng: 256 },
    7: { maxLat: 0, minLat: -190, minLng: 0, maxLng: 256 },
  };

  function getSelectedChapter() {
    return parseInt(localStorage.getItem(SPOILER_KEY) || '7');
  }

  function setChapter(chapter) {
    localStorage.setItem(SPOILER_KEY, chapter.toString());
  }

  function isMarkerVisible(coords, chapter) {
    if (chapter >= 7) return true; // Epílogo: tudo visível
    const region = CHAPTER_REGIONS[chapter];
    if (!region) return true;
    const [lat, lng] = coords;
    return lat >= region.minLat && lat <= region.maxLat &&
           lng >= region.minLng && lng <= region.maxLng;
  }

  window.RDR2Spoiler = { getSelectedChapter, setChapter, isMarkerVisible };
})();
