import { StyledHorizontal, StyledSpan } from 'components/Common/commonStyles';
import Icon from 'components/Icon';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseLevel,
  decreaseStep,
  increaseLevel,
  increaseStep,
} from 'store/customTourPackage/customTourPackage.action';
import {
  StyledNextButton,
  StyledPrevButton,
  StyledTypeContainer,
} from './style';

/* nextStep => to change the step, gets passed to Layout in last level of each step*/
/* prevStep => to change the step, gets passed to Layout in first level of each step*/
const Layout = ({
  children,
  active,
  height,
  nextStep,
  prevStep,
  buttonText,
  customFunction,
}) => {
  const dispatch = useDispatch();

  const { step } = useSelector((state) => state?.customTourPackage);

  // increase step (optional) and level of step by one
  const handleNext = () => {
    if (active) {
      (step === 0 || nextStep === true) && dispatch(increaseStep());
      dispatch(increaseLevel());
    }
  };

  // decrease step (optional) and level of step by one
  const handlePrev = () => {
    (step === 2 || prevStep === true) && dispatch(decreaseStep());
    dispatch(decreaseLevel());
  };

  return (
    <StyledTypeContainer width="866px" height={height}>
      {children}
      <StyledHorizontal
        alignItems="center"
        justifyContent={step < 1 ? 'flex-end' : 'space-between'}
      >
        {step > 0 && (
          <StyledPrevButton onClick={handlePrev}>
            <Icon name="icon-arrow-left" fontSize={8} mr="8px" />
            <StyledSpan>Previous</StyledSpan>
          </StyledPrevButton>
        )}
        <StyledNextButton
          active={active}
          onClick={customFunction || handleNext}
        >
          {buttonText || 'Next'}
        </StyledNextButton>
      </StyledHorizontal>
    </StyledTypeContainer>
  );
};

export default Layout;
