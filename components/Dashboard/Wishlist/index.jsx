import { StyledDiv, StyledHorizontal } from 'components/Common/commonStyles';
import EmptyWishlist from './EmptyWishlist';
import WishlistFilter from './WishlistFilter';
import WishListContent from './WishlistContent';
import { temporaryWishList } from 'utils/dashboard.utils';

const Profile = () => {
  return (
    <StyledHorizontal justifyContent="space-between">
      <StyledDiv>
        {temporaryWishList?.length ? <WishListContent /> : <EmptyWishlist />}
      </StyledDiv>
      <StyledHorizontal flexDirection="row-reverse">
        <WishlistFilter />
      </StyledHorizontal>
    </StyledHorizontal>
  );
};

export default Profile;
