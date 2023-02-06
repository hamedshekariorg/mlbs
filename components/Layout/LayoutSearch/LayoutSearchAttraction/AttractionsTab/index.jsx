import BadgeContainer from 'components/Common/BadgeContainer';
import { Select } from 'antd';
import {
  StyledHorizontal,
  StyledSpan,
  StyledVertical,
} from 'components/Common/commonStyles';
import { citiesItems } from 'utils/layout.utils';
import CityInput from 'components/Common/Search/CityInput';
import { StyledSelect } from './style';
import { guideTypes } from 'utils/search.utils';
import { SearchOutlined } from '@ant-design/icons';
import Button from 'components/Common/Button';

const { Option } = Select;

const AttractionsTab = () => {
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
        <CityInput width="800px" placeholder="Attraction or City" />
        <StyledSelect placeholder="Category" showSearch={false}>
          {guideTypes.map((type) => (
            <Option key={type}>{type}</Option>
          ))}
        </StyledSelect>
        <Button width="180px">
          <SearchOutlined /> Search
        </Button>
      </StyledHorizontal>
    </StyledVertical>
  );
};

export default AttractionsTab;
