import { convertToArray, generateImageURL, timeAgo } from './common.utils';

export const exceptionalAdventures = [
  '/static/images/exceptionalAdventures/2.png',
  '/static/images/exceptionalAdventures/4.png',
  '/static/images/exceptionalAdventures/1.png',
  '/static/images/exceptionalAdventures/3.png',
  '/static/images/exceptionalAdventures/5.png',
];
export const Cities = [
  {
    id: '1',
    name: 'All',
  },
  {
    id: '61b5ac6310990b0449656f08',
    name: 'Isfahan',
  },
  {
    id: '61b5ac6310990b0449656eb0',
    name: 'Shiraz',
  },
  {
    id: '61b5ac6610990b044965706b',
    name: 'Tehran',
  },
  {
    id: '61b5ac6710990b0449657096',
    name: 'Yazd',
  },
  {
    id: '61b5ac6310990b0449656ee0',
    name: 'Kīsh',
  },
  {
    id: '61b5ac6310990b0449656e89',
    name: 'Tabriz',
  },
];
export const HIGHSEASONS = ['Spring', 'Summer', 'Authumn', 'Winter'];
export const CATEGORY = [
  'Historical',
  'Monument',
  'Mosque',
  'Nature',
  'Museum',
];
export const GLOBALIZEDREGISTERED = [
  { value: 'UNESCO', label: 'UNESCO' },
  { value: 'NATIONALLY', label: 'NATIONALLY' },
];

export const normalizePopularAttractions = (items) =>
  items.map((item) => {
    return new Promise(async (resolve, reject) => {
      const medias = await generateImageURL(item.medias);
      const result = {
        ...item,
        medias,
      };
      resolve(result);
    });
  });

export const normalizeAttractionsImages = (items) => {
  return items.map((item) => {
    const result = item.medias
      ? {
        ...item,
        cover: Object.values(item.cover)[0],
        timeAgo: timeAgo(item.updated_at),
      }
      : item;
    return result;
  });
};

export const normalizeSingleAttractions = (item) => {
  return {
    ...item,
    timeAgo: timeAgo(item.updated_at),
    images: convertToArray(item.medias),
    image: item.banner ? Object.values(item.banner)[0] : '',
  };
};

export const banner = {
  image: '/static/images/attractions/banner.png',
};
export const TourPackagesTabs = [
  {
    id: 1,
    title: 'Tour Guids',
    images: [
      '/static/images/exceptionalAdventures/2.png',
      '/static/images/exceptionalAdventures/4.png',
      '/static/images/exceptionalAdventures/1.png',
      '/static/images/exceptionalAdventures/3.png',
      '/static/images/exceptionalAdventures/5.png',
    ],
    name: 'Mina Shakuri',
    specialTourGuide: [
      'Chinese Language',
      'English Language',
      '6 Years Experiance',
    ],
    phone: '+98-139-11788625',
    email: 'b2c@meilibosi.com',
  },
  {
    id: 2,
    title: 'Restaurants',
    images: [
      '/static/images/exceptionalAdventures/2.png',
      '/static/images/exceptionalAdventures/4.png',
      '/static/images/exceptionalAdventures/1.png',
      '/static/images/exceptionalAdventures/3.png',
      '/static/images/exceptionalAdventures/5.png',
    ],
    name: 'Mina Shakuri',
    specialTourGuide: [
      'Chinese Language',
      'English Language',
      '6 Years Experiance',
    ],
    phone: '+98-139-11788625',
    email: 'b2c@meilibosi.com',
  },
  {
    id: 3,
    title: 'Hotels',
    images: [
      '/static/images/exceptionalAdventures/2.png',
      '/static/images/exceptionalAdventures/4.png',
      '/static/images/exceptionalAdventures/1.png',
      '/static/images/exceptionalAdventures/3.png',
      '/static/images/exceptionalAdventures/5.png',
    ],
    name: 'Mina Shakuri',
    specialTourGuide: [
      'Chinese Language',
      'English Language',
      '6 Years Experiance',
    ],
    phone: '+98-139-11788625',
    email: 'b2c@meilibosi.com',
  },
];

export const CommentsList = [
  {
    id: 1,
    author: 'Tarek',
    details:
      'Euismod etiam massa ac bibendum mi sed commodo ridiculus varius. Est erat leo eget elit mauris, elementum arcu. Eused adipiscing porttitor faucibus lectus lacus. Euismod etiam massa ac bibendum mi sed commodo ridiculus varius. Est eratleoeg et elit mauris, elementum arcu. Eu sed adipiscing porttitor faucibus lectus lacus.',
  },
];
