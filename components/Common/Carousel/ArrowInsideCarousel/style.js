import styled from '@emotion/styled';
import { StyledButton } from 'components/Common/commonStyles';

export const StyledBtn = styled(StyledButton)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  color: #fff;
  top: 50%;
  transform: translateY(-50%);
  border: ${({ theme }) => theme.borders.arrow};
  background-color: ${({ theme }) => theme.colors.blue[35]};
  border-radius: ${({ theme }) => theme.radii.full};
  z-index: ${({ theme }) => theme.zIndices[2]};
  font-size: ${({ theme }) => theme.fontSizes[10]};
`;
