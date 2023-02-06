import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from 'store/auth/auth.action';
import { Form } from 'antd';
import Button from 'components/Common/Button';
import { Input } from 'components/Common/Input';
import useAuthModal from 'hooks/useAuthModal';

const UserName = () => {
  const dispatch = useDispatch();
  const { onClose } = useAuthModal();
  const { loading } = useSelector((state) => state.auth.login);
  const onFinish = (data) => dispatch(loginUserAction(data, onClose));
  return (
    <Form onFinish={onFinish} autoComplete="off">
      <Form.Item name="identifier" rules={[{ required: true }]}>
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true }]}>
        <Input type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button loading={loading} block borderRadius="lg" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserName;
