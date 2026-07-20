/** RDR2 Map — Sistema de Backup (Exportar/Importar progresso) */
(function () {
  'use strict';

  const STORAGE_KEY = 'rdr2map_progress';
  const FILTERS_KEY = 'rdr2map_filters';

  function exportProgress() {
    const data = {
      version: 1,
      exportedAt: new Date().toISOString(),
      progress: JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'),
      filters: JSON.parse(localStorage.getItem(FILTERS_KEY) || '{}')
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rdr2-progresso-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function importProgress() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function (event) {
        try {
          const data = JSON.parse(event.target.result);

          if (!data.progress || typeof data.progress !== 'object') {
            alert('Arquivo inválido: campo "progress" não encontrado.');
            return;
          }

          const count = Object.keys(data.progress).length;
          if (!confirm(`Importar ${count} marcadores encontrados? Isso substituirá o progresso atual.`)) {
            return;
          }

          localStorage.setItem(STORAGE_KEY, JSON.stringify(data.progress));
          if (data.filters) {
            localStorage.setItem(FILTERS_KEY, JSON.stringify(data.filters));
          }

          alert('Progresso importado com sucesso! A página será recarregada.');
          location.reload();
        } catch (err) {
          alert('Erro ao ler arquivo: ' + err.message);
        }
      };
      reader.readAsText(file);
    });
    input.click();
  }

  window.RDR2Backup = { exportProgress, importProgress };
})();
