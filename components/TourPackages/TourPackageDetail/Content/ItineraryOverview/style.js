import { StyledHorizontal } from 'components/Common/commonStyles';
import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  margin-top: 27px;
  & .ant-timeline-item-tail {
    left: 122px !important;
  }
  & .ant-timeline-item-content {
    left: 142px !important;
    top: -20px;
  }
  & .ant-timeline-item-head-blue {
    margin-left: -282px !important;
  }
`;

export const StyledDot = styled(StyledHorizontal)`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.full};
  border: ${({ theme }) => theme.borders.footer};
  background-color: ${({ theme }) => theme.colors.gray[54]};
  color: ${({ theme }) => theme.colors.gray[15]};
  justify-content: center;
  align-items: center;
`;

export const StyledDescriptionBlock = styled(StyledHorizontal)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray[54]};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 12px 20px;
`;

export const StyledArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-right: 15px solid ${({ theme }) => theme.colors.gray[54]};
  border-bottom: 10px solid transparent;
  margin-top: 13px;
`;

export const StyledContentBlock = styled(StyledHorizontal)`
  width: 538px;
  height: 134px;
  justify-content: flex-start;
  align-items: flex-start;
  filter: drop-shadow(0px 0px 1px #848487);
`;
