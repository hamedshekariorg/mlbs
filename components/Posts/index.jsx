import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getHandicraftsAction,
  getHistoryAction,
  getIranAction,
} from 'store/posts/posts.action';
import {
  StyledCol,
  StyledDiv,
  StyledParagraph,
  StyledRow,
} from 'components/Common/commonStyles';
import SeasonsContainer from 'components/Common/SeasonsContainer';
import AttractionCarousel from 'components/Common/Carousel/AttractionCarousel';
import DescriptionCard from './DescriptionCard';
import { StyledHeader, StyledheaderTitle } from './style';
import { header } from 'utils/iran.utils';
import PostCard from 'components/Common/PostCard';

const Posts = () => {
  const dispatch = useDispatch();
  const { iran, handicrafts, history } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getIranAction());
    dispatch(getHandicraftsAction());
    dispatch(getHistoryAction());
  }, []);

  const handicraftsItems = useMemo(
    () =>
      handicrafts?.items.map(({ id, image, title, caption }) => (
        <PostCard
          tag="Handicrafts"
          key={id}
          id={id}
          title={title}
          image={image}
          caption={caption}
          isPosts
        />
      )),
    [handicrafts?.items],
  );

  const iranItems = useMemo(
    () =>
      iran?.items.map(({ id, image, title, caption }) => (
        <PostCard
          tag="Iran"
          key={id}
          id={id}
          title={title}
          image={image}
          caption={caption}
          isPosts
        />
      )),
    [iran?.items],
  );

  const historyItems = useMemo(
    () =>
      history?.items.map(({ id, image, title, caption }) => (
        <PostCard
          tag="History"
          key={id}
          id={id}
          title={title}
          image={image}
          caption={caption}
          isPosts
        />
      )),
    [history?.items],
  );

  const carouselSettings = {
    slidesPerView: 2,
    spaceBetween: 16,
  };

  return (
    <StyledDiv py="100px" px="140px">
      <StyledHeader>
        <StyledheaderTitle>{header.title} </StyledheaderTitle>
        <StyledParagraph width="964px" fontSize={11} color="gray.15">
          {header.text}
        </StyledParagraph>
      </StyledHeader>
      <SeasonsContainer mt="70px" />
      <StyledRow mt="80px">
        <StyledCol span={11}>
          <AttractionCarousel
            items={handicraftsItems}
            settings={carouselSettings}
          />
        </StyledCol>
        <StyledCol span={11} offset={2}>
          <DescriptionCard
            title="Handicrafts"
            description="The most famous Iranian handicrafts include the Persian Carpet, Minakari (carvings on silver), miniature, Khatamkari, and Ghalamzani (Metal-work). Iran has many ancient crafts. 
            We have decided to introduce to the World the Persian handicrafts heritage of these cities and villages. For those interested in Worlds most popular and outstanding ancient handicrafts, they are now just a click away! You can find the most diverse Iranian handmade."
          />
        </StyledCol>
      </StyledRow>
      <StyledRow mt="80px">
        <StyledCol span={11}>
          <DescriptionCard
            title="History of Iranian Civilization"
            description="Iran is home to one of the world's oldest continuous major civilizations, with historical and urban settlements dating back to 7000 BC. ... They were succeeded by the Seleucid, Parthian, and Sasanian Empires, who successively governed Iran for almost 1,000 years and made Iran once again as a leading power in the world.
            The history of Iran, which was commonly known until the mid-20th century as Persia in the Western world, is intertwined with the history of a larger region, also to an extent known as Greater Iran,"
          />
        </StyledCol>
        <StyledCol span={11} offset={2}>
          <AttractionCarousel
            items={historyItems}
            settings={carouselSettings}
          />
        </StyledCol>
      </StyledRow>
      <StyledRow mt="80px">
        <StyledCol span={11}>
          <AttractionCarousel items={iranItems} settings={carouselSettings} />
        </StyledCol>
        <StyledCol span={11} offset={2}>
          <DescriptionCard
            title="Iran is a land of wonders"
            description="A land of four seasons Of course, the magic also lies in Iran's astonishing nature and landscapes. ... That's not it: from the humid Hyrcanian forests near the Caspian Sea to the mangrove of the Persian Gulf's island, Iran is a kaleidoscope of natural wonders, offering the best of each season."
          />
        </StyledCol>
      </StyledRow>
    </StyledDiv>
  );
};

export default Posts;
