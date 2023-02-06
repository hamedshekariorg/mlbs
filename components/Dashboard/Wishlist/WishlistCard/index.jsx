import {
  StyledImg,
  StyledSpan,
  StyledDiv,
  StyledHorizontal,
} from 'components/Common/commonStyles';
import { StyledContainer, StyledImgText, StyledSpanCount } from './style';
import Button from 'components/Common/Button';
import RateComponent from 'components/Common/Rate';
import Icon from 'components/Icon';
import { temporaryInfoStatistic } from 'utils/dashboard.utils';

const WishlistCard = ({
  category,
  price,
  title,
  description,
  rate,
  count,
  imgSrc,
  picLabel,
  ...rest
}) => {
  return (
    <StyledContainer {...rest}>
      <StyledDiv position="relative">
        <StyledImgText>
          <span>{picLabel}</span>
        </StyledImgText>
        <StyledImg width="158px" height="175px" src={imgSrc} />
      </StyledDiv>
      <StyledHorizontal
        p={category ? '15px 16px 16px 24px' : '1px 16px 10px 24px'}
        width="100%"
      >
        <StyledDiv borderRight={category ? 'footer' : 0} flex={2}>
          <StyledDiv mt="16px">
            <StyledSpan
              fontWeight={6}
              fontSize={4}
              color="gray.15"
              lineHeight="160%"
            >
              {title}
            </StyledSpan>
          </StyledDiv>
          <StyledDiv mt="15px">
            {category?.map(({ id, icon, text }) => (
              <StyledDiv key={id} mt="10px">
                {typeof icon === 'string' ? (
                  <StyledImg width="12px" height="12px" src={icon} />
                ) : (
                  icon
                )}
                <StyledSpan
                  fontWeight={5}
                  fontSize={1}
                  lineHeight="13px"
                  color="gray.57"
                  ml="10px"
                >
                  {text}
                </StyledSpan>
              </StyledDiv>
            ))}
          </StyledDiv>
          <StyledDiv mt="12px">
            <StyledSpan
              fontWeight={5}
              fontSize={2}
              lineHeight="18px"
              color="gray.57"
              letterSpacing="0.015em"
            >
              {description}
            </StyledSpan>
          </StyledDiv>
          <StyledHorizontal mt="15px" justifyContent="space-between">
            <StyledDiv display={rate ? 'flex' : 'none'}>
              <RateComponent rate1="4.6" rate2="(2,358)" showRateNum={true} />
            </StyledDiv>
            <StyledHorizontal>
              {temporaryInfoStatistic.map(({ num, imgSrc }) => (
                <StyledDiv
                  display={count ? 'flex' : 'none'}
                  justifyContent="center"
                  alignItems="center"
                  mr="20px"
                >
                  <StyledImg src={imgSrc} width="14px" height="14px" />
                  <StyledSpanCount>{num}</StyledSpanCount>
                </StyledDiv>
              ))}
            </StyledHorizontal>
            <Button
              btnType="secondary"
              shape="round"
              height="31px"
              width="110px"
              display={category ? 'none' : 'flex'}
            >
              <StyledSpan fontSize={2}> Learn More</StyledSpan>
              <Icon name="icon-arrow-right" ml={2} fontSize={4} />
            </Button>
          </StyledHorizontal>
        </StyledDiv>
        <StyledDiv
          flex={1}
          pl="16px"
          display={category ? 'flex' : 'none'}
          flexDirection="column"
        >
          <StyledSpan
            fontWeight={6}
            fontSize={1}
            lineHeight=" 13px"
            color="orange.13"
          >
            Price
          </StyledSpan>
          <StyledSpan
            fontWeight={6}
            fontSize={6}
            lineHeight="19px"
            color="blue.10"
          >
            {price}
          </StyledSpan>
          <Button
            fontSize={2}
            mt="26px"
            btnType="blue"
            width="110px"
            height="38px"
          >
            <StyledImg
              width="16.5px"
              height="12px"
              src="/static/images/dashboard/delete/icomoon/reload.svg"
            />
            <StyledSpan ml="5px">Refresh Price</StyledSpan>
          </Button>
          <Button
            fontSize={2}
            mt="8px"
            btnType="gray"
            width="110px"
            height="38px"
          >
            <Icon name="icon-shoppingcart" fontSize={15} />
            <StyledSpan ml="6px"> Checkout</StyledSpan>
          </Button>
        </StyledDiv>
      </StyledHorizontal>
    </StyledContainer>
  );
};

export default WishlistCard;
