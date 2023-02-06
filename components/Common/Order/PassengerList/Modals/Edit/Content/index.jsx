import React, { useState } from 'react';
import { Button } from 'antd';
import { StyledModal } from 'components/Common/Modal/style';
import { StyledButton, StyledFormWrapper, StyledSelect } from './style';
import { Input, SelectInput } from 'components/Common/Input';
import { StyledInput, StyledOption } from 'components/Common/Input/style';
import { Col, Row } from 'antd';
import { StyledDiv, StyledImg, StyledH3 } from 'components/Common/commonStyles';
import departurePlane from 'public/static/images/departurePlane.svg';
import {
  ExpandAltOutlined,
  PictureFilled,
  DeleteFilled,
} from '@ant-design/icons';
import { useTheme } from '@emotion/react';
import Icon from 'components/Icon';

const Content = ({ destroyEditModal }) => {
  const theme = useTheme();
  const options = [
    {
      label: 'number 1',
      value: '1',
    },
  ];

  const codes = [
    {
      label: '+98',
      value: 'IR',
    },
  ];

  const months = [
    {
      label: 'Jun',
      value: 'June',
    },
  ];
  const [isDiscardModalOpen, setIsDiscardModalOpen] = useState(false);

  return (
    <>
      <StyledDiv
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        height="100%"
        pl={24}
        pr={24}
      >
        <StyledDiv
          flex={0.7}
          display="flex"
          flexDirection="column"
          alignItems="center"
          mr={24}
        >
          <StyledFormWrapper>
            <Row gutter={[8, 24]}>
              <Col span={12}>
                <Input
                  fontSize={2}
                  placeholder="First Name"
                  fontWeight={5}
                  lineHeight="14px"
                  color="gray.38"
                  borderColor="blue.10"
                />
              </Col>
              <Col span={12}>
                <Input
                  fontSize={2}
                  placeholder="Last Name"
                  fontWeight={5}
                  lineHeight="14px"
                  borderColor="blue.10"
                  color="gray.38"
                />
              </Col>
              <Col span={12}>
                <StyledDiv
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <StyledDiv
                    flex={1}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <StyledInput
                      fontSize={2}
                      flex={0.7}
                      placeholder="Birthday"
                      fontWeight={5}
                      lineHeight="14px"
                      color="gray.38"
                      borderColor="blue.10"
                      borderRadius={`${theme.radii.lg} 0px 0px ${theme.radii.lg}`}
                    />

                    <StyledInput
                      fontSize={2}
                      flex={0.6}
                      placeholder="2022"
                      fontWeight={5}
                      lineHeight="14px"
                      borderColor="blue.10"
                      color="gray.38"
                    />
                  </StyledDiv>
                  <StyledDiv flex={0.7} display="flex" alignItems="center">
                    <StyledSelect
                      flex={0.7}
                      fontSize={2}
                      placeholder={'Jul.'}
                      showSearch
                      fontWeight={5}
                      lineHeight="14px"
                      color="gray.38"
                    >
                      {months?.map((item, index) => (
                        <StyledOption key={`${index}`} value={item.value}>
                          {item.label}
                        </StyledOption>
                      ))}
                    </StyledSelect>
                    <StyledInput
                      fontSize={1}
                      borderRadius={`0px ${theme.radii.lg} ${theme.radii.lg} 0px`}
                      placeholder={'06'}
                      fontWeight={5}
                      lineHeight="14px"
                      borderColor="blue.10"
                      color="gray.38"
                    />
                  </StyledDiv>
                </StyledDiv>
              </Col>
              <Col span={12}>
                <StyledSelect
                  placeholder={'Nationality'}
                  borderRadius={theme.radii.lg}
                  fontSize={2}
                  showSearch
                  fontWeight={5}
                  lineHeight="14px"
                  color="gray.38"
                >
                  {options?.map((item, index) => (
                    <StyledOption key={`${index}`} value={item.value}>
                      {item.label}
                    </StyledOption>
                  ))}
                </StyledSelect>
              </Col>
              <Col span={12}>
                <Input
                  fontSize={2}
                  placeholder="Passport Number"
                  fontWeight={5}
                  lineHeight="14px"
                  borderColor="blue.10"
                  color="gray.38"
                />
              </Col>
              <Col span={12}>
                <SelectInput
                  borderColor={theme.colors.blue[10]}
                  selectStyle={{
                    fontWeight: 400,
                    fontSize: theme.fontSizes[2],
                    lineHeight: '14px',
                    color: 'gray.38',
                  }}
                  inputStyle={{
                    textAlign: 'left',
                    fontWeight: 400,
                    fontSize: theme.fontSizes[2],
                    lineHeight: '14px',
                    borderColor: theme.colors.blue[10],
                    color: 'gray.13',
                  }}
                  selectPlaceholder="Code"
                  minWidth="100%"
                  selectMinWidth="70px"
                  placeholder={'Phone Number'}
                  options={codes}
                />
              </Col>
            </Row>
          </StyledFormWrapper>
          <StyledDiv
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={40}
          >
            <StyledButton
              onClick={() => setIsDiscardModalOpen(true)}
              border="blue"
              color="blue.10"
              bg="gray.0"
              padding="8px 32px 8px 32px"
            >
              Discard
            </StyledButton>
            <StyledButton
              onClick={destroyEditModal}
              margin="0px 0px 0px 12px"
              color="#fff"
              bg="blue.10"
              padding="8px 32px 8px 32px"
            >
              Save Edit
            </StyledButton>
          </StyledDiv>
        </StyledDiv>
        <StyledDiv
          flex={0.3}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          ml={24}
          mb={6}
        >
          {/*
            JUST FOR DEVELOPMENT PURPOSES!
            This image will be the passenger's passport,
            fetched from the server.
          */}
          <StyledImg
            src={departurePlane}
            width={180}
            height={238}
            mb="2px"
            alt="departure"
          />
          <StyledDiv display="flex" justifyContent="center" alignItems="center">
            <StyledDiv
              display="flex"
              mr={4}
              alignItems="center"
              justifyContent="center"
              width="22px"
              height="22px"
              bg="gray.0"
              border="input"
              boxSizing="border-box"
              borderRadius={'xs'}
            >
              <Icon color="orange.13" fontSize={5}>
                <ExpandAltOutlined />
              </Icon>
            </StyledDiv>
            <StyledDiv
              display="flex"
              mr={4}
              alignItems="center"
              justifyContent="center"
              width="22px"
              height="22px"
              bg="gray.0"
              border="input"
              boxSizing="border-box"
              borderRadius={'xs'}
            >
              <Icon color="orange.13" fontSize={5}>
                <PictureFilled />
              </Icon>
            </StyledDiv>
            <StyledDiv
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="22px"
              height="22px"
              bg="gray.0"
              border="input"
              boxSizing="border-box"
              borderRadius={'xs'}
              transform="matrix(-1, 0, 0, 1, 0, 0)"
            >
              <Icon color="red.3" fontSize={5}>
                <DeleteFilled />
              </Icon>
            </StyledDiv>
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>
      <StyledModal
        closeIcon={<></>}
        width={405}
        footer={false}
        centered
        visible={isDiscardModalOpen}
        onOk={() => setIsDiscardModalOpen(false)}
        onCancel={() => setIsDiscardModalOpen(false)}
      >
        <StyledDiv display="flex" alignItems="center" justifyContent="center">
          <StyledDiv display="flex" alignItems="center" flexDirection="column">
            <StyledDiv
              display="flex"
              flexDirection="column"
              alignItems="center"
              mb="7rem"
            >
              <StyledH3
                fontSize={14}
                textAlign="center"
                color="blue.10"
                fontWeight={6}
                lineHeight="41px"
              >
                Are you Sure?
              </StyledH3>
              <StyledH3
                fontSize={4}
                maxWidth="90%"
                textAlign="center"
                color="blue.10"
                fontWeight={5}
                lineHeight="17px"
              >
                If you discard, you will lose changes you just made
              </StyledH3>
            </StyledDiv>
            <StyledDiv
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StyledButton
                onClick={() => setIsDiscardModalOpen(false)}
                padding="24px 32px"
                boxShadow={'card'}
                color="blue.10"
                margin="8px"
              >
                Cancel
              </StyledButton>
              <StyledButton
                onClick={() => {
                  destroyEditModal();
                  setIsDiscardModalOpen(false);
                }}
                padding="24px 32px "
                bg="blue.10"
                boxShadow="btnSecondary"
                color="#fff"
                margin="8px"
              >
                Discard
              </StyledButton>
            </StyledDiv>
          </StyledDiv>
        </StyledDiv>
      </StyledModal>
    </>
  );
};

export default Content;
