import {
  space,
  color,
  layout,
  border,
  flexbox,
  position,
  shadow,
  typography,
  fontSize,
  background,
  borderColor,
  grid,
} from 'styled-system';
import styled from '@emotion/styled';
import { system, compose } from 'styled-system';
import {
  Col,
  Divider,
  Form,
  Row,
  Typography,
  Space,
  Switch,
  Layout,
  Breadcrumb,
  Tabs,
  Checkbox,
  Avatar,
  Tag,
  AutoComplete,
  Alert,
  Input,
  Menu,
  Select,
  DatePicker,
} from 'antd';

const { Link, Paragraph } = Typography;
const { Content } = Layout;
const { TabPane } = Tabs;

const Compose = compose(
  space,
  color,
  layout,
  border,
  flexbox,
  position,
  shadow,
  typography,
  background,
  grid,
  fontSize,
  borderColor,
  system({
    textDecoration: true,
  }),
);

const commonStyle = (component, style = '') => styled(component)`
  ${style}
  ${Compose}
`;

export const StyledCol = commonStyle(Col);
export const StyledRow = commonStyle(Row);
export const StyledTypography = commonStyle(Typography);
export const StyledAvatar = commonStyle(Avatar);
export const StyledText = commonStyle(Typography.Text);
export const StyledDivider = commonStyle(Divider);
export const StyledFormItem = commonStyle(Form.Item);
export const StyledLink = commonStyle(Link);
export const StyledParagraph = commonStyle(Paragraph);
export const StyledDiv = commonStyle('div');
export const StyledSpan = commonStyle('span');
export const StyledP = commonStyle('p');
export const StyledH1 = commonStyle('h1');
export const StyledH2 = commonStyle('h2');
export const StyledH3 = commonStyle('h3');
export const StyledH4 = commonStyle('h4');
export const StyledH5 = commonStyle('h5');
export const StyledButton = commonStyle('button');
export const StyledImg = commonStyle('img');
export const StyledA = commonStyle('a');
export const StyledSwitch = commonStyle(Switch);
export const StyledLayout = commonStyle(Layout);
export const StyledContent = commonStyle(Content);
export const StyledBreadcrumb = commonStyle(Breadcrumb);
export const StyledBreadcrumbItem = commonStyle(Breadcrumb.Item);
export const StyledTabPane = commonStyle(TabPane);
export const StyledSpace = commonStyle(Space);
export const StyledTag = commonStyle(Tag);
export const StyledAutoComplete = commonStyle(AutoComplete);
export const StyledSelect = styled(Select)`
  height: 44px;
  width: 100%;
  .ant-select-selector {
    ${border}
    height: 44px !important;
    > span {
      line-height: 44px !important;
    }
  }
`;
export const StyledDateInput = commonStyle(DatePicker);
export const StyledAlert = commonStyle(Alert);

export const StyledHorizontal = styled(StyledDiv)`
  display: flex;
  flex-direction: row;
`;

export const StyledVertical = styled(StyledDiv)`
  display: flex;
  flex-direction: column;
`;

export const StyledTabs = styled(Tabs)`
  .ant-tabs-nav-list {
    width: fit-content !important;
  }
`;

export const StyledSearchTabs = styled(Tabs)`
  direction: ltr;
  .ant-tabs-tab-btn {
    font-size: ${({ theme }) => theme.fontSizes[4]};
    color: ${({ theme }) => theme.colors.orange[13]};
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    background-color: #fff !important;
    color: ${({ theme }) => theme.colors.blue[10]} !important;
  }
  .ant-tabs-ink-bar {
    background: ${({ theme }) => theme.colors.blue[10]};
  }
  .ant-tabs-tab.ant-tabs-tab-active {
    background-color: #fff !important;
  }
  .ant-tabs-nav-list {
    width: auto;
  }
`;

export const StyledCheckbox = commonStyle(
  Checkbox,
  ` .ant-checkbox-checked .ant-checkbox-inner {
  background-color: ${({ theme }) => theme.colors.blue[10]};
  border-color: ${({ theme }) => theme.colors.blue[10]};
}`,
);

export const StyledPassInput = styled(Input.Password)`
  height: 44px;
  border-radius: ${({ theme }) => theme.radii.lg};
  ${space}
  ${color}
  ${layout}
  ${border}
  ${flexbox}
  ${position}
  ${shadow}
  ${typography}
`;
export const StyledMenu = styled(Menu)`
  border-radius: 5px;
  ${layout}
`;
export const StyledMenuItem = styled(Menu.Item)`
  align-items: center;
  padding: 10px 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    padding: 10px 15px;
    a {
      color: ${({ theme }) => theme.colors.orange[7]} !important;
    }
    background-color: ${({ theme }) => theme.colors.gray[1]};
  }

  a {
    color: ${({ theme, active }) =>
      active ? theme.colors.orange[7] : theme.colors.gray[15]} !important;
  }
  background-color: ${({ theme, active }) =>
    active ? theme.colors.gray[1] : '#fff'};
`;
