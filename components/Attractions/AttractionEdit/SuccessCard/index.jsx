import {
  StyledDiv,
  StyledH1,
  StyledHorizontal,
  StyledImg,
  StyledText,
  StyledVertical,
} from 'components/Common/commonStyles';
import { StyledCard } from './style';
import Link from 'components/Link';
const SuccessCard = () => {
  return (
    <StyledHorizontal px="24px" py="22px">
      <StyledVertical width="500px">
        <StyledH1 color="gray.15">Policy of Editinal Terms</StyledH1>
        <StyledText color="gray.52" fontSize={7} lineHeight="26px">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents.
          <br />
          <br />I should be incapable of drawing a single stroke at the present
          moment; and yet I feel that I never was a greater artist than now.
          When, while the lovely valley teems with vapour around me, and the
          meridian sun strikes the upper surface of the impenetrable foliage of
          my trees.
        </StyledText>
        <StyledDiv mt="24px">
          <Link>
            <StyledText color="blue.10" underline>
              Learn more
            </StyledText>
          </Link>
        </StyledDiv>
      </StyledVertical>
      <StyledCard>
        <StyledImg src="/static/images/attractions/success.svg" />
        <StyledH1 color="blue.10" mt="77px" fontWeight={4} fontSize={22}>
          Tank You
        </StyledH1>
        <StyledText
          color="gray.27"
          fontSize={6}
          textAlign="center"
          pb="48px"
          width="258px"
        >
          Thank you for reporting this. You’re helping create a global movement
          to map infections globally.
        </StyledText>
        <Link>
          <StyledText color="blue.10" underline>
            back to attraction
          </StyledText>
        </Link>
      </StyledCard>
    </StyledHorizontal>
  );
};

export default SuccessCard;
