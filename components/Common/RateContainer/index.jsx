import { StyledDiv } from 'components/Common/commonStyles';
import Icon from 'components/Icon';
import React, { useEffect, useState } from 'react';
import { StyledStarsContainer } from './style';

const RateContainer = ({ rate, views, rateVisible }) => {
  const [stars, setStars] = useState('eeeee'); // initially set all the stars to 'empty'
  // 'e' for empty
  // 'f' for filled
  const getRatioString = () => {
    const fixedRate = Math.ceil(rate);
    return [...stars]
      .map((star, index) => {
        if (index + 1 <= fixedRate) {
          return 'f'; // fill the star
        }
        return 'e'; // empty the star
      })
      .join('');
  };

  useEffect(() => {
    setStars(getRatioString());
  }, []);

  return (
    <StyledDiv>
      <StyledStarsContainer rateVisible={rateVisible}>
        <div>
          {[...stars].map((star, index) => {
            const iconName = 'icon-star';
            return (
              <Icon
                key={`${index}`}
                name={`${iconName}${star === 'e' ? '-stroke' : ''}`}
              />
            );
          })}
        </div>
        <span>{rate}</span>
        <span>({views})</span>
      </StyledStarsContainer>
    </StyledDiv>
  );
};

export default RateContainer;
