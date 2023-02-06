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
      <StyledHorizontal alignItems="center">
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
        <StyledSpan color="green.7" fontSize={8} ml="8px" mt="2px">
          Your order was submitted successfuly
        </StyledSpan>
      </StyledHorizontal>

      <StyledVertical
        width="500px"
        ml="35px"
        mt="5px"
        borderRight="input"
        pr="36px"
      >
        <StyledSpan>Dear Asghar</StyledSpan>
        <StyledSpan color="gray.27" fontSize={3}>
          We have recieved your order to reserve a group hotel, our customer
          service will be contact you as soon as posible to confirm the
          information
        </StyledSpan>
      </StyledVertical>

      <StyledVertical>
        <StyledSpan color="blue.10" maxWidth="185px" textAlign="center">
          You can contact customer services for peigri
        </StyledSpan>
        <StyledSpan color="gray.27" textAlign="center" mt="4px">
          + 400 51 77 00
        </StyledSpan>
      </StyledVertical>
    </StyledHorizontal>
  );
};

export default OrderSent;
