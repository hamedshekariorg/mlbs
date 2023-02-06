import BadgeContainer from 'components/Common/BadgeContainer';
import {
  StyledHorizontal,
  StyledSpan,
  StyledVertical,
} from 'components/Common/commonStyles';
import { citiesItems } from 'utils/layout.utils';
import CityInput from 'components/Common/Search/CityInput';
import { SearchOutlined } from '@ant-design/icons';
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
        <CityInput width="1100px" placeholder="City or Restaurant Name" />
        <Button width="180px">
          <SearchOutlined /> Search
        </Button>
      </StyledHorizontal>
    </StyledVertical>
  );
};

export default TicketTab;
