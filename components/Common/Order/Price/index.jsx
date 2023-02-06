import { StyledH3 } from 'components/Common/commonStyles';
import { StyledInput } from 'components/Common/Input/style';
import {
  StyledContainer,
  StyledDivider,
  StyledRow,
  StyledCustomTitle,
} from './style';

const Price = ({ priceCart }) => {
  return (
    <StyledContainer>
      <StyledCustomTitle m="0px 0px 16px 0px">Total Price</StyledCustomTitle>
      <StyledH3 fontSize={16} color="blue.10" lineHeight="29px" mb="8px">
        ¥490.00
      </StyledH3>
      <StyledDivider />
      {priceCart.map(({ title, value }, index) => (
        <StyledRow mt={index === 1 ? '16px' : '24px'} key={title}>
          <StyledCustomTitle>{title}</StyledCustomTitle>
          <StyledCustomTitle>{value}</StyledCustomTitle>
        </StyledRow>
      ))}
      <StyledInput
        fontSize={4}
        placeholder="Please enter the captcha code"
        textAlign="center"
        fontWeight={5}
        mt={24}
        boxShadow="btnSecondary"
        lineHeight="17px"
        borderRadius="lg"
      />
      <StyledRow
        mt="6px"
        border="blue"
        boxShadow="btnSecondary"
        borderRadius="lg"
        padding="10px 32px 10px 32px"
        justifyContent="center"
      >
        CAPTCHA
      </StyledRow>
      <StyledRow
        color="#fff"
        bg="blue.10"
        borderRadius="lg"
        boxShadow="btnSecondary"
        padding="10px 32px 10px 32px"
        mt="24px"
        justifyContent="center"
      >
        Payment
      </StyledRow>
      <StyledCustomTitle mt={16} lineHeight="14px" fontSize={2}>
        The current price is momentary, and it may change after entering the
        address.
      </StyledCustomTitle>
    </StyledContainer>
  );
};

export default Price;
