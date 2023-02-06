import theme from 'components/theme.js';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

export const staticSlides = [
  {
    id: 1,
    titleNum: '01',
    titleText: 'Transport',
    text: 'Prepare For Your Trip.Find out all you need to know before you go.Traveling is as unique as you are.Prepare For Your Trip.Find out all you need to know before you go.Traveling is as unique as you are.Prepare For Your Trip.Find out all you need to know before you go.Traveling is as unique as you are.Prepare For Your Trip.',
    img: '/static/images/landingPage/transport.svg',
    buttons: ['Rent Car', 'Flight', 'Train', 'CIP'],
  },
  {
    id: 2,
    titleNum: '02',
    titleText: 'Tour Guide',
    text: 'Prepare For Your Trip.Find out all you need to know before you go.Traveling is as unique as you are.Prepare For Your Trip.Find out all you need to know before you go.Traveling is as unique as you are.Prepare For Your Trip.Find out all you need to know before you go.Traveling is as unique as you are.Prepare For Your Trip.',
    img: '/static/images/landingPage/tour.svg',
    buttons: ['More'],
  },
  {
    id: 3,
    titleNum: '03',
    titleText: 'Communication',
    text: 'Prepare For Your Trip.Find out all you need to know before you go.Traveling is as unique as you are.Prepare For Your Trip.Find out all you need to know before you go.Traveling is as unique as you are.Prepare For Your Trip.Find out all you need to know before you go.Traveling is as unique as you are.Prepare For Your Trip.',
    img: '/static/images/landingPage/communication.svg',
    buttons: ['More'],
  },
  {
    id: 4,
    titleNum: '04',
    titleText: 'Travel Insurance',
    text: 'Prepare For Your Trip.Find out all you need to know before you go.Traveling is as unique as you are.Prepare For Your Trip.Find out all you need to know before you go.Traveling is as unique as you are.Prepare For Your Trip.Find out all you need to know before you go.Traveling is as unique as you are.Prepare For Your Trip.',
    img: '/static/images/landingPage/insurance.svg',
    buttons: ['More'],
  },
  {
    id: 5,
    titleNum: '05',
    titleText: 'Transaction',
    text: 'Prepare For Your Trip.Find out all you need to know before you go.Traveling is as unique as you are.Prepare For Your Trip.Find out all you need to know before you go.Traveling is as unique as you are.Prepare For Your Trip.Find out all you need to know before you go.Traveling is as unique as you are.Prepare For Your Trip.',
    img: '/static/images/landingPage/transaction.svg',
    buttons: ['More'],
  },
];

export const circuleShapes = [
  {
    id: 0,
    color: theme.colors.blue[4],
    image: '/static/images/landingPage/transport.svg',
  },
  {
    id: 1,
    color: theme.colors.red[2],
    image: '/static/images/landingPage/tour.svg',
  },
  {
    id: 2,
    color: theme.colors.orange[4],
    image: '/static/images/landingPage/communication.svg',
  },
  {
    id: 3,
    color: theme.colors.blue[10],
    image: '/static/images/landingPage/insurance.svg',
  },
  {
    id: 4,
    color: theme.colors.blue[5],
    image: '/static/images/landingPage/transaction.svg',
  },
];

export const utilsPositions = [
  {
    top: '4%',
    right: '70%',
  },
  {
    top: '31%',
    right: '-2%',
  },
  {
    top: '86%',
    right: '18%',
  },
  {
    top: '86%',
    right: '76%',
  },
  {
    top: '45%',
    right: '95%',
  },
];

export const attractionImgSpec = [
  {
    index: 0,
    width: '295px',
    height: '157px',
    gridArea: 'one',
  },
  {
    index: 1,
    width: '191px',
    height: '315px',
    gridArea: 'two',
  },
  {
    index: 2,
    width: '133px',
    height: '145px',
    gridArea: 'three',
  },
  {
    index: 3,
    width: '146px',
    height: '145px',
    gridArea: 'four',
  },
  {
    index: 4,
    width: '500px',
    height: '142px',
    gridArea: 'five',
  },
];

export const tourPackageSwiperSetting = {
  modules: [Navigation, Pagination, Scrollbar, A11y],
  spaceBetween: 16,
  breakpoints: {
    1180: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 4,
    },
    1920: {
      slidesPerView: 5,
    },
  },
  navigation: {
    nextEl: '#next-btn',
    prevEl: '#prev-btn',
  },
};
