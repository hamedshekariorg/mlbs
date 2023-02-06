import OptionChildren from 'components/TourPackages/CustomTourPacakge/Content/LevelTwo/children';
import basic from 'public/static/images/tourPackage/basic.png';
import camping from 'public/static/images/tourPackage/camping.png';
import value from 'public/static/images/tourPackage/value.png';
import premium from 'public/static/images/tourPackage/premium.png';
import result from 'public/static/images/tourPackage/result.png';
import profile from 'public/static/images/tourPackage/profile-sample.png';

export const handleLikeInList = ({ list, id, status }) => {
  return list.map((tourPackage) => {
    if (tourPackage.id === id) {
      tourPackage.liked = status;
    }
    return tourPackage;
  });
};

export const handleIcons = (text) => {
  switch (text) {
    case 'Visa Free':
      return 'red-icon';
    case 'Save 30%':
      return 'orange-icon';
    case 'Today Free':
      return 'blue-icon';
    case 'Travel Safe':
      return 'dark-blue-icon';
    default:
      return 'green-icon';
  }
};

export const topIcons = [
  { normal: 'share', hover: 'share' },
  { normal: 'map', hover: 'map' },
  { normal: 'heart', hover: 'heart-hover' },
];

export const footerInfo = [
  {
    id: 1,
    title1: 'Need Help? Contact us',
    title2: 'Qui ea nemore eruditi, magna prima possit eu mei.',
    svg: '/static/images/tourPackage/help.svg',
  },
  {
    id: 2,
    title1: 'Payments',
    title2: 'Qui ea nemore eruditi, magna prima possit eu mei.',
    svg: '/static/images/tourPackage/payment.svg',
  },
  {
    id: 3,
    title1: 'Cancel Policy',
    title2: 'Qui ea nemore eruditi, magna prima possit eu mei.',
    svg: '/static/images/tourPackage/letter.svg',
  },
  {
    id: 3,
    title1: 'Hotel Insurance',
    title2: 'Qui ea nemore eruditi, magna prima possit eu mei.',
    svg: '/static/images/tourPackage/group.svg',
  },
];

export const cities = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Tehran',
  },
  {
    id: 3,
    name: 'Isfahan',
  },
  {
    id: 4,
    name: 'Kashan',
  },
  {
    id: 5,
    name: 'Shiraz',
  },
  {
    id: 6,
    name: 'Tabriz',
  },
  {
    id: '7',
    name: 'Kish Island',
  },
];

export const seasonsFilter = ['Spring', 'Summer', 'Autumn', 'Winter'];

export const categoryFilter = [
  'Historical',
  'Monument',
  'Mosque',
  'Nature',
  'Museum',
];

export const handleDays = (start, end) => {
  const date1 = new Date(start);
  const date2 = new Date(end);
  const oneDay = 1000 * 60 * 60 * 24;
  const diffInTime = date2.getTime() - date1.getTime();
  const diffInDays = Math.round(diffInTime / oneDay);
  return diffInDays;
};

export const customTourRequestSteps = [
  { title: 'Tour Type', id: 1 },
  { title: 'Tour Details', id: 2 },
  { title: 'Contact Info', id: 3 },
];

export const privateTourTypeContent = `
By choosing Private Tour, you can set up your travel request in a completely private way and bring a memorable memory with your friends.
<br /> 
<br /> 
Making private tours for you can earn points equivalent to 500 points.`;

export const publicTourTypeContent = `
By choosing Public Tour, the tour designed by you is located on the main page of the site and you can share your tour with others according to the frames chosen by you.
<br />
<br />
Cost of public tours are more affordable and you can have a score equivalent to 1000 points, and the presence of each person in your tour will give you 100 points.
`;

export const tourTutorialSteps = [
  { id: 1, desc: 'Describe your dream tour' },
  {
    id: 2,
    desc: 'We match you with our top tour providers and they take care of everything',
  },
  {
    id: 3,
    desc: 'Experince a pleasing travel',
  },
];

export const ageOptions = [
  '+65',
  '50-64',
  '36-49',
  '18-35',
  '12-17',
  '6-11',
  'Under 5',
];

export const travelTime = [
  {
    id: 1,
    value: 'approximate',
    title: 'I have approximate dates',
    child: <OptionChildren index={1} />,
  },

  {
    id: 2,
    value: 'exact',
    title: 'I have exact dates',
    child: <OptionChildren index={2} />,
  },
  {
    id: 3,
    value: 'decide-later',
    title: 'I will decide later',
    child: <OptionChildren index={3} />,
  },
];

export const tripGuidanceTypeOptions = [
  {
    id: 1,
    title: 'Fully Guided',
    subtitle: 'Have a local guide whenever possible',
  },
  {
    id: 2,
    title: 'Independent',
    subtitle: 'You will receive a detailed itinerary but not have local guides',
  },
  {
    id: 3,
    title: 'Partially Guided',
    subtitle:
      'Have a local guide when desired, but some portions of the trip will be independent.',
  },
  { id: 4, title: "I haven't decided" },
];

export const tripLodgingCardsInfo = [
  {
    id: 1,
    title: 'Luxury',
    star: 5,
    // todo change to Luxury
    imgSrc: basic,
  },
  {
    id: 2,
    title: 'Premium',
    star: 4,
    imgSrc: premium,
  },
  {
    id: 3,
    title: 'Value',
    star: 3,
    imgSrc: value,
  },
  {
    id: 4,
    title: 'Basic',
    star: 2,
    imgSrc: basic,
  },
  {
    id: 5,
    title: 'Camping',
    star: 0,
    imgSrc: camping,
  },
];

export const budgetValidValues = [
  { value: '1,000 $/person', title: '$1,000' },
  { value: '2,000 $/person', title: '$2,000' },
  { value: '3,000 $/person', title: '$3,000' },
  { value: '4,000 $/person', title: '$4,000' },
  { value: '5,000 $/person', title: '$5,000' },
  { value: '6,000 $/person', title: '$6,000' },
  { value: '7,000 $/person', title: '$7,000' },
  { value: '8,000 $/person', title: '$8,000' },
  { value: '9,000 $/person', title: '$9,000' },
  { value: '10,000 $/person', title: '+$10,000' },
];

export const chips = [
  { title: 'All', id: 1 },
  { title: 'Most Visited', id: 2 },
  { title: 'Ports', id: 3 },
  { title: 'Cities', id: 4 },
  { title: 'Islands', id: 5 },
  { title: 'Coastal City', id: 6 },
  { title: 'Spring', id: 7 },
  { title: 'Summer', id: 8 },
  { title: 'Autumn', id: 9 },
  { title: 'Winter', id: 10 },
];

export const attractionChips = [
  { title: 'All', id: 1 },
  { title: 'Most Visited', id: 2 },
  { title: 'Spring', id: 3 },
  { title: 'Summer', id: 4 },
  { title: 'Autumn', id: 5 },
  { title: 'Winter', id: 6 },
  { title: 'Historical', id: 7 },
  { title: 'Monument', id: 8 },
  { title: 'Nature', id: 9 },
  { title: 'Museum', id: 10 },
  { title: 'UNESCO', id: 11 },
  { title: 'Nationally', id: 12 },
];

// for testing purposes only
export const citiesToVisitResults = [
  {
    city: 'Mashhad',
    state: 'Khorasan Razavi',
    id: '61b5ac6510990b0449656ffe',
    image: result,
  },
  {
    city: 'Mashhad',
    state: 'Khorasan Razavi',
    id: '1',
    image: result,
  },
  {
    city: 'Mashhad',
    state: 'Khorasan Razavi',
    id: '2',
    image: result,
  },
  {
    city: 'Mashhad',
    state: 'Khorasan Razavi',
    id: '3',
    image: result,
  },
  {
    city: 'Mashhad',
    state: 'Khorasan Razavi',
    id: '4',
    image: result,
  },
  {
    city: 'Mashhad',
    state: 'Khorasan Razavi',
    id: '5',
    image: result,
  },
  {
    city: 'Mashhad',
    state: 'Khorasan Razavi',
    id: '6',
    image: result,
  },
  {
    city: 'Mashhad',
    state: 'Khorasan Razavi',
    id: '7',
    image: result,
  },
  {
    city: 'Mashhad',
    state: 'Khorasan Razavi',
    id: '8',
    image: result,
  },
  {
    city: 'Mashhad',
    state: 'Khorasan Razavi',
    id: '9',
    image: result,
  },
  {
    city: 'Mashhad',
    state: 'Khorasan Razavi',
    id: '10',
    image: result,
  },
  {
    city: 'Mashhad',
    state: 'Khorasan Razavi',
    id: '11',
    image: result,
  },
];

// for testing purposes only
export const attractionsToVisitResults = [
  {
    city: 'Tehran',
    title: 'Milad Tower',
    id: '61b5ac6510990b0449656ffe',
    image: result,
    rate: 4,
  },
  {
    city: 'Tehran',
    title: 'Milad Tower',
    id: '1',
    image: result,
    rate: 4,
  },
  {
    city: 'Tehran',
    title: 'Milad Tower',
    id: '2',
    image: result,
    rate: 4,
  },
  {
    city: 'Tehran',
    title: 'Milad Tower',
    id: '3',
    image: result,
    rate: 4,
  },
  {
    city: 'Tehran',
    title: 'Milad Tower',
    id: '4',
    image: result,
    rate: 4,
  },
  {
    city: 'Tehran',
    title: 'Milad Tower',
    id: '5',
    image: result,
    rate: 4,
  },
  {
    city: 'Tehran',
    title: 'Milad Tower',
    id: '6',
    image: result,
    rate: 4,
  },
  {
    city: 'Tehran',
    title: 'Milad Tower',
    id: '7',
    image: result,
    rate: 4,
  },
  {
    city: 'Tehran',
    title: 'Milad Tower',
    id: '8',
    image: result,
    rate: 4,
  },
  {
    city: 'Tehran',
    title: 'Milad Tower',
    id: '9',
    image: result,
    rate: 4,
  },
  {
    city: 'Tehran',
    title: 'Milad Tower',
    id: '10',
    image: result,
    rate: 4,
  },
  {
    city: 'Tehran',
    title: 'Milad Tower',
    id: '11',
    image: result,
    rate: 4,
  },
];

export const tourSummaryRowTitles = [
  { title: 'Tour Type', key: 'tourType' },
  { title: 'Travelers', key: 'travelersCount' },
  { title: 'Time', key: 'timeType' },
  { title: 'Guide', key: 'tripGuidanceType' },
  { title: 'Lodging', key: 'lodgings' },
  { title: 'Budget', key: 'budgetPerPerson' },
  { title: 'Cities', key: 'selectedSearchResult' },
  { title: 'Attractions', key: 'selectedAttractions' },
  { title: 'Activities', key: 'activities' },
];

// for testing purposes only
export const todoSuggestions = [
  { title: 'Learning about Saffron', id: 1 },
  { title: 'Visitng shopping malls', id: 2 },
  { title: "I'm a vegetarian", id: 3 },
  { title: 'Visiting carpet binding', id: 4 },
  { title: 'Tasting Iranian Kebab', id: 8 },
];

export const successParagraph = `A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.
<br />
<br />
I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees. Making private tours for you can earn points equivalent to 500 points.`;

export const experiences = [
  {
    id: '11',
    description:
      '1 We had a wonderful time! I highly recommend the Resort at Longboat Key & the area. It was perfect for not being crowded on the beach Covid concerns. The beach is for guests only & beautiful !.. Thanks so much for finding the perfect spot for us for spring break :)',
    profile: profile,
    fullName: 'Luiza L.Alves',
  },
  {
    id: '21',
    description:
      '2 The beach is for guests only & beautiful !.. Thanks so much for finding the perfect spot for us for spring break :)',
    profile: profile,
    fullName: 'Luiza L.Alves',
  },
  {
    id: '31',
    description:
      '3 Thanks so much for finding the perfect spot for us for spring break :) We had a wonderful time! I highly recommend the Resort at Longboat Key & the area. It was perfect for not being crowded on the beach Covid concerns. The beach is for guests only & beautiful !.. Thanks so much for finding the perfect spot for us for spring break :)',
    profile: profile,
    fullName: 'Luiza L.Alves',
  },
  {
    id: '12',
    description:
      "4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry‍'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
    profile: profile,
    fullName: 'Luiza L.Alves',
  },
  {
    id: '22',
    description:
      '5 We had many good days. Everything was great. Fantastic facilities. thank you',
    profile: profile,
    fullName: 'Luiza L.Alves',
  },
  {
    id: '42',
    description:
      '6 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    profile: profile,
    fullName: 'Luiza L.Alves',
  },
  {
    id: '22',
    description:
      '7 We had many good days. Everything was great. Fantastic facilities. thank you',
    profile: profile,
    fullName: 'Luiza L.Alves',
  },
  {
    id: '43',
    description:
      '8 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    profile: profile,
    fullName: 'Luiza L.Alves',
  },
  {
    id: '43',
    description:
      '9 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    profile: profile,
    fullName: 'Luiza L.Alves',
  },
  {
    id: '43',
    description:
      '10 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    profile: profile,
    fullName: 'Luiza L.Alves',
  },
  {
    id: '43',
    description:
      '11 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    profile: profile,
    fullName: 'Luiza L.Alves',
  },
];

export const tourPackageDetailHeader = [
  { title: 'Itinerary', active: false },
  { title: 'Wonderful Moments', active: false },
  { title: 'Itineraty Overview', active: false },
  { title: 'Attractions', active: false },
  { title: 'Hotels', active: false },
  { title: 'Notice', active: false },
  { title: 'Travel Reviews', active: false },
];

export const temporaryComments = [
  {
    id: '1',
    timeAgo: '/ an hour ago',
    comment:
      'Euismod etiam massa ac bibendum mi sed commodo ridiculus varius. Est erat leo eget elit mauris, elementum arcu. Eused adipiscing porttitor faucibus lectus lacus. Euismod etiam massa ac bibendum mi sed commodo ridiculus varius. Est eratleoeg et elit mauris, elementum arcu. Eu sed adipiscing porttitor faucibus lectus lacus.',
    user_info: {
      image: '/static/images/avatar.svg',
      nickname: 'Tarek',
    },
    image: '',
  },
];

export const temporarySelectOptions = [
  { value: '1', label: 'Not Identified' },
  { value: '2', label: 'Closed' },
  { value: '3', label: 'Communicated' },
  { value: '4', label: 'Identified' },
  { value: '5', label: 'Resolved' },
  { value: '6', label: 'Cancelled' },
];

export const travelReviewRate = [
  { id: '5', star: '5', percent: 90 },
  { id: '4', star: '4', percent: 45 },
  { id: '3', star: '3', percent: 14 },
  { id: '2', star: '2', percent: 0 },
  { id: '1', star: '1', percent: 0 },
];
