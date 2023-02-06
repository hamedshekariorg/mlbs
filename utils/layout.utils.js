import LayoutSearchAdvancedSearch from 'components/Layout/LayoutSearch/LayoutSearchAdvancedSearch';
import LayoutSearchAttraction from 'components/Layout/LayoutSearch/LayoutSearchAttraction';
import AttractionsTab from 'components/Layout/LayoutSearch/LayoutSearchAttraction/AttractionsTab';
import NaturalCampingTab from 'components/Layout/LayoutSearch/LayoutSearchAttraction/NaturalCampingTab';
import RestaurantTab from 'components/Layout/LayoutSearch/LayoutSearchAttraction/RestaurantTab';
import TicketTab from 'components/Layout/LayoutSearch/LayoutSearchAttraction/TicketTab';
import LayoutSearchFlight from 'components/Layout/LayoutSearch/LayoutSearchFlight';
import CancelationTab from 'components/Layout/LayoutSearch/LayoutSearchFlight/CancelationTab';
import DomesticFlightTab from 'components/Layout/LayoutSearch/LayoutSearchFlight/DomesticFlightTab';
import InternationalFlightTab from 'components/Layout/LayoutSearch/LayoutSearchFlight/InternationalFlightTab';
import SeatChangeTab from 'components/Layout/LayoutSearch/LayoutSearchFlight/SeatChangeTab';
import LayoutSearchHotel from 'components/Layout/LayoutSearch/LayoutSearchHotel';
import DomesticHotelTab from 'components/Layout/LayoutSearch/LayoutSearchHotel/DomesticHotelTab';
import GroupPurchaseTab from 'components/Layout/LayoutSearch/LayoutSearchHotel/GroupPurchaseTab';
import InternationalHotelTab from 'components/Layout/LayoutSearch/LayoutSearchHotel/InternationalHotelTab';
import LayoutSearchOtherServices from 'components/Layout/LayoutSearch/LayoutSearchOtherServices';
import InsuranceTab from 'components/Layout/LayoutSearch/LayoutSearchOtherServices/InsuranceTab';
import InternetSimCardTab from 'components/Layout/LayoutSearch/LayoutSearchOtherServices/InternetSimCardTab';
import VisaTab from 'components/Layout/LayoutSearch/LayoutSearchOtherServices/VisaTab';
import LayoutSearchTourGuide from 'components/Layout/LayoutSearch/LayoutSearchTourGuide';
import EditorTranslationsTab from 'components/Layout/LayoutSearch/LayoutSearchTourGuide/EditorTranslationsTab';
import ExhibationTourGuideTab from 'components/Layout/LayoutSearch/LayoutSearchTourGuide/ExhibationTourGuideTab';
import TourGuideTab from 'components/Layout/LayoutSearch/LayoutSearchTourGuide/TourGuideTab';
import LayoutSearchTourPackage from 'components/Layout/LayoutSearch/LayoutSearchTourPackage';
import CustomTourTab from 'components/Layout/LayoutSearch/LayoutSearchTourPackage/CustomTourTab';
import GroupTravelingTab from 'components/Layout/LayoutSearch/LayoutSearchTourPackage/GroupTravelingTab';
import TourPackageTab from 'components/Layout/LayoutSearch/LayoutSearchTourPackage/TourPackageTab';
import LayoutSearchTransportation from 'components/Layout/LayoutSearch/LayoutSearchTransportation';
import AirportCIPTab from 'components/Layout/LayoutSearch/LayoutSearchTransportation/AirportCIPTab';
import BusTab from 'components/Layout/LayoutSearch/LayoutSearchTransportation/BusTab';
import RentCarTab from 'components/Layout/LayoutSearch/LayoutSearchTransportation/RentCarTab';
import TrainTab from 'components/Layout/LayoutSearch/LayoutSearchTransportation/TrainTab';
import Icon from 'components/Icon';
import styled from '@emotion/styled';

// navbar utils
export const currencyOptions = ['CNY', 'USD', 'RIAL', 'EURO'];
export const languageOptions = {
  ch: {
    value: 'ch',
    label: '/static/images/flag/chinese.svg',
  },
  en: {
    value: 'en',
    label: '/static/images/flag/english.svg',
  },
  jp: {
    value: 'jp',
    label: '/static/images/flag/japanese.svg',
  },
};
export const navigationLinks = [
  {
    title: 'Home Page',
    type: 'dropdown',
    path: '/',
    root: '/',
    subItems: [
      {
        title: 'About Us',
        path: '/aboutUs',
        root: '/aboutUs',
      },
      {
        title: 'Contact Us',
        path: '/contactUs',
        root: '/contactUs',
      },
    ],
  },
  {
    title: 'Attractions',
    type: 'dropdown',
    root: '/attractions',
    subItems: [
      {
        title: 'Attraction',
        path: '/attractions/attraction',
      },
      {
        title: 'Posts',
        path: '/posts',
        root: '/posts',
      },
      {
        title: 'list',
        path: '/attractions/list',
      },
      {
        title: 'My Iran',
        path: '/attractions/myIran',
        root: '/attractions/myIran',
      },
    ],
  },
  {
    title: 'Moments',
    type: 'dropdown',
    root: '#',
    subItems: [
      {
        title: 'Moment Details',
        path: '#',
      },
    ],
  },
  {
    title: 'Hotels',
    type: 'dropdown',
    root: '/hotels',
    subItems: [
      {
        title: 'Hotel',
        path: '/hotels/hotel',
      },
    ],
  },
  {
    title: 'Flights',
    type: 'dropdown',
    root: '/flights',
    subItems: [
      {
        title: 'Domestic Flight',
        path: '/flights/flight',
      },
      {
        title: 'International Flight',
        path: '/flights/flight',
      },
    ],
  },
  {
    title: 'Guides',
    type: 'dropdown',
    root: '/guides',
    subItems: [
      {
        title: 'Business Guide',
        path: '#',
      },
      {
        title: 'Tour Guide',
        path: '#',
      },
      {
        title: 'Exhibition Guide',
        path: '#',
      },
    ],
  },
  {
    title: 'Services',
    type: 'dropdown',
    root: '/services',
    subItems: [
      {
        title: 'Bank Card',
        path: '#',
      },
      {
        title: 'Travel Insurance',
        path: '#',
      },
      {
        title: 'Internet',
        path: '#',
      },
      {
        title: 'Sim Card',
        path: '#',
      },
    ],
  },
];

// search utils
export const tabItems = {
  flight: {
    icon: <Icon name="icon-airplane" fontSize={16} />,
    title: 'Flight',
    component: <LayoutSearchFlight />,
  },
  hotel: {
    icon: <Icon name="icon-hotel" fontSize={16} />,
    title: 'Hotel',
    component: <LayoutSearchHotel />,
  },
  transportation: {
    icon: <Icon name="icon-transportation" fontSize={16} />,
    title: 'Transportation',
    component: <LayoutSearchTransportation />,
  },
  tourPackage: {
    icon: <Icon name="icon-tourpackage" fontSize={16} />,
    title: 'Tour Package',
    component: <LayoutSearchTourPackage />,
  },
  tourGuide: {
    icon: <Icon name="icon-flag-2" fontSize={16} />,
    title: 'Tour Guide',
    component: <LayoutSearchTourGuide />,
  },
  attraction: {
    icon: <Icon name="icon-attraction" fontSize={16} />,
    title: 'Attraction',
    component: <LayoutSearchAttraction />,
  },
  otherServices: {
    icon: <Icon name="icon-other-services" fontSize={16} />,
    title: 'Other Services',
    component: <LayoutSearchOtherServices />,
  },
  advancedSearch: {
    icon: <Icon name="icon-search" fontSize={16} />,
    title: 'Advanced Search',
    component: <LayoutSearchAdvancedSearch />,
  },
};

/*
 *
 * gets a tab item
 * (and object with icon and title)
 * and returns the tab title
 *
 */

const StyledTabTitle = styled.div`
  display: flex;
  align-items: center;
  i {
    margin-bottom: 3px;
  }
`;
export const getTitle = (item) => {
  return (
    <StyledTabTitle>
      {item.icon}
      {item.title}
    </StyledTabTitle>
  );
};

// search -> attraction (tab) utils
export const attractionTabItems = {
  attractions: {
    title: 'Attractions',
    component: <AttractionsTab />,
  },
  ticket: {
    title: 'Ticket',
    component: <TicketTab />,
  },
  naturalCamping: {
    title: 'Natural Camping',
    component: <NaturalCampingTab />,
  },
  restaurant: {
    title: 'Restaurant',
    component: <RestaurantTab />,
  },
};

// search -> flight (tab) utils
export const flightTabItems = {
  domesticFlight: {
    title: 'Domestic Flight',
    component: <DomesticFlightTab />,
  },
  internationalFlight: {
    title: 'International Flight',
    component: <InternationalFlightTab />,
  },
  cancelation: {
    title: 'Cancelation',
    component: <CancelationTab />,
  },
  seatChange: {
    title: 'Seat Change',
    component: <SeatChangeTab />,
  },
};

// search -> hotel (tab) utils
export const hotelTabItems = {
  domesticHotel: {
    title: 'Domestic Hotel',
    component: <DomesticHotelTab />,
  },
  internationalHotel: {
    title: 'International Hotel',
    component: <InternationalHotelTab />,
  },
  groupPurchase: {
    title: 'Group Purchase',
    component: <GroupPurchaseTab />,
  },
};

// search -> transportation (tab) utils
export const transportationTabItems = {
  airportCIP: {
    title: 'Airport CIP',
    component: <AirportCIPTab />,
  },
  rentCar: {
    title: 'Rent Car',
    component: <RentCarTab />,
  },
  train: {
    title: 'Train',
    component: <TrainTab />,
  },
  bus: {
    title: 'Bus',
    component: <BusTab />,
  },
};

// search -> tour package (tab) utils
export const tourPackageTabItems = {
  tourPackage: {
    title: 'Tour Package',
    component: <TourPackageTab />,
  },
  customTour: {
    title: 'Custom Tour',
    component: <CustomTourTab />,
  },
  groupTraveling: {
    title: 'Group Traveling',
    component: <GroupTravelingTab />,
  },
};

// search -> tour guide (tab) utils
export const tourGuideTabItems = {
  tourGuide: {
    title: 'Tour Guide',
    component: <TourGuideTab />,
  },
  exhibationTourGuide: {
    title: 'Exhibation Tour Guide',
    component: <ExhibationTourGuideTab />,
  },
  editorTranslation: {
    title: 'Editor-Translations',
    component: <EditorTranslationsTab />,
  },
};

// search -> other services (tab) utils
export const otherServicesTabItems = {
  visa: {
    title: 'Visa',
    component: <VisaTab />,
  },
  insurance: {
    title: 'Insurance',
    component: <InsuranceTab />,
  },
  internetSimCard: {
    title: 'Internet/Sim Card',
    component: <InternetSimCardTab />,
  },
};

/* TEMPORARY -> waiting for the API  */
export const citiesItems = [
  { value: 'Tehran', id: 0 },
  { value: '33 pol', id: 1 },
  { value: 'Takhte Jamshid', id: 2 },
];

export const categories = [
  { value: 'mashhad' },
  { value: 'tehran' },
  { value: 'tabriz' },
];

export const usefulLinks = [
  { title: 'About us', path: '/aboutUs' },
  { title: 'Contact us', path: '/contactUs' },
  { title: 'FAQ', path: '/faq' },
  { title: 'Be Our Partner', path: 'https://mq.stg.blytd.com' },
];
export const contactUs = [
  {
    item: '+86 13911788625',
    icon: <Icon mr={1} fontSize={14} color={'#fff'} name="icon-call-2" />,
  },
  {
    item: '+89 09021788625',
    icon: <Icon mr={1} fontSize={14} color={'#fff'} name="icon-call-2" />,
  },
  {
    item: 'baoming@mlbs.com',
    icon: <Icon mr={1} fontSize={14} color={'#fff'} name="icon-mail" />,
  },
  {
    item: 'charmingpersiar',
    icon: <Icon mr={1} fontSize={14} color={'#fff'} name="icon-wechat" />,
  },
];

export const svgs = ({ tourPackageNum }) => [
  { iconName: 'search', name: 'Search' },
  { iconName: 'attraction', name: `${tourPackageNum} Attractions` },
  { iconName: 'tourPackage', name: `${tourPackageNum} TourPackage` },
  { iconName: 'sofa', name: '220 Hotles' },
  { iconName: 'plane', name: '18 Airline' },
  { iconName: 'flag', name: '120 TourGuide' },
  { iconName: 'bus', name: '29 Trainname:' },
  { iconName: 'spoon', name: '440 Resturant' },
  { iconName: 'car', name: '120 Rent Car' },
  { iconName: 'japen', name: '12 Insurance' },
];

export const userProfileItems = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: <Icon fontSize={12} mr="16px" name="icon-dashboard" />,
  },
  {
    path: '/dashboard/profile',
    title: 'Profile',
    icon: <Icon fontSize={12} mr="16px" name="icon-profile" />,
  },
  {
    path: '/dashboard/cart',
    title: 'Cart',
    icon: <Icon fontSize={12} mr="16px" name="icon-shoppingcart" />,
  },
  {
    path: '/dashboard/wishlist',
    title: 'Wishlist',
    icon: <Icon fontSize={12} mr="16px" name="icon-like-1" />,
  },
  {
    path: '/dashboard/social',
    title: 'Social',
    icon: <Icon fontSize={12} mr="16px" name="icon-social" />,
  },
];
