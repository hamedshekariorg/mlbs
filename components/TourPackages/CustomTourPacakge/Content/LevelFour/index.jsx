import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledDiv,
  StyledH3,
  StyledH4,
  StyledHorizontal,
  StyledImg,
  StyledVertical,
  StyledCheckbox,
} from 'components/Common/commonStyles';
import RateComponent from 'components/Common/Rate';
import { changeLodgings } from 'store/customTourPackage/customTourPackage.action';
import { tripLodgingCardsInfo } from 'utils/tourPackage.utils';
import Layout from '../Layout';
import { StyledLodgingCard } from './style';

const LevelFour = () => {
  const dispatch = useDispatch();
  const { lodgings } = useSelector((state) => state?.customTourPackage);
  const [checkedLodgings, setCheckedLodgings] = useState(lodgings);

  // Set lodging array (local state) to be equal to checked lodging cards choosed by user
  const onCheckBoxGroupChange = (checked, value) => {
    if (checked) {
      !checkedLodgings.includes(value) &&
        setCheckedLodgings((prevState) => [...prevState, value]);
    } else {
      checkedLodgings.includes(value) &&
        setCheckedLodgings((prevState) =>
          prevState.filter((checkedValue) => checkedValue !== value),
        );
    }
  };

  // Set lodging array (global redux state) to be equal to checked lodging cards choosed by user
  useEffect(() => {
    checkedLodgings && dispatch(changeLodgings(checkedLodgings));
  }, [checkedLodgings]);

  return (
    <Layout height="411px" active={checkedLodgings.length}>
      <StyledH3>What kind of lodging are you looking for?</StyledH3>
      <StyledVertical mt="-28px">
        <StyledH4 color="gray.27" fontSize={5} mb="20px">
          Lodgin is the biggest factor in the proce of your tour
        </StyledH4>
        <StyledHorizontal>
          {tripLodgingCardsInfo.map(({ id, title, star, imgSrc }, index) => (
            <StyledLodgingCard
              key={title}
              mr={(index !== 0 || index !== 4) && '16px'}
            >
              <StyledImg width="100%" height="111px" src={imgSrc} />
              <StyledHorizontal>
                <StyledCheckbox
                  mt="6px"
                  ml="7px"
                  value={title}
                  key={id}
                  onChange={(e) =>
                    onCheckBoxGroupChange(e.target.checked, e.target.value)
                  }
                  checked={lodgings.includes(title)}
                />
                <StyledVertical>
                  <StyledH4 mt="7px" ml="8px" color="gray.24" fontSize={4}>
                    {title}
                  </StyledH4>
                  {star !== 0 && (
                    <StyledDiv mt="-15px" ml="8px">
                      <RateComponent defaultValue={star} isReadOnly />
                    </StyledDiv>
                  )}
                </StyledVertical>
              </StyledHorizontal>
            </StyledLodgingCard>
          ))}
        </StyledHorizontal>
      </StyledVertical>
    </Layout>
  );
};

export default LevelFour;
