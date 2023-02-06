import {
  StyledDiv,
  StyledSearchTabs,
  StyledTabPane,
} from 'components/Common/commonStyles';
import { transportationTabItems } from 'utils/layout.utils';

const LayoutSearchTransportation = () => {
  const keys = Object.keys(transportationTabItems);
  return (
    <StyledDiv px="56px">
      <StyledSearchTabs defaultActiveKey={keys[0]}>
        {keys.map((key) => (
          <StyledTabPane key={key} tab={transportationTabItems[key].title}>
            {transportationTabItems[key]?.component}
          </StyledTabPane>
        ))}
      </StyledSearchTabs>
    </StyledDiv>
  );
};

export default LayoutSearchTransportation;
