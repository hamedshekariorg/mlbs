import {
  StyledDiv,
  StyledVertical,
  StyledImg,
} from 'components/Common/commonStyles';
import {
  StyledContainer,
  StyledText,
  StyledTitle,
  StyledImgBlock,
  StyledRateText,
} from './style';
import Icon from 'components/Icon';
import Rate from 'components/Common/Rate';

const Profile = () => {
  return (
    <StyledContainer>
      <StyledImgBlock>
        <StyledImg src="/static/images/tourGuide/luiza.svg" />
      </StyledImgBlock>
      <StyledVertical justifyContent="center" mt="35px">
        <StyledTitle>Luiza L.Alves</StyledTitle>
        <StyledDiv mt="5px">
          <Rate showRateNum={true}>
            <StyledRateText ml="30px" color="#b8b1a4">
              4.6
            </StyledRateText>
            <StyledRateText ml="13px" color="#B8B1A4">
              (2,358)
            </StyledRateText>
          </Rate>
        </StyledDiv>
        <StyledDiv ml="-8px" mt="10px">
          <Icon fontSize={25} name="icon-location" color="#8C8F9F" />
          <StyledText>I live in Amsterdam</StyledText>
        </StyledDiv>
        <StyledDiv mt="15px">
          <StyledImg src="/static/images/delete/net-icon.svg" />
          <StyledText>I speak English</StyledText>
        </StyledDiv>
      </StyledVertical>
    </StyledContainer>
  );
};

export default Profile;
