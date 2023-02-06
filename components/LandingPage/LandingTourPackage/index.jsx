import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import TourPackageCard from 'components/Common/TourPackageCard';
import {
  StyledDiv,
  StyledText,
  StyledVertical,
  StyledHorizontal,
} from 'components/Common/commonStyles';
import {
  StyledCarouselWrapper,
  StyledSwiperOptions,
  StyledTourCount,
} from './style';
import Icon from 'components/Icon';
import { useTranslation } from 'react-i18next';
import { getTourListAction } from 'store/tourPackage/tourPackage.action';
import { tourPackageSwiperSetting } from 'utils/landing.utils';
const LandingTourPackage = () => {
  const dispatch = useDispatch();
  const { tourList } = useSelector((state) => state.tourPackage);
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(getTourListAction({ page: 1, 'sort[random]': 1 }));
  }, []);
  return (
    <StyledVertical
      display={tourList.data.length > 0 ? 'flex' : 'none'}
      mt="72px"
      id="tourPackage"
    >
      <StyledText
        textAlign="center"
        fontSize={26}
        fontWeight={6}
        color="gray.15"
      >
        {t('LandingPage_title')}
      </StyledText>
      <StyledText fontSize={10} textAlign="center" color="gray.27">
        {t('LandingPage_subtitle')}
      </StyledText>
      <StyledHorizontal position="relative" marginTop="28px" height="545px">
        <StyledDiv position="absolute" left={0} top={0}>
          <img
            src="/static/images/landingPage/slider-bg.svg"
            width="409px"
            height="545px"
          />
          <StyledTourCount>
            <StyledText color="#fff" fontSize="18" pr="2">
              {tourList.total}
            </StyledText>
            <StyledText color="#fff" fontSize="4">
              {t('TourPackage')}
            </StyledText>
          </StyledTourCount>
        </StyledDiv>
        <StyledCarouselWrapper>
          <Swiper {...tourPackageSwiperSetting}>
            {tourList.data.map((item, index) => (
              <SwiperSlide key={item}>
                <StyledDiv height="500px" mt={2}>
                  <TourPackageCard tour={item} currentPosition="landingPage" />
                </StyledDiv>
              </SwiperSlide>
            ))}
          </Swiper>
          <StyledSwiperOptions>
            <div id="next-btn">
              <Icon name="icon-arrow-right" fontSize={16} />
            </div>
            <div id="prev-btn">
              <Icon name="icon-arrow-left" fontSize={16} />
            </div>
          </StyledSwiperOptions>
        </StyledCarouselWrapper>
      </StyledHorizontal>
    </StyledVertical>
  );
};
export default LandingTourPackage;
