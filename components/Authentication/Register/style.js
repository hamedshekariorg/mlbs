import styled from '@emotion/styled';
import { StyledDiv } from 'components/Common/commonStyles';

export const StyledAuthenticationContainer = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  width: 100vw;
  height: 100vh;
}
`;
