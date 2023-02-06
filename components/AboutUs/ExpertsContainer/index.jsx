import { useSelector } from 'react-redux';
import {
  StyledCol,
  StyledRow,
  StyledText,
  StyledH3,
} from 'components/Common/commonStyles';

const ExpertsContainer = () => {
  const { items } = useSelector((state) => state.aboutUs.specialties);

  return (
    <StyledRow>
      {items?.map(({ id, title, description, image }) => (
        <StyledCol key={id} span={8} px="57px" py="32px" textAlign="center">
          <img src={image} alt="aboutUs" width="88px" />
          <StyledH3 color="gray.15" fontSize={12} mt={5}>
            {title}
          </StyledH3>
          <StyledText color="gray.27" fontSize={4}>
            {description}
          </StyledText>
        </StyledCol>
      ))}
    </StyledRow>
  );
};

export default ExpertsContainer;
