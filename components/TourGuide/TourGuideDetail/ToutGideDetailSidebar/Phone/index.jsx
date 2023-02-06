import {
  StyledImg,
  StyledText,
  StyledDiv,
} from 'components/Common/commonStyles';
import { StyledContainer } from './style';

export default function Phone() {
  return (
    <StyledContainer>
      <StyledImg
        width="40px"
        height="39px"
        src="/static/images/tourPackage/phone.svg"
      />
      <StyledDiv mt="24px">
        <StyledText
          fontWeight={5}
          fontSize={14}
          lineHeight="29px"
          color="red.3"
        >
          Reserve
        </StyledText>
        <StyledText
          fontWeight={5}
          fontSize={14}
          lineHeight="29px"
          color="blue.10"
          pl="10px"
          whiteSpace="nowrap"
        >
          by phone
        </StyledText>
      </StyledDiv>
      <StyledText
        mt="24px"
        fontWeight={5}
        fontSize={6}
        lineHeight="19px"
        color="blue.10"
      >
        + 400 51 77 00
      </StyledText>
      <StyledText
        mt="24px"
        fontWeight={5}
        fontSize={2}
        lineHeight="14px"
        color="gray.27"
      >
        Monday To Friday 9:00am - 7:30pm
      </StyledText>
    </StyledContainer>
  );
}
