import React, { useState } from 'react';
import { StyledContainer } from './style';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import { Rate } from 'antd';
import { StyledText } from 'components/Common/commonStyles';

export default function RateComponent({
  rate1,
  rate2,
  defaultValue,
  className,
  isReadOnly,
  showRateNum,
  children,
  rateFontSize,
}) {
  const [customIcons, setCustomIcons] = useState([
    <StarOutlined />,
    <StarOutlined />,
    <StarOutlined />,
    <StarOutlined />,
    <StarOutlined />,
  ]);

  const changeRate = (e) => {
    const newCustom = [];
    Object.values(customIcons).map((num, index) => {
      if (index < e) {
        newCustom[index] = <StarFilled />;
      } else {
        newCustom[index] = <StarOutlined />;
      }
    });
    setCustomIcons(newCustom);
  };

  useState(() => {
    changeRate(defaultValue);
  }, []);

  return (
    <StyledContainer rateFontSize={rateFontSize}>
      <Rate
        className={className}
        defaultValue={defaultValue}
        character={({ index }) => customIcons[index]}
        onChange={changeRate}
        allowHalf
        disabled={isReadOnly}
      />
      <StyledText display={showRateNum || 'none'} color="gray.27" ml={1}>
        {rate1}
      </StyledText>
      <StyledText display={showRateNum || 'none'} color="orange.13" ml={3}>
        {rate2}
      </StyledText>
      {children}
    </StyledContainer>
  );
}
