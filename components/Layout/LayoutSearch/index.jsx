import { StyledSearchContainer, StyledTabs } from './style';
import { tabItems, getTitle } from 'utils/layout.utils';
import { StyledTabPane } from 'components/Common/commonStyles';

const LayoutSearch = () => {
  const keys = Object.keys(tabItems);

  return (
    <StyledSearchContainer>
      <StyledTabs defaultActiveKey={keys[0]} type="card" tabBarGutter={0}>
        {keys.map((key) => (
          <StyledTabPane ml="10px" tab={getTitle(tabItems[key])} key={key}>
            {tabItems[key]?.component}
          </StyledTabPane>
        ))}
      </StyledTabs>
    </StyledSearchContainer>
  );
};

export default LayoutSearch;
