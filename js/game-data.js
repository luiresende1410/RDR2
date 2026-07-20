/**
 * RDR2 — Dados de Cavalos, Armas e Itens
 * Estruturado para integração com o mapa interativo.
 */

const HORSES_DATA = [
  {
    id: 'horse_arabian_white',
    name: 'Puro Sangue Árabe (Branco)',
    category: 'Elite',
    highlights: 'Excelente velocidade e manejo Ágil',
    howToObtain: 'Selvagem (Lago Isabella, Ambarino)',
    stats: { speed: 6, acceleration: 6, handling: 'Elite' }
  },
  {
    id: 'horse_arabian_black',
    name: 'Puro Sangue Árabe (Preto)',
    category: 'Elite',
    highlights: 'Atributos superiores ao Branco',
    howToObtain: 'Estábulo de Saint Denis (Capítulo 4)',
    stats: { speed: 8, acceleration: 8, handling: 'Elite' }
  },
  {
    id: 'horse_turkoman',
    name: 'Turcomeno (Dourado/Prata)',
    category: 'Guerra / Corrida',
    highlights: 'Ótima vida, não se assusta fácil e é muito rápido',
    howToObtain: 'Estábulo de Saint Denis / Blackwater',
    stats: { speed: 7, acceleration: 7, handling: 'Padrão' }
  },
  {
    id: 'horse_missouri_fox_trotter',
    name: 'Missouri Fox Trotter',
    category: 'Corrida / Trabalho',
    highlights: 'Maior velocidade máxima do jogo e ótimo fôlego',
    howToObtain: 'Estábulo de Scarlet Meadows (Cap. 4) / Blackwater',
    stats: { speed: 9, acceleration: 7, handling: 'Padrão' }
  },
  {
    id: 'horse_andalusian',
    name: 'Andaluz',
    category: 'Guerra',
    highlights: 'Altíssima resistência e vida',
    howToObtain: 'Estábulo de Strawberry / Selvagem em Brandywine Drop',
    stats: { speed: 5, acceleration: 5, handling: 'Padrão' }
  },
];

const WEAPONS_DATA = [
  {
    id: 'weapon_schofield',
    name: 'Revólver Schofield',
    type: 'Revólver',
    description: 'Equilibrado em dano e precisão. Confiável em qualquer situação de combate.',
    howToObtain: 'Cap. 2 ou roubando o negócio secreto da farmácia de Valentine'
  },
  {
    id: 'weapon_lemat',
    name: 'Revólver LeMat',
    type: 'Revólver',
    description: 'Tambor para 9 tiros + cartucho de espingarda secundário. Versatilidade máxima.',
    howToObtain: 'Saint Denis no Capítulo 4'
  },
  {
    id: 'weapon_volcanic_pistol',
    name: 'Pistola Volcanic',
    type: 'Pistola',
    description: 'Alto dano para uma arma secundária. Ótima para combate próximo.',
    howToObtain: 'Armeiro no Cap. 2'
  },
  {
    id: 'weapon_bolt_action',
    name: 'Rifle de Ferrolho (Bolt Action)',
    type: 'Rifle',
    description: 'Melhor para caça grande e longa distância. Alto dano por tiro.',
    howToObtain: 'Missão de resgate do Sean (Cap. 2) ou armeiro'
  },
  {
    id: 'weapon_lancaster',
    name: 'Rifle Repetidor Lancaster',
    type: 'Repetidor',
    description: 'Preciso e versátil para combates rápidos. Grande capacidade de munição.',
    howToObtain: 'Roubo na farmácia de Rhodes ou armeiro'
  },
  {
    id: 'weapon_carcano',
    name: 'Rifle de Precisão Carcano',
    type: 'Rifle de Precisão',
    description: 'Maior poder de fogo à distância (requer luneta). Ideal para alvos distantes.',
    howToObtain: 'Armeiro (Cap. 6)'
  },
  {
    id: 'weapon_pump_shotgun',
    name: 'Espingarda de Repetição (Pump-Action)',
    type: 'Espingarda',
    description: 'Melhor para combate de curto alcance. Devastadora a poucos metros.',
    howToObtain: 'Esconderijo de Chez Porter ou armeiro'
  },
  {
    id: 'weapon_improved_bow',
    name: 'Arco Melhorado',
    type: 'Especial',
    description: 'Essencial para caça limpa de lendários e stealth. Silencioso e versátil.',
    howToObtain: 'Receita de criação / Armeiro'
  },
];

const ITEMS_DATA = [
  {
    id: 'item_satchel_legend',
    name: 'Mochila Lenda do Leste',
    category: 'Mochila',
    effect: 'Aumenta capacidade do inventário para 99 unidades de cada item.',
    howToObtain: 'Criada no acampamento via Pearson (requer todas as peles de desafio de caça)'
  },
  {
    id: 'item_buck_antler',
    name: 'Acessório de Chifre de Buck Lendário',
    category: 'Acessório',
    effect: 'Aumenta a chance de peles de melhor qualidade ao esfolar animais.',
    howToObtain: 'Cerca (Fence) usando chifre do Buck Lendário'
  },
  {
    id: 'item_cougar_fang',
    name: 'Acessório de Dente de Puma Lendário',
    category: 'Acessório',
    effect: 'Aumenta o ganho de XP de Dead Eye em 10%.',
    howToObtain: 'Cerca (Fence) usando dente do Puma Lendário'
  },
  {
    id: 'item_bear_claw',
    name: 'Talismã de Garra de Urso Lendário',
    category: 'Talismã',
    effect: 'Reduz a velocidade de drenagem do núcleo de vida em 10%.',
    howToObtain: 'Cerca (Fence) usando garra do Urso Lendário + prata + quartz'
  },
  {
    id: 'item_health_tonic',
    name: 'Tônico de Saúde Perfeito / Cura-Tudo',
    category: 'Consumível',
    effect: 'Restaura totalmente os núcleos e concede barras amarelas (regeneração temporária).',
    howToObtain: 'Criação (ervas + rum) ou Armazéns gerais'
  },
  {
    id: 'item_big_game_meat',
    name: 'Carne de Caça Maior com Ervas',
    category: 'Consumível',
    effect: 'Oferece núcleos dourados (vida/stamina/dead eye) por um dia inteiro de jogo.',
    howToObtain: 'Cozinhar na fogueira: carne de caça maior + Hortelã/Orégano/Tomilho'
  },
];
