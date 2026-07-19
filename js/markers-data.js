/**
 * RDR2 Interactive Map - Markers Data
 * Categorias e localizações de itens no mapa.
 * Coordenadas nativas [lat, lng] do sistema IGN tiles (lat: -190 a 0, lng: 0 a 256).
 * y=0 é a base (sul) e y=100 é o topo (norte) da imagem.
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
  { id: 'horses', name: 'Cavalos Selvagens', icon: '🐴', color: '#c084fc' },
  { id: 'camps', name: 'Acampamentos', icon: '⛺', color: '#78716c' },
  { id: 'towns', name: 'Cidades', icon: '🏘️', color: '#e2e8f0' },
];

const MARKERS = [
  // Cidades (medidas por detecção de rótulo na imagem HD)
  { id: 't1', cat: 'towns', name: 'Valentine', desc: 'Cidade de pecuaristas nas Heartlands.', coords: [-72.0, 143.0] },
  { id: 't2', cat: 'towns', name: 'Rhodes', desc: 'Cidade no condado de Lemoyne, território dos Grays e Braithwaites.', coords: [-110.8, 176.36] },
  { id: 't3', cat: 'towns', name: 'Saint Denis', desc: 'A maior cidade do mapa, inspirada em New Orleans.', coords: [-111.59, 204.33] },
  { id: 't4', cat: 'towns', name: 'Strawberry', desc: 'Cidade pequena nas montanhas de West Elizabeth.', coords: [-94.04, 93.29] },
  { id: 't5', cat: 'towns', name: 'Blackwater', desc: 'Porto movimentado no Great Plains.', coords: [-112.23, 131.89] },
  { id: 't6', cat: 'towns', name: 'Annesburg', desc: 'Cidade mineradora no nordeste de Roanoke Ridge.', coords: [-56.81, 208.45] },
  { id: 't7', cat: 'towns', name: 'Van Horn', desc: 'Porto decadente na costa leste.', coords: [-73.58, 210.63] },
  { id: 't8', cat: 'towns', name: 'Tumbleweed', desc: 'Cidade fronteiriça em New Austin.', coords: [-146.97, 34.1] },
  { id: 't9', cat: 'towns', name: 'Armadillo', desc: 'Cidade atingida por uma praga em New Austin.', coords: [-139.35, 71.42] },

  // Animais Lendários
  { id: 'la1', cat: 'legendary_animals', name: 'Urso Lendário (Bharati Grizzly)', desc: 'Encontrado ao norte de O\'Creagh\'s Run, nas Grizzlies East.', coords: [-50.18, 180.36] },
  { id: 'la2', cat: 'legendary_animals', name: 'Lobo Lendário', desc: 'Encontrado em Cotorra Springs, nas Grizzlies East.', coords: [-45.48, 153.92] },
  { id: 'la3', cat: 'legendary_animals', name: 'Alce Lendário', desc: 'Nas montanhas entre Bacchus Station e Cattail Pond.', coords: [-50.74, 163.49] },
  { id: 'la4', cat: 'legendary_animals', name: 'Pantera Lendária (Giaguaro)', desc: 'Nas florestas de Lemoyne, ao sul de Bolger Glade.', coords: [-127.47, 182.95] },
  { id: 'la5', cat: 'legendary_animals', name: 'Jacaré Lendário', desc: 'Nos pântanos de Lagras, Bluewater Marsh.', coords: [-101.69, 193.38] },
  { id: 'la6', cat: 'legendary_animals', name: 'Bisão Lendário (Tatanka)', desc: 'Encontrado em Hennigan\'s Stead, New Austin.', coords: [-142.52, 107.27] },
  { id: 'la7', cat: 'legendary_animals', name: 'Veado Lendário', desc: 'Em Big Valley, a noroeste de Strawberry.', coords: [-84.92, 96.16] },
  { id: 'la8', cat: 'legendary_animals', name: 'Castor Lendário', desc: 'A oeste de Van Horn, perto de Elysian Pool.', coords: [-72.37, 199.73] },
  { id: 'la9', cat: 'legendary_animals', name: 'Raposa Lendária', desc: 'Ao norte de Rhodes em Mattock Pond.', coords: [-106.35, 176.55] },
  { id: 'la10', cat: 'legendary_animals', name: 'Coiote Lendário', desc: 'Em Scarlett Meadows, ao sul de Rhodes.', coords: [-96.12, 165.24] },

  // Tesouros
  { id: 'tr1', cat: 'treasure', name: 'Tesouro de Jack Hall (Mapa 1)', desc: 'No topo de Caliban\'s Seat, a noroeste de Valentine.', coords: [-93.13, 135.16] },
  { id: 'tr2', cat: 'treasure', name: 'Tesouro de Jack Hall (Mapa 2)', desc: 'Na ilha do lago O\'Creagh\'s Run.', coords: [-79.32, 141.18] },
  { id: 'tr3', cat: 'treasure', name: 'Tesouro de Jack Hall (Mapa 3)', desc: 'Atrás da cachoeira em Cotorra Springs.', coords: [-47.11, 151.87] },
  { id: 'tr4', cat: 'treasure', name: 'Tesouro High Stakes (Mapa 1)', desc: 'Na borda do penhasco em Cumberland Falls.', coords: [-93.3, 125.84] },
  { id: 'tr5', cat: 'treasure', name: 'Tesouro Poisonous Trail (Mapa 1)', desc: 'Na caverna de Cairn Lake.', coords: [-40.13, 129.49] },
  { id: 'tr6', cat: 'treasure', name: 'Tesouro do Mapa do Velho', desc: 'Encontrado após completar o Stranger Mission, perto de Riggs Station.', coords: [-130.45, 58.27] },
  { id: 'tr_high_stakes_2', cat: 'treasure', name: 'High Stakes — Mapa 2', desc: 'Barrow Lagoon, sobre uma ponte de troncos entre as rochas.', coords: [-76.1, 128.19] },
  { id: 'tr_high_stakes_3', cat: 'treasure', name: 'High Stakes — Tesouro', desc: 'Penhascos de Bacchus Station; siga a trilha estreita na rocha.', coords: [-51.75, 157.85] },
  { id: 'tr_poisonous_2', cat: 'treasure', name: 'Poisonous Trail — Mapa 2', desc: 'Face Rock, a oeste de Van Horn.', coords: [-99.28, 171.8] },
  { id: 'tr_poisonous_3', cat: 'treasure', name: 'Poisonous Trail — Tesouro', desc: 'Caverna atrás de Elysian Pool; leve uma lanterna.', coords: [-76.06, 205.2] },
  { id: 'tr_landmarks_1', cat: 'treasure', name: 'Landmarks of Riches — Obelisco', desc: 'Obelisco a noroeste do Lago Owanjila.', coords: [-88.23, 87.92] },
  { id: 'tr_landmarks_2', cat: 'treasure', name: 'Landmarks of Riches — Tiny Church', desc: 'Pequena igreja em Bayou Nwa, ao norte de Saint Denis.', coords: [-100.87, 199.53] },
  { id: 'tr_landmarks_3', cat: 'treasure', name: 'Landmarks of Riches — Mysterious Hill Home', desc: 'Casa misteriosa na colina, em Grizzlies East.', coords: [-47.25, 164.58] },
  { id: 'tr_landmarks_4', cat: 'treasure', name: 'Landmarks of Riches — Tesouro', desc: 'Relógio de sol no topo do Monte Shann.', coords: [-83.68, 104.83] },
  { id: 'tr_elemental_1', cat: 'treasure', name: 'Elemental Trail — Cadáver', desc: 'Extremo oeste de New Austin, perto do Sea of Coronado.', coords: [-157.83, 17.79] },
  { id: 'tr_elemental_2', cat: 'treasure', name: 'Elemental Trail — Cholla Springs', desc: 'Cholla Springs, próximo a uma chaminé de pedra.', coords: [-152.19, 91.54] },
  { id: 'tr_elemental_3', cat: 'treasure', name: 'Elemental Trail — Benedict Point', desc: 'Sob os trilhos próximos a Benedict Point.', coords: [-157.04, 40.68] },
  { id: 'tr_elemental_4', cat: 'treasure', name: 'Elemental Trail — Tesouro', desc: 'Cemitério de Coot\'s Chapel, a sudeste de Armadillo.', coords: [-144.45, 80.44] },

  // Peixes Lendários
  { id: 'lf1', cat: 'legendary_fish', name: 'Peixe-gato Lendário (Channel Catfish)', desc: 'Não pode ser pego normalmente. Missão especial no Flat Iron Lake.', coords: [-98.62, 192.97] },
  { id: 'lf2', cat: 'legendary_fish', name: 'Truta Lendária (Steelhead)', desc: 'Encontrada em Willard\'s Rest.', coords: [-36.98, 208.65] },
  { id: 'lf3', cat: 'legendary_fish', name: 'Salmão Lendário (Sockeye)', desc: 'No lago Isabella.', coords: [-50.87, 114.32] },
  { id: 'lf4', cat: 'legendary_fish', name: 'Perca Lendária (Largemouth Bass)', desc: 'Em San Luis River, New Austin.', coords: [-156.07, 86.12] },
  { id: 'lf5', cat: 'legendary_fish', name: 'Pike Lendário (Northern)', desc: 'Em O\'Creagh\'s Run.', coords: [-62.46, 141.17] },

  // Esconderijos de Gangues
  { id: 'gh1', cat: 'gang_hideouts', name: 'Hanging Dog Ranch', desc: 'Esconderijo da gangue O\'Driscoll ao norte de Strawberry.', coords: [-75.54, 99.92] },
  { id: 'gh2', cat: 'gang_hideouts', name: 'Shady Belle', desc: 'Mansão abandonada usada como esconderijo em Lemoyne.', coords: [-125.0, 188.0] },
  { id: 'gh3', cat: 'gang_hideouts', name: 'Beaver Hollow', desc: 'Caverna usada pela gangue Murfree Brood.', coords: [-64.37, 198.19] },
  { id: 'gh4', cat: 'gang_hideouts', name: 'Fort Mercer', desc: 'Forte em New Austin, base da gangue Del Lobo.', coords: [-141.01, 119.79] },
  { id: 'gh5', cat: 'gang_hideouts', name: 'Thieves\' Landing', desc: 'Porto de contrabandistas em West Elizabeth.', coords: [-119.5, 112.78] },

  // Pontos de Interesse
  { id: 'poi1', cat: 'points_of_interest', name: 'Meteor House', desc: 'Casa destruída por um meteorito ao norte de Roanoke Valley.', coords: [-43.76, 200.61] },
  { id: 'poi2', cat: 'points_of_interest', name: 'Viking Tomb', desc: 'Tumba viking escondida perto de Roanoke Ridge.', coords: [-50.31, 198.86] },
  { id: 'poi3', cat: 'points_of_interest', name: 'UFO (Monte Shann)', desc: 'Avistamento de OVNI no topo do Monte Shann à noite.', coords: [-86.08, 109.48] },
  { id: 'poi4', cat: 'points_of_interest', name: 'Robot', desc: 'Inventor com robô em Doverhill, Roanoke Ridge.', coords: [-34.14, 117.87] },
  { id: 'poi5', cat: 'points_of_interest', name: 'Ghost Train', desc: 'Trem fantasma aparece à noite em Lemoyne.', coords: [-94.35, 185.39] },
  { id: 'poi6', cat: 'points_of_interest', name: 'Hobbit House', desc: 'Casa enterrada similar a toca de hobbit.', coords: [-47.25, 164.58] },

  // Acampamentos
  { id: 'c1', cat: 'camps', name: 'Horseshoe Overlook', desc: 'Primeiro acampamento da gangue (Chapter 2).', coords: [-80.85, 148.54] },
  { id: 'c2', cat: 'camps', name: 'Clemens Point', desc: 'Acampamento em Lemoyne (Chapter 3).', coords: [-111.0, 163.0] },
  { id: 'c3', cat: 'camps', name: 'Shady Belle', desc: 'Acampamento em Lemoyne (Chapter 4).', coords: [-125.0, 188.0] },
  { id: 'c4', cat: 'camps', name: 'Beaver Hollow', desc: 'Último acampamento (Chapter 6).', coords: [-64.37, 198.19] },
  { id: 'c5', cat: 'camps', name: 'Colter', desc: 'Acampamento na neve (Chapter 1).', coords: [-33.94, 121.89] },

  // Gravuras Rupestres
  { id: 'rc1', cat: 'rock_carvings', name: 'Gravura 1 - Mount Hagen', desc: 'No topo de Mount Hagen, Grizzlies West.', coords: [-58.32, 115.15] },
  { id: 'rc2', cat: 'rock_carvings', name: 'Gravura 2 - Wapiti', desc: 'Perto da reserva indígena Wapiti.', coords: [-48.01, 144.31] },
  { id: 'rc3', cat: 'rock_carvings', name: 'Gravura 3 - Cumberland Forest', desc: 'Na floresta ao norte de Valentine.', coords: [-51.29, 157.98] },
  { id: 'rc4', cat: 'rock_carvings', name: 'Gravura 4 - Elysian Pool', desc: 'Perto da cachoeira de Elysian Pool.', coords: [-65.27, 200.61] },
  { id: 'rc5', cat: 'rock_carvings', name: 'Gravura 5 - Mount Shann', desc: 'No Monte Shann em West Elizabeth.', coords: [-94.76, 95.39] },

  // Estranhos e Freaks
  { id: 's1', cat: 'strangers', name: 'The Veteran', desc: 'Veterano de guerra em O\'Creagh\'s Run. Missão multi-parte.', coords: [-55.22, 177.4] },
  { id: 's2', cat: 'strangers', name: 'The Artist', desc: 'Charles Châtenay em Saint Denis. Missões de arte.', coords: [-111.46, 204.33] },
  { id: 's3', cat: 'strangers', name: 'The Mayor', desc: 'Prefeito corrupto de Saint Denis.', coords: [-109.06, 206.16] },
  { id: 's4', cat: 'strangers', name: 'Bigfoot', desc: 'Missão para encontrar evidências de Bigfoot nas montanhas.', coords: [-84.92, 96.16] },
  { id: 's5', cat: 'strangers', name: 'The Widow', desc: 'Viúva que precisa aprender a sobreviver. Willard\'s Rest.', coords: [-36.98, 208.65] },

  // Cavalos raros e áreas de aparição
  { id: 'horse_white_arabian', cat: 'horses', name: 'Árabe Branco', desc: 'Costa noroeste do Lago Isabella, em Grizzlies West. Cavalo raro; aproxime-se devagar e acalme-o.', coords: [-49.53, 109.01] },
  { id: 'horse_red_arabian', cat: 'horses', name: 'Árabe Red Chestnut', desc: 'Colinas a oeste do Lago Owanjila, em West Elizabeth.', coords: [-88.23, 87.96] },
  { id: 'horse_warped_arabian', cat: 'horses', name: 'Árabe Warped Brindle', desc: 'Montanhas a oeste da Reserva Indígena Wapiti.', coords: [-48.01, 144.31] },
  { id: 'horse_perlino_andalusian', cat: 'horses', name: 'Andaluz Perlino', desc: 'Próximo à cachoeira Brandywine Drop, ao norte de Annesburg.', coords: [-38.68, 207.94] },
  { id: 'horse_tiger_mustang', cat: 'horses', name: 'Mustang Tiger Striped Bay', desc: 'Região de Rio Del Lobo Rock, em New Austin; disponível no epílogo.', coords: [-161.6, 67.88] },
  { id: 'horse_standardbred', cat: 'horses', name: 'American Standardbred', desc: 'Área aberta de Big Valley, ao norte de Strawberry.', coords: [-75.46, 110.82] },
  { id: 'horse_nokota', cat: 'horses', name: 'Nokota', desc: 'Campos próximos a Riggs Station e Bard\'s Crossing.', coords: [-108.37, 118.69] },
  { id: 'horse_hungarian', cat: 'horses', name: 'Hungarian Halfbred', desc: 'Great Plains, a oeste de Blackwater.', coords: [-108.32, 119.54] },
  { id: 'horse_appaloosa', cat: 'horses', name: 'Appaloosa', desc: 'Nas proximidades de Cattail Pond, ao norte de Valentine.', coords: [-43.84, 157.63] },
  { id: 'horse_mustang_heartlands', cat: 'horses', name: 'Mustang', desc: 'Planícies de The Heartlands, entre Valentine e Emerald Ranch.', coords: [-83.29, 160.64] },
  { id: 'horse_thoroughbred', cat: 'horses', name: 'Thoroughbred', desc: 'Pode aparecer nas áreas abertas de The Heartlands.', coords: [-79.43, 179.46] },
];
