import { useState } from 'react';
import {
  StyledDiv,
  StyledH1,
  StyledHorizontal,
  StyledImg,
  StyledText,
} from 'components/Common/commonStyles';
import { StyledButton, StyledCard, StyledImgContainer } from './style';
import DeleteModal from 'components/Common/Modal/DeleteModal';
import Icon from 'components/Icon';
import Link from 'components/Link';

const PostCard = ({ id, medias, title, caption, handleEditMode }) => {
  const [visible, setVisible] = useState(false);
  return (
    <StyledCard>
      <StyledImgContainer>
        <StyledImg src={medias} alt="myPost" />
        <StyledHorizontal
          justifyContent="space-between"
          position="absolute"
          bottom="15px"
          left="16px"
          right="16px"
        >
          <StyledHorizontal>
            <StyledButton
              ml="0"
              icon={<Icon name="icon-edit " color="gray.47" fontSize={15} />}
              onClick={() => handleEditMode({ id, medias, title, caption })}
            />
            <StyledButton
              icon={
                <Icon
                  name="icon-delete"
                  color="red.3"
                  fontSize={15}
                  onClick={() => setVisible(true)}
                />
              }
            />
          </StyledHorizontal>
          <StyledText color="gray.27" fontSize={1}>
            42 Recommend this
          </StyledText>
        </StyledHorizontal>
      </StyledImgContainer>
      <StyledDiv p="12px 16px">
        <StyledH1 fontSize={4} color="gray.15">
          {title}
        </StyledH1>
        <StyledHorizontal fontSize={1}>
          <StyledText color="gray.47">
            <Icon name="icon-view" fontSize={14} />
            89
          </StyledText>
          <StyledText color="gray.47" mx="10px">
            <Icon name="icon-star" fontSize={14} />
            36
          </StyledText>
          <StyledText color="gray.47">
            <Icon name="icon-comment-1" fontSize={14} />
            07
          </StyledText>
        </StyledHorizontal>
        <StyledHorizontal justifyContent="space-between" pt="5px">
          <StyledText color="gray.47" fontSize={1}>
            <Icon name="icon-time" />2 days
          </StyledText>
          <Link>
            <StyledText underline color="blue.11">
              Learn more
            </StyledText>
          </Link>
        </StyledHorizontal>
      </StyledDiv>
      <DeleteModal visible={visible} onCancel={() => setVisible(false)} />
    </StyledCard>
  );
};

export default PostCard;
