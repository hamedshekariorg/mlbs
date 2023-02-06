import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Spin } from 'antd';
import { getPolicyAction } from 'store/policy/policy.action';
import { StyledContainer } from './style';
import PolicyCard from './PolicyCard';

const PolicyGrid = ({ type }) => {
  const dispatch = useDispatch();

  const { loading, error, items } = useSelector(
    (state) => state?.policy?.policyList,
  );

  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    dispatch(getPolicyAction(type));
  }, []);

  useEffect(() => {
    items.length && setPolicies(items);
  }, [items]);

  return (
    <StyledContainer error={error} loading={loading}>
      {loading && !error && <Spin size="large" />}
      {error && (
        <Alert
          message="There was a problem fetching data, please try again later..."
          type="error"
          showIcon
        />
      )}
      {policies.length !== 0 &&
        policies?.map(({ id, title, subtitle, icon }, index) => (
          <PolicyCard
            position={index}
            key={id}
            id={id}
            title={title}
            subtitle={subtitle}
            icon={Object.values(icon)[0]}
          />
        ))}
    </StyledContainer>
  );
};

export default PolicyGrid;
