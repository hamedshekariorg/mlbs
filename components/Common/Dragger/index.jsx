import { useEffect, useState } from 'react';
import {
  StyledDiv,
  StyledImg,
  StyledText,
  StyledVertical,
} from 'components/Common/commonStyles';
import { StyledDragger } from './style';
import { useTheme } from '@emotion/react';

const Dragger = ({ onChange, defaultImage, ...rest }) => {
  const theme = useTheme();
  const [image, setImage] = useState(null);

  useEffect(() => {
    setImage(defaultImage);
  }, [defaultImage]);

  return (
    <StyledDragger
      onChange={onChange}
      maxCount={1}
      showUploadList={false}
      name="files"
      action="/upload.do"
      {...rest}
    >
      {image ? (
        <StyledImg src={image} width="100%" height="266px" borderRadius="lg" />
      ) : (
        <StyledVertical alignItems="center" pt="44px" pb="36px">
          <StyledImg
            src="/static/images/layout/upload.svg"
            width="55px"
            height="38px"
          />
          <StyledDiv mt="32px" p="15px 28px" bg="orange.16" borderRadius="lg">
            <StyledText color="orange.7">Upload photo</StyledText>
          </StyledDiv>
          <StyledText p="14px 20px" color="orange.13" fontSize={2}>
            You can also drag your photo and drop it here
          </StyledText>
          <StyledText color="orange.7" fontSize={2}>
            {'Photo size < 5 mg'}
          </StyledText>
        </StyledVertical>
      )}
    </StyledDragger>
  );
};

export default Dragger;
