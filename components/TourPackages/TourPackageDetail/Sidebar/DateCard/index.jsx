import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import {
  StyledText,
  StyledImg,
  StyledDiv,
  StyledHorizontal,
  StyledVertical,
} from 'components/Common/commonStyles';
import { StyledContainer } from './style';
import Icon from 'components/Icon';
import Button from 'components/Common/Button';
import PesudoInput from 'components/Common/PesudoInput';
import DatePicker from 'components/Common/DatePicker';

const { TabPane } = Tabs;

const DateCard = () => {
  const theme = useTheme();
  const [adultNum, setAdultNum] = useState(1);
  const [childNum, setChildNum] = useState(0);

  const childAdultInfo = [
    {
      id: 1,
      pluralLabel: 'Adults',
      singuralLabel: 'Adult',
      num: adultNum,
      setEvent: setAdultNum,
    },
    {
      id: 2,
      pluralLabel: 'Children',
      singuralLabel: 'Child',
      num: childNum,
      setEvent: setChildNum,
      detail: '(0 - 10 years)',
    },
  ];

  return (
    <StyledContainer>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Corrent Date" key="1">
          <StyledVertical justifyContent="center" p="28px 33px 24px">
            <StyledHorizontal mb="21px" justifyContent="space-between">
              <StyledDiv>
                <StyledText
                  fontWeight="5"
                  fontSize="6"
                  lineHeight="22px"
                  color="blue.10"
                >
                  Price Loading...
                </StyledText>
              </StyledDiv>
              <StyledHorizontal
                width="55px"
                justifyContent="space-between"
                alignItems="center"
              >
                <Icon name="icon-share" color="gray.47" fontSize="12" />
                <StyledImg
                  width="16px"
                  height="16px"
                  src="/static/images/tourPackage/heart-gray.svg"
                />
              </StyledHorizontal>
            </StyledHorizontal>
            <StyledHorizontal justifyContent="flex-end" mb="21px">
              <Icon
                style={{
                  fontSize: theme.fontSizes[7],
                  color: theme.colors.gray[47],
                }}
              >
                <ExclamationCircleOutlined />
              </Icon>
            </StyledHorizontal>
            {/* TODO:will handle dynamically */}
            <DatePicker
              onChange={(e) => console.log(e)}
              placeholder="Pick a starting date"
            />
            <PesudoInput mt="15px" mb="24px" data={childAdultInfo} />
            <Button mb="12px" width="100%">
              Book
            </Button>
            <StyledText
              color="gray.47"
              fontSize="2"
              textAlign="center"
              width="100%"
            >
              No payment in this step
            </StyledText>
          </StyledVertical>
        </TabPane>
        <TabPane tab="Wish Date" key="2">
          <StyledVertical justifyContent="center" p="28px 33px 24px">
            <StyledHorizontal mb="32px" justifyContent="space-between">
              <StyledDiv>
                <StyledText
                  fontWeight="5"
                  fontSize="8"
                  lineHeight="22px"
                  color="blue.10"
                >
                  ¥146.99
                </StyledText>
                <StyledText
                  fontWeight="6"
                  fontSize="2"
                  lineHeight="14px"
                  color="gray.27"
                >
                  / Person
                </StyledText>
              </StyledDiv>
              <StyledHorizontal
                width="55px"
                justifyContent="space-between"
                alignItems="center"
              >
                <Icon name="icon-share" color="gray.47" fontSize="12" />
                <StyledImg
                  width="16px"
                  height="16px"
                  src="/static/images/tourPackage/heart-gray.svg"
                />
              </StyledHorizontal>
            </StyledHorizontal>
            <PesudoInput mb="32px" data={childAdultInfo} />
            <Button mb="12px" width="100%">
              Book
            </Button>
            <StyledText
              color="gray.47"
              fontSize="2"
              textAlign="center"
              width="100%"
            >
              No payment in this step
            </StyledText>
          </StyledVertical>
        </TabPane>
      </Tabs>
    </StyledContainer>
  );
};

export default DateCard;
