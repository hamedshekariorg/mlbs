import { useSelector } from 'react-redux';
import { membersPositions } from 'utils/aboutUs';
import {
  StyledCol,
  StyledDiv,
  StyledRow,
} from 'components/Common/commonStyles';
import MemberCard from 'components/Common/MemberCard';
import { StyledTabs } from './style';
import Pagination from 'components/Common/Pagination';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const TeamContainer = () => {
  const { items, total } = useSelector((state) => state.aboutUs.team);

  return (
    <StyledTabs defaultActiveKey="1">
      {membersPositions.map((position) => (
        <TabPane tab={position} key={position}>
          <StyledRow>
            {items?.map(({ id, name, title, image, description }, index) => (
              <StyledCol span={6} key={id} py="16px" px="8px">
                <MemberCard
                  index={index}
                  image={image}
                  name={name}
                  title={title}
                />
              </StyledCol>
            ))}
          </StyledRow>
          <StyledDiv display="flex" justifyContent="center" mt="40px">
            <Pagination pageSize={10} total={total} />
          </StyledDiv>
        </TabPane>
      ))}
    </StyledTabs>
  );
};

export default TeamContainer;
