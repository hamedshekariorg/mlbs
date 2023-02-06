import Button from 'components/Common/Button';
import { StyledH3, StyledHorizontal } from 'components/Common/commonStyles';
import { StyledModal } from './style';

const DeleteModal = ({ visible, onOk, onCancel, loading }) => {
  return (
    <StyledModal
      visible={visible}
      footer={null}
      onCancel={onCancel}
      closable={false}
      width="444px"
    >
      <StyledH3 color="blue.10" textAlign="center" fontSize={11}>
        Are you Sure ?
      </StyledH3>
      <StyledHorizontal justifyContent="center" mt="93px">
        <Button btnType="greenLink" width="131px" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          btnType="red"
          ml="16px"
          width="131px"
          onClick={onOk}
          loading={loading}
        >
          Delete
        </Button>
      </StyledHorizontal>
    </StyledModal>
  );
};

export default DeleteModal;
