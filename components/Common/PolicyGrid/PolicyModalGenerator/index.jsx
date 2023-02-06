import { useSelector } from 'react-redux';
import { Alert, Spin } from 'antd';
import {
  StyledH3,
  StyledHorizontal,
  StyledImg,
} from 'components/Common/commonStyles';
import { StyledModal } from 'components/Common/Modal/style';
import Icon from 'components/Icon';
import {
  StyledFooterContainer,
  StyledOptionWrapper,
  StyledOptionText,
  StyledHeaderContainer,
  StyledContentWrapper,
} from './style';
import {
  CloseOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
} from '@ant-design/icons';
import safety from 'public/static/images/safety.svg';

const ModalGenerator = ({
  visible,
  setVisible,
  title,
  description,
  handleNext,
  hasNext,
  handlePrev,
  hasPrev,
}) => {
  const { loading, error } = useSelector(
    (state) => state?.policy?.policyDetail,
  );

  // close the modal
  const handleCloseModal = (e) => {
    e.stopPropagation();
    setVisible(false);
  };

  return (
    <StyledModal
      centered
      closable={false}
      width="1036px"
      bodyStyle={{ height: 'auto' }}
      footer={
        <StyledHorizontal
          alignItems="center"
          justifyContent="space-between"
          margin="0px 59px 40px 59px"
        >
          {hasPrev && (
            <StyledOptionWrapper>
              <Icon color="blue.10" fontSize={4} mr={2}>
                <ArrowLeftOutlined />
              </Icon>
              <StyledOptionText onClick={handlePrev}>
                Previous policy
              </StyledOptionText>
            </StyledOptionWrapper>
          )}
          {hasNext && (
            <StyledOptionWrapper>
              <StyledOptionText onClick={handleNext}>
                Agree and next policy
              </StyledOptionText>
              <Icon color="blue.10" fontSize={4} ml={2}>
                <ArrowRightOutlined />
              </Icon>
            </StyledOptionWrapper>
          )}
        </StyledHorizontal>
      }
      title={
        <StyledHorizontal
          alignItems="center"
          justifyContent="space-between"
          margin=" 29px 59px 0px 59px"
        >
          <StyledOptionWrapper>
            <StyledImg src={safety} />
            {!loading && !error && (
              <StyledH3
                fontSize={10}
                mt={4}
                fontWeight={5}
                lineHeight="22px"
                color="gray.15"
                ml="24px"
              >
                {title}
              </StyledH3>
            )}
          </StyledOptionWrapper>
          <Icon color="orange.7" fontSize={8}>
            <CloseOutlined onClick={(e) => handleCloseModal(e)} />
          </Icon>
        </StyledHorizontal>
      }
      visible={visible}
    >
      <StyledHorizontal
        alignItems="center"
        justifyContent="center"
        margin="0px 59px 0px 59px"
      >
        {loading && <Spin size="large" />}
        {error && (
          <Alert
            message="There was a problem fetching data, please try again later..."
            type="error"
            showIcon
          />
        )}
        {!loading && !error && (
          <StyledH3
            fontSize={8}
            fontWeight={5}
            textAlign="justify"
            letterSpacing="0.04em"
            color="gray.27"
          >
            {description}
          </StyledH3>
        )}
      </StyledHorizontal>
    </StyledModal>
  );
};

export default ModalGenerator;
