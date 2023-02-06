import React, { useState } from 'react';
import { StyledTabPane, StyledTabs, StyledSearchInput } from './style';
import { SearchOutlined } from '@ant-design/icons';
import { StyledDiv } from 'components/Common/commonStyles';
import Icon from 'components/Icon';
import { Input } from 'components/Common/Input';
import { useTheme } from '@emotion/react';

const Tabs = ({ tabs, children, handleSetCityId, cityId }) => {
  const [searchValue, setSearchValue] = useState('');
  const theme = useTheme();
  const slot = {
    left: (
      <Input
        width={131}
        mr={3}
        border={theme.borders.input}
        prefix={
          <Icon fontSize={8} color="orange.13">
            {' '}
            <SearchOutlined />
          </Icon>
        }
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    ),
  };

  return (
    <StyledDiv>
      <StyledTabs
        tabBarGutter={19}
        defaultActiveKey="1"
        tabBarExtraContent={slot}
        onChange={handleSetCityId}
      >
        {tabs.map(({ id, name }) => (
          <StyledTabPane tab={name} key={id}>
            {cityId === id && children}
          </StyledTabPane>
        ))}
      </StyledTabs>
    </StyledDiv>
  );
};

export default Tabs;
