import Phone from './Phone';
import Profile from './Profile';
import Reservation from './Reservation';
import Agenda from './Agenda';
import { StyledDiv } from 'components/Common/commonStyles';

export default function TourGuideDetailSidebar() {
  return (
    <StyledDiv width="278px">
      <Profile />
      <Reservation />
      <Agenda />
      <Phone />
    </StyledDiv>
  );
}
