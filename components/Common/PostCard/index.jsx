import {
  StyledDiv,
  StyledH3,
  StyledImg,
  StyledParagraph,
  StyledText,
} from 'components/Common/commonStyles';
import Link from 'components/Link';
import { getPostDeatailRoute } from 'store/posts/posts.service';
const PostCard = ({ id, image, title, caption, tag, isPosts }) => {
  return (
    <>
      <StyledImg
        src={image}
        alt={title}
        width="100%"
        height="228px"
        borderRadius="lg"
      />
      <StyledDiv py="20px" px="10px">
        <StyledH3
          color={isPosts ? 'gray.27' : 'gray.15'}
          fontSize={6}
          mb="16px"
        >
          {title}
        </StyledH3>
        {isPosts && (
          <StyledParagraph
            mb="32px !important"
            color="gray.25"
            fontSize={2}
            ellipsis={{ rows: 4 }}
          >
            {caption}
          </StyledParagraph>
        )}

        <Link mt="32px" href={getPostDeatailRoute(id, tag)}>
          <StyledText color="blue.10" underline>
            Read more
          </StyledText>
        </Link>
      </StyledDiv>
    </>
  );
};

export default PostCard;
