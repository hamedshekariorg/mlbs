import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Checkbox } from 'antd';
import {
  StyledCol,
  StyledH3,
  StyledH4,
  StyledRow,
  StyledVertical,
  StyledCheckbox,
} from 'components/Common/commonStyles';
import { StyledOption } from 'components/Common/Input/style';
import {
  changeTravelerAges,
  changeTravelersCount,
} from 'store/customTourPackage/customTourPackage.action';
import { ageOptions } from 'utils/tourPackage.utils';
import Layout from '../Layout';
import { StyledSelect } from './style';

const LevelOne = () => {
  const dispatch = useDispatch();
  const { travelersCount, travelersAgeRanges } = useSelector(
    (state) => state?.customTourPackage,
  );

  const [height, setHeight] = useState(
    travelersAgeRanges.length ? '422px' : '267px',
  );

  useEffect(() => {
    travelersCount && setHeight('422px');
  }, [travelersCount]);

  // Set travelers number to be equal to selected digit by user
  const onSelectChange = (value) => {
    dispatch(changeTravelersCount(value));
    !travelersAgeRanges.length && setHeight('442px');
  };

  // Set ages to be equal to checked age ranges choosed by user
  const onCheckBoxGroupChange = (checkedValues) => {
    dispatch(changeTravelerAges(checkedValues));
  };

  return (
    <Layout height={height} active={travelersAgeRanges.length} prevStep={true}>
      <StyledH3>Who is traveling?</StyledH3>
      <StyledVertical mt="-8px">
        <StyledH4 color="gray.27" fontSize={5}>
          Select the total number of travelers
        </StyledH4>
        <StyledSelect
          value={travelersCount}
          placeholder="Type or select a number"
          optionFilterProp="children"
          showSearch
          onChange={onSelectChange}
          filterOption={(input, option) =>
            option.value.toString().toLowerCase().includes(input.toLowerCase())
          }
        >
          {[...Array(11).keys()].map(
            (num) =>
              num !== 0 && (
                <StyledOption value={num} key={num}>
                  {num === 10 && '+'}
                  {num}
                </StyledOption>
              ),
          )}
        </StyledSelect>
        {travelersCount && (
          <>
            <StyledH4 color="gray.27" fontSize={5} mt="32px" mb="8px">
              Select the ages of all your Travel Companions.
            </StyledH4>
            <Checkbox.Group
              onChange={onCheckBoxGroupChange}
              defaultValue={travelersAgeRanges}
            >
              <StyledRow gutter={[0, 24]}>
                {ageOptions.map((ageRange) => (
                  <StyledCol span={8} key={ageRange}>
                    <StyledCheckbox value={ageRange}>{ageRange}</StyledCheckbox>
                  </StyledCol>
                ))}
              </StyledRow>
            </Checkbox.Group>
          </>
        )}
      </StyledVertical>
    </Layout>
  );
};

export default LevelOne;
