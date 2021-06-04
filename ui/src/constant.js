const PLANT_STATUS = {
  PLANTED: 1,
  INSTOCK: 2,
  INSTORE: 3,
};

Object.freeze(PLANT_STATUS);

const plantsInitDic = {
  Flamingo: {
    id: null,
    name: 'Flamingo',
    level: 2,
    price: 300,
    plantStatus: PLANT_STATUS.INSTORE,
    plantImg: '/images/flamingoflower5_background.png',
  },
  'Forget Menot': {
    id: null,
    name: 'Forget Menot',
    level: 2,
    price: 300,
    plantStatus: PLANT_STATUS.INSTORE,
    plantImg: '/images/forgetmenot5_background.png',
  },
  Lily: {
    id: null,
    name: 'Lily',
    level: 2,
    price: 349,
    plantStatus: PLANT_STATUS.INSTORE,
    plantImg: '/images/lilyoftheincas5_background.png',
  },
  Crocus: {
    id: null,
    name: 'Crocus',
    level: 2,
    price: 399,
    plantStatus: PLANT_STATUS.INSTORE,
    plantImg: '/images/crocus4_background.png',
  },
  Peony: {
    id: null,
    name: 'Peony',
    level: 2,
    price: 329,
    plantStatus: PLANT_STATUS.INSTORE,
    plantImg: '/images/peonies5_background.png',
  },

  'Japan Maple': {
    id: null,
    name: 'Japan Maple',
    level: 2,
    price: 369,
    plantStatus: PLANT_STATUS.INSTORE,
    plantImg: '/images/japanesemaplebonsai5_background.png',
  },
  Chamomile: {
    id: null,
    name: 'Chamomile',
    level: 2,
    price: 399,
    plantStatus: PLANT_STATUS.INSTORE,
    plantImg: 'images/chamomile5_background.png',
  },
  Carnation: {
    id: null,
    name: 'Carnation',
    level: 3,
    price: 409,
    plantStatus: PLANT_STATUS.INSTORE,
    plantImg: '/images/carnation5_background.png',
  },
  'Chinese Lantern': {
    id: null,
    name: 'Chinese Lantern',
    level: 3,
    price: 439,
    plantStatus: PLANT_STATUS.INSTORE,
    plantImg: '/images/chineselantern4_background.png',
  },
  'Bell Pepper': {
    id: null,
    name: 'Bell Pepper',
    level: 2,
    price: 449,
    plantStatus: PLANT_STATUS.INSTORE,
    plantImg: '/images/bellpeppers5_background.png',
  },
  Amaryllis: {
    id: null,
    name: 'Amaryllis',
    level: 2,
    price: 499,
    plantStatus: PLANT_STATUS.INSTORE,
    plantImg: 'images/amaryllis5_background.png',
  },
  'Cherry Blossom': {
    id: null,
    name: 'Cherry Blossom',
    level: 2,
    price: 549,
    plantStatus: PLANT_STATUS.INSTORE,
    plantImg: '/images/cherryblossombonsai4_background.png',
  },
};

const packageOxyForSale = [
  {
    name: 'Bronze Package',
    price: 1,
    oxy: 10000,
    plantImg: 'images/1000oxy.png',
  },
  {
    name: 'Silver Package',
    price: 5,
    oxy: 100000,
    plantImg: 'images/10000oxy.png',
  },
  {
    name: 'Gold Package',
    price: 10,
    oxy: 1000000,
    plantImg: 'images/100000oxy.png',
  },
];

export { plantsInitDic, PLANT_STATUS, packageOxyForSale };
