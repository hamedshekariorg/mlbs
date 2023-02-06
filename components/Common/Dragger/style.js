import styled from '@emotion/styled';
import { Upload } from 'antd';

export const StyledDragger = styled(Upload.Dragger)`
  border: ${({ theme }) => theme.borders.dragger} !important;
  border-radius: ${({ theme }) => theme.radii.lg} !important;
  background: transparent !important;
  padding: 0 15px;
  height: 298px;
`;
