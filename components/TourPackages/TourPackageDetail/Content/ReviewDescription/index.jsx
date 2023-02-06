import { StyledDiv } from 'components/Common/commonStyles';
import Review from 'components/Common/Review';
import Comments from 'components/Common/Comments';
import { temporaryComments } from 'utils/tourPackage.utils';

const ReviewDescription = () => {
  return (
    <StyledDiv id="ReviewDescription" ml="20px">
      <Review entity="tourPackage" />
      <Comments comments={temporaryComments} />
    </StyledDiv>
  );
};

export default ReviewDescription;
