import TourContent from 'components/TourPackages/TourPackageContent';
import { StyledDiv } from 'components/Common/commonStyles';
import InfoCardGrid from 'components/Common/PolicyGrid';

export default () => {
  return (
    <StyledDiv pt="50px" my={5}>
      <TourContent />
      <StyledDiv mx="35px">
        <InfoCardGrid type="tour" />
      </StyledDiv>
    </StyledDiv>
  );
};
