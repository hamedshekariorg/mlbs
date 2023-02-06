import Link from 'components/Link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from '@emotion/react';
import { useRouter } from 'next/router';
import {
  StyledRow,
  StyledText,
  StyledDiv,
  StyledImg,
  StyledHorizontal,
} from 'components/Common/commonStyles';
import Button from 'components/Common/Button';
import {
  StyledTourDetailContainer,
  StyledBottomIcons,
  StyledTopRightDivIcons,
  StyledIconBlock,
  StyledImgText,
  StyledTopLeftIcon,
  StyledCardIcons,
  StyledDiscription,
} from './style';
import { topIcons, handleDays } from 'utils/tourPackage.utils.js';
import Rate from 'components/Common/Rate';
// TODO:this img will load dynamically
import detailImg from 'public/static/images/tourPackage/detail.svg';
import mapBackground from 'public/static/images/tourPackage/map-background.svg';
import { handleIcons } from 'utils/tourPackage.utils.js';
import { postLikeAction } from 'store/tourPackage/tourPackage.action';

const imgPath = '/static/images/tourPackage';

const TourPackageCard = ({ tour, currentPosition }) => {
  const router = useRouter();
  const { locale } = router.query;
  const dispatch = useDispatch();
  const theme = useTheme();
  const [cardImgSrc, setCardImgSrc] = useState(detailImg);

  /* change card img when hover on map Icon */
  const changeCardImg = (e) => {
    const curState = e._reactName;
    const iconName = e.currentTarget.attributes.src.value;
    const isMap = iconName.includes('map');
    isMap &&
      setCardImgSrc(curState === 'onMouseOver' ? mapBackground : detailImg);
  };

  const toggleLike = (e, isLiked) => {
    dispatch(postLikeAction(tour.id, !isLiked));
  };

  return (
    <StyledTourDetailContainer>
      <StyledDiv position="relative">
        <StyledImg
          width="100%"
          src={cardImgSrc}
          borderRadius={`${theme.radii.lg} ${theme.radii.lg} 0 0`}
        />
        <StyledBottomIcons>
          <StyledImgText>
            <img src="/static/images/tourPackage/vector.svg" />
            <StyledText fontSize="2">{tour.type}</StyledText>
          </StyledImgText>
          <StyledImgText>
            <img src="/static/images/tourPackage/eye.svg" />
            <StyledText> {tour?.hits_number}</StyledText>
          </StyledImgText>
          <StyledImgText>
            <img src="/static/images/tourPackage/comment.svg" />
            <StyledText> {tour?.comments}</StyledText>
          </StyledImgText>
        </StyledBottomIcons>
        <StyledTopRightDivIcons>
          {topIcons.map(({ normal, hover }) => (
            <StyledIconBlock
              key={normal}
              onClick={(e) => toggleLike(e, tour.liked)}
              src={
                normal === 'heart' && tour.liked
                  ? `${imgPath}/heart-liked.svg`
                  : `${imgPath}/${normal}.svg`
              }
              hoverSrc={
                normal === 'heart' && tour.liked
                  ? `${imgPath}/heart-liked.svg`
                  : `${imgPath}/${hover}.svg`
              }
              onMouseOver={changeCardImg}
              onMouseOut={changeCardImg}
            />
          ))}
        </StyledTopRightDivIcons>
        <StyledTopLeftIcon
          //TODO:will be handle dynamically
          borderColor={false ? 'blue.10' : 'blue.10'}
          borderBottomColor="transparent"
        >
          <StyledDiv>
            <StyledText color="#fff" textAlign="center" fontSize={0}>
              {tour.max_capacity}
            </StyledText>
            <StyledText color="#fff" textAlign="center" fontSize={0}>
              Capacity
            </StyledText>
          </StyledDiv>
        </StyledTopLeftIcon>
      </StyledDiv>
      <Link href={`/tourPackage/detail?id=${tour.id}`}>
        <StyledDiv mt={3} width="87%" mx="auto">
          <StyledRow
            align="left"
            display={currentPosition === 'landingPage' ? 'none' : 'flex'}
          >
            <StyledText fontWeight="5" color="gray.15" fontSize={6}>
              {tour.name}
            </StyledText>
          </StyledRow>
          <StyledRow align="left">
            <StyledHorizontal alignItems="center" color="gray.15">
              <StyledImg
                width={5}
                height="20px"
                src="/static/images/tourPackage/svgg.svg"
              />
              <StyledText
                fontSize={currentPosition === 'landingPage' ? '6' : '2'}
                ml="8px"
                color={
                  currentPosition === 'landingPage' ? 'gray.15' : 'gray.45'
                }
              >
                Charming Persian
              </StyledText>
            </StyledHorizontal>
          </StyledRow>
          <StyledRow
            display={currentPosition === 'landingPage' ? 'flex' : 'none'}
          >
            <StyledDiscription>{tour.description}</StyledDiscription>
          </StyledRow>
          <StyledRow align="left" mt={4}>
            <StyledText
              color="blue.10"
              fontSize={currentPosition === 'landingPage' ? '4' : '1'}
            >
              $ {tour.price}
            </StyledText>
            <StyledText
              ml={1}
              color="gray.27"
              fontSize={currentPosition === 'landingPage' ? '4' : '0'}
            >
              / per person
            </StyledText>
          </StyledRow>
          <StyledHorizontal
            mt={currentPosition === 'landingPage' ? '5px' : '3'}
            alignItems="center"
            justifyContent="space-between"
          >
            <StyledDiv>
              <StyledText color="gray.27" fontSize="2">
                {handleDays(tour.start_date, tour.due_date)} Days /
                {handleDays(tour.start_date, tour.due_date) - 1} Night
              </StyledText>
              <StyledText
                ml={1}
                color="gray.27"
                display={
                  currentPosition === 'landingPage' ? 'none' : 'inline-block'
                }
              >
                {` ${tour.cities.length}`} cities
              </StyledText>
            </StyledDiv>
            <StyledDiv
              display={currentPosition === 'landingPage' ? 'flex' : 'none'}
            >
              <Rate rate1="4.6" rate2="(12,350)" defaultValue={2} />
            </StyledDiv>
          </StyledHorizontal>
          <StyledRow
            align="left"
            mt={1}
            display={currentPosition === 'landingPage' ? 'none' : 'flex'}
          >
            <Rate
              rate1="4.6"
              rate2="(12,350) "
              defaultValue={2}
              showRateNum={true}
            />
          </StyledRow>
          <StyledRow
            mt={3}
            display={currentPosition === 'landingPage' ? 'none' : 'flex'}
          >
            <Button
              width="100%"
              btnType="primary"
              fontSize={0}
              height="34px"
              borderRadius="lg"
            >
              Book
            </Button>
          </StyledRow>
        </StyledDiv>
      </Link>
      <StyledCardIcons>
        {tour.options.map((item) => (
          <StyledDiv key={item}>
            <StyledText>{item}</StyledText>
            <StyledImg
              width="70px"
              height="70px"
              src={`/static/images/tourPackage/status-card/${handleIcons(
                item,
              )}.svg`}
            />
          </StyledDiv>
        ))}
      </StyledCardIcons>
    </StyledTourDetailContainer>
  );
};

export default TourPackageCard;
