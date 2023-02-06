import { CloseOutlined } from '@ant-design/icons';
import userFilled from 'public/static/images/userFilled.svg';
import React from 'react';
import { StyledModal } from 'components/Common/Modal/style';
import { StyledImageWrapper, StyledModalContainer } from './style';
import {
  StyledDiv,
  StyledImg,
  StyledH3,
} from 'components/Common/commonStyles';
import Icon from 'components/Icon';

const ImagePreviewModal = ({
  isPhotoModalVisible,
  handlePhotoModalSubmit,
  handlePhotoModalCancel,
  modalInformation,
}) => {
  return (
    <StyledModal
      closeIcon={
        <Icon color="orange.7" fontSize={5}>
          <CloseOutlined />
        </Icon>
      }
      bodyStyle={{ height: '697px' }}
      width={605}
      footer={false}
      centered
      title={
        <StyledDiv display="flex" alignItems="center">
          <StyledImg
            src={userFilled}
            width="20px"
            height="20px"
            mr="16px"
            alt="passenger"
          />
          <StyledH3
            fontSize={10}
            mt={4}
            fontWeight={5}
            color="gray.15"
            lineHeight={1}
          >
            Passanger photo preview
          </StyledH3>
        </StyledDiv>
      }
      visible={isPhotoModalVisible}
      onOk={handlePhotoModalSubmit}
      onCancel={handlePhotoModalCancel}
    >
      <StyledModalContainer>
        <StyledImageWrapper>
          {/* Image Source should be here */}
          {modalInformation}
        </StyledImageWrapper>
      </StyledModalContainer>
    </StyledModal>
  );
};

export default ImagePreviewModal;
