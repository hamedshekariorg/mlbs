import Icon from 'components/Icon';
import {
  StyledSpace,
  StyledText,
  StyledH3,
} from 'components/Common/commonStyles';
import { StyledContainer } from './style';
import { useEffect } from 'react';

const MemberCard = ({ index, image, name, role }) => {
  return (
    <StyledContainer randomCount={index % 10}>
      <img width="161px" height="161px" src={image} alt={name} />
      <StyledH3 fontSize={11} mt="32px" mb="8px" color="gray.15">
        {name}
      </StyledH3>
      <StyledText color="gray.27" fontSize={9}>
        {role}
      </StyledText>
      <StyledSpace mt="64px" size={20}>
        <Icon name="icon-instagram-icon" fontSize={25} color="gray.15" />
        <Icon name="icon-wechat" fontSize={25} />
        <Icon name="icon-facebook" fontSize={25} />
      </StyledSpace>
    </StyledContainer>
  );
};

export default MemberCard;
