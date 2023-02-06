import { Select } from 'antd';
import { StyledContainer } from './style';
//TODO: this will handle dynamically
const handleChange = () => {};

export default function MySelect({ options, defaultValue, ...rest }) {
  return (
    <StyledContainer {...rest}>
      <Select
        size="large"
        defaultValue={defaultValue}
        onChange={handleChange}
        options={options}
        getPopupContainer={(triggerNode) => triggerNode.parentElement}
        style={{
          width: '100%',
        }}
      />
    </StyledContainer>
  );
}
