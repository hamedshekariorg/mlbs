import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs } from 'antd';
import {
  StyledCol,
  StyledRow,
  StyledTabPane,
} from 'components/Common/commonStyles';
import MomentCard from 'components/Dashboard/components/MomentCard';
import MomentForm from './MomentForm';
import { getMomenstAction } from 'store/dashboard/dashboard.action';
import Loading from 'components/Common/Loading';
import Error from 'components/Common/Error';
import MyPosts from './Myposts';

const Social = () => {
  const dispatch = useDispatch();
  const { items, loading, update, error } = useSelector(
    (state) => state.dashboard.moments,
  );

  const [momentItem, setMomentItem] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);

  //change mode to edit
  const handleEdit = (data) => {
    setIsEditMode(true);
    setMomentItem(data);
  };

  useEffect(() => {
    if (update) {
      dispatch(getMomenstAction());
      setIsEditMode(false);
    }
  }, [update]);

  useEffect(() => {
    dispatch(getMomenstAction());
  }, []);

  const momentItems = useMemo(() => {
    return (
      <StyledRow>
        {items.map(({ id, medias, description, title }) => (
          <StyledCol span={8} key={id} p="20px 12px ">
            <MomentCard
              id={id}
              medias={medias}
              description={description}
              title={title}
              handleEdit={handleEdit}
            />
          </StyledCol>
        ))}
      </StyledRow>
    );
  }, [items]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <Tabs defaultActiveKey="1">
      <StyledTabPane key="1" tab="My Moments">
        {isEditMode ? (
          <MomentForm
            initialValue={momentItem}
            isEditMode
            changeMode={() => setIsEditMode(false)}
          />
        ) : (
          momentItems
        )}
      </StyledTabPane>
      <StyledTabPane key="2" tab="Add New Moment">
        <MomentForm />
      </StyledTabPane>
      <StyledTabPane key="3" tab="MyPosts">
        <MyPosts />
      </StyledTabPane>
    </Tabs>
  );
};

export default Social;
