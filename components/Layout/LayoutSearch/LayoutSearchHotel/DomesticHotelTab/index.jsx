import BadgeContainer from 'components/Common/BadgeContainer';
import {
  StyledHorizontal,
  StyledVertical,
  StyledSpan,
} from 'components/Common/commonStyles';
import { citiesItems } from 'utils/layout.utils';
import { SearchOutlined } from '@ant-design/icons';
import CityInput from 'components/Common/Search/CityInput';
import DateInput from 'components/Common/Search/DateInput';
import Quantity from 'components/Common/Search/Quantity';
import Button from 'components/Common/Button';

const InternationalHotelTab = () => {
  return (
    <StyledVertical>
      <StyledHorizontal mb="8px">
        <StyledSpan mt="4px" color="orange.13" fontSize={2}>
          Popular Places:{' '}
        </StyledSpan>
        {citiesItems.map(({ value, id }) => (
          <BadgeContainer value={value} key={id} />
        ))}
      </StyledHorizontal>
      <StyledHorizontal justifyContent="space-between">
        <CityInput placeholder="Check-in city" width="474px" tab="hotel" />
        <DateInput tab="hotel" />
        <Quantity tab="hotel" />
        <Button width="180px">
          <SearchOutlined />
          Search
        </Button>
      </StyledHorizontal>
    </StyledVertical>
  );
};

export default InternationalHotelTab;
