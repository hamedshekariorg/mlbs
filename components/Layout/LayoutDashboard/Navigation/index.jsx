import { useRouter } from 'next/router';
import Link from 'components/Link';
import {
  StyledDivider,
  StyledImg,
  StyledText,
  StyledVertical,
} from 'components/Common/commonStyles';
import { StyledMenu, StyledMenuItem } from './style';
import { MenuItems } from 'utils/dashboard.utils';

const Navigation = ({ collapsed }) => {
  const router = useRouter();

  const [space, locale, ...path] = router.pathname.split('/');
  const pathname = '/' + path.join('/');
  return (
    <>
      <StyledVertical py="10px" alignItems="center">
        <StyledImg
          src="/static/images/layout/logo.svg"
          width="31px"
          height="54px"
        />
        {!collapsed && (
          <StyledText color="#fff" fontWeight={8} mt="17px">
            Charming persian
          </StyledText>
        )}
      </StyledVertical>

      <StyledMenu>
        {MenuItems.map((item, index) =>
          item === 'divider' ? (
            <StyledDivider
              key={`${item + index}`}
              width="158px"
              minWidth="158px"
              m="5px auto"
              borderColor="gray.49"
            />
          ) : (
            <StyledMenuItem
              key={item.path}
              active={item.path === pathname}
              collapsed={collapsed}
            >
              {item.icon}
              <Link href={item.path}>{item.title}</Link>
            </StyledMenuItem>
          ),
        )}
      </StyledMenu>
    </>
  );
};

export default Navigation;
