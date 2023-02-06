import { StyledModal } from 'components/Common/Modal/style';
import {
  StyledContainer,
  StyledWrapper,
  StyledText,
  StyledButton,
  StyledHeaderWrapper,
} from './style';
import React from 'react';

const DeleteModal = ({
  isDeleteModalVisible,
  handleDeleteModalSubmit,
  handleDeleteModalCancel,
}) => {
  return (
    <StyledModal
      closeIcon={<></>}
      width={444}
      footer={false}
      centered
      visible={isDeleteModalVisible}
      onOk={handleDeleteModalSubmit}
      onCancel={handleDeleteModalCancel}
    >
      <StyledContainer>
        <StyledWrapper>
          <StyledHeaderWrapper>
            <StyledText>Are you Sure?</StyledText>
          </StyledHeaderWrapper>
          <StyledContainer>
            <StyledButton
              onClick={handleDeleteModalCancel}
              boxShadow={'card'}
              color="blue.10"
            >
              Cancel
            </StyledButton>
            <StyledButton
              onClick={handleDeleteModalCancel}
              bg="red.3"
              boxShadow={'btnSecondary'}
              color="#fff"
            >
              Delete
            </StyledButton>
          </StyledContainer>
        </StyledWrapper>
      </StyledContainer>
    </StyledModal>
  );
};

export default DeleteModal;
