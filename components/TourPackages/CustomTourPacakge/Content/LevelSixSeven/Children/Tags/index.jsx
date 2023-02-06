import { useDispatch, useSelector } from 'react-redux';
import {
  StyledDivider,
  StyledH4,
  StyledHorizontal,
} from 'components/Common/commonStyles';
import Icon from 'components/Icon';
import { StyledContainer, TagContainer } from './style';
import {
  changeCitiesToVisitSearch,
  changeAttractionsToVisitSearch,
} from 'store/customTourPackage/customTourPackage.action';

const Tags = ({ type }) => {
  const dispatch = useDispatch();

  const { citiesToVisitSearchCities, attractionsToVisitSearchAttractions } =
    useSelector((state) => state?.customTourPackage);

  const activeList =
    type === 'city'
      ? citiesToVisitSearchCities
      : attractionsToVisitSearchAttractions;

  // remove city from list in the store
  const handleRemove = (cityTitle, cityId) => {
    if (type === 'city') {
      dispatch(
        changeCitiesToVisitSearch(
          citiesToVisitSearchCities.filter(
            ({ title, id }) => cityTitle !== title && cityId !== id,
          ),
        ),
      );
    } else {
      dispatch(
        changeAttractionsToVisitSearch(
          attractionsToVisitSearchAttractions.filter(
            ({ title, id }) => cityTitle !== title && cityId !== id,
          ),
        ),
      );
    }
  };

  return (
    <StyledContainer>
      {activeList.map(({ title, id }) => (
        <TagContainer mr="8px" mb="11px" key={id}>
          <StyledHorizontal
            height="100%"
            alignItems="center"
            justifyContent="center"
            width="auto"
            paddingLeft="12px"
          >
            <StyledH4 mr="8px" color="gray.27" mt="6px" textAlign="right">
              {title}
            </StyledH4>
            <StyledDivider type="vertical" height="100%" border="input" m="0" />
          </StyledHorizontal>
          <StyledHorizontal
            alignItems="center"
            justifyContent="center"
            mb={1}
            width="40px"
          >
            <Icon
              name="icon-cancel"
              color="red.3"
              fontSize={16}
              cursor="pointer"
              onClick={() => handleRemove(title, id)}
            />
          </StyledHorizontal>
        </TagContainer>
      ))}
    </StyledContainer>
  );
};

export default Tags;
