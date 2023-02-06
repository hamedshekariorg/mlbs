import React, { useState } from 'react';
import { Table } from 'antd';
import { StyledDiv, StyledH3 } from 'components/Common/commonStyles';
import { EditFilled, PictureFilled, DeleteFilled } from '@ant-design/icons';

import EditModal from './Modals/Edit';
import ImagePreviewModal from './Modals/ImagePreview';
import DeleteModal from './Modals/Delete';
import { useTheme } from '@emotion/react';
import Icon from 'components/Icon';

const PassengerList = () => {
  const theme = useTheme();

  const [isPhotoModalVisible, setIsPhotoModalVisible] = useState(false);
  const [modalInformation, setModalInformation] = useState(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  // Open up the photo modal in whcih we'll preview the user's passport
  const showPhotoModal = (key) => {
    setModalInformation(key);
    setIsPhotoModalVisible(true);
  };

  const dataSource = [
    {
      key: 1,
      passportNumber: 'E918127162',
      phoneNumber: '+98-9021788625',
      name: 'Kamal Tamini',
    },
    {
      key: 2,
      passportNumber: 'E256331478',
      phoneNumber: '+98-9121234567',
      name: 'Hossein Rezaei Fard',
    },
  ];

  const columns = [
    {
      title: (
        <StyledH3
          fontSize={7}
          color="gray.27"
          fontWeight={8}
          lineHeight="19px"
          textAlign="left"
        >
          Name
        </StyledH3>
      ),
      dataIndex: 'name',
      key: 'name',
      render: (name, doc) => (
        <StyledDiv
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
        >
          <StyledDiv
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="22px"
            height="22px"
            mr="8px"
            mb="5px"
            bg="green.0"
            borderRadius={'full'}
          >
            <StyledH3
              fontSize={2}
              mb="2px"
              fontWeight={5}
              lineHeight="17px"
              color="gray.27"
            >
              {doc.key}
            </StyledH3>
          </StyledDiv>
          <StyledH3
            fontSize={4}
            fontWeight={5}
            lineHeight="17px"
            color="gray.27"
          >
            {name}
          </StyledH3>
        </StyledDiv>
      ),
    },
    {
      title: (
        <StyledDiv display="flex" alignItems="center" justifyContent="center">
          <StyledH3
            fontSize={7}
            color="gray.27"
            fontWeight={8}
            lineHeight="19px"
            textAlign="left"
          >
            Passport Number
          </StyledH3>
        </StyledDiv>
      ),
      dataIndex: 'passportNumber',
      key: 'passportNumber',
      render: (passportNumber) => (
        <StyledDiv display="flex" alignItems="center" justifyContent="center">
          <StyledH3
            fontSize={4}
            fontWeight={5}
            lineHeight="17px"
            color="gray.27"
          >
            {passportNumber}
          </StyledH3>
        </StyledDiv>
      ),
    },
    {
      title: (
        <StyledDiv display="flex" alignItems="center" justifyContent="center">
          <StyledH3
            fontSize={7}
            fontWeight={8}
            lineHeight="19px"
            color="gray.27"
            textAlign="center"
          >
            Phone Number
          </StyledH3>
        </StyledDiv>
      ),
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      render: (phoneNumber) => (
        <StyledDiv display="flex" alignItems="center" justifyContent="center">
          <StyledH3
            fontSize={4}
            fontWeight={5}
            lineHeight="17px"
            color="gray.27"
          >
            {phoneNumber}
          </StyledH3>
        </StyledDiv>
      ),
    },
    {
      title: (
        <StyledDiv display="flex" alignItems="center" justifyContent="center">
          <StyledH3
            fontSize={7}
            fontWeight={8}
            lineHeight="19px"
            color="gray.27"
            textAlign="center"
          >
            Options
          </StyledH3>
        </StyledDiv>
      ),
      dataIndex: 'options',
      key: 'options',
      render: (name, doc) => (
        <StyledDiv
          display="flex"
          alignItems="center"
          justifyContent="center"
          mb="9px"
        >
          <StyledDiv
            display="flex"
            mr={4}
            alignItems="center"
            justifyContent="center"
            width="22px"
            height="22px"
            bg="gray.0"
            border="option"
            boxSizing="border-box"
            borderRadius={'xs'}
          >
            <Icon color="orange.13" fontSize={5}>
              <EditFilled onClick={() => setIsEditModalVisible(true)} />
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
            border="option"
            boxSizing="border-box"
            borderRadius={'xs'}
          >
            <Icon color="orange.13" fontSize={5}>
              <PictureFilled onClick={() => showPhotoModal(doc.key)} />
            </Icon>
          </StyledDiv>
          <StyledDiv
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="22px"
            height="22px"
            bg="gray.0"
            border="option"
            boxSizing="border-box"
            borderRadius={'xs'}
            transform="matrix(-1, 0, 0, 1, 0, 0)"
          >
            <Icon color="red.3" fontSize={5}>
              <DeleteFilled onClick={() => setIsDeleteModalVisible(true)} />
            </Icon>
          </StyledDiv>
        </StyledDiv>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={dataSource} pagination={false} />
      <ImagePreviewModal
        isPhotoModalVisible={isPhotoModalVisible}
        handlePhotoModalSubmit={() => setIsPhotoModalVisible(false)}
        handlePhotoModalCancel={() => setIsPhotoModalVisible(false)}
        modalInformation={modalInformation}
      />
      <EditModal
        isEditModalVisible={isEditModalVisible}
        handleEditModalSubmit={() => setIsEditModalVisible(false)}
        handleEditModalCancel={() => setIsEditModalVisible(false)}
      />
      <DeleteModal
        isDeleteModalVisible={isDeleteModalVisible}
        handleDeleteModalSubmit={() => setIsDeleteModalVisible(false)}
        handleDeleteModalCancel={() => setIsDeleteModalVisible(false)}
      />
    </>
  );
};

export default PassengerList;
