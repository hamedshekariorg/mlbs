import { useEffect, useState } from 'react';
import {
  StyledCol,
  StyledHorizontal,
  StyledRow,
} from 'components/Common/commonStyles';
import { Input, TextArea } from 'components/Common/Input';
import Dragger from 'components/Common/Dragger';
import Button from 'components/Common/Button';

const PostForm = ({ handleChangeMode, initialValue }) => {
  const [title, setTitle] = useState(null);
  const [caption, setCaption] = useState(null);
  const [image, setImage] = useState(null);

  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (initialValue) {
      setTitle(initialValue.title);
      setCaption(initialValue.caption);
      setImage(initialValue.image);
    }
  }, [initialValue]);

  return (
    <>
      <StyledRow gutter={[30, 0]}>
        <StyledCol span={12}>
          <Input placeholder="Title" value={title} onChange={setTitle} />
          <TextArea
            autoSize={{
              minRows: 6,
            }}
            placeholder="Caption"
            mt="16px"
            value={caption}
            onChange={setCaption}
          />
        </StyledCol>
        <StyledCol span={12}>
          <Dragger />
        </StyledCol>
      </StyledRow>
      <StyledHorizontal justifyContent="flex-end" mt="56px">
        <Button btnType="greenLink" width="131px" onClick={handleChangeMode}>
          Cancel
        </Button>
        <Button width="131px" ml="16px" disabled={!title || !caption}>
          Share
        </Button>
      </StyledHorizontal>
    </>
  );
};

export default PostForm;
