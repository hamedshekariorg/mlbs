import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { userProfileItems } from 'utils/layout.utils';
import useAuthModal from 'hooks/useAuthModal';
import { Dropdown, Space } from 'antd';
import {
  StyledAvatar,
  StyledDivider,
  StyledHorizontal,
  StyledLink,
  StyledText,
  StyledVertical,
} from 'components/Common/commonStyles';
import Link from 'components/Link';
import Icon from 'components/Icon';
import { getLogoutAction, getProfileAction } from 'store/auth/auth.action';
import { images } from 'utils/images.utils';
import { StyledMenu, StyledMenuItem } from 'components/Common/commonStyles';

const AccountDetails = () => {
  const { t } = useTranslation();
  const { onOpen } = useAuthModal();
  const { profile, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(getLogoutAction());

  useEffect(() => {
    token && dispatch(getProfileAction());
  }, [token]);

  const menu = (
    <StyledMenu width="189px">
      <StyledVertical p="16px">
        <StyledHorizontal justifyContent="space-between" py="11px">
          <StyledText fontSize={1} color="gray.27">
            {t('MenuNav_mycredit')}
          </StyledText>
          <StyledText color="green.7" fontSize={4}>
            2,500 $
          </StyledText>
        </StyledHorizontal>
        <StyledHorizontal justifyContent="space-between" py="11px">
          <StyledText fontSize={1} color="gray.27">
            {t('MenuNav_mypoint')}
          </StyledText>
          <StyledText fontSize={4} color="green.7">
            3,5000 pts
          </StyledText>
        </StyledHorizontal>
      </StyledVertical>
      <StyledDivider my="8px" />

      {userProfileItems?.map(({ title, path, icon }) => (
        <StyledMenuItem key={path}>
          {icon}
          <Link href={path}>{title}</Link>
        </StyledMenuItem>
      ))}
      <StyledDivider my="8px" />
      <StyledMenuItem onClick={handleLogout}>
        <Icon fontSize={12} mr="16px" name="icon-logout" />
        {t('MenuNav_logout')}
      </StyledMenuItem>
    </StyledMenu>
  );

  return (
    <StyledHorizontal ml="auto">
      {token ? (
        <Dropdown placement="bottomRight" arrow overlay={menu}>
          <StyledAvatar size={49} src={profile?.data?.image || images.user} />
        </Dropdown>
      ) : (
        <Space size={12}>
          <StyledLink onClick={() => onOpen('register')}>
            <StyledText fontSize={2} color="gray.15">
              Sign Up
            </StyledText>
          </StyledLink>
          <StyledDivider type="vertical" borderColor="gray.15" />
          <StyledLink onClick={() => onOpen('login')}>
            <StyledText fontSize={2} color="gray.15">
              Login
            </StyledText>
          </StyledLink>
        </Space>
      )}
    </StyledHorizontal>
  );
};

export default AccountDetails;
