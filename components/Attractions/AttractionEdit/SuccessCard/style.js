import styled from '@emotion/styled';
import { StyledVertical } from 'components/Common/commonStyles';

export const StyledCard = styled(StyledVertical)`
  background: #fff;
  width: 332px;
  height: 349px;
  margin-left: 37px;
  margin-top: 50px;
  align-items: center;
  position: relative;

  img {
    width: 90px;
    height: 90px;
    transform: translate(0, -50%);
    position: absolute;
  }
`;
