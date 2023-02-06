import React, { useState } from 'react';
import { StyledTabPane, StyledTabs, StyledInput } from './style';
import Icon from 'components/Icon';
import { StyledDiv } from 'components/Common/commonStyles';

const CitySearch = ({ tabs, children, handleSetCityId, cityId }) => {
  const [searchValue, setSearchValue] = useState(null);
  const slot = {
    left: (
      <StyledInput
        prefix={<Icon name="icon-search" fontSize={8} color="orange.13"></Icon>}
        onChange={setSearchValue}
      />
    ),
  };
  return (
    <StyledDiv>
      <StyledTabs
        tabBarGutter={19}
        defaultActiveKey="1"
        onChange={handleSetCityId}
        tabBarExtraContent={slot}
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

export default CitySearch;
