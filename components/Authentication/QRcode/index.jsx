import {
  StyledDiv,
  StyledH3,
  StyledImg,
  StyledText,
  StyledVertical,
} from 'components/Common/commonStyles';
import Icon from 'components/Icon';

const QRcode = ({ changeMode }) => {
  return (
    <StyledDiv>
      <StyledDiv>
        <StyledH3> Register</StyledH3>
        <StyledText>Scan the QR code below on WeChat and register</StyledText>
      </StyledDiv>
      <StyledImg
        onClick={() => changeMode('login')}
        src="/static/images/login/number.svg"
        width="120px"
        height="121px"
        position="absolute"
        top="12px"
        right="12px"
      />
      <StyledVertical alignItems="center" py="34px">
        <StyledImg
          src="/static/images/login/scan.png"
          width="141px"
          height="141px"
        />
        <StyledText pt="32px" color="gray.15">
          <Icon fontSize={17} mr="4px" name="icon-qrcode-scan" />
          Scan the code on WeChat
        </StyledText>
        <StyledText pt="16px" color="gray.15">
          <Icon fontSize={17} mr="4px" name="icon-official-account" />
          Follow the official account
        </StyledText>
        <StyledText pt="16px" color="gray.15">
          <Icon fontSize={17} mr="4px" name="icon-verify" />
          Get started
        </StyledText>
      </StyledVertical>
    </StyledDiv>
  );
};

export default QRcode;
