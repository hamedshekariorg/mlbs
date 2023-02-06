import React, { useEffect, useRef } from 'react';
import DateCard from '..';
import { fakeDateCardInfo } from 'utils/flight.utils';
import { StyledContainer } from './style';
import { RightCircleFilled, LeftCircleFilled } from '@ant-design/icons';
import Icon from 'components/Icon';
const Scrollbar = () => {
  const ref = useRef();

  // Changes the x-axis of the dates container
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  useEffect(() => {
    scroll(30);
  }, []);

  return (
    <StyledContainer>
      <Icon
        fontSize={50}
        color="blue.10"
        onClick={() => scroll(149)}
        position="absolute"
        top={0}
        right={6}
        opacity="30%"
        className="moveScrollbarIcon"
      >
        <LeftCircleFilled />
      </Icon>
      <Icon
        fontSize={50}
        color="blue.10"
        onClick={() => scroll(-149)}
        position="absolute"
        top={0}
        left={6}
        opacity="30%"
        className="moveScrollbarIcon"
      >
        <RightCircleFilled />
      </Icon>

      <div className="container" ref={ref}>
        {fakeDateCardInfo.map((item) => (
          <DateCard price={item.price} date={item.date} key={item.date} />
        ))}
      </div>
    </StyledContainer>
  );
};

export default Scrollbar;
