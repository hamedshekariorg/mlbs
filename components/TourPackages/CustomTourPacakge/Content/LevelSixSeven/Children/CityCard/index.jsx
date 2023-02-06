import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledH4,
  StyledHorizontal,
  StyledSpan,
} from 'components/Common/commonStyles';
import Icon from 'components/Icon';
import { changeSelectedSearchResults } from 'store/customTourPackage/customTourPackage.action';
import {
  StyledCircle,
  StyledContainer,
  StyledDesc,
  StyledImage,
  StyledSquare,
} from './style';

const CityCard = ({ city, id, state, image }) => {
  const dispatch = useDispatch();

  const { selectedSearchResult } = useSelector(
    (state) => state?.customTourPackage,
  );
  const [selectedSearchResultIds, setSelectedResultIds] = useState(null);
  const [selected, setSelected] = useState(!!selectedSearchResultIds);

  useEffect(() => {
    setSelectedResultIds(
      selectedSearchResult.filter(({ resultId }) => resultId === id)[0],
    );
  }, []);

  useEffect(() => {
    setSelected(!!selectedSearchResultIds);
  }, [selectedSearchResultIds]);

  // add the selected result card to redux store OR remove it from the store
  const handleClick = () => {
    selected
      ? dispatch(
          changeSelectedSearchResults(
            selectedSearchResult.filter(({ resultId }) => resultId !== id),
          ),
        )
      : dispatch(
          changeSelectedSearchResults([
            ...selectedSearchResult,
            { city: city, state: state, resultId: id },
          ]),
        );
    setSelected((prevState) => !prevState);
  };

  return (
    <StyledContainer>
      <StyledImage src={image} selected={selected} />
      <StyledH4
        ml="16px"
        mt="12px"
        lineHeight="17px"
        letterSpacing="0.05em"
        color="blue.10"
      >
        {city}
      </StyledH4>
      <StyledHorizontal ml="16px" mt="-2px">
        <Icon name="icon-location" fontSize={8} color="gray.27" mr="5px" />
        <StyledSpan fontSize={2} color="gray.27" mt="2.5px">
          {state}
        </StyledSpan>
      </StyledHorizontal>
      <StyledCircle>
        <StyledSquare selected={selected} onClick={handleClick}>
          {selected && <Icon name="icon-confirm" color="#fff" fontSize={16} />}
        </StyledSquare>
      </StyledCircle>
      {selected && <StyledDesc>Learn more</StyledDesc>}
    </StyledContainer>
  );
};

export default CityCard;
