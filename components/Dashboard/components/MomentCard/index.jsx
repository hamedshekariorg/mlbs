import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/Common/Button';
import DeleteModal from 'components/Common/Modal/DeleteModal';
import Icon from 'components/Icon';
import {
  StyledDivider,
  StyledHorizontal,
  StyledImg,
  StyledText,
  StyledVertical,
} from 'components/Common/commonStyles';
import { RotateRightOutlined } from '@ant-design/icons';
import { deleteMomentAction } from 'store/dashboard/dashboard.action';
import { StyledCard, StyledCardFace, StyledScene } from './style';

const MomentCard = ({ id, medias, title, description, handleEdit }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.dashboard.deleteMoment);
  const [rotate, setRotate] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleDelete = () =>
    dispatch(deleteMomentAction(id, Object.keys(medias)[0]));

  return (
    <StyledVertical>
      <StyledScene>
        <StyledCard rotate={rotate}>
          <StyledCardFace>
            <StyledImg
              width="100%"
              height="220px"
              src={Object.values(medias)[0]}
              alt="myMoment"
              mb="12px"
              borderRadius="lg"
            />
            <StyledText
              fontSize={1}
              color="gray.47"
              lineHeight="13px"
              textAlign="center"
              px="12px"
            >
              {title}
            </StyledText>
          </StyledCardFace>
          <StyledCardFace isFaceBack>
            <StyledHorizontal p="10px 6px">
              <StyledDivider
                type="vertical"
                height="240px"
                borderColor="gray.22"
              />
              <StyledText textAlign="right" color="gray.27" fontSize={1}>
                {description}
              </StyledText>
            </StyledHorizontal>
          </StyledCardFace>
        </StyledCard>
        <StyledHorizontal justifyContent="center" mt="16px">
          <Button
            btnType="text"
            icon={<Icon name="icon-edit" fontSize={14} color="gray.47" />}
            border="input"
            width="28px"
            height="28px"
            borderRadius="5px"
            onClick={() =>
              handleEdit({
                id,
                image: Object.values(medias)[0],
                title,
                description,
              })
            }
          />
          <Button
            btnType="text"
            icon={<Icon name="icon-delete" fontSize={14} color="red.3" />}
            mx="12px"
            border="input"
            width="28px"
            height="28px"
            borderRadius="5px"
            onClick={() => setVisible(true)}
          />
          <Button
            btnType="text"
            icon={<RotateRightOutlined />}
            onClick={() => setRotate((prev) => !prev)}
            border="input"
            width="28px"
            height="28px"
            borderRadius="5px"
          />
        </StyledHorizontal>
      </StyledScene>
      <DeleteModal
        visible={visible}
        onCancel={() => setVisible(false)}
        onOk={handleDelete}
        loading={loading}
      />
    </StyledVertical>
  );
};

export default MomentCard;
