import { StyledHorizontal, StyledVertical } from 'components/Common/commonStyles';
import Social from './Social';
import MyCards from './MyCards';
import RecentTransactions from './RecentTransactions';

const Landing = () => {
  return (
    <StyledHorizontal>
      <Social />
      <StyledVertical ml="57px">
        <MyCards />
        <RecentTransactions />
      </StyledVertical>
    </StyledHorizontal>
  );
};

export default Landing;
