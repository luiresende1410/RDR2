# RDR2 Interactive Map

Mapa interativo de Red Dead Redemption 2 com marcadores de localizações, progresso salvo e filtros por categoria.

## Features

- Mapa interativo com zoom (Leaflet.js + CRS.Simple)
- Marcadores por categoria (animais lendários, tesouros, cidades, etc.)
- Filtros por categoria na sidebar
- Busca por nome/descrição
- Progresso salvo no localStorage (marcar itens como encontrados)
- Barra de progresso geral
- Responsivo (desktop e mobile)
- 100% estático - roda no GitHub Pages

## Deploy no GitHub Pages

1. Crie um repositório no GitHub
2. Faça push deste projeto
3. Vá em Settings > Pages
4. Source: Deploy from a branch
5. Branch: main, Folder: / (root)
6. Aguarde ~1 minuto

## Mapa

Coloque a imagem HD do mapa RDR2 em `assets/rdr2-map.jpg`.

Recomendado: imagem de pelo menos 4000x3000px para boa qualidade no zoom.

Fontes de imagem do mapa:
- https://www.gtabase.com/red-dead-redemption-2/map-locations/
- Screenshots do jogo montadas em alta resolução

## Estrutura

`
RDR2/
├── index.html          ← Página principal
├── css/style.css       ← Estilos
├── js/
│   ├── app.js          ← Lógica do mapa (Leaflet)
│   └── markers-data.js ← Dados dos marcadores
├── assets/
│   └── rdr2-map.jpg    ← Imagem do mapa (você precisa adicionar)
└── README.md
`

## Adicionar marcadores

Edite `js/markers-data.js` e adicione itens ao array MARKERS:

`javascript
{ id: 'unique_id', cat: 'category_id', name: 'Nome', desc: 'Descrição', coords: [lat, lng] }
`

As coordenadas são no sistema [0-100, 0-150] onde [0,0] é o canto inferior-esquerdo e [100,150] é o canto superior-direito.

## Stack

- HTML/CSS/JS vanilla (zero build)
- Leaflet.js 1.9.4 via CDN
- localStorage para persistência
