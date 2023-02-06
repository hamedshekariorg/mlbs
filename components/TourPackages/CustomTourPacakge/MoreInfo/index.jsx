import {
  StyledH4,
  StyledH5,
  StyledVertical,
} from 'components/Common/commonStyles';
import { useSelector } from 'react-redux';
import { tourTutorialSteps } from 'utils/tourPackage.utils';
import { StyledInfoContainer } from './style';
import TourSummary from './TourSummary';

const MoreInfo = () => {
  const { step } = useSelector((state) => state.customTourPackage);

  return step === 0 ? (
    <StyledVertical>
      <StyledInfoContainer>
        <StyledH4 color="gray.15" alignSelf="center">
          How it works
        </StyledH4>
        {tourTutorialSteps.map(({ desc, id }, index) => (
          <StyledH5 color="gray.27" key={id}>
            {++index}.{desc}
          </StyledH5>
        ))}
      </StyledInfoContainer>
      <StyledH4
        textDecoration="underline"
        textAlign="center"
        mt={24}
        color="blue.10"
        fontWeight={6}
        letterSpacing="0.05em"
      >
        TourPackage-Request Policy
      </StyledH4>
    </StyledVertical>
  ) : (
    <TourSummary />
  );
};

export default MoreInfo;
