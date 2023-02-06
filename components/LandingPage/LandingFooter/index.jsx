import {
  StyledDiv,
  StyledText,
  StyledImg,
  StyledRow,
  StyledCol,
} from 'components/Common/commonStyles';
import {
  StyledContainer,
  StyledInputWrapper,
  StyledInput,
  StyledPlaceHolder,
  StyledSubmitBtn,
  StyledFooterRight,
  StyledHr,
  StyledSocialBlock,
} from './style';
import Icon from 'components/Icon';

const LandingFooter = () => {
  return (
    <StyledContainer>
      <StyledRow>
        <StyledCol span={16}>
          <StyledDiv display="flex">
            <StyledImg
              src="/static/images/landingPage/charming-logo.svg"
              width="45.24px"
              height="74.95px"
            />
            <StyledDiv
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
            >
              <StyledText ml={4}>Charming Persian </StyledText>
              <StyledText ml={4}>魅力波斯 </StyledText>
            </StyledDiv>
          </StyledDiv>
          <StyledDiv width="85%" mt={5}>
            <StyledText>
              What color do you think Iran is? Charm Persia, a platform
              dedicated to Iranian freelancers, where you can find the most
              suitable place to stay for you, the most beautiful local
              restaurant, the best time and place to shoot at various
              attractions, and then there is an introduction to Chinese
              attractions to make you correct Unlock the charm culture of the
              ancient Persian country and enjoy traveling!
            </StyledText>
          </StyledDiv>
        </StyledCol>
        <StyledCol span={4}>
          <StyledDiv display="flex" flexDirection="column">
            <StyledText color="gray.15" fontSize={9} fontWeight="500" mb="27px">
              Useful Links
            </StyledText>
            <StyledText fontSize={6} color="gray.15">
              About us
            </StyledText>
            <StyledText fontSize={6} color="gray.15">
              Contact us
            </StyledText>
            <StyledText fontSize={6} color="gray.15">
              FAQ
            </StyledText>
            <StyledText fontSize={6} color="gray.15">
              Be Our Partner
            </StyledText>
          </StyledDiv>
        </StyledCol>
        <StyledCol span={4}>
          <StyledDiv display="flex" flexDirection="column">
            <StyledText color="gray.15" fontSize={9} fontWeight="500" mb="27px">
              Contact Us
            </StyledText>
            <StyledText fontSize={6} color="gray.15">
              <Icon fontSize={13} className="icon-call-2" />
              +86 13911788625
            </StyledText>
            <StyledText fontSize={6} color="gray.15">
              <Icon fontSize={13} className="icon-call-2" />
              +89 09021788625
            </StyledText>
            <StyledText fontSize={6} color="gray.15">
              <Icon fontSize={13} className="icon-mail" />
              baoming@mlbs.com
            </StyledText>
            <StyledText fontSize={6} color="gray.15">
              <Icon fontSize={13} className="icon-wechat" />
              charmingpersian
            </StyledText>
          </StyledDiv>
        </StyledCol>
      </StyledRow>
      <StyledDiv mt={6}>
        <StyledInputWrapper>
          <StyledInput />
          <StyledPlaceHolder>Newsletter</StyledPlaceHolder>
          <StyledSubmitBtn>Submit</StyledSubmitBtn>
        </StyledInputWrapper>
      </StyledDiv>
      <StyledHr />
      <StyledSocialBlock>
        <StyledDiv display="flex" justifyContent="space-between">
          <StyledText>Follow Us:</StyledText>
          <StyledDiv>
            <Icon fontSize={12} m="22px" name="icon-facebook" />
          </StyledDiv>
          <StyledDiv>
            <Icon fontSize={12} m="22px" name="icon-weibo" />
          </StyledDiv>
          <StyledDiv>
            <Icon fontSize={12} m="22px" name="icon-wechat" />
          </StyledDiv>
          <StyledDiv>
            <Icon fontSize={12} m="22px" name="icon-instagram-icon" />
          </StyledDiv>
        </StyledDiv>
        <StyledFooterRight>
          <h3 color="blue.15">Terms & Conditions</h3>
          <h3 color="blue.15">Privacy</h3>
          <h3 color="blue.15">ICP No. 19051593-1-1.</h3>
          <h3 color="gray.11">@2021 MLBS 1.5K</h3>
        </StyledFooterRight>
      </StyledSocialBlock>
    </StyledContainer>
  );
};

export default LandingFooter;
