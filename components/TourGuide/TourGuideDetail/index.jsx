import {
  StyledHorizontal,
  StyledVertical,
} from 'components/Common/commonStyles';
import TourGuideDetailSidebar from './ToutGideDetailSidebar';
import TourGuideDetailContent from './TourGuideDetailContent';

export default function TourGuideDetail() {
  return (
    <StyledHorizontal mx="140px" my="100px">
      <StyledVertical>
        <TourGuideDetailContent />
      </StyledVertical>
      <StyledVertical>
        <TourGuideDetailSidebar />
      </StyledVertical>
    </StyledHorizontal>
  );
}
