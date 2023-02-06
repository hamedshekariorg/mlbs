import React from 'react';
import {
  StyledParagraph,
  StyledText,
  StyledCommentContainer,
  StyledProfileImageContainer,
} from './style';
import profile from 'public/static/images/hotel/profile.jpg';
import { StyledDiv, StyledSpan } from 'components/Common/commonStyles';
import { sampleComment } from 'utils/hotel.utils';
const Comments = () => {
  return (
    <StyledCommentContainer>
      <StyledProfileImageContainer src={profile} />
      <StyledDiv width="100%" pt="18px" pl="7px">
        <StyledText
          textAlign="left"
          color="gray.15"
          fontWeight={6}
          fontSize={10}
          letterSpacing="0"
        >
          Tarek{' '}
          <StyledSpan color="gray.27" fontSize={4}>
            / an hour ago
          </StyledSpan>
          <StyledParagraph mt="16px">{sampleComment}</StyledParagraph>
        </StyledText>
      </StyledDiv>
    </StyledCommentContainer>
  );
};

export default Comments;
