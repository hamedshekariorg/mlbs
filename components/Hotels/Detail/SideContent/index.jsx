import { StyledVertical } from 'components/Common/commonStyles';
import Booking from 'components/Common/Order/Booking';
import BookHotel from './BookHotel';
import ReviewChart from './ReviewChart';
import Map from './Map';

const SideContent = () => {
  return (
    <StyledVertical width="100%" height="100%">
      <BookHotel />
      <Booking />
      <Map />
      <ReviewChart />
    </StyledVertical>
  );
};

export default SideContent;
