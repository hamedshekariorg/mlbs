import { Radio, Select } from 'antd';
import { StyledHorizontal, StyledVertical } from 'components/Common/commonStyles';
import { SearchOutlined } from '@ant-design/icons';
import { StyledRadio } from 'components/Common/Input/style';
import { guideTypes } from 'utils/search.utils';
import CityInput from 'components/Common/Search/CityInput';
import DateInput from 'components/Common/Search/DateInput';
import PassengersSelection from 'components/Common/Search/PassengersSelection';
import { StyledSelect } from './style';
import Button from 'components/Common/Button';
const { Option } = Select;

const TourGuideTab = () => {
  return (
    <StyledVertical>
      <Radio.Group>
        <StyledRadio value={1}>English</StyledRadio>
        <StyledRadio value={2}>Chinese Mondrin</StyledRadio>
      </Radio.Group>
      <StyledHorizontal mt="15px" justifyContent="space-between">
        <CityInput tab="tourGuide" placeholder="Start point" />
        <DateInput tab="tourGuide" />
        <StyledSelect placeholder="Tour guide type" showSearch={false}>
          {guideTypes.map((type) => (
            <Option key={type}>{type}</Option>
          ))}
        </StyledSelect>
        <PassengersSelection tab="tourGuide" />
        <Button width="180px">
          <SearchOutlined />
          Search
        </Button>
      </StyledHorizontal>
    </StyledVertical>
  );
};

export default TourGuideTab;
