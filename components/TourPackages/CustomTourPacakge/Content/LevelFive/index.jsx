import { useDispatch, useSelector } from 'react-redux';
import {
  StyledH3,
  StyledH4,
  StyledH5,
  StyledHorizontal,
  StyledSpan,
  StyledVertical,
} from 'components/Common/commonStyles';
import { StyledOption } from 'components/Common/Input/style';
import { changeBudgetPerPerson } from 'store/customTourPackage/customTourPackage.action';
import { budgetValidValues } from 'utils/tourPackage.utils';
import Layout from '../Layout';
import { StyledSelect } from './style';

const LevelFive = () => {
  const dispatch = useDispatch();
  const { budgetPerPerson } = useSelector((state) => state?.customTourPackage);

  // Set budget per person to be equal to selected budget by user
  const onSelectChange = (value) => {
    dispatch(changeBudgetPerPerson(value));
  };
  return (
    <Layout height="293px" active={budgetPerPerson}>
      <StyledH3 mb="32px">How much is your budget per person?</StyledH3>
      <StyledVertical mt="-36px">
        <StyledH4 color="gray.27" fontSize={5} mb="20px">
          Excluding international airfare (many people like to book this
          directly)
        </StyledH4>
        <StyledHorizontal alignItems="center">
          <StyledSelect
            value={budgetPerPerson}
            placeholder="Type or select a number"
            optionFilterProp="children"
            showSearch
            onChange={onSelectChange}
            filterOption={(input, option) =>
              option.value
                .toString()
                .toLowerCase()
                .includes(input.toLowerCase())
            }
          >
            {budgetValidValues.map(({ value, title }) => (
              <StyledOption value={value} key={value}>
                {title}
              </StyledOption>
            ))}
          </StyledSelect>
          <StyledSpan color="gray.27" fontSize={9}>
            ${' '}
            <StyledSpan color="gray.47" fontSize={4}>
              / Person
            </StyledSpan>
          </StyledSpan>
        </StyledHorizontal>
        <StyledH5 color="gray.47" lineHeight="13px" mt={2}>
          Minimum amount: 500 $
        </StyledH5>
      </StyledVertical>
    </Layout>
  );
};

export default LevelFive;
