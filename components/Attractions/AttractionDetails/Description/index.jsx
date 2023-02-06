import {
  StyledDiv,
  StyledText,
  StyledParagraph,
  StyledLink,
  StyledHorizontal,
} from 'components/Common/commonStyles';
import Icon from 'components/Icon';
import useAuthModal from 'hooks/useAuthModal';
import { useRouter } from 'next/router';
import { getAttractionEditRoute } from 'store/attractions/attractions.service';
import { getCookie } from 'utils/auth.utils';
import { StyledTag } from './style';
const Description = ({ description, id, firstName, lastName, timeAgo }) => {
  const router = useRouter();
  const { locale } = router.query;
  const { onOpen } = useAuthModal();
  const handleClickLink = () => {
    if (getCookie('access_token')) {
      router.push(`/${locale}/${getAttractionEditRoute(id)}`);
    } else {
      onOpen('login');
    }
  };
  return (
    <StyledDiv py={8}>
      <StyledHorizontal justifyContent="space-between" mb="20px">
        <StyledDiv
          color="gray.15"
          fontSize={18}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <StyledDiv border="input" height="fit-content" borderRadius={5}>
          <StyledLink onClick={handleClickLink}>
            <Icon name="icon-edit" color="orange.13" fontSize={18} />
          </StyledLink>
        </StyledDiv>
      </StyledHorizontal>
      <StyledParagraph color="gray.27">{description}</StyledParagraph>
      <StyledHorizontal py={5} alignItems="center">
        <StyledTag> Editor</StyledTag>
        <StyledText fontSize={3} color="gray.24" italic>
          {firstName} {lastName} / {timeAgo}
        </StyledText>
      </StyledHorizontal>
      <StyledLink onClick={handleClickLink} color="blue.10">
        You can also edit the description here
      </StyledLink>
    </StyledDiv>
  );
};

export default Description;
