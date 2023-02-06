import { useDispatch, useSelector } from 'react-redux';
import { Radio } from 'antd';
import {
  StyledCol,
  StyledH3,
  StyledH5,
  StyledRow,
} from 'components/Common/commonStyles';
import { StyledRadio } from 'components/Common/Input/style';
import { changeTripGuidanceType } from 'store/customTourPackage/customTourPackage.action';
import { tripGuidanceTypeOptions } from 'utils/tourPackage.utils';
import { date } from 'yup';
import Layout from '../Layout';

const LevelThree = () => {
  const dispatch = useDispatch();
  const { tripGuidanceType } = useSelector((state) => state?.customTourPackage);

  // chnage the trip guidance type in redux store based on the chosen option by user
  const changeTripGuidanceTypeOption = (value) => {
    dispatch(changeTripGuidanceType(value));
  };

  return (
    <Layout height="382px" active={tripGuidanceType}>
      <StyledH3>What kind of trip are you looking for?</StyledH3>
      <Radio.Group defaultValue={tripGuidanceType}>
        <StyledRow gutter={[16, 10]} mt="-16px">
          {tripGuidanceTypeOptions.map((data) => (
            <StyledCol span={12}>
              <StyledRadio
                key={data.id}
                checked={tripGuidanceType === date.title}
                value={data.title}
                onChange={(e) => changeTripGuidanceTypeOption(e.target.value)}
              >
                {data.title}
                <br />
                <StyledH5
                  mt="4px"
                  color="gray.27"
                  mr="90px"
                  letterSpacing="0.04em"
                >
                  {data?.subtitle}
                </StyledH5>
              </StyledRadio>
            </StyledCol>
          ))}
        </StyledRow>
      </Radio.Group>
    </Layout>
  );
};

export default LevelThree;
