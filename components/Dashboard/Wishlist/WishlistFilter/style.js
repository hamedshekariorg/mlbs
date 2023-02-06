import styled from '@emotion/styled';
import { StyledHorizontal, StyledDiv } from 'components/Common/commonStyles';

export const StyledContainer = styled(StyledHorizontal)`
  background: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
  width: 245px;
  height: 493px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const StyledItems = styled(StyledHorizontal)`
  justify-content: center;
  align-items: center;
  min-width: 84px;
  padding: 7px 13.5px;
  background-color: ${({ theme }) => theme.colors.gray[46]};
  color: ${({ theme }) => theme.colors.gray[23]};
  border-radius: ${({ theme }) => theme.radii.item};
  margin-right: 12px;
  margin-top: 12px;
`;

export const StyledExpandedBlock = styled(StyledDiv)`
  position: absolute;
  top: 10px;
  background: #fff;
  margin-top: 21px;
  width: fit-content;
  border-radius: ${({ theme }) => theme.radii.xs};
  display: ${({ open }) => (open ? 'flex' : 'none')};
  filter: drop-shadow(0px 0px 1px #848487);
  flex-direction: column;
`;

export const StyledArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 10px solid #fff;
  top: -10px;
  right: 11px;
  position: absolute;
`;

export const StyledDropDownItems = styled(StyledHorizontal)`
  align-items: center;
  justify-content: center;
  width: 126px;
  height: 26px;
  & span {
    font-weight: ${({ theme }) => theme.fontWeights[6]};
    font-size: ${({ theme }) => theme.fontSizes[1]};
    color: ${({ theme }) => theme.colors.gray[15]};
    line-height: 13px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[1]};
    & span {
      color: ${({ theme }) => theme.colors.orange[7]};
    }
  }
`;

export const StyledTitle = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights[6]};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  line-height: 17px;
  text-align: right;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.gray[15]};
`;
