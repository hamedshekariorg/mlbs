import {
  StyledDiv,
  StyledSearchTabs,
  StyledTabPane,
} from 'components/Common/commonStyles';
import { tourPackageTabItems } from 'utils/layout.utils';

const LayoutSearchTourPackage = () => {
  const keys = Object.keys(tourPackageTabItems);
  return (
    <StyledDiv px="56px">
      <StyledSearchTabs defaultActiveKey={keys[0]}>
        {keys.map((key) => (
          <StyledTabPane key={key} tab={tourPackageTabItems[key].title}>
            {tourPackageTabItems[key]?.component}
          </StyledTabPane>
        ))}
      </StyledSearchTabs>
    </StyledDiv>
  );
};

export default LayoutSearchTourPackage;
