# RDR2 — Mapa Interativo

Mapa interativo não oficial de Red Dead Redemption 2, responsivo e 100% estático para GitHub Pages.

## Recursos

- mapa HD de 7200 × 5400 px (proporção 4:3), com zoom e navegação por toque;
- filtros por categoria e controle para selecionar/desselecionar tudo;
- busca por local, cavalo ou tesouro;
- cavalos raros e áreas de aparição;
- etapas das principais caças ao tesouro;
- progresso salvo no `localStorage` do dispositivo;
- interface original em estilo western para desktop e celular.

## Executar localmente

Abra com um servidor HTTP estático. Exemplo:

```bash
npx serve .
```

Abrir o `index.html` diretamente também pode funcionar, mas um servidor local reproduz melhor o GitHub Pages.

## Publicar no GitHub Pages

1. No repositório, abra **Settings > Pages**.
2. Escolha **Deploy from a branch**.
3. Selecione `main` e `/ (root)`.
4. Acesse `https://luiresende1410.github.io/RDR2/` após o deploy.

## Editar localizações

Os dados ficam em `js/markers-data.js`. Cada ponto segue o formato:

```javascript
{ id: 'id_unico', cat: 'horses', name: 'Nome', desc: 'Descrição', coords: [y, x] }
```

As coordenadas usam o sistema legado `[y, x]`: `y` varia de 0 a 100 e `x` de 0 a 150. A aplicação projeta esses valores sobre a área cartográfica útil de 6630 × 4974 px dentro da imagem HD, compensando a moldura de papel (`x: 360–6990`, `y: 216–5190`). Os pontos continuam relativos à imagem e podem receber calibração individual.

## Créditos e fontes

- Interface cartográfica: [Leaflet](https://leafletjs.com/), licença BSD-2-Clause.
- Imagem-base do mapa: [GTA Base — Full RDR2 Map](https://www.gtabase.com/red-dead-redemption-2/map-locations/). Crédito ao autor conforme solicitado na página de origem.
- Referência para cavalos e mecânicas de aparição: [RDR2.org — Wild Horse Locations](http://www.rdr2.org/guides/story-mode/wild-horse-locations-guide/) e [IGN — Horses](https://www.ign.com/wikis/red-dead-redemption-2/Horses).

Conteúdo de referência foi resumido e reescrito. Red Dead Redemption 2 e seus elementos pertencem à Rockstar Games/Take-Two Interactive. Este projeto não é afiliado nem endossado pelos titulares.
