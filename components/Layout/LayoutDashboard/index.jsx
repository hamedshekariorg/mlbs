import { useState } from 'react';
import {
  StyledDiv,
  StyledLayout,
  StyledText,
  StyledContent,
} from 'components/Common/commonStyles';
import Icon from 'components/Icon';
import { StyledTrigger, StyledLeftSider, StyledRightSider } from './style';
import Navigation from './Navigation';
import Header from './Header';
import Description from './Description';
import AuthGuard from 'guards/AuthGuard';

const LayoutDashboard = ({ children }) => {
  const [collapsedLSider, setCollapsedLSider] = useState(false);
  const [collapsedRSider, setCollapsedRSider] = useState(false);

  return (
    <AuthGuard>
      <StyledLayout minHeight="100vh" hasSider>
        <StyledLeftSider
          collapsed={collapsedLSider}
          width="222px"
          collapsedWidth="89px"
          trigger={null}
        >
          <Navigation collapsed={collapsedLSider} />
          <StyledDiv textAlign="center" my="5px" position="relative">
            {!collapsedLSider && (
              <StyledText
                fontWeight={7}
                fontSize={2}
                lineHeight={2}
                color="blue.41"
              >
                Invite a friend <br />
                Give us Feedback
              </StyledText>
            )}
            <StyledTrigger
              icon={<Icon name="icon-chevron-right" fontSize={12} />}
              onClick={() => setCollapsedLSider((prev) => !prev)}
              collapsed={collapsedLSider}
            />
          </StyledDiv>
        </StyledLeftSider>
        <StyledLayout marginLeft={collapsedLSider ? '89px' : '222px'}>
          <Header collapsedRSider={() => setCollapsedRSider((prev) => !prev)} />
          <StyledContent p="32px 65px" background="#fff">
            {children}
          </StyledContent>
        </StyledLayout>
        <StyledRightSider
          collapsed={collapsedRSider}
          trigger={null}
          width="320px"
          collapsedWidth="0"
        >
          <Description />
        </StyledRightSider>
      </StyledLayout>
    </AuthGuard>
  );
};

export default LayoutDashboard;
