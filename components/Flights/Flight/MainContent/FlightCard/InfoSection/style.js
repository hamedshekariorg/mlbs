import styled from '@emotion/styled';
import { Divider } from 'antd';

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledInfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledDividerWrapper = styled.div`
  margin-top: -2rem;
  margin-bottom: -2rem;
`;

export const StyledImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27;
  height: 25;
  margin-right: 7px;
  background-color: ${({ theme }) => theme.colors.green[17]};
`;

export const StyledClassWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.green[17]};
  margin-right: 7px;
`;

export const StyledCodeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledDivider = styled(Divider)`
  background-color: ${({ theme }) => theme.colors.gray[22]};
  width: 346px;
`;
