import {
  StyledVertical,
  StyledImg,
  StyledSpan,
  StyledDiv,
} from 'components/Common/commonStyles';

const EmptyWishlist = () => {
  return (
    <StyledVertical alignItems="center" mt="73px" px="40px">
      <StyledImg
        width="190px"
        height="140px"
        src="/static/images/dashboard/emptyWishlist.svg"
      />
      <StyledDiv mt="42px">
        <StyledSpan
          fontWeight="8"
          fontSize="11"
          lineHeight="25px"
          color="gray.15"
        >
          Your wishlist is empty!
        </StyledSpan>
      </StyledDiv>
      <StyledDiv mt="21px">
        <StyledSpan
          fontWeight="6"
          fontSize="6"
          lineHeight="160%"
          textAlign="center"
          color="gray.27"
        >
          Here you can see the attractions, hotels, restaurants and other places
          that you have liked before
        </StyledSpan>
      </StyledDiv>
      <StyledDiv mt="43px">
        <StyledSpan
          fontWeight="6"
          fontSize="6"
          lineHeight="19px"
          textAlign="center"
          letterSpacing="0.05em"
          textDecoration="underline"
          color="blue.11"
        >
          Start Exploring
        </StyledSpan>
      </StyledDiv>
    </StyledVertical>
  );
};

export default EmptyWishlist;
