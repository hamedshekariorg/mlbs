import Icon from 'components/Icon';

export const temporarySocialArr = [
  { id: 0, title: 'My Posts' },
  { id: 1, title: 'My Stories' },
  { id: 2, title: 'My Edit Article' },
];

export const temporarySocialCards = [
  {
    id: 0,
    img: 'iransouth1.svg',
    title: 'Iran South Life',
    staticArr: [
      { title: 'star', count: '36', img: 'star.svg' },
      { title: 'comment', count: '07', img: 'comment.svg' },
      { title: 'view', count: '89', img: 'full-eye.svg' },
    ],
  },
  {
    id: 1,
    img: 'iransouth2.svg',
    title: 'Iran South Life',
    staticArr: [
      { title: 'star', count: '36', img: 'star.svg' },
      { title: 'comment', count: '07', img: 'comment.svg' },
      { title: 'view', count: '89', img: 'full-eye.svg' },
    ],
  },
  {
    id: 2,
    img: 'iransouth3.svg',
    title: 'Iran South Life',
    staticArr: [
      { title: 'star', count: '36', img: 'star.svg' },
      { title: 'comment', count: '07', img: 'comment.svg' },
      { title: 'view', count: '89', img: 'full-eye.svg' },
    ],
  },
];

export const MenuItems = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: <Icon name="icon-dashboard" />,
  },

  {
    path: '/dashboard/profile',
    title: 'Profile',
    icon: <Icon name="icon-profile" />,
  },
  {
    path: '/dashboard/social',
    title: 'Social',
    icon: <Icon name="icon-glob-icon" />,
  },
  {
    path: '/dashboard/wishlist',
    title: 'Wishlist',
    icon: <Icon name="icon-like-1" />,
  },
  {
    path: '/dashboard/myEdits',
    title: 'My edits',
    icon: <Icon name="icon-edit" />,
  },
  'divider',
  {
    path: '/dashboard/transactions',
    title: 'Transactions',
    icon: <Icon name="icon-transactions" />,
  },
  {
    path: '/dashboard/wallet',
    title: 'Wallet',
    icon: '',
  },
  {
    path: '/dashboard/cart',
    title: 'cart',
    icon: <Icon name="icon-shoppingcart" />,
  },
  'divider',
  {
    path: '/dashboard/special',
    title: 'Special',
    icon: <Icon name="icon-glob-icon" />,
  },
  {
    path: '/dashboard/academy',
    title: 'Academy',
    icon: <Icon name="icon-academy" />,
  },
  {
    path: '/logout',
    title: 'Logout',
    icon: <Icon name="icon-logout" />,
  },
];

export const data = [
  {
    key: '1',
    name: 'kamal',
    passportNumber: 'E918127162',
    phoneNumber: '+98-9021788625',
  },
  {
    key: '2',
    name: 'Elnaz Mo',
    passportNumber: 'E256331478',
    phoneNumber: '+98-9121234567',
  },
  {
    key: '3',
    name: 'Hossein Moein',
    passportNumber: 'E255456699',
    phoneNumber: '+98-9012145678',
  },
  {
    key: '4',
    name: 'Ali Mohamadi',
    passportNumber: 'E255564789',
    phoneNumber: '+98-9335632597',
  },
];

export const myMoments = [
  {
    id: 1,
    image: '/static/images/dashboard/moment.svg',
    title: 'Gloomy sunday  ',
    details:
      'this space here gives us a good freedom to implement our ideas in the future such asthis space here gives us a good freedom to implement our in the future such asthis space here gives us a good freedom to implement our ideas in the future such asthis space here gives us a good freedom to implement our ideas in the future such asthis space here gives us a good freedom to implement our ideas in the future such asthis space here gives us a good freedom to implement our ideas ',
  },
  {
    id: 2,
    image: '/static/images/dashboard/moment.svg',
    title:
      'Gloomy sunday not such a good day overall and i really not in the mood ',
    details:
      'this space here gives us a good freedom to implement our ideas in the future such asthis space here gives us a good freedom to implement our in the future such asthis space here gives us a good freedom to implement our ideas in the future such asthis space here gives us a good freedom to implement our ideas in the future such asthis space here gives us a good freedom to implement our ideas in the future such asthis space here gives us a good freedom to implement our ideas ',
  },
  {
    id: 3,
    image: '/static/images/dashboard/moment.svg',
    title:
      'Gloomy sunday not such a good day overall and i really not in the mood ',
    details:
      'this space here gives us a good freedom to implement our ideas in the future such asthis space here gives us a good freedom to implement our in the future such asthis space here gives us a good freedom to implement our ideas in the future such asthis space here gives us a good freedom to implement our ideas in the future such asthis space here gives us a good freedom to implement our ideas in the future such asthis space here gives us a good freedom to implement our ideas ',
  },
  {
    id: 4,
    image: '/static/images/dashboard/moment.svg',
    title:
      'Gloomy sunday not such a good day overall and i really not in the mood ',
    details:
      'this space here gives us a good freedom to implement our ideas in the future such asthis space here gives us a good freedom to implement our in the future such asthis space here gives us a good freedom to implement our ideas in the future such asthis space here gives us a good freedom to implement our ideas in the future such asthis space here gives us a good freedom to implement our ideas in the future such asthis space here gives us a good freedom to implement our ideas ',
  },
];

export const myPosts = [
  {
    id: 1,
    title: 'Iran South Life',
    medias: '/static/images/dashboard/post.png',
    caption: `this space here gives us a good freedom to implement our ideas in the future such as`,
  },
  {
    id: 2,
    title: 'Iran South Life',
    medias: '/static/images/dashboard/post.png',
    caption: `this space here gives us a good freedom to implement our ideas in the future such as`,
  },
  {
    id: 3,
    title: 'Iran South Life',
    medias: '/static/images/dashboard/post.png',
    caption: `this space here gives us a good freedom to implement our ideas in the future such as`,
  },
];

export const temporaryFilterItems = [
  'All',
  'Restaurants',
  'Hotels',
  'Attractions',
  'Moments',
  'Tourguids',
  'Tour packages',
  'Posts',
  'Articles',
];

export const temporaryWishList = [
  {
    id: 1,
    title: 'Espinas Pallas',
    picLabel: 'Hotel',
    imgSrc: '/static/images/dashboard/delete/dashboard-hotel.svg',
    category: [
      {
        id: 1,
        icon: '/static/images/dashboard/delete/icomoon/map.svg',
        text: 'Shiraz',
      },
      {
        id: 1,
        icon: <Icon name="icon-category" fontSize="5" color="gray.57" />,
        text: 'Historical',
      },
      {
        id: 1,
        icon: '/static/images/dashboard/delete/icomoon/clock.svg',
        text: '2 Hours',
      },
    ],
    price: '¥5,300',
  },
  {
    id: 2,
    title: 'Roast Restaurant',
    picLabel: 'Restaurant',
    imgSrc: '/static/images/dashboard/delete/dashboard-restaurant.svg',
    category: [
      {
        id: 1,
        icon: '/static/images/dashboard/delete/icomoon/map.svg',
        text: 'Shiraz',
      },
      {
        id: 1,
        icon: <Icon name="icon-category" fontSize="5" color="gray.57" />,
        text: 'Sea food',
      },
    ],
    price: '¥5,300',
  },
  {
    id: 3,
    imgSrc: '/static/images/dashboard/delete/dashboard-article.svg',
    picLabel: 'Article',
    title: 'Fly on Persian carpets and rugs and some other stuff',
    description:
      'Fly on Persian carpets and rugs and some other stuff Fly on Persian carpets  ...',
    price: '¥5,300',
    rate: true,
  },
  {
    id: 4,
    title: 'Iran South Life',
    picLabel: 'Post',
    imgSrc: '/static/images/dashboard/delete/dashboard-post.svg',
    description:
      'Today its a pretty day with my family walking in Fly on Persian carpets and rugs and some other stuff Fly on Persian carpets  ...',
    price: '¥5,300',
    count: true,
  },
];

export const temporaryInfoStatistic = [
  { num: '36', imgSrc: '/static/images/delete/star.svg' },
  { num: '07', imgSrc: '/static/images/delete/gray-eye.svg' },
  { num: '89', imgSrc: '/static/images/delete/comment.svg' },
];

export const temporaryFilterTitle = [
  { key: 'city', title: 'Cities' },
  { key: 'recent', title: 'Most Recent' },
];

export const setProfileFormDefaultValue = (data) => ({
  first_name: data.first_name,
  last_name: data.last_name,
  mobile: data.mobile,
  nickname: data.nickname,
  state_id: data.state_id,
  country_id: data.country_id,
  gender: data.gender,
  email: data.email,
  birth_day: data.birth_day,
  city_id: data.city_id,
  address: data.address,
});
