import {
  StyledHorizontal,
  StyledSpan,
  StyledVertical,
} from 'components/Common/commonStyles';
import { SearchOutlined } from '@ant-design/icons';
import CityInput from 'components/Common/Search/CityInput';
import DateInput from 'components/Common/Search/DateInput';
import PassengersSelection from 'components/Common/Search/PassengersSelection';
import BadgeContainer from 'components/Common/BadgeContainer';
import { citiesItems } from 'utils/layout.utils';
import Button from 'components/Common/Button';

const TourPackageTab = () => {
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
        <CityInput
          width="490px"
          tab="tourPackageTab"
          placeholder="Where would you like to visit?"
        />
        <DateInput tab="tourPackageTab" />
        <PassengersSelection tab="tourPackageTab" />
        <Button width="180px">
          <SearchOutlined />
          Search
        </Button>
      </StyledHorizontal>
    </StyledVertical>
  );
};

export default TourPackageTab;
