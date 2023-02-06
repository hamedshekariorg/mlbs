import {
  StyledCol,
  StyledDiv,
  StyledDivider,
  StyledRow,
  StyledSpan,
  StyledH3,
  StyledText,
  StyledHorizontal,
} from 'components/Common/commonStyles';
import {
  StyledInput,
  StyledInputGroup,
  StyledContainer,
  StyledButton,
} from './style';
import Icon from 'components/Icon';
import { Space } from 'antd';
import { contactUs, usefulLinks } from 'utils/layout.utils';
import Link from 'components/Link';
const LayoutFooter = () => {
  return (
    <StyledContainer px={10} pt={9} pb={3}>
      <StyledRow>
        <StyledCol span={12}>
          <StyledHorizontal alignItems="center">
            <img
              src="/static/images/landingPage/charming-logo.svg"
              alt="logo"
            />
            <StyledSpan ml={2} color="#fff">
              CHARMING PERSIAN
              <br />
              魅力波斯
            </StyledSpan>
          </StyledHorizontal>
          <StyledDiv mt={5}>
            What color do you think Iran is? Charm Persia, a platform dedicated
            to Iranian freelancers, where you can find the most suitable place
            to stay for you, the most beautiful local restaurant, the best time
            and place to shoot at various attractions, and then there is an
            introduction to Chinese attractions to make you correct Unlock the
            charm culture of the ancient Persian country and enjoy traveling!
          </StyledDiv>
        </StyledCol>

        <StyledCol span={12}>
          <StyledRow>
            <StyledCol span={8} offset={8}>
              <StyledH3 mb={5} fontSize={9} color="#fff">
                Useful Links
              </StyledH3>
              <ul>
                {usefulLinks.map(({ title, path }) => (
                  <li key={title}>
                    <Link href={path}>
                      <StyledText fontSize={6} color="#fff">
                        {title}
                      </StyledText>
                    </Link>
                  </li>
                ))}
              </ul>
            </StyledCol>
            <StyledCol span={8}>
              <StyledH3 mb={5} color="#fff" fontSize={9}>
                Contact Us
              </StyledH3>
              <ul>
                {contactUs.map(({ item, icon }) => (
                  <li key={item}>
                    {icon}
                    <StyledSpan fontSize={6}>{item}</StyledSpan>
                  </li>
                ))}
              </ul>
            </StyledCol>
          </StyledRow>
        </StyledCol>
      </StyledRow>
      <StyledDiv display="flex" justifyContent="end" mt={9}>
        <StyledInputGroup compact>
          <StyledInput placeholder="Newsletter" />
          <StyledButton>Submit</StyledButton>
        </StyledInputGroup>
      </StyledDiv>
      <StyledDivider borderColor="#fff" />
      <StyledRow>
        <StyledCol span={12}>
          <Space size={32}>
            <StyledSpan>Follow Us : </StyledSpan>
            <Icon fontSize={14} name="icon-facebook" />
            <Icon fontSize={14} name="icon-weibo" />
            <Icon fontSize={14} name="icon-wechat" />
            <Icon fontSize={14} name="icon-instagram-icon" />
          </Space>
        </StyledCol>
        <StyledCol span={12}>
          <Space>
            <StyledSpan> Terms & Conditions</StyledSpan>
            <StyledSpan> |</StyledSpan>
            <StyledSpan> Privacy</StyledSpan>
            <StyledSpan> |</StyledSpan>
            <StyledSpan> ICP No. 19051593-1-1.</StyledSpan>
            <StyledSpan> |</StyledSpan>
            <StyledSpan> @2021 MLBS 1.5K</StyledSpan>
          </Space>
        </StyledCol>
      </StyledRow>
    </StyledContainer>
  );
};

export default LayoutFooter;
