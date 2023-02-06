import React from 'react';
import { Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { StyledSearchInput, StyledTitle } from './style';
import { passengersModalContent } from 'utils/flight.utils';
import Icon from 'components/Icon';

const PassengerModalContent = () => {
  return (
    <>
      <StyledSearchInput
        prefix={
          <Icon color="orange.13" fontSize={4}>
            <SearchOutlined />
          </Icon>
        }
        placeholder="Search"
      />
      <StyledTitle>Most recent</StyledTitle>
      <Table
        columns={passengersModalContent.columns}
        dataSource={passengersModalContent.dataSource}
        pagination={false}
        rowSelection={{
          type: 'checkbox',
          ...passengersModalContent.rowSelection,
        }}
      />
    </>
  );
};

export default PassengerModalContent;
