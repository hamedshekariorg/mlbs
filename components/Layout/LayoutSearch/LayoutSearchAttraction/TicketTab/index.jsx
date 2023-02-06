import BadgeContainer from 'components/Common/BadgeContainer';
import {
  StyledHorizontal,
  StyledSpan,
  StyledVertical,
} from 'components/Common/commonStyles';
import { citiesItems } from 'utils/layout.utils';
import CityInput from 'components/Common/Search/CityInput';
import Button from 'components/Common/Button';

const TicketTab = () => {
  return (
    <StyledVertical>
      <StyledHorizontal mb="8px">
        <StyledSpan mt="4px" color="orange.13" fontSize={2}>
          Popular Places
        </StyledSpan>
        {citiesItems.map(({ value, id }) => (
          <BadgeContainer value={value} key={id} />
        ))}
      </StyledHorizontal>
      <StyledHorizontal justifyContent="space-between">
        <CityInput width="800px" placeholder="Attraction or Concert" />
        <StyledHorizontal
          justifyContent="space-evenly"
          alignItems="center"
          width="300px"
          border="input"
          borderRadius="lg"
          bg="gray.1"
        >
          <StyledSpan fontSize={3} color="orange.13">
            Price:
          </StyledSpan>
          <StyledSpan fontSize={9} color="blue.10" mr="60px">
            ¥146.99
          </StyledSpan>
        </StyledHorizontal>
        <Button width="180px">Book</Button>
      </StyledHorizontal>
    </StyledVertical>
  );
};

export default TicketTab;
