import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isFuture } from 'date-fns';
import { Carousel } from 'antd';
import { getBannersAction } from 'store/banners/banners.action';
const LayoutSlider = ({ type }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.banners);

  useEffect(() => {
    type && dispatch(getBannersAction(type));
  }, [type]);
  return (
    <Carousel>
      {items?.map(
        ({ id, medias, due_date }) =>
          isFuture(new Date(due_date)) && (
            <img
              key={id}
              src={Object.values(medias)[0]}
              width="100%"
              height="625px"
              alt="slider"
            />
          ),
      )}
    </Carousel>
  );
};

export default LayoutSlider;
