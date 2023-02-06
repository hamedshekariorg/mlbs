import { Space } from 'antd';
import { StyledContainer } from './style';
import {
  StyledDiv,
  StyledSpan,
  StyledText,
} from 'components/Common/commonStyles';
import Icon from 'components/Icon';
import RateComponent from 'components/Common/Rate';
const Header = ({
  image,
  name,
  countryName,
  cityName,
  categories,
  timeAgo,
}) => {
  return (
    <StyledDiv position="relative">
      <img width={'100%'} src={image} alt="image" />
      <StyledContainer>
        <StyledText mb={5} color="#fff" fontSize={26}>
          {name}
        </StyledText>
        <Space size="large" align="end">
          <StyledText color="#fff" fontSize={9}>
            <Icon mr={1} fontSize={15} name="icon-location" />
            {countryName} {`- ${cityName}`}
          </StyledText>
          <StyledText color="#fff" fontSize={9}>
            <Icon mr={1} fontSize={15} name="icon-category" />
            {categories?.map((categorie, index) => (
              <StyledSpan key={categorie} mr={1}>
                {index ? ` - ${categorie}` : `${categorie}`}
              </StyledSpan>
            ))}
          </StyledText>
          <StyledText color="#fff" fontSize={9}>
            <Icon mr={1} fontSize={15} name="icon-time" />
            {timeAgo}
          </StyledText>
          <RateComponent rate1="4.6" rate2="(2,358)" defaultValue={5} />
          <Icon fontSize={15} name="icon-share" />
          <Icon fontSize={15} name="icon-like-stroke" />
        </Space>
      </StyledContainer>
    </StyledDiv>
  );
};
export default Header;
