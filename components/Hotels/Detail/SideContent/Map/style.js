import styled from '@emotion/styled';
import {
  StyledDiv,
  StyledHorizontal,
  StyledVertical,
} from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledDiv)`
  width: 278px;
  height: 222px;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-bottom: 30px;
  padding: 13px 11px 11px 14px;
`;

export const StyledMapContainer = styled(StyledHorizontal)`
  width: 253px;
  height: 198px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-image: ${({ src }) => `url(${src})`};
`;

export const StyledChipContainer = styled(StyledVertical)`
  height: 100%;
  margin-left: 5px;
  justify-content: center;
  align-items: center;
`;

export const StyledChip = styled(StyledHorizontal)`
  width: 45px;
  height: 45px;
  border-radius: ${({ theme }) => theme.radii.full};
  justify-content: center;
  align-items: center;
  background-color: #fff;
  user-select: none;
`;

export const StyledButtonsContainer = styled(StyledVertical)`
  height: 100%;
  margin-right: 11px;
  padding-bottom: 12px;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledButton = styled(StyledHorizontal)`
  width: 30px;
  height: 28px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-bottom: 7px;
`;
