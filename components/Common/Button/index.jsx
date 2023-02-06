import { StyledButton } from './style';

const Button = ({ children, btnType = 'green', shape, ...rest }) => {
  return (
    <StyledButton btnType={btnType} shape={shape} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
