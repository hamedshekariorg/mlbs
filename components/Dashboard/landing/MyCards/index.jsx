import {
  StyledDiv,
  StyledHorizontal,
  StyledImg,
} from 'components/Common/commonStyles';
import {
  StyledContainer,
  StyledText,
  StyledCard,
  StyledSquare,
  StyledCurrency,
  StyledPoint,
  StyledTxt,
} from './style';
import LandingCarousel from 'components/Common/Carousel/DashboardLandingCarousel';

const MyCards = () => {
  const Card = ({ gradient }) => {
    return (
      <StyledCard gradient={gradient}>
        <div>
          <StyledSquare />
          <StyledDiv>
            <StyledCurrency color="#fff">USD</StyledCurrency>
            <StyledPoint>122900 point</StyledPoint>
          </StyledDiv>
          <StyledDiv>
            <StyledTxt fontSize={12} lineHeight="26px">
              $5,750,20
            </StyledTxt>
          </StyledDiv>
          <StyledDiv mt="26px">
            <StyledTxt>Mario Mendez</StyledTxt>
          </StyledDiv>
          <StyledHorizontal justifyContent="space-between">
            <StyledTxt>5282 3456 7890 1289</StyledTxt>
            <StyledTxt>09/25</StyledTxt>
          </StyledHorizontal>
        </div>
      </StyledCard>
    );
  };

  const items = [
    <Card gradient={14} />,
    <Card gradient={15} />,
    <Card gradient={13} />,
  ];

  return (
    <StyledContainer>
      <StyledDiv mb="22px">
        <StyledImg src="/static/images/dashboard/social.svg" />
        <StyledText>My cards</StyledText>
      </StyledDiv>
      <LandingCarousel items={items} />
    </StyledContainer>
  );
};

export default MyCards;
