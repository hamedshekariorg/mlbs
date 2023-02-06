import { useState } from 'react';
import {
  StyledHorizontal,
  StyledSpan,
  StyledVertical,
} from 'components/Common/commonStyles';
import { StyledQuanitityButtons } from './style';

const Quantity = ({ tab, width, initialPrice }) => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(initialPrice);

  // increase the quantity of guests & total price
  const increaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
    initialPrice && setPrice((prevState) => prevState + initialPrice);
  };

  // decrease the quantity of guests & total price
  const decreaseQuantity = () => {
    if (quantity === 1) {
      setQuantity((prevState) => prevState - 1);
      initialPrice && setPrice(0);
      return;
    } else if (quantity > 0) {
      setQuantity((prevState) => prevState - 1);
      initialPrice && setPrice((prevState) => prevState - initialPrice);
    }
  };
  return (
    <StyledHorizontal
      justifyContent="space-between"
      alignItems="center"
      height="44px"
      width={width || '270px'}
      border="input"
      borderRadius="lg"
      pl="16px"
    >
      <StyledSpan color="blue.10">
        {initialPrice && '¥'}
        {initialPrice ? (price === 0 ? price : price.toFixed(2)) : quantity}
      </StyledSpan>
      <StyledHorizontal alignItems="center">
        {initialPrice && (
          <StyledSpan color="gray.27" fontSize={7} mr="23px">
            {quantity}
          </StyledSpan>
        )}
        <StyledVertical height="100%" borderLeft="input">
          <StyledQuanitityButtons
            borderTop="input"
            borderRadius="0px 10px 0px 0px"
            onClick={increaseQuantity}
          >
            <StyledSpan fontSize={8}>+</StyledSpan>
          </StyledQuanitityButtons>
          <StyledQuanitityButtons
            borderBottom="input"
            borderRadius="0px 0px 10px 0px"
            onClick={decreaseQuantity}
          >
            <StyledSpan fontSize={8}>-</StyledSpan>
          </StyledQuanitityButtons>
        </StyledVertical>
      </StyledHorizontal>
    </StyledHorizontal>
  );
};

export default Quantity;
