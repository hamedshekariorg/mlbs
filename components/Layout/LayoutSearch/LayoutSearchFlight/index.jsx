import {
  StyledDiv,
  StyledSearchTabs,
  StyledTabPane,
} from 'components/Common/commonStyles';
import { flightTabItems } from 'utils/layout.utils';

const LayoutSearchFlight = () => {
  const keys = Object.keys(flightTabItems);
  return (
    <StyledDiv px="56px">
      <StyledSearchTabs defaultActiveKey={keys[0]}>
        {keys.map((key) => (
          <StyledTabPane
            key={key}
            tab={flightTabItems[key].title}
            width="100%"
            height="100%"
          >
            {flightTabItems[key]?.component}
          </StyledTabPane>
        ))}
      </StyledSearchTabs>
    </StyledDiv>
  );
};

export default LayoutSearchFlight;
