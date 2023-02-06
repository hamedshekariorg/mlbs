import { Space } from 'antd';
import Link from 'components/Link';
import {
  StyledRow,
  StyledDiv,
  StyledParagraph,
  StyledSpan,
  StyledH3,
} from 'components/Common/commonStyles';
import Icon from 'components/Icon';
import Button from 'components/Common/Button';
import RateContainer from 'components/Common/RateContainer';
import { StyledCardContainer } from './style';
const PopularAttractionCard = ({
  id,
  image,
  name,
  rate,
  location,
  category,
  timeAgo,
  views,
  rateVisible,
  description,
}) => {
  return (
    <StyledDiv p={1}>
      <StyledCardContainer>
        <img src={image} width="100%" height="296px" />
        <StyledDiv px={6} py={3}>
          <StyledDiv display="flex" justifyContent="space-between">
            <StyledH3 fontSize={9} color="gray.15">
              {name}
            </StyledH3>
            <Space size={32}>
              <Icon color="gray.24" fontSize={13} name="icon-share" />
              <Icon color="gray.24" fontSize={13} name="icon-like-stroke" />
            </Space>
          </StyledDiv>
          <StyledRow pb={2}>
            <Space size={24}>
              <StyledSpan color="gray.24">
                <Icon name="icon-location" fontSize={15} /> {location}
              </StyledSpan>
              <StyledSpan color="gray.24">
                <Icon name="icon-category" fontSize={15} /> {category}
              </StyledSpan>
              <StyledSpan color="gray.24">
                <Icon name="icon-time" fontSize={15} /> {timeAgo}
              </StyledSpan>
            </Space>
          </StyledRow>
          <StyledParagraph fontSize={2} color="gray.27" ellipsis={{ rows: 3 }}>
            {description}
          </StyledParagraph>
          <StyledDiv display="flex" justifyContent="space-between">
            <RateContainer
              rate={rate}
              views={views}
              rateVisible={rateVisible}
            />
            <Link href={`/attractions/details/?id=${id}`}>
              <Button btnType="secondary" shape="round" height="34px">
                Learn More
                <Icon name="icon-arrow-right" ml={3} fontSize={9} />
              </Button>
            </Link>
          </StyledDiv>
        </StyledDiv>
      </StyledCardContainer>
    </StyledDiv>
  );
};

export default PopularAttractionCard;
