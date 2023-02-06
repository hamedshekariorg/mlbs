import React from 'react';
import { Switch } from 'antd';
import { SwitchContainer } from './style';

export default () => {
  return (
    <SwitchContainer>
      <Switch size="small" defaultChecked />
    </SwitchContainer>
  );
};
