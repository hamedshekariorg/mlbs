import { SearchOutlined } from '@ant-design/icons';
import Button from 'components/Common/Button';
import { StyledHorizontal } from 'components/Common/commonStyles';
import { StyledInput } from 'components/Common/Input/style';
import Icon from 'components/Icon';

const LayoutSearchAdvancedSearch = () => {
  return (
    <StyledHorizontal px="56px" justifyContent="space-between" pt="100px">
      <StyledInput
        width="75%"
        height="44px"
        borderRadius="lg"
        type="text"
        placeholder="Feeling lucky"
        prefix={
          <Icon fontSize={8} mr="8px" color="orange.13">
            <SearchOutlined />
          </Icon>
        }
      />
      <Button width="180px">Search</Button>
    </StyledHorizontal>
  );
};

export default LayoutSearchAdvancedSearch;
