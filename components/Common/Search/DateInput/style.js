import styled from '@emotion/styled';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

export const StyledDatePicker = styled(DatePicker)`
  height: 44px;
  width: ${({ width }) => width};
  background: #fff;
  border: ${({ theme }) => theme.borders.input};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const StyledRangePicker = styled(RangePicker)`
  height: 44px;
  width: ${({ width }) => width};
  background: #fff;
  border: ${({ theme }) => theme.borders.input};
  border-radius: ${({ theme }) => theme.radii.lg};
`;
