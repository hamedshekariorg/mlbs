import {
  StyledDiv,
  StyledParagraph,
  StyledH3,
} from 'components/Common/commonStyles';
import { Comment, Avatar } from 'antd';
import { StyledContainer } from './style';
import Button from 'components/Common/Button';

const Comments = ({ comments, page, countPage, handleSetPage }) => {
  return (
    <StyledContainer>
      {comments?.map(({ id, timeAgo, comment, user_info }) => (
        <Comment
          key={id}
          author={
            <StyledH3 fontSize={8} color="gray.24">
              {user_info?.nickname}
            </StyledH3>
          }
          avatar={<Avatar src={user_info?.image} alt="user_image" />}
          content={<StyledParagraph color="gray.27">{comment}</StyledParagraph>}
          datetime={timeAgo}
        />
      ))}
      <StyledDiv textAlign="center" p={1}>
        {page < countPage && (
          <Button
            btnType={'greenLink'}
            borderRadius={10}
            onClick={handleSetPage}
          >
            Load More
          </Button>
        )}
      </StyledDiv>
    </StyledContainer>
  );
};

export default Comments;
