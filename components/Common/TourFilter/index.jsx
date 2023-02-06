import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import {
  StyledDiv,
  StyledText,
  StyledRow,
  StyledCol,
} from 'components/Common/commonStyles';
import Switch from 'components/Common/Switch';
import { StyledFilterCard, arrowStyles } from './style';
import Slider from 'components/Common/Slider';
import { seasonsFilter, categoryFilter } from 'utils/tourPackage.utils.js';
import { useTheme } from '@emotion/react';

const TourFilter = () => {
  const theme = useTheme();
  return (
    <StyledDiv mt={7} textAlign="center">
      <StyledText color="gray.27" fontSize={1} textDecoration="underline">
        Reset Filters
      </StyledText>
      <StyledFilterCard>
        <StyledRow>
          <StyledCol span={12} textAlign="left" mb={5}>
            <StyledText color="gray.24" fontSize={4}>
              Duration
            </StyledText>
          </StyledCol>
          <StyledCol span={12} textAlign="right">
            <ArrowDownOutlined style={arrowStyles} />
            <ArrowUpOutlined style={arrowStyles} />
          </StyledCol>
        </StyledRow>
        <StyledRow>
          <Slider min="1 Day" max="+50 Days" defaultArr={[20, 50]} />
        </StyledRow>
        <Divider />
        <StyledRow>
          <StyledText color="gray.24" fontSize={4} mb={4}>
            High Season
          </StyledText>
        </StyledRow>
        {seasonsFilter.map((item) => (
          <StyledRow
            key={item}
            display="flex"
            justifyContent="space-between"
            mb={4}
          >
            <StyledText color="gray.27" fontSize={4}>
              {item}
            </StyledText>
            <Switch />
          </StyledRow>
        ))}
        <Divider />
        <StyledRow>
          <StyledText color="gray.24" fontSize={4} mb={4}>
            Category
          </StyledText>
        </StyledRow>
        {categoryFilter.map((item) => (
          <StyledRow
            key={item}
            display="flex"
            justifyContent="space-between"
            mb={4}
          >
            <StyledText color="gray.27" fontSize={4}>
              {item}
            </StyledText>
            <Switch />
          </StyledRow>
        ))}
      </StyledFilterCard>
    </StyledDiv>
  );
};

export default TourFilter;
