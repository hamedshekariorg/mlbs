import styled from '@emotion/styled';
import {
  StyledDiv,
  StyledHorizontal,
  StyledVertical,
} from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledVertical)`
  background: url('/static/images/landingPage/mountain.svg');
  height: 100%;
  width: 100%;
  padding-left: 140px;
  padding-right: 140px;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const StyledInputWrapper = styled(StyledDiv)`
  position: relative;
  border: ${({ theme }) => theme.borders.input};
  border-radius: ${({ theme }) => theme.radii.lg};
  width: 325px;
  height: 45px;
  padding: 10px;
`;

export const StyledInput = styled.input`
  border: none;
  width: 100%;
  &:focus ~ span {
    top: -6px;
    background-color: #fff;
    padding-left: 5px;
    padding-right: 5px;
    font-size: ${({ theme }) => theme.fontSizes[0]};
  }
`;

export const StyledPlaceHolder = styled.span`
  color: ${({ theme }) => theme.colors.gray[36]};
  position: absolute;
  left: ${({ theme }) => theme.space[4]}px;
  top: 13px;
  pointer-events: none;
  transition: all 0.2s;
  font-size: ${({ theme }) => theme.fontSizes[2]};
`;

export const StyledSubmitBtn = styled.button`
  color: #fff;
  border: none;
  background: ${({ theme }) => theme.colors.blue[10]};
  position: absolute;
  right: ${({ theme }) => theme.space[0]};
  top: ${({ theme }) => theme.space[0]};
  bottom: ${({ theme }) => theme.space[0]};
  border-radius: 0 10px 10px 0;
  font-size: ${({ theme }) => theme.fontSizes[6]};
  width: 82px;
  cursor: pointer;
`;

export const StyledHr = styled.hr`
  border-top: ${({ theme }) => theme.borders.footer};
  margin-top: ${({ theme }) => theme.space[3]}px;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  width: 100%;
`;

export const StyledSocialBlock = styled(StyledHorizontal)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space[5]}px;
`;

export const StyledFooterRight = styled(StyledHorizontal)`
  & h3 {
    color: ${({ theme }) => theme.colors.blue[15]};
    margin-bottom: ${({ theme }) => theme.space[0]};
    border-right: ${({ theme }) => theme.borders.footer};
    margin-right: 10px;
    padding-right: 10px;
    font-size: ${({ theme }) => theme.fontSizes[4]};
  }
  & h3:last-child {
    color: ${({ theme }) => theme.colors.gray[11]};
    margin-bottom: ${({ theme }) => theme.space[0]};
    border-right: none;
  }
`;
