import { StyledHorizontal } from 'components/Common/commonStyles';
import { StyledInput } from 'components/Common/Input/style';
import { SearchOutlined } from '@ant-design/icons';
import Icon from 'components/Icon';
import CityInput from 'components/Common/Search/CityInput';
import DateInput from 'components/Common/Search/DateInput';
import Button from 'components/Common/Button';

const RentCarTab = () => {
  return (
    <StyledHorizontal justifyContent="space-between" mt="38px">
      <CityInput placeholder="Pick-up city" tab="transportation" />
      <CityInput placeholder="Destination city" tab="transportation" />
      <DateInput tab="transportation" />
      <StyledInput
        height="44px"
        width="270px"
        borderRadius="lg"
        border="input"
        placeholder="Car model"
        prefix={
          <Icon color="gray.13" fontSize={7} mb="2px">
            <SearchOutlined />
          </Icon>
        }
      />
      <Button width="180px">
        <SearchOutlined />
        Search
      </Button>
    </StyledHorizontal>
  );
};

export default RentCarTab;
