import cancel from 'public/static/images/infoCardsContent/cancel.svg';
import insurance from 'public/static/images/infoCardsContent/insurance.svg';
import help from 'public/static/images/infoCardsContent/help.svg';
import payment from 'public/static/images/infoCardsContent/payment.svg';
import { StyledH4, StyledImg } from 'components/Common/commonStyles';
import sliderImageOne from 'public/static/images/hotel/hotel-slider-00.png';
import sliderImageTwo from 'public/static/images/hotel/hotel-slider-01.png';
import sliderImageThree from 'public/static/images/hotel/hotel-slider-02.png';
import sliderImageFour from 'public/static/images/hotel/hotel-slider-03.png';
import sliderImageFive from 'public/static/images/hotel/hotel-slider-04.png';
import sliderImageSix from 'public/static/images/hotel/hotel-slider-05.png';
import sliderImageSeven from 'public/static/images/hotel/hotel-slider-06.png';
import sliderImageEight from 'public/static/images/hotel/hotel-slider-07.png';
import bed from 'public/static/images/hotel/bed.svg';
import restaurant from 'public/static/images/hotel/restaurant.svg';
import attraction from 'public/static/images/hotel/attraction.svg';
import bathtub from 'public/static/images/hotel/services/bathtub.svg';
import extraBed from 'public/static/images/hotel/services/extra-bed.svg';
import noSmoking from 'public/static/images/hotel/services/no-smoking.svg';
import refrigerator from 'public/static/images/hotel/services/refrigerator.svg';
import wifi from 'public/static/images/hotel/services/wifi.svg';
import window from 'public/static/images/hotel/services/window.svg';
import solidToilet from 'public/static/images/hotel/services/solid-toilet.svg';
import teaKettle from 'public/static/images/hotel/services/tea-kettle.svg';

//* a Bunch of test content for hotels page cards
export const hotelCards = [
  {
    id: '1',
    city: 'Tehran',
    title: 'Parsian Esteghlal Hotel',
    rate: 5,
    price: 138.5,
    subtitle: '波斯人埃斯泰格勒酒店',
    type: 'pickup',
  },
  {
    id: '2',
    city: 'Ahvaz',
    title: 'Parsian Esteghlal Hotel',
    rate: 4,
    price: 160,
    subtitle: '波斯人埃斯泰格勒酒店',
    type: 'pickup',
  },
  {
    id: '3',
    city: 'Shiraz',
    title: 'Parsian Esteghlal Hotel',
    rate: 4.5,
    price: 138.5,
    subtitle: '波斯人埃斯泰格勒酒店',
    type: 'pickup',
  },
  {
    id: '4',
    city: 'Tabriz',
    title: 'Parsian Esteghlal Hotel',
    rate: 3,
    price: 138.5,
    subtitle: '波斯人埃斯泰格勒酒店',
    type: 'pickup',
  },
  {
    id: '5',
    city: 'Tehran',
    title: 'Parsian Esteghlal Hotel',
    rate: 5,
    price: 138.5,
    subtitle: '波斯人埃斯泰格勒酒店',
    type: 'pickup',
  },
  {
    id: '6',
    city: 'Ahvaz',
    title: 'Parsian Esteghlal Hotel',
    rate: 4,
    price: 160,
    subtitle: '波斯人埃斯泰格勒酒店',
    type: 'pickup',
  },
  {
    id: '7',
    city: 'Shiraz',
    title: 'Parsian Esteghlal Hotel',
    rate: 4.5,
    price: 138.5,
    subtitle: '波斯人埃斯泰格勒酒店',
    type: 'pickup',
  },
  {
    id: '8',
    city: 'Tabriz',
    title: 'Parsian Esteghlal Hotel',
    rate: 3,
    price: 138.5,
    subtitle: '波斯人埃斯泰格勒酒店',
    type: 'pickup',
  },
  {
    id: '9',
    city: 'Tehran',
    title: 'Parsian Esteghlal Hotel',
    rate: 5,
    price: 138.5,
    subtitle: '波斯人埃斯泰格勒酒店',
    type: 'pickup',
  },
  {
    id: '10',
    city: 'Ahvaz',
    title: 'Parsian Esteghlal Hotel',
    rate: 4,
    price: 160,
    subtitle: '波斯人埃斯泰格勒酒店',
    type: 'pickup',
  },
  {
    id: '11',
    city: 'Shiraz',
    title: 'Parsian Esteghlal Hotel',
    rate: 4.5,
    price: 138.5,
    subtitle: '波斯人埃斯泰格勒酒店',
    type: 'pickup',
  },
  {
    id: '12',
    city: 'Tabriz',
    title: 'Parsian Esteghlal Hotel',
    rate: 3,
    price: 138.5,
    subtitle: '波斯人埃斯泰格勒酒店',
    type: 'pickup',
  },
  {
    id: '13',
    city: 'Tehran',
    title: 'Parsian Esteghlal Hotel',
    rate: 5,
    price: 138.5,
    subtitle: '波斯人埃斯泰格勒酒店',
    type: 'pickup',
  },
  {
    id: '14',
    city: 'Ahvaz',
    title: 'Parsian Esteghlal Hotel',
    rate: 4,
    price: 160,
    subtitle: '波斯人埃斯泰格勒酒店',
    type: 'pickup',
  },
  {
    id: '15',
    city: 'Shiraz',
    title: 'Parsian Esteghlal Hotel',
    rate: 4.5,
    price: 138.5,
    subtitle: '波斯人埃斯泰格勒酒店',
    type: 'pickup',
  },
  {
    id: '16',
    city: 'Tabriz',
    title: 'Parsian Esteghlal Hotel',
    rate: 3,
    price: 138.5,
    subtitle: '波斯人埃斯泰格勒酒店',
    type: 'pickup',
  },
  {
    id: '17',
    city: 'Tehran',
    title: 'Parsian Esteghlal Hotel',
    rate: 5,
    price: 138.5,
    subtitle: '波斯人埃斯泰格勒酒店',
    type: 'pickup',
  },
  {
    id: '18',
    city: 'Ahvaz',
    title: 'Parsian Esteghlal Hotel',
    rate: 4,
    price: 160,
    subtitle: '波斯人埃斯泰格勒酒店',
    type: 'pickup',
  },
];

export const hotelSliderData = [
  {
    id: 1,
    imgSource: sliderImageOne,
    altTag: 'hotel-slider-image',
  },
  {
    id: 2,
    imgSource: sliderImageTwo,
    altTag: 'hotel-slider-image',
  },
  {
    id: 3,
    imgSource: sliderImageThree,
    altTag: 'hotel-slider-image',
  },
  {
    id: 4,
    imgSource: sliderImageFour,
    altTag: 'hotel-slider-image',
  },
  {
    id: 5,
    imgSource: sliderImageFive,
    altTag: 'hotel-slider-image',
  },
  {
    id: 6,
    imgSource: sliderImageSix,
    altTag: 'hotel-slider-image',
  },
  {
    id: 7,
    imgSource: sliderImageSeven,
    altTag: 'hotel-slider-image',
  },
  {
    id: 8,
    imgSource: sliderImageEight,
    altTag: 'hotel-slider-image',
  },
];

export const mapChips = [
  {
    id: 1,
    title: 'Restaurants',
    src: restaurant,
  },
  {
    id: 2,
    title: 'Hotels',
    src: bed,
  },
  {
    id: 3,
    title: 'Attractions',
    src: attraction,
  },
];

//* a Test paragraph on hotel details page
export const hotelDetailParagraph = `Standing proudly in the north of Tehran, Espinas Palace Hotel, a hidden
gem and a peaceful heaven, exudes the elegant ambience of a real luxury
hotel. Espinas Palace mixes the finest of the fine and the best of
contemporary modern comfort with a spectacular taste for the past. As
one of Tehran’s most premium buildings with exhilarating architecture,
the beautiful Palace is an imposing city landmark, which boasts a
magnificent lobby, dramatic public spaces and indulgently comfortable
bedrooms. Espinas Palace Hotel is a hotel with a flair for services. A
stay in the Palace is always a special time for our guests. The Palace
features all the amenities and services of a luxury five-star hotel
coupled with attraction and a unique feel-at-home atmosphere.
<br />
<br />
International & Modern Iranian Restaurant Warm and attentive service and
the skills and expertise of our team of chefs and waiters, will ensure
that your dining experience is impressive in every way at Laton
Restaurant. Laton promises pleasure for those with a taste for something
different.
<br />
<br />
Traditional Iranian Restaurant This well-designed and romantic
restaurant serves Persian cuisine with a plenty of traditional
delicacies. Enjoy premium traditional beverages and exclusive teas and
coffees as well as the absolutely delicious Palace Dam-Noosh in a truly
palatial Iranian way.`;

export const hotelResultTabItems = {
  standard: {
    title: <StyledH4>Standard Room</StyledH4>,
  },
  standardTwin: {
    title: <StyledH4>Standard Twin Room</StyledH4>,
  },
  triple: {
    title: <StyledH4>Triple Room</StyledH4>,
  },
  junior: {
    title: <StyledH4>Junior Suite</StyledH4>,
  },
  moreStandard: {
    title: <StyledH4>Standard Room</StyledH4>,
  },
  standardTwin2: {
    title: <StyledH4>Standard Twin Room</StyledH4>,
  },
};

export const sampleComment =
  'Euismod etiam massa ac bibendum mi sed commodo ridiculus varius. Esterat leo eget elit mauris, elementum arcu. Eused adipiscing porttitor faucibus lectus lacus. Euismod etiam massa ac bibendum mi sed commodo ridiculus varius. Est eratleoeg et elit mauris,elementum arcu. Eu sed adipiscing porttitor faucibus lectus lacus.';

export const sampleHotelCardInfo = [
  {
    id: 1,
    title: 'Checkin After',
    subtitle: '22:00 PM',
  },
  {
    id: 2,
    title: 'Checkout After',
    subtitle: '12:00 PM',
  },
  {
    id: 3,
    title: 'Cancellation Policy',
    subtitle: 'Money Cannot Return',
  },
];

export const sampleHotelServices = [
  {
    id: 1,
    src: bathtub,
    tooltip: 'Bathtub',
    altTag: 'hotel-bathtub',
  },
  {
    id: 2,
    src: extraBed,
    tooltip: 'Extra Bed',
    altTag: 'hotel-extra-bed',
  },
  {
    id: 3,
    src: noSmoking,
    tooltip: 'No Smoking',
    altTag: 'hotel-no-smoking',
  },
  {
    id: 4,
    src: refrigerator,
    tooltip: 'Refrigerator',
    altTag: 'hotel-refrigerator',
  },
  {
    id: 5,
    src: solidToilet,
    tooltip: 'Solid Toilet',
    altTag: 'hotel-solid-toilet',
  },
  {
    id: 6,
    src: noSmoking,
    tooltip: 'No Smoking',
    altTag: 'hotel-no-smoking',
  },
  {
    id: 7,
    src: window,
    tooltip: 'Window',
    altTag: 'hotel-window',
  },
  {
    id: 8,
    src: teaKettle,
    tooltip: 'Tea Kettle',
    altTag: 'hotel-tea-kettle',
  },
  {
    id: 9,
    src: bathtub,
    tooltip: 'Bathtub',
    altTag: 'hotel-bathtub',
  },
  {
    id: 10,
    src: extraBed,
    tooltip: 'Extra Bed',
    altTag: 'hotel-extra-bed',
  },
  {
    id: 11,
    src: wifi,
    tooltip: 'WIFI',
    altTag: 'hotel-wifi',
  },
  {
    id: 12,
    src: refrigerator,
    tooltip: 'Refrigerator',
    altTag: 'hotel-refrigerator',
  },
  {
    id: 13,
    src: solidToilet,
    tooltip: 'Solid Toilet',
    altTag: 'hotel-solid-toilet',
  },
];

export const sampleHotelCards = [
  {
    id: 1,
    type: 'Standard Room',
    provider: 'Snapp!',
    bgColor: 'blue.11',
  },
  {
    id: 2,
    type: 'Standard Twin Room',
    provider: 'Alibaba',
    bgColor: 'orange.7',
  },
  {
    id: 3,
    type: 'Junior Suite',
    provider: 'Eligasht',
    bgColor: 'gray.22',
  },
  {
    id: 4,
    type: 'Standard Room',
    provider: 'Snapp!',
    bgColor: 'blue.11',
  },
  {
    id: 5,
    type: 'Standard Twin Room',
    provider: 'Alibaba',
    bgColor: 'orange.7',
  },
  {
    id: 6,
    type: 'Junior Suite',
    provider: 'Eligasht',
    bgColor: 'gray.22',
  },
];

export const hotelPriceCardTestData = [
  { title: 'Customers', value: 2 },
  { title: 'Room', value: 1 },
];

export const IRAN_API_ID = '61042ff09703294a6e37efa2';

export const chartReviewSamples = [
  { id: 1, start: '5 Stars', percentage: 80 },
  { id: 2, start: '4 Stars', percentage: 90 },
  { id: 3, start: '3 Stars', percentage: 37 },
  { id: 4, start: '2 Stars', percentage: 20 },
  { id: 5, start: '1 Stars', percentage: 61 },
];
