import { StyledParagraph, StyledTitle } from './style';
import { hotelDetailParagraph } from 'utils/hotel.utils';
import ReservableRooms from './ReservableRooms';
import ImageSlider from 'components/Common/ImageSlider';
import { hotelSliderData } from 'utils/hotel.utils';
import Review from 'components/Common/Review';

const MainContent = () => {
  return (
    <>
      <ImageSlider alt="hotel" sliderData={hotelSliderData} />
      <StyledTitle mt="85px">Description</StyledTitle>
      <StyledParagraph
        dangerouslySetInnerHTML={{ __html: hotelDetailParagraph }}
      />
      <ReservableRooms />
      <Review entity="hotel" />
    </>
  );
};

export default MainContent;
