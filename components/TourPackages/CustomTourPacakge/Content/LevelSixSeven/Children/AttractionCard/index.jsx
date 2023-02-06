import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckOutlined } from '@ant-design/icons';
import {
  StyledDiv,
  StyledH4,
  StyledH5,
  StyledHorizontal,
} from 'components/Common/commonStyles';
import Rate from 'components/Common/Rate';
import Icon from 'components/Icon';
import { changeSelectedAttractionsSearchResults } from 'store/customTourPackage/customTourPackage.action';
import { StyledCircle, StyledContainer, StyledSquare } from './style';

const AttractionCard = ({ title, id, image, rate, city }) => {
  const dispatch = useDispatch();

  const { selectedAttractions } = useSelector(
    (state) => state?.customTourPackage,
  );

  const [selectedIds, setSelectedIds] = useState(null);
  const [selected, setSelected] = useState(!!selectedIds);

  useEffect(() => {
    setSelectedIds(
      selectedAttractions.filter(({ resultId }) => resultId === id)[0],
    );
  }, []);

  useEffect(() => {
    setSelected(!!selectedIds);
  }, [selectedIds]);

  // add the selected attraction card to redux store OR remove it from the store
  const handleClick = () => {
    selected
      ? dispatch(
          changeSelectedAttractionsSearchResults(
            selectedAttractions.filter(({ resultId }) => resultId !== id),
          ),
        )
      : dispatch(
          changeSelectedAttractionsSearchResults([
            ...selectedAttractions,
            { city: city, rate: rate, resultId: id, title: title },
          ]),
        );
    setSelected((prevState) => !prevState);
  };
  return (
    <StyledContainer selected={selected} src={image}>
      <div className="overlay">
        <StyledH5 id="city" selected={selected}>
          {city}
        </StyledH5>
        <StyledH4 id="title">{title}</StyledH4>
        <StyledHorizontal id="more" selected={selected}>
          Learn More
        </StyledHorizontal>
        <StyledDiv mt="-14px" className="rate">
          <Rate defaultValue={rate} isReadOnly={true} />
        </StyledDiv>
        <StyledHorizontal
          width="100%"
          height="48px"
          justifyContent={selected ? 'space-between' : 'flex-end'}
        >
          <StyledCircle>
            <StyledSquare selected={selected} onClick={handleClick}>
              {selected && (
                <Icon name="icon-confirm" color="#fff" fontSize={16} />
              )}
            </StyledSquare>
          </StyledCircle>
        </StyledHorizontal>
      </div>
    </StyledContainer>
  );
};

export default AttractionCard;
