import { attractionTabItems } from 'utils/layout.utils';
import {
  StyledDiv,
  StyledSearchTabs,
  StyledTabPane,
} from 'components/Common/commonStyles';

const LayoutSearchAttraction = () => {
  const keys = Object.keys(attractionTabItems);
  return (
    <StyledDiv px="56px">
      <StyledSearchTabs defaultActiveKey={keys[0]}>
        {keys.map((key) => (
          <StyledTabPane key={key} tab={attractionTabItems[key].title}>
            {attractionTabItems[key]?.component}
          </StyledTabPane>
        ))}
      </StyledSearchTabs>
    </StyledDiv>
  );
};

export default LayoutSearchAttraction;
