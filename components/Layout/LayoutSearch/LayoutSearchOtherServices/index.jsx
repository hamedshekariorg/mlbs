import {
  StyledDiv,
  StyledSearchTabs,
  StyledTabPane,
} from 'components/Common/commonStyles';
import { otherServicesTabItems } from 'utils/layout.utils';

const LayoutSearchOtherServices = () => {
  const keys = Object.keys(otherServicesTabItems);
  return (
    <StyledDiv px="56px">
      <StyledSearchTabs defaultActiveKey={keys[0]}>
        {keys.map((key) => (
          <StyledTabPane key={key} tab={otherServicesTabItems[key].title}>
            {otherServicesTabItems[key]?.component}
          </StyledTabPane>
        ))}
      </StyledSearchTabs>
    </StyledDiv>
  );
};

export default LayoutSearchOtherServices;
