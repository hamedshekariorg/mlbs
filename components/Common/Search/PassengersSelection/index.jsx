import { useState } from 'react';
import { useTheme } from '@emotion/react';
import { Select } from 'antd';
import {
  StyledHorizontal,
  StyledImg,
  StyledSpan,
} from 'components/Common/commonStyles';
import { StyledSelect } from './style';
import plus from 'public/static/images/plus.svg';
import minus from 'public/static/images/minus.svg';
import user from 'public/static/images/user.svg';
import { PassengersSelectionOptions } from 'utils/search.utils';
const { Option } = Select;

const PassengersSelection = ({ tab }) => {
  const theme = useTheme();
  const [adultsCount, setAdultsCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);

  const increasePassengersQuaniity = (type, e) => {
    e.stopPropagation();
    switch (type) {
      case 'Adults':
        setAdultsCount((prevState) => prevState + 1);
        break;
      case 'Children':
        setChildrenCount((prevState) => prevState + 1);
        break;
      case 'Infants':
        setInfantCount((prevState) => prevState + 1);
        break;
      default:
        break;
    }
  };

  const decreasePassengersQuaniity = (type, e) => {
    e.stopPropagation();
    switch (type) {
      case 'Adults':
        adultsCount > 0 && setAdultsCount((prevState) => prevState - 1);
        break;
      case 'Children':
        childrenCount > 0 && setChildrenCount((prevState) => prevState - 1);
        break;
      case 'Infants':
        infantCount > 0 && setInfantCount((prevState) => prevState - 1);
        break;
      default:
        break;
    }
  };

  const configureType = (type) => {
    switch (type) {
      case 'Adults':
        return adultsCount;
      case 'Children':
        return childrenCount;
      case 'Infants':
        return infantCount;
      default:
        return adultsCount;
    }
  };

  return (
    <StyledSelect
      value={
        <StyledHorizontal justifyContent="space-evenly">
          <StyledSpan>{adultsCount} Adults</StyledSpan>
          <StyledSpan>{childrenCount} Children</StyledSpan>
          <StyledSpan>{infantCount} Infants</StyledSpan>
        </StyledHorizontal>
      }
      placeholder={
        <StyledSpan>
          <StyledImg
            src={user}
            color="gray.13"
            fontSize={7}
            mr="10px"
            mb="6px"
          />
          Passengers
        </StyledSpan>
      }
      borderRadius={theme.radii.lg}
      showSearch={false}
    >
      {PassengersSelectionOptions.map(({ title, id }) => (
        <Option key={id}>
          <StyledHorizontal
            flexDirection="row-reverse"
            justifyContent="space-between"
          >
            <StyledSpan>{title}</StyledSpan>
            <StyledHorizontal
              width="40%"
              flexDirection="row-reverse"
              alignItems="center"
              justifyContent="space-between"
            >
              <StyledSpan onClick={(e) => decreasePassengersQuaniity(title, e)}>
                <StyledImg src={minus} />
              </StyledSpan>
              <StyledSpan>{configureType(title)}</StyledSpan>
              <StyledSpan onClick={(e) => increasePassengersQuaniity(title, e)}>
                <StyledImg src={plus} />
              </StyledSpan>
            </StyledHorizontal>
          </StyledHorizontal>
        </Option>
      ))}
    </StyledSelect>
  );
};

export default PassengersSelection;
