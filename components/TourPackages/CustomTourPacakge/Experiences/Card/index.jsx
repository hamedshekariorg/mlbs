import {
  StyledH4,
  StyledH5,
  StyledHorizontal,
  StyledImg,
} from 'components/Common/commonStyles';
import { StyledContainer } from './style';
import comma from 'public/static/images/tourPackage/comma.png';

const ExperienceCard = ({ description, profile, fullName }) => {
  return (
    <StyledContainer>
      <StyledImg src={comma} width="39px" height="28px" />
      <StyledH5
        mt="28px"
        mb="28px"
        color="gray.27"
        letterSpacing="0.04em"
        height="auto"
      >
        {description}
      </StyledH5>
      <StyledHorizontal alignItems="center" width="full">
        <StyledImg
          borderRadius="full"
          mr="18px"
          width="71px"
          height="71px"
          src={profile}
        />
        <StyledH4>{fullName}</StyledH4>
      </StyledHorizontal>
    </StyledContainer>
  );
};

export default ExperienceCard;
