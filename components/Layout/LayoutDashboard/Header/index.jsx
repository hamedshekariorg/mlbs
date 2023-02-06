import { useRouter } from 'next/router';
import { Badge } from 'antd';
import Button from 'components/Common/Button';
import {
  StyledBreadcrumb,
  StyledBreadcrumbItem,
  StyledHorizontal,
} from 'components/Common/commonStyles';
import { Input } from 'components/Common/Input';
import Icon from 'components/Icon';
import { StyledBellOutlined, StyledHeader } from './style';

const Header = ({ collapsedRSider }) => {
  const router = useRouter();
  const pathname = router.pathname.split('/');
  const [, , ...paths] = pathname;

  return (
    <StyledHeader>
      <StyledHorizontal justifyContent="space-between">
        <StyledBreadcrumb separator=">" m="16px 0">
          {paths?.map((name) => (
            <StyledBreadcrumbItem key={name}>{name}</StyledBreadcrumbItem>
          ))}
        </StyledBreadcrumb>
        <StyledHorizontal alignItems="center">
          <Input
            width="229px"
            height="36px"
            placeholder="Search"
            prefix={<Icon name="icon-search" color="gray.47" fontSize={10} />}
            mr="36px"
          />
          <Badge dot>
            <StyledBellOutlined />
          </Badge>
          <Button
            ml="20px"
            height="32px"
            btnType="text"
            onClick={collapsedRSider}
            icon={<Icon name="icon-chevron-left" fontSize={12} />}
          />
        </StyledHorizontal>
      </StyledHorizontal>
    </StyledHeader>
  );
};

export default Header;
