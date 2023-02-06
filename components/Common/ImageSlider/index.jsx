import React, { useRef, useState } from 'react';
import { StyledImg } from 'components/Common/commonStyles';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { StyledContainer, StyledIcon, StyledImageWrapper } from './style';

const ImageSlider = ({ sliderData, alt }) => {
  /* 
    Slider Data format for testing would be like: 
    [
        {
          id: 1,
          imgSource: sliderImageX,
          altTag: '...'
        }
    ]
  */

  const ref = useRef();
  const [activeIndex, setActiveIndex] = useState(2);

  /* 
    Changes the x-axis of the images container & the active image index,
    which ends up showing the correct image to user 
  */
  const scroll = (scrollOffset) => {
    if (scrollOffset > 0) {
      // change the active image
      activeIndex !== sliderData.length - 1 &&
        setActiveIndex((prevState) => ++prevState);
      // scroll
      activeIndex >= 2 && (ref.current.scrollLeft += scrollOffset);
    } else {
      // change the active image
      activeIndex >= 1 && setActiveIndex((prevState) => --prevState);
      // scroll
      activeIndex < sliderData.length - 2 &&
        (ref.current.scrollLeft += scrollOffset);
    }
  };

  return (
    <>
      <StyledImg
        src={sliderData[activeIndex]?.imgSource}
        alt={alt}
        height="420px"
      />
      <StyledContainer>
        <StyledIcon ml={3} onClick={() => scroll(-165.5)}>
          <LeftOutlined />
        </StyledIcon>
        <StyledIcon right={3} onClick={() => scroll(165.5)}>
          <RightOutlined />
        </StyledIcon>
        <div className="container" ref={ref}>
          <div className="gradient-left" />
          <div className="gradient-right" />
          {sliderData.map(({ imgSource, id, altTag }, index) => (
            <StyledImageWrapper key={id} onClick={() => setActiveIndex(index)}>
              <img src={imgSource} alt={altTag} />
            </StyledImageWrapper>
          ))}
        </div>
      </StyledContainer>
    </>
  );
};

export default ImageSlider;
