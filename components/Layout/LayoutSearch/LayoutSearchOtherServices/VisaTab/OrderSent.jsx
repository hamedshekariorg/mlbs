import { CheckOutlined } from '@ant-design/icons';
import {
  StyledHorizontal,
  StyledSpan,
  StyledVertical,
} from 'components/Common/commonStyles';
import Icon from 'components/Icon';

const OrderSent = () => {
  return (
    <StyledHorizontal
      width="100%"
      height="85px"
      bg="gray.1"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <StyledHorizontal alignItems="center" borderRight="input">
        <StyledHorizontal
          width="16px"
          height="16px"
          borderRadius="full"
          border="selectedCircle"
          bg="green.6"
          justifyContent="center"
          alignItems="center"
        >
          <Icon color="green.7">
            <CheckOutlined />
          </Icon>
        </StyledHorizontal>
        <StyledSpan marginRight="14px" color="green.7" fontSize={8} ml="8px">
          Travel Visa is Free For Chinese Travelers
        </StyledSpan>
      </StyledHorizontal>

      <StyledVertical
        width="500px"
        ml="35px"
        mt="5px"
        borderRight="input"
        pr="36px"
      >
        <StyledSpan color="gray.27" fontSize={4} maxWidth="300px">
          For other visa such as{' '}
          <StyledSpan fontWeight="bold">business visa, work visa</StyledSpan>{' '}
          please contact customer services...
        </StyledSpan>
      </StyledVertical>

      <StyledVertical>
        <StyledSpan color="blue.10" maxWidth="185px" textAlign="center">
          Customer Services
        </StyledSpan>
        <StyledSpan color="gray.27" textAlign="center" mt="4px">
          + 400 51 77 00
        </StyledSpan>
      </StyledVertical>
    </StyledHorizontal>
  );
};

export default OrderSent;
