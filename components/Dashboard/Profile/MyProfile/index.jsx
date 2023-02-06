import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditForm } from './EditForm';
import { UserInfo } from './UserInfo';
import ConatinerCard from 'components/Dashboard/components/ContainerCard';
import { getProfileAction } from 'store/auth/auth.action';
const MyProfile = () => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.auth.editProfile);
  const [isEditMode, setIsEditMode] = useState(false);
  useEffect(() => {
    dispatch(getProfileAction());
  }, [isEditMode]);
  useEffect(() => {
    success && setIsEditMode(false);
  }, [success]);

  const renderComponent = isEditMode ? (
    <EditForm changeMode={() => setIsEditMode(false)} />
  ) : (
    <UserInfo changeMode={() => setIsEditMode(true)} />
  );

  return <ConatinerCard>{renderComponent}</ConatinerCard>;
};

export default MyProfile;
