import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/Common/Button';
import Dragger from 'components/Common/Dragger';
import {
  StyledCol,
  StyledDiv,
  StyledDivider,
  StyledH3,
  StyledHorizontal,
  StyledRow,
  StyledText,
  StyledVertical,
} from 'components/Common/commonStyles';
import {
  postMomentAction,
  putMomentAction,
} from 'store/dashboard/dashboard.action';
import { Warning } from 'components/Common/Alert';
import { message } from 'antd';
import { StyledCard, StyledTextField, StyledModal } from './style';
import { getBase64 } from 'utils/common.utils';

const MomentForm = ({ isEditMode, initialValue, changeMode }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.dashboard.saveMoment);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (initialValue) {
      setTitle(initialValue.title);
      setImage(initialValue.image);
      setDescription(initialValue.description);
    }
  }, [initialValue]);

  //before uploading, it checks the image type and size
  const beforeUpload = async (file) => {
    const fileTypes = ['image/jpeg', 'image/png', 'image/webp'];
    const isFormat = fileTypes.includes(file.type);

    if (!isFormat) {
      message.error('You can only upload JPG/PNG/WEBP file!');
      return;
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      message.error('Image must smaller than 5MB!');
      return;
    }
    setImageFile(file);
    file.preview = await getBase64(file);
    setImage(file.url || file.preview);
    return false;
  };

  const handleDiscard = () => {
    setImageFile(null);
    setTitle(null);
    setDescription(null);
    setVisible(false);
    setImage(null);
  };

  const saveMoment = () => {
    const formData = new FormData();
    imageFile && formData.append('media', imageFile);
    isEditMode
      ? dispatch(putMomentAction({ title, description }, initialValue.id))
      : dispatch(postMomentAction({ title, description }, formData));
  };
  return (
    <>
      <StyledRow>
        <StyledCol span={12} p="16px">
          <StyledCard>
            <StyledDiv p="13px 14px">
              <Dragger
                defaultImage={image}
                beforeUpload={beforeUpload}
                height="299px"
              />
            </StyledDiv>
            <StyledTextField
              placeholder="Add a title"
              autoSize
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={20}
            />
          </StyledCard>
          <StyledVertical alignItems="center" pt="12px">
            <StyledText color="gray.15" fontSize={2}>
              Front
            </StyledText>
            {title?.length >= 20 && (
              <Warning
                message="The title should be less than 70 words"
                mt="24px"
                closeText="Dismiss"
              />
            )}
          </StyledVertical>
        </StyledCol>
        <StyledCol span={12} p="16px">
          <StyledCard>
            <StyledHorizontal p="42px 20px" height="100%">
              <StyledDivider
                type="vertical"
                height="100%"
                borderColor="gray.22"
              />
              <StyledTextField
                placeholder="Write about this moment"
                autoSize
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={400}
                height="100% !important"
              />
            </StyledHorizontal>
          </StyledCard>
          <StyledVertical alignItems="center" pt="12px">
            <StyledText color="gray.15" fontSize={2}>
              Back
            </StyledText>
            {description?.length >= 400 && (
              <Warning
                message="The caption should be less than 400 words"
                mt="20px"
                closeText="Dismiss"
              />
            )}
          </StyledVertical>
        </StyledCol>
      </StyledRow>

      <StyledHorizontal justifyContent="center" mt="73px">
        <Button
          width="147px"
          height="36px"
          fontSize={2}
          btnType="greenLink"
          onClick={isEditMode ? changeMode : () => setVisible(true)}
        >
          {isEditMode ? 'Cancel' : 'Discard'}
        </Button>
        <Button
          width="147px"
          height="36px"
          fontSize={2}
          ml="24px"
          loading={loading}
          onClick={saveMoment}
          disabled={!title || !description}
        >
          Share the moment
        </Button>
      </StyledHorizontal>

      <StyledModal
        visible={visible}
        onCancel={() => setVisible(false)}
        closable={null}
        footer={null}
        width="444px"
      >
        <StyledH3 color="blue.10" fontSize={11}>
          Are you Sure ?
        </StyledH3>
        <StyledText color="blue.10">
          If you discard, you will lose the
          <br /> information you inserted
        </StyledText>
        <StyledHorizontal mt="58px" mb="37px" justifyContent="center">
          <Button
            width="131px"
            btnType="greenLink"
            onClick={() => setVisible(false)}
          >
            Cancel
          </Button>
          <Button width="131px" ml="17px" onClick={handleDiscard}>
            Discard
          </Button>
        </StyledHorizontal>
      </StyledModal>
    </>
  );
};

export default MomentForm;
