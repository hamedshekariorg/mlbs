import React from 'react';
import { StyledModal } from 'components/Common/Modal/style';
import Content from './Content';
import { StyledDiv, StyledH3 } from 'components/Common/commonStyles';

const EditModal = ({
  isEditModalVisible,
  handleEditModalSubmit,
  handleEditModalCancel,
}) => {
  return (
    <StyledModal
      closeIcon={<></>}
      width={817}
      bodyStyle={{ maxHeight: '379px' }}
      footer={false}
      title={
        <StyledH3
          fontSize={10}
          mt={3}
          ml={24}
          fontWeight={6}
          lineHeight="19px"
          color="gray.15"
        >
          Passenger Information
        </StyledH3>
      }
      centered
      visible={isEditModalVisible}
      onOk={handleEditModalSubmit}
      onCancel={handleEditModalCancel}
    >
      <Content destroyEditModal={handleEditModalCancel} />
    </StyledModal>
  );
};

export default EditModal;
