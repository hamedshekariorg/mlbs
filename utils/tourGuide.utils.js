import WorkExperience from 'components/TourGuide/TourGuideDetail/TourGuideDetailContent/WorkExperience';
import Description from 'components/TourGuide/TourGuideDetail/TourGuideDetailContent/Description';
import theme from 'components/theme';

export const temporaryOptionReservation = [
  { value: 0, label: 'Online' },
  { value: 1, label: 'Exelent Profil' },
  { value: 2, label: 'Full-time' },
  { value: 3, label: 'Part-time' },
  { value: 4, label: 'Translator' },
  { value: 5, label: 'Specialist' },
];

export const tempraryTimeline = [
  {
    id: 0,
    label: '2022',
    iconColor: theme.colors.blue[10],
    description: `Charming Persian intends to provide individual and group travel to leisure clients.
  Charming Persian seeks to differentiate itself as the premier adventure travel company in the greater on their capabilities and to provide attractive packages at competitive prices in the Chinese tourism market.`,
  },
  {
    id: 1,
    label: '2022',
    iconColor: theme.colors.blue[10],
    description: `Charming Persian intends to provide individual and group travel to leisure clients.
  Charming Persian seeks to differentiate itself as the premier adventure travel company in the greater on their capabilities and to provide attractive packages at competitive prices in the Chinese tourism market.`,
  },
  {
    id: 2,
    label: '2022',
    iconColor: theme.colors.gray[58],
    description: `Charming Persian intends to provide individual and group travel to leisure clients.
  Charming Persian seeks to differentiate itself as the premier adventure travel company in the greater on their capabilities and to provide attractive packages at competitive prices in the Chinese tourism market.`,
  },
];

export const temporaryTourDetailContent = [
  {
    id: 1,
    icon: 'user',
    title: 'About ME',
    component: <Description />,
  },
  {
    id: 2,
    icon: 'work',
    title: 'Work Experiance',
    component: <WorkExperience />,
  },
  {
    id: 3,
    icon: 'education',
    title: 'Education Experiance',
    component: <Description />,
  },
  {
    id: 4,
    icon: 'certificate',
    title: 'Certificate',
    component: <Description />,
  },
];

export const temporaryTourGuideCards = [
  {
    id: 1,
    imageName: 'img1',
    name: 'Mina Shakuri',
    location: 'Tehran - Chinese Language',
  },
  {
    id: 2,
    imageName: 'img2',
    name: 'Mina Shakuri',
    location: 'Tehran - Chinese Language',
  },
  {
    id: 3,
    imageName: 'img3',
    name: 'Mina Shakuri',
    location: 'Tehran - Chinese Language',
  },
  {
    id: 4,
    imageName: 'img4',
    name: 'Mina Shakuri',
    location: 'Tehran - Chinese Language',
  },
  {
    id: 5,
    imageName: 'img5',
    name: 'Mina Shakuri',
    location: 'Tehran - Chinese Language',
  },
  {
    id: 6,
    imageName: 'img1',
    name: 'Mina Shakuri',
    location: 'Tehran - Chinese Language',
  },
  {
    id: 7,
    imageName: 'img2',
    name: 'Mina Shakuri',
    location: 'Tehran - Chinese Language',
  },
  {
    id: 8,
    imageName: 'img3',
    name: 'Mina Shakuri',
    location: 'Tehran - Chinese Language',
  },
  {
    id: 9,
    imageName: 'img4',
    name: 'Mina Shakuri',
    location: 'Tehran - Chinese Language',
  },
  {
    id: 10,
    imageName: 'img5',
    name: 'Mina Shakuri',
    location: 'Tehran - Chinese Language',
  },
  {
    id: 11,
    imageName: 'img1',
    name: 'Mina Shakuri',
    location: 'Tehran - Chinese Language',
  },
  {
    id: 12,
    imageName: 'img2',
    name: 'Mina Shakuri',
    location: 'Tehran - Chinese Language',
  },
  {
    id: 13,
    imageName: 'img3',
    name: 'Mina Shakuri',
    location: 'Tehran - Chinese Language',
  },
  {
    id: 14,
    imageName: 'img4',
    name: 'Mina Shakuri',
    location: 'Tehran - Chinese Language',
  },
  {
    id: 15,
    imageName: 'img5',
    name: 'Mina Shakuri',
    location: 'Tehran - Chinese Language',
  },
  {
    id: 16,
    imageName: 'img1',
    name: 'Mina Shakuri',
    location: 'Tehran - Chinese Language',
  },
  {
    id: 17,
    imageName: 'img2',
    name: 'Mina Shakuri',
    location: 'Tehran - Chinese Language',
  },
  {
    id: 18,
    imageName: 'img3',
    name: 'Mina Shakuri',
    location: 'Tehran - Chinese Language',
  },
  {
    id: 19,
    imageName: 'img4',
    name: 'Mina Shakuri',
    location: 'Tehran - Chinese Language',
  },
  {
    id: 20,
    imageName: 'img5',
    name: 'Mina Shakuri',
    location: 'Tehran - Chinese Language',
  },
  {
    id: 21,
    imageName: 'img1',
    name: 'Mina Shakuri',
    location: 'Tehran - Chinese Language',
  },
];

const testPassMethod = () => {};

export const switchTourGide = [
  {
    title: 'Language',
    showDevider: true,
    items: [
      { title: 'Chinese', checked: true, handleChange: testPassMethod },
      { title: 'English', checked: true, handleChange: testPassMethod },
      { title: 'Japanese', checked: true, handleChange: testPassMethod },
      { title: 'Korian', checked: true, handleChange: testPassMethod },
    ],
  },
  {
    title: 'Trained in',
    showDevider: true,
    items: [
      { title: 'Self-study', checked: true, handleChange: testPassMethod },
      { title: 'Institute', checked: true, handleChange: testPassMethod },
      { title: 'University', checked: true, handleChange: testPassMethod },
      { title: 'Resident', checked: true, handleChange: testPassMethod },
      { title: 'Native', checked: true, handleChange: testPassMethod },
    ],
  },
  {
    title: 'Language Level',
    showDevider: true,
    items: [
      { title: 'Professional', checked: true, handleChange: testPassMethod },
      { title: 'Advaned', checked: true, handleChange: testPassMethod },
      { title: 'Beginner', checked: true, handleChange: testPassMethod },
    ],
  },
  {
    title: 'Extra Filters',
    showDevider: false,
    items: [
      { title: 'Online', checked: true, handleChange: testPassMethod },
      {
        title: 'Exelent Profil',
        checked: true,
        handleChange: testPassMethod,
      },
      { title: 'Full-time', checked: true, handleChange: testPassMethod },
      { title: 'Part-time', checked: true, handleChange: testPassMethod },
      { title: 'Translator', checked: true, handleChange: testPassMethod },
      { title: 'Specialist', checked: true, handleChange: testPassMethod },
    ],
  },
];
