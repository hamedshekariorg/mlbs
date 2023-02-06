import { useState } from 'react';
import {
  StyledDiv,
  StyledDivider,
  StyledText,
} from 'components/Common/commonStyles';
import { StyledDescription } from './style';

const Itinerary = ({ description }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <StyledDiv id="Itinerary">
      <StyledDescription
        show={showMore}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <StyledDiv mt="74px">
        <StyledText
          fontWeight={6}
          fontSize={4}
          lineHeight="17px"
          letterSpacing="0.05em"
          textDecoration="underline"
          color="blue.10"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </StyledText>
      </StyledDiv>
      <StyledDivider />
    </StyledDiv>
  );
};

export default Itinerary;
