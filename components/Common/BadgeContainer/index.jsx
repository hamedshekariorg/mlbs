import { useState } from 'react';
import { StyledSpan } from '../commonStyles';
import { StyledContainer } from './style';

const BadgeContainer = ({ value }) => {
  const [selected, setSelected] = useState(false);
  return (
    <StyledContainer
      selected={selected}
      onClick={() => setSelected((prevState) => !prevState)}
    >
      <StyledSpan>{value}</StyledSpan>
    </StyledContainer>
  );
};

export default BadgeContainer;
