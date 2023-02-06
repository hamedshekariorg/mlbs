import { useRouter } from 'next/router';
import { Dropdown } from 'antd';
import {
  StyledHorizontal,
  StyledMenu,
  StyledText,
  StyledVertical,
  StyledMenuItem,
} from 'components/Common/commonStyles';
import Link from 'components/Link';
import NavbarHeader from './NavbarHeader';
import { navigationLinks } from 'utils/layout.utils';
import { StyledNavLinkContainer } from './style';

const Navbar = () => {
  const router = useRouter();
  const [, , ...paths] = router.pathname.split('/');
  const currentPath = '/' + paths.join('/');

  const menu = (subItems) => (
    <StyledMenu width="189px">
      {subItems.map(({ title, path }) => (
        <StyledMenuItem key={title} active={path === currentPath}>
          <Link href={path}>
            <span>{title}</span>
          </Link>
        </StyledMenuItem>
      ))}
    </StyledMenu>
  );

  return (
    <StyledVertical>
      <NavbarHeader />
      <StyledHorizontal>
        {navigationLinks.map(({ type, title, subItems, path }) =>
          type === 'dropdown' ? (
            <Dropdown
              key={title}
              overlay={menu(subItems)}
              placement="bottomLeft"
              arrow
            >
              <div>
                {path ? (
                  <StyledNavLinkContainer active={path === currentPath}>
                    <Link href={path}>
                      <StyledText>{title}</StyledText>
                    </Link>
                  </StyledNavLinkContainer>
                ) : (
                  <StyledNavLinkContainer active={path === currentPath}>
                    <StyledText color="gray.15">{title}</StyledText>
                  </StyledNavLinkContainer>
                )}
              </div>
            </Dropdown>
          ) : (
            <StyledNavLinkContainer key={path} active={currentPath === path}>
              <Link href={path}>
                <StyledText>{title}</StyledText>
              </Link>
            </StyledNavLinkContainer>
          ),
        )}
      </StyledHorizontal>
    </StyledVertical>
  );
};

export default Navbar;
