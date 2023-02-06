import styled from '@emotion/styled';
import { StyledDiv } from 'components/Common/commonStyles';
import theme from 'components/theme';

export const StyledFilterCard = styled(StyledDiv)`
  background-color: ${({ theme }) => theme.colors.gray[0]};
  box-shadow: ${({ theme }) => theme.shadows.box};
  border-radius: ${({ theme }) => theme.radii.lg};
  width: 87%;
  margin: auto;
  margin-top: ${({ theme }) => theme.space[3]}px;
  padding-right: ${({ theme }) => theme.space[5]}px;
  padding-left: ${({ theme }) => theme.space[5]}px;
  padding-top: ${({ theme }) => theme.space[6]}px;
  padding-bottom: ${({ theme }) => theme.space[6]}px;
`;

export const arrowStyles = {
  color: theme.colors.gray[44],
  border: theme.borders.arrowTopBottom,
  borderRadius: theme.radii.full,
  backgroundColor: theme.colors.gray[43],
  fontSize: theme.fontSizes[3],
  padding: '5px',
  marginLeft: '10px',
};
