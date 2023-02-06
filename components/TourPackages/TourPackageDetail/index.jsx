import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Anchor } from 'antd';
import {
  StyledDiv,
  StyledRow,
  StyledCol,
} from 'components/Common/commonStyles';
import { StyledAnchor } from './style';
import Content from './Content';
import Sidebar from './Sidebar';
import { tourPackageDetailHeader } from 'utils/tourPackage.utils';
import { getTourPackageAction } from 'store/tourPackage/tourPackage.action';

const { Link } = Anchor;

const TourPackageDetail = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { tour } = useSelector((state) => state.tourPackage);

  useEffect(() => {
    id && dispatch(getTourPackageAction(id));
  }, [id]);

  return (
    <StyledDiv my="50px">
      <StyledAnchor affix={false}>
        {tourPackageDetailHeader.map(({ title }) => (
          <Link
            href={`#${title.replace(/\s/g, '')}`}
            color="gray.47"
            key={title}
            title={title}
          />
        ))}
      </StyledAnchor>
      <StyledRow mt="47px" mx="140px">
        <StyledCol span={20} pr="59px">
          <Content tour={tour.data} />
        </StyledCol>
        <StyledCol span={4}>
          <Sidebar />
        </StyledCol>
      </StyledRow>
    </StyledDiv>
  );
};

export default TourPackageDetail;
