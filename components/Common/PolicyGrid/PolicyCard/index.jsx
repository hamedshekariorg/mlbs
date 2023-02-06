import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailedPolicyAction } from 'store/policy/policy.action';
import { StyledH3, StyledImg } from 'components/Common/commonStyles';
import ModalGenerator from 'components/Common/PolicyGrid/PolicyModalGenerator';
import { StyledContainer } from './style';

const PolicyCard = ({ id, title, subtitle, icon, position }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [index, setIndex] = useState(position);

  const allPolicies = useSelector((state) => state?.policy?.policyList);
  const { items } = useSelector((state) => state?.policy?.policyDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailedPolicyAction(id));
  }, [isModalVisible]);

  // get the next policy's information in the array
  const handleNext = () => {
    const nextId = allPolicies.items[index + 1]?.id;
    dispatch(getDetailedPolicyAction(nextId));
    setIndex(index + 1);
  };

  // get the previous policy's information in the array
  const handlePrev = () => {
    const prevId = allPolicies.items[index - 1]?.id;
    dispatch(getDetailedPolicyAction(prevId));
    setIndex(index - 1);
  };

  return (
    <StyledContainer onClick={() => setIsModalVisible(true)}>
      <StyledImg src={icon} />
      <StyledH3
        fontSize={6}
        fontWeight={6}
        lineHeight="17px"
        textAlign="center"
        color="gray.15"
      >
        {title}
      </StyledH3>
      <StyledH3
        fontSize={3}
        fontWeight={5}
        lineHeight="14px"
        textAlign="center"
        color="gray.27"
        mr={5}
        ml={5}
      >
        {subtitle}
      </StyledH3>
      <ModalGenerator
        setVisible={setIsModalVisible}
        visible={isModalVisible}
        key={items?.id}
        title={items?.title}
        description={items?.description}
        handleNext={handleNext}
        hasNext={
          allPolicies.items[allPolicies.items.length - 1]?.id === items?.id
            ? false
            : true
        }
        handlePrev={handlePrev}
        hasPrev={allPolicies.items[0]?.id === items?.id ? false : true}
      />
    </StyledContainer>
  );
};

export default PolicyCard;
