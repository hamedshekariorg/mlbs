import { useMemo, useState } from 'react';
import {
  StyledCol,
  StyledDiv,
  StyledRow,
  StyledVStack,
} from 'components/Common/commonStyles';
import PostCard from 'components/Dashboard/components/PostCard';
import Button from 'components/Common/Button';
import PostForm from './PostForm';
import { myPosts } from 'utils/dashboard.utils';

const MyPosts = () => {
  const [isForm, setIsForm] = useState(false);
  const [postItem, setPostItem] = useState(null);

  const handleEditMode = (item) => {
    setIsForm(true);
    setPostItem(item);
  };

  const postItems = useMemo(
    () =>
      myPosts.map(({ id, medias, title, caption }) => (
        <StyledCol span={8} p="16px" key={id}>
          <PostCard
            id={id}
            medias={medias}
            title={title}
            caption={caption}
            handleEditMode={handleEditMode}
          />
        </StyledCol>
      )),
    [],
  );

  return (
    <StyledDiv>
      {isForm ? (
        <PostForm
          handleChangeMode={() => setIsForm(false)}
          initialValue={postItem}
        />
      ) : (
        <StyledVStack>
          <Button
            m="0 16px 0 auto"
            width="104px"
            height="33px"
            onClick={() => setIsForm(true)}
          >
            Create
          </Button>
          <StyledRow>{postItems}</StyledRow>
        </StyledVStack>
      )}
    </StyledDiv>
  );
};

export default MyPosts;
