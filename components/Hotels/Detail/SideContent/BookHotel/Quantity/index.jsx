import {
  StyledH3,
  StyledHorizontal,
  StyledImg,
  StyledSpan,
} from 'components/Common/commonStyles';
import {
  StyledGuestChildContainer,
  StyledIconsContainer,
  StyledNumber,
  StyledTriangleContainer,
} from './style';
import plus from 'public/static/images/plus.svg';
import minus from 'public/static/images/minus.svg';
import Button from 'components/Common/Button';
const Quantity = ({
  childrenCount,
  setChildrenCount,
  adultsCount,
  setAdultsCount,
  isGuestPanelOpen,
}) => {
  // a function we can use to decrement a state
  const decrementPeople = (field, setter) => {
    field > 0 ? setter((prevState) => --prevState) : setter(0);
  };
  return (
    <StyledGuestChildContainer isGuestPanelOpen={isGuestPanelOpen}>
      <StyledTriangleContainer>
        <div className="triangle">
          <div />
        </div>
      </StyledTriangleContainer>
      <StyledHorizontal
        mb="20px"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <StyledH3 fontSize={3} color="gray.27">
          Adults
        </StyledH3>
        <StyledHorizontal justifyContent="center">
          <StyledIconsContainer>
            <StyledImg
              src={minus}
              onClick={() => decrementPeople(adultsCount, setAdultsCount)}
            />
          </StyledIconsContainer>
          <StyledNumber fontSize={10} ml="10px" mr="10px">
            {adultsCount}
          </StyledNumber>
          <StyledIconsContainer>
            <StyledImg
              src={plus}
              onClick={() => setAdultsCount((prevState) => (prevState += 1))}
            />
          </StyledIconsContainer>
        </StyledHorizontal>
      </StyledHorizontal>
      <StyledHorizontal width="100%" justifyContent="space-between">
        <StyledH3 fontSize={3} color="gray.27">
          Children <br />{' '}
          <StyledSpan color="orange.13">(0 - 10 years)</StyledSpan>
        </StyledH3>
        <StyledHorizontal justifyContent="center">
          <StyledIconsContainer>
            <StyledImg
              src={minus}
              onClick={() => decrementPeople(childrenCount, setChildrenCount)}
            />
          </StyledIconsContainer>
          <StyledNumber fontSize={10} ml="10px" mr="10px">
            {childrenCount}
          </StyledNumber>
          <StyledIconsContainer>
            <StyledImg
              src={plus}
              onClick={() => setChildrenCount((prevState) => (prevState += 1))}
            />
          </StyledIconsContainer>
        </StyledHorizontal>
      </StyledHorizontal>
    </StyledGuestChildContainer>
  );
};

export default Quantity;
