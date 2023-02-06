import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Comments from 'components/Common/Comments';
import {
  getDetailsAction,
  getRecentAction,
  getRelatedAction,
} from 'store/posts/posts.action';
import {
  StyledCol,
  StyledDiv,
  StyledH1,
  StyledH3,
  StyledHorizontal,
  StyledImg,
  StyledRow,
  StyledText,
  StyledVertical,
} from 'components/Common/commonStyles';
import Rate from 'components/Common/Rate';
import Review from 'components/Common/Review';
import Icon from 'components/Icon';
import PostCard from 'components/Common/PostCard';
import AttractionCarousel from 'components/Common/Carousel/AttractionCarousel';

const Details = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { optins } = router.query;
  const { details, recent, related } = useSelector((state) => state.posts);
  const [id, tag] = optins?.split('/') || [];

  useEffect(() => {
    if ((id, tag)) {
      dispatch(getDetailsAction(id));
      dispatch(getRelatedAction(tag));
      dispatch(getRecentAction());
    }
  }, [id, tag]);

  const recentPosts = useMemo(
    () =>
      recent?.items.map(({ image, title, id }) => (
        <PostCard tag={tag} key={id} image={image} title={title} />
      )),
    [recent?.items],
  );

  const relatedPosts = useMemo(
    () =>
      related?.items.map(({ image, title, id }) => (
        <PostCard tag={tag} key={id} image={image} title={title} />
      )),
    [related?.items],
  );

  return (
    <StyledDiv py="115px" px="140px">
      <StyledRow>
        <StyledCol span={17}>
          <StyledDiv>
            <Icon name="icon-category" color="gray.15" fontSize={10} />
            <StyledText color="gray.15" fontSize={6} ml="12px">
              Historical
            </StyledText>
          </StyledDiv>
          <StyledH1
            color="gray.15"
            mt="22px"
            fontSize="42px"
            fontWeight={7}
            lineHeight="50px"
          >
            {details?.data?.title}
          </StyledH1>
          <StyledHorizontal justifyContent="space-between" pb="30px">
            <StyledHorizontal alignItems="center">
              <StyledText color="gray.15" italic>
                Charming Persian
                <StyledText ml="5px" color="gray.42">
                  {details?.data?.timeAgo}
                </StyledText>
              </StyledText>
            </StyledHorizontal>
            <StyledHorizontal>
              <Rate defaultValue={5} rate1="4.6" rate2="(2,358)" />
              <Icon name="icon-share" fontSize={20} color="gray.24" ml="61px" />
              <Icon
                name="icon-like-stroke"
                fontSize={20}
                color="gray.24"
                ml="46px"
              />
            </StyledHorizontal>
          </StyledHorizontal>
          <StyledImg
            width="100%"
            height="486px"
            related
            borderRadius="lg"
            src={details?.data?.image}
            alt="postDetail"
          />
          <StyledDiv
            py="32px"
            dangerouslySetInnerHTML={{ __html: details?.data?.caption }}
          />
          <StyledH1 color="gray.15" fontSize={18} mt="40px" mb="49px">
            Review Posts
          </StyledH1>
          <Review entity="post" />
          <Comments />
        </StyledCol>
        <StyledCol span={7}>
          <StyledVertical pt="253px" pl="65px">
            <StyledH3 mb="24px" color="green.18" fontWeight={8}>
              Recent Posts
            </StyledH3>
            <StyledDiv>
              <AttractionCarousel items={recentPosts} chevronIcon />
            </StyledDiv>
            <StyledDiv mt="84px">
              <StyledH3 mb="24px" color="green.18" fontWeight={8}>
                Related Posts
              </StyledH3>
              <AttractionCarousel items={relatedPosts} chevronIcon />
            </StyledDiv>
          </StyledVertical>
        </StyledCol>
      </StyledRow>
    </StyledDiv>
  );
};

export default Details;
