import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { getCommentsAction } from 'store/comments/comments.action';
import { getAttractionsAction } from 'store/attractions/attractions.action';
import {
  StyledCol,
  StyledDiv,
  StyledRow,
  StyledH3,
} from 'components/Common/commonStyles';
import ImageCarousel from 'components/Common/Carousel/GalleryCarousel';
import Review from 'components/Common/Review';
import Comment from 'components/Common/Comments';
import TourPackages from './TourPackages';
import Description from './Description';
import Header from './Header';
const AttractionDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const [page, setPage] = useState(1);
  const { items, countPage } = useSelector((state) => state.comments.items);
  const {
    image,
    images,
    name,
    country_name: countryName,
    city_name: cityName,
    categories,
    timeAgo,
    description,
    firstName,
    lastName,
  } = useSelector((state) => state.attractions.attractions.data);

  useEffect(() => {
    id && dispatch(getAttractionsAction(id));
  }, [id]);

  useEffect(() => {
    page && dispatch(getCommentsAction({ id, page }));
  }, [page]);

  return (
    <>
      <Header
        image={image}
        name={name}
        categories={categories}
        timeAgo={timeAgo}
        countryName={countryName}
        cityName={cityName}
      />
      <StyledDiv py={8} px={9}>
        <StyledRow gutter={[48, 16]}>
          <StyledCol span={16}>
            <ImageCarousel images={images} />
            <Description
              description={description}
              id={id}
              firstName={firstName}
              lastName={lastName}
              timeAgo={timeAgo}
            />
            <Comment
              page={page}
              countPage={countPage}
              handleSetPage={() => setPage((prevState) => prevState + 1)}
              comments={items}
            />
            <Review entity="attraction" />
          </StyledCol>
          <StyledCol span={7} offset={1}>
            <TourPackages />
          </StyledCol>
        </StyledRow>
      </StyledDiv>
    </>
  );
};

export default AttractionDetails;
