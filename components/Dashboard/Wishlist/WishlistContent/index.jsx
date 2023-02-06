import { StyledVertical } from 'components/Common/commonStyles';
import { temporaryWishList } from 'utils/dashboard.utils';
import WishlistCard from 'components/Dashboard/Wishlist/WishlistCard';

const WishlistContent = () => {
  return (
    <StyledVertical mr="32px">
      {temporaryWishList.map(
        ({
          id,
          title,
          category,
          price,
          description,
          rate,
          count,
          imgSrc,
          picLabel,
        }) => (
          <WishlistCard
            key={id}
            title={title}
            category={category}
            description={description}
            price={price}
            rate={rate}
            count={count}
            imgSrc={imgSrc}
            picLabel={picLabel}
            mb="24px"
          />
        ),
      )}
    </StyledVertical>
  );
};

export default WishlistContent;
