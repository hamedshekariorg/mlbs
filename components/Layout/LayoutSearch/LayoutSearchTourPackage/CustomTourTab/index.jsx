import {
  StyledHorizontal,
  StyledImg,
  StyledSpan,
  StyledVertical,
} from 'components/Common/commonStyles';
import customTour from 'public/static/images/tourPackage/customTour.svg';
import Link from 'components/Link';
import Button from 'components/Common/Button';

const CustomTourTab = () => {
  return (
    <StyledHorizontal
      height="87px"
      alignItems="center"
      backgroundColor="gray.0"
      borderRadius="lg"
    >
      <StyledVertical
        alignItems="center"
        justifyContent="space-between"
        flex={1}
        borderRight="input"
      >
        <StyledVertical mt="4px">
          <StyledHorizontal>
            <StyledImg src={customTour} width="18px" height="18px" mr="8px" />
            <StyledSpan fontSize={6} color="red.3">
              Customize <StyledSpan color="blue.10">Your Tour</StyledSpan>
            </StyledSpan>
          </StyledHorizontal>
          <StyledSpan color="orange.13" maxWidth="213px" fontSize={2}>
            Charming Persian custom tour let’s you build your own tour
            experience
          </StyledSpan>
        </StyledVertical>
      </StyledVertical>

      <StyledHorizontal
        alignItems="center"
        justifyContent="space-between"
        ml="64px"
        flex={2.5}
      >
        <StyledSpan maxWidth="442px" fontSize={3} color="gray.27">
          You can customize your tour package and share it with your friends and
          family or to be a benefit a free tour public your customized tour and
          share it with otheres Try Today....
        </StyledSpan>
        <Link href="/tourPackage/customTour">
          <Button width="180px">Custom Tour</Button>
        </Link>
      </StyledHorizontal>
    </StyledHorizontal>
  );
};

export default CustomTourTab;
