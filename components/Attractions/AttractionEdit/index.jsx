import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import { useRouter } from 'next/router';
import { Avatar, Comment } from 'antd';
import Button from 'components/Common/Button';
import {
  StyledDiv,
  StyledText,
  StyledH3,
  StyledHorizontal,
  StyledVertical,
} from 'components/Common/commonStyles';
import { TextArea } from 'components/Common/Input';
import PolicyCard from './PolicyCard';
import {
  getAttractionsAction,
  getEditAttractionAction,
} from 'store/attractions/attractions.action';
import SuccessCard from './SuccessCard';
import Modal from 'components/Common/Modal';

const AttractionEdit = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const theme = useTheme();
  const { id } = router.query;

  const { description, user_info } = useSelector(
    (state) => state.attractions.attractions.data,
  );
  const { loading, success } = useSelector((state) => state.attractions.edit);

  const [value, setValue] = useState(null);

  const [modal, setModal] = useState({
    visible: false,
    success: false,
  });

  useEffect(() => {
    id && dispatch(getAttractionsAction(id));
  }, [id]);

  useEffect(() => {
    description && setValue(description);
  }, [description]);

  const handleEdit = () => {
    dispatch(
      getEditAttractionAction({
        attraction_id: id,
        description: value,
      }),
    );
  };

  useEffect(() => {
    success && setModal({ visible: true, success: true });
  }, [loading]);

  return (
    <StyledDiv px="140px" pb="72px">
      <StyledHorizontal justifyContent="space-between">
        <Comment
          author={
            <div>
              <br />
              <br />
              <StyledText color="gray.27" fontSize={9} italic>
                {user_info?.first_name} {user_info?.last_name}
              </StyledText>
            </div>
          }
          avatar={
            <Avatar
              size={100}
              src={
                <img
                  width="100%"
                  height="100%"
                  src={user_info?.image}
                  alt="user_info_image"
                />
              }
            />
          }
          content={
            <StyledH3 color="gray.27" fontSize={9}>
              Artichle - English Language Request To Edit File
            </StyledH3>
          }
        />
        <PolicyCard />
      </StyledHorizontal>
      <StyledDiv mt="25px">
        <TextArea
          border="textarea"
          color="gray.27"
          py="17px"
          px="24px"
          rows={15}
          value={value}
          onChange={setValue}
        />
        <StyledHorizontal justifyContent="end" mt="20px">
          <Button
            width="131px"
            btnType="greenLink"
            onClick={() => setValue(null)}
          >
            Clear Text
          </Button>
          <Button
            width="131px"
            ml="16px"
            btnType="greenLink"
            onClick={() => setModal({ visible: true, success: false })}
            disabled={!value}
          >
            Save
          </Button>
        </StyledHorizontal>
      </StyledDiv>

      <Modal
        visible={modal.visible}
        footer={null}
        closable={false}
        onCancel={() => setModal({ visible: false, success: false })}
        width={modal.success ? 978 : 444}
        bodyStyle={{
          background: modal.success ? theme.colors.gray[46] : '#fff',
          borderRadius: theme.radii.lg,
        }}
      >
        {modal.success ? (
          <SuccessCard />
        ) : (
          <StyledVertical alignItems="center">
            <StyledH3
              textAlign="center"
              color="blue.10"
              mt="30px"
              fontSize={11}
            >
              Are you Sure ?
            </StyledH3>
            <StyledDiv mt="30px" mb="50px">
              <Button
                width="131px"
                btnType="greenLink"
                onClick={() => setModal({ visible: false, success: false })}
              >
                Edit
              </Button>
              <Button
                width="131px"
                ml="17px"
                onClick={handleEdit}
                loading={loading}
              >
                Continue
              </Button>
            </StyledDiv>
          </StyledVertical>
        )}
      </Modal>
    </StyledDiv>
  );
};

export default AttractionEdit;
