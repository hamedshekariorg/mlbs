import { StyledBody, StyledCard, StyledOverlay, StyledText } from './style';
import Button from 'components/Common/Button';
import Link from 'components/Link';
import RateComponent from 'components/Common/Rate';
import { getAttractionDetailRoute } from 'store/attractions/attractions.service';

const AttractionsCard = ({ id, name, image, cityName, visitingTime }) => {
  return (
    <StyledCard>
      <img src={image} alt={name} />
      <StyledOverlay>
        <StyledBody>
          <span>{cityName}</span>
          <RateComponent defaultValue={5} />
          <StyledText>
            {name}
            <br />
            <span>{visitingTime}</span>
          </StyledText>
        </StyledBody>
        <Link href={getAttractionDetailRoute(id)}>
          <Button btnType="whiteLink" borderRadius={10} py={3}>
            Read More
          </Button>
        </Link>
      </StyledOverlay>
    </StyledCard>
  );
};

export default AttractionsCard;
