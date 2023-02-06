import {
  StyledDiv,
  StyledSearchTabs,
  StyledTabPane,
} from 'components/Common/commonStyles';
import { tourGuideTabItems } from 'utils/layout.utils';

const LayoutSearchTourGuide = () => {
  const keys = Object.keys(tourGuideTabItems);
  return (
    <StyledDiv px="56px">
      <StyledSearchTabs defaultActiveKey={keys[0]}>
        {keys.map((key) => (
          <StyledTabPane key={key} tab={tourGuideTabItems[key].title}>
            {tourGuideTabItems[key]?.component}
          </StyledTabPane>
        ))}
      </StyledSearchTabs>
    </StyledDiv>
  );
};

export default LayoutSearchTourGuide;
