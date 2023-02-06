import {
  StyledDiv,
  StyledSpan,
  StyledSpace,
  StyledText,
} from 'components/Common/commonStyles';
import {
  Overlay,
  StyledContainer,
  StyledContentCard,
  StyledImageCard,
} from './style';
import Icon from 'components/Icon';
import RateContainer from 'components/Common/RateContainer';

import Button from 'components/Common/Button';
const UnescoCard = ({
  image,
  name,
  rate,
  location,
  category,
  time,
  views,
  rateVisible,
}) => {
  return (
    <StyledContainer>
      <StyledImageCard>
        <img width="100%" height="100%" src={image} alt={name} />
        <Overlay>
          <img width="42px" height="32px" src="/static/images/unesco/1.svg" />
          <div>
            <StyledText color="#fff" fontSize={9}>
              UNESCO
            </StyledText>
            <br />
            <StyledText color="#fff">World Heritage</StyledText>
          </div>
        </Overlay>
      </StyledImageCard>

      <StyledContentCard>
        <StyledText ellipsis mb={2} width="205px" color="gray.15" fontSize={9}>
          {name}
        </StyledText>
        <RateContainer rate={rate} views={views} rateVisible={rateVisible} />
        <StyledSpace mt={5} color="gray.24" direction="vertical" size={15}>
          <StyledSpan>
            <Icon name="icon-location" fontSize={10} /> {location}
          </StyledSpan>
          <StyledSpan>
            <Icon name="icon-category" fontSize={10} /> {category}
          </StyledSpan>
          <StyledSpan>
            <Icon name="icon-time" fontSize={10} /> {time}
          </StyledSpan>
        </StyledSpace>
        <StyledDiv mt={5} display="flex" justifyContent="space-between">
          <StyledSpace color="gray.24">
            <Icon name="icon-share" fontSize={12} />
            <Icon name="icon-like-stroke" fontSize={12} />
          </StyledSpace>
          <Button btnType="secondary" shape="round" height="34px" px={1}>
            Learn More
            <Icon name="icon-arrow-right" ml={1} fontSize={9} />
          </Button>
        </StyledDiv>
      </StyledContentCard>
    </StyledContainer>
  );
};

export default UnescoCard;
