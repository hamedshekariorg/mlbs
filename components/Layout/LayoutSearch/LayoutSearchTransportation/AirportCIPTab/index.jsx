import { Radio } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { StyledHorizontal, StyledVertical } from 'components/Common/commonStyles';
import { StyledInput, StyledRadio } from 'components/Common/Input/style';
import Quantity from 'components/Common/Search/Quantity';
import Icon from 'components/Icon';
import DateInput from 'components/Common/Search/DateInput';
import Button from 'components/Common/Button';

const AirportCIPTab = () => {
  return (
    <StyledVertical>
      <StyledHorizontal mb="15px">
        <Radio.Group>
          <StyledRadio value={1}>Departure</StyledRadio>
          <StyledRadio value={2}>Arrival</StyledRadio>
        </Radio.Group>
      </StyledHorizontal>
      <StyledHorizontal justifyContent="space-between">
        <StyledInput
          height="44px"
          width="270px"
          borderRadius="lg"
          border="input"
          placeholder="Flight Number"
        />
        <StyledInput
          height="44px"
          width="270px"
          borderRadius="lg"
          border="input"
          placeholder="Airport"
          prefix={
            <Icon
              color="orange.13"
              fontSize={8}
              mb="2.5px"
              name="icon-search"
            />
          }
        />

        <DateInput placeholder="Date & Time" tab="transportation" />

        <Quantity initialPrice={146.99} tab="transportation" />
        <Button width="180px">
          <SearchOutlined />
          Book now
        </Button>
      </StyledHorizontal>
    </StyledVertical>
  );
};

export default AirportCIPTab;
