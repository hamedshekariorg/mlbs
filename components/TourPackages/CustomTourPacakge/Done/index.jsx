import {
  StyledH1,
  StyledH2,
  StyledH4,
  StyledH5,
  StyledHorizontal,
  StyledImg,
  StyledVertical,
} from 'components/Common/commonStyles';
import { StyledCard, StyledContainer, StyledPointerSpan } from './style';
import { successParagraph } from 'utils/tourPackage.utils';
import Link from 'components/Link';
import success from 'public/static/images/tourPackage/success.svg';

const Done = () => {
  return (
    <StyledHorizontal
      justifyContent="center"
      alignItems="center"
      px="235px"
      py="144px"
    >
      <StyledContainer>
        <StyledVertical maxWidth="505px">
          <StyledH2
            fontWeight={4}
            color="gray.15"
            lineHeight="34px"
            opacity="0.7"
            mb="15px"
          >
            Policy of Public & Private Tour
          </StyledH2>
          <StyledH5
            mb="18px"
            color="gray.52"
            fontSize={5}
            dangerouslySetInnerHTML={{ __html: successParagraph }}
          />
          <StyledPointerSpan>Learn more</StyledPointerSpan>
        </StyledVertical>
        <StyledCard>
          <StyledVertical mx="33px" mt="42px">
            <StyledH1
              fontWeight={4}
              fontSize={22}
              color="blue.14"
              lineHeight="38px"
              textAlign="center"
            >
              Thank you!
            </StyledH1>
            <StyledH4 textAlign="center" fontSize={6} color="gray.27">
              Thank you for reporting this.
              <br /> You’re helping create a global
              <br /> movement to map infections globally.
            </StyledH4>
          </StyledVertical>
          <Link href="/attractions/attraction">
            <StyledPointerSpan>back to attraction</StyledPointerSpan>
          </Link>
          <StyledImg src={success} position="absolute" top="-45px" />
        </StyledCard>
      </StyledContainer>
    </StyledHorizontal>
  );
};

export default Done;
