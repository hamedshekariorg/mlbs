import { Tabs } from 'antd';
import { StyledTabPane } from 'components/Common/commonStyles';
import Passengers from './Passengers';
import MyProfile from './MyProfile';
import ChangePassword from './ChangePassword';
const Profile = () => {
  return (
    <Tabs defaultActiveKey="1">
      <StyledTabPane tab="My profile" key="1" p="43px 5px">
        <MyProfile />
      </StyledTabPane>
      <StyledTabPane tab="Passengers" key="2" p="43px 5px">
        <Passengers />
      </StyledTabPane>
      <StyledTabPane tab="Change Password" key="3" p="43px 5px">
        <ChangePassword />
      </StyledTabPane>
    </Tabs>
  );
};

export default Profile;
