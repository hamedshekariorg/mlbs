import { useDispatch, useSelector } from 'react-redux';
import { StyledH3, StyledHorizontal } from 'components/Common/commonStyles';
import { StyledRadio } from 'components/Common/Input/style';
import { changeTourType } from 'store/customTourPackage/customTourPackage.action';
import {
  privateTourTypeContent,
  publicTourTypeContent,
} from 'utils/tourPackage.utils';
import Layout from '../Layout';
import { StyledParagraph, StyledTypeBox } from './style';

const StepOne = () => {
  const dispatch = useDispatch();
  const { tourType } = useSelector((state) => state?.customTourPackage);

  // changes the state of the tourType (in the store) based on selected radio by user
  const toggleType = (val) => dispatch(changeTourType(val));

  return (
    <Layout active={tourType !== null} height="446px">
      <StyledH3>Choose your TourPackage type</StyledH3>
      <StyledHorizontal justifyContent="center" mt="-24px">
        <StyledTypeBox mr="8px" active={tourType === 'private'}>
          <StyledRadio
            mt="14px"
            mb="16px"
            checked={tourType === 'private'}
            value="private"
            onChange={(e) => toggleType(e.target.value)}
          >
            Private
          </StyledRadio>
          <StyledParagraph
            dangerouslySetInnerHTML={{ __html: privateTourTypeContent }}
          />
        </StyledTypeBox>
        <StyledTypeBox ml="8px" active={tourType === 'public'}>
          <StyledRadio
            mt="14px"
            mb="16px"
            checked={tourType === 'public'}
            value="public"
            onChange={(e) => toggleType(e.target.value)}
          >
            Public
          </StyledRadio>
          <StyledParagraph
            dangerouslySetInnerHTML={{ __html: publicTourTypeContent }}
          />
        </StyledTypeBox>
      </StyledHorizontal>
    </Layout>
  );
};

export default StepOne;
