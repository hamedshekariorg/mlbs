import styled from '@emotion/styled';
import { StyledHorizontal, StyledImg } from 'components/Common/commonStyles';

export const StyledBlock = styled(StyledHorizontal)`
  width: 100%;
  height: 45px;
  border: ${({ theme }) => theme.borders.input};
  border-radius: ${({ theme }) => theme.radii.lg};
  background-color: #fff;
  position: relative;
  align-items: center;
`;

export const StyledExpandedBlock = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.gray[0]};
  margin-top: 21px;
  border-radius: ${({ theme }) => theme.radii.lg};
  width: 212px;
  height: 101px;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  filter: drop-shadow(0px 0px 1px #848487);
  padding: 12px;
  flex-direction: column;
`;

export const StyledArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 20px solid #fafafa;
  position: absolute;
  top: -13px;
  right: 13px;
`;

export const StyledImage = styled(StyledImg)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: ${({ theme }) => theme.zIndices[1]};
`;

export const StyledTxt = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: 14px;
  color: ${({ theme }) => theme.colors.gray[47]};
`;
