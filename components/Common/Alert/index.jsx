import { StyledAlert } from './style';

export const Warning = ({ message, closeText, ...rest }) => {
  return (
    <StyledAlert
      type="warning"
      message={message}
      closeText={closeText}
      {...rest}
    />
  );
};
