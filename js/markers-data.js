/**
 * RDR2 Interactive Map - Markers Data
 * Categorias e localizações de itens no mapa
 * Coordenadas baseadas no sistema Leaflet CRS.Simple [y, x] normalizado para a imagem do mapa
 */

const CATEGORIES = [
  { id: 'legendary_animals', name: 'Animais Lendários', icon: '🐻', color: '#ef4444' },
  { id: 'treasure', name: 'Tesouros', icon: '💰', color: '#d4a953' },
  { id: 'gang_hideouts', name: 'Esconderijos de Gangues', icon: '🏚️', color: '#dc2626' },
  { id: 'dreamcatchers', name: 'Dreamcatchers', icon: '🪶', color: '#a855f7' },
  { id: 'dinosaur_bones', name: 'Ossos de Dinossauro', icon: '🦴', color: '#f59e0b' },
  { id: 'rock_carvings', name: 'Gravuras Rupestres', icon: '🪨', color: '#6b7280' },
  { id: 'cigarette_cards', name: 'Cartões de Cigarro', icon: '🃏', color: '#3b82f6' },
  { id: 'legendary_fish', name: 'Peixes Lendários', icon: '🐟', color: '#06b6d4' },
  { id: 'strangers', name: 'Estranhos e Freaks', icon: '❓', color: '#8b5cf6' },
  { id: 'points_of_interest', name: 'Pontos de Interesse', icon: '⭐', color: '#10b981' },
  { id: 'camps', name: 'Acampamentos', icon: '⛺', color: '#78716c' },
  { id: 'towns', name: 'Cidades', icon: '🏘️', color: '#e2e8f0' },
];

// Marcadores de exemplo - coordenadas normalizadas [lat, lng] no range ~[-140, 0] a [0, 180]
// O mapa RDR2 tem proporção ~4:3, vamos usar bounds [[0,0], [100, 150]]
const MARKERS = [
  // Cidades
  { id: 't1', cat: 'towns', name: 'Valentine', desc: 'Cidade de pecuaristas nas Heartlands.', coords: [62, 68] },
  { id: 't2', cat: 'towns', name: 'Rhodes', desc: 'Cidade no condado de Lemoyne, território dos Grays e Braithwaites.', coords: [45, 82] },
  { id: 't3', cat: 'towns', name: 'Saint Denis', desc: 'A maior cidade do mapa, inspirada em New Orleans.', coords: [38, 105] },
  { id: 't4', cat: 'towns', name: 'Strawberry', desc: 'Cidade pequena nas montanhas de West Elizabeth.', coords: [55, 38] },
  { id: 't5', cat: 'towns', name: 'Blackwater', desc: 'Porto movimentado no Great Plains.', coords: [42, 42] },
  { id: 't6', cat: 'towns', name: 'Annesburg', desc: 'Cidade mineradora no nordeste de Roanoke Ridge.', coords: [65, 115] },
  { id: 't7', cat: 'towns', name: 'Van Horn', desc: 'Porto decadente na costa leste.', coords: [58, 120] },
  { id: 't8', cat: 'towns', name: 'Tumbleweed', desc: 'Cidade fronteiriça em New Austin.', coords: [30, 15] },
  { id: 't9', cat: 'towns', name: 'Armadillo', desc: 'Cidade atingida por uma praga em New Austin.', coords: [32, 32] },

  // Animais Lendários
  { id: 'la1', cat: 'legendary_animals', name: 'Urso Lendário (Bharati Grizzly)', desc: 'Encontrado ao norte de O-Creagh is Run, nas Grizzlies East.', coords: [78, 85] },
  { id: 'la2', cat: 'legendary_animals', name: 'Lobo Lendário', desc: 'Encontrado em Cotorra Springs, nas Grizzlies East.', coords: [82, 75] },
  { id: 'la3', cat: 'legendary_animals', name: 'Alce Lendário', desc: 'Ao nordeste de Bacchus Station.', coords: [75, 52] },
  { id: 'la4', cat: 'legendary_animals', name: 'Pantera Lendária (Giaguaro)', desc: 'Nas florestas de Lemoyne, ao sul de Bolger Glade.', coords: [32, 90] },
  { id: 'la5', cat: 'legendary_animals', name: 'Jacaré Lendário', desc: 'Nos pântanos de Lagras, Bluewater Marsh.', coords: [50, 108] },
  { id: 'la6', cat: 'legendary_animals', name: 'Bisão Lendário (Tatanka)', desc: 'Encontrado em Hennigan is Stead, New Austin.', coords: [28, 22] },
  { id: 'la7', cat: 'legendary_animals', name: 'Veado Lendário', desc: 'Nas montanhas ao oeste de Bacchus Bridge.', coords: [70, 45] },
  { id: 'la8', cat: 'legendary_animals', name: 'Castor Lendário', desc: 'Ao oeste de Van Horn, perto do rio Elysian Pool.', coords: [60, 100] },
  { id: 'la9', cat: 'legendary_animals', name: 'Raposa Lendária', desc: 'Ao norte de Rhodes em Mattock Pond.', coords: [50, 78] },
  { id: 'la10', cat: 'legendary_animals', name: 'Coiote Lendário', desc: 'Em Scarlett Meadows, ao sul de Rhodes.', coords: [40, 80] },

  // Tesouros
  { id: 'tr1', cat: 'treasure', name: 'Tesouro de Jack Hall (Mapa 1)', desc: 'No topo de Caliban is Seat, ao norte de Valentine.', coords: [72, 65] },
  { id: 'tr2', cat: 'treasure', name: 'Tesouro de Jack Hall (Mapa 2)', desc: 'Na ilha do lago O-Creagh is Run.', coords: [76, 88] },
  { id: 'tr3', cat: 'treasure', name: 'Tesouro de Jack Hall (Mapa 3)', desc: 'Atrás da cachoeira em Cotorra Springs.', coords: [80, 73] },
  { id: 'tr4', cat: 'treasure', name: 'Tesouro High Stakes (Mapa 1)', desc: 'Na borda do penhasco em Cumberland Falls.', coords: [68, 72] },
  { id: 'tr5', cat: 'treasure', name: 'Tesouro Poisonous Trail (Mapa 1)', desc: 'Na caverna de Cairn Lake.', coords: [80, 58] },
  { id: 'tr6', cat: 'treasure', name: 'Tesouro do Mapa do Velho', desc: 'Encontrado após completar o Stranger Mission.', coords: [55, 55] },

  // Peixes Lendários
  { id: 'lf1', cat: 'legendary_fish', name: 'Peixe-gato Lendário (Channel Catfish)', desc: 'Não pode ser pego normalmente. Missão especial.', coords: [40, 95] },
  { id: 'lf2', cat: 'legendary_fish', name: 'Truta Lendária (Steelhead)', desc: 'Encontrada em Willard is Rest.', coords: [70, 110] },
  { id: 'lf3', cat: 'legendary_fish', name: 'Salmão Lendário (Sockeye)', desc: 'No lago Isabella.', coords: [82, 38] },
  { id: 'lf4', cat: 'legendary_fish', name: 'Perca Lendária (Largemouth Bass)', desc: 'Em San Luis River, New Austin.', coords: [25, 28] },
  { id: 'lf5', cat: 'legendary_fish', name: 'Pike Lendário (Northern)', desc: 'Em O-Creagh is Run.', coords: [77, 86] },

  // Esconderijos de Gangues
  { id: 'gh1', cat: 'gang_hideouts', name: 'Hanging Dog Ranch', desc: 'Esconderijo da gangue O Driscoll ao norte de Strawberry.', coords: [65, 35] },
  { id: 'gh2', cat: 'gang_hideouts', name: 'Shady Belle', desc: 'Mansão abandonada usada como esconderijo em Lemoyne.', coords: [38, 92] },
  { id: 'gh3', cat: 'gang_hideouts', name: 'Beaver Hollow', desc: 'Caverna usada pela gangue Murfree Brood.', coords: [62, 95] },
  { id: 'gh4', cat: 'gang_hideouts', name: 'Fort Mercer', desc: 'Forte em New Austin, base da gangue Del Lobo.', coords: [28, 38] },
  { id: 'gh5', cat: 'gang_hideouts', name: 'Thieves Landing', desc: 'Porto de contrabandistas em West Elizabeth.', coords: [38, 48] },

  // Pontos de Interesse
  { id: 'poi1', cat: 'points_of_interest', name: 'Meteor House', desc: 'Casa destruída por um meteorito ao norte de Roanoke Valley.', coords: [72, 100] },
  { id: 'poi2', cat: 'points_of_interest', name: 'Viking Tomb', desc: 'Tumba viking escondida perto de Roanoke Ridge.', coords: [68, 108] },
  { id: 'poi3', cat: 'points_of_interest', name: 'UFO (Monte Shann)', desc: 'Avistamento de OVNI no topo do Monte Shann à noite.', coords: [60, 42] },
  { id: 'poi4', cat: 'points_of_interest', name: 'Robot', desc: 'Inventor com robô na montanha de Roanoke Ridge.', coords: [70, 112] },
  { id: 'poi5', cat: 'points_of_interest', name: 'Ghost Train', desc: 'Trem fantasma aparece à noite em Lemoyne.', coords: [48, 88] },
  { id: 'poi6', cat: 'points_of_interest', name: 'Hobbit House', desc: 'Casa enterrada similar a toca de hobbit.', coords: [55, 62] },

  // Acampamentos
  { id: 'c1', cat: 'camps', name: 'Horseshoe Overlook', desc: 'Primeiro acampamento da gangue (Chapter 2).', coords: [64, 74] },
  { id: 'c2', cat: 'camps', name: 'Clemens Point', desc: 'Acampamento em Lemoyne (Chapter 3).', coords: [43, 85] },
  { id: 'c3', cat: 'camps', name: 'Shady Belle', desc: 'Acampamento em Lemoyne (Chapter 4).', coords: [37, 91] },
  { id: 'c4', cat: 'camps', name: 'Beaver Hollow', desc: 'Último acampamento (Chapter 6).', coords: [63, 96] },
  { id: 'c5', cat: 'camps', name: 'Colter', desc: 'Acampamento na neve (Chapter 1).', coords: [85, 42] },

  // Gravuras Rupestres
  { id: 'rc1', cat: 'rock_carvings', name: 'Gravura 1 - Mount Hagen', desc: 'No topo de Mount Hagen, Grizzlies West.', coords: [83, 32] },
  { id: 'rc2', cat: 'rock_carvings', name: 'Gravura 2 - Wapiti', desc: 'Perto da reserva indígena Wapiti.', coords: [80, 68] },
  { id: 'rc3', cat: 'rock_carvings', name: 'Gravura 3 - Cumberland Forest', desc: 'Na floresta ao norte de Valentine.', coords: [70, 78] },
  { id: 'rc4', cat: 'rock_carvings', name: 'Gravura 4 - Elysian Pool', desc: 'Perto da cachoeira de Elysian Pool.', coords: [58, 98] },
  { id: 'rc5', cat: 'rock_carvings', name: 'Gravura 5 - Mount Shann', desc: 'No Monte Shann em West Elizabeth.', coords: [58, 40] },

  // Estranhos e Freaks
  { id: 's1', cat: 'strangers', name: 'The Veteran', desc: 'Veterano de guerra em O-Creagh is Run. Missão multi-parte.', coords: [75, 87] },
  { id: 's2', cat: 'strangers', name: 'The Artist', desc: 'Charles Châtenay em Saint Denis. Missões de arte.', coords: [37, 104] },
  { id: 's3', cat: 'strangers', name: 'The Mayor', desc: 'Prefeito corrupto de Saint Denis.', coords: [39, 106] },
  { id: 's4', cat: 'strangers', name: 'Bigfoot', desc: 'Missão para encontrar evidências de Bigfoot nas montanhas.', coords: [72, 40] },
  { id: 's5', cat: 'strangers', name: 'The Widow', desc: 'Viúva que precisa aprender a sobreviver. Willard is Rest.', coords: [68, 112] },
];
