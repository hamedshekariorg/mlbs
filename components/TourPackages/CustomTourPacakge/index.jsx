import { Steps } from 'antd';
import { StyledHorizontal } from 'components/Common/commonStyles';
import { useSelector } from 'react-redux';
import { customTourRequestSteps } from 'utils/tourPackage.utils';
import Done from './Done';
import Experiences from './Experiences';
import MoreInfo from './MoreInfo';
import Content from './Content';
import { StyledContainer } from './style';

const { Step } = Steps;

const CustomTour = () => {
  const { step, done } = useSelector((state) => state?.customTourPackage);
  if (done) return <Done />;
  return (
    <StyledContainer>
      <Steps current={step} labelPlacement="vertical">
        {customTourRequestSteps.map(({ title, id }) => (
          <Step title={title} key={id} />
        ))}
      </Steps>
      <StyledHorizontal justifyContent="space-between" width="100%" mt={24}>
        <Content />
        <MoreInfo />
      </StyledHorizontal>
      <Experiences />
    </StyledContainer>
  );
};

export default CustomTour;
