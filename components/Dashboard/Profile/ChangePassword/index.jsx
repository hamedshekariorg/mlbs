import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/Common/Button';
import ConatinerCard from 'components/Dashboard/components/ContainerCard';
import { changePasswordAction } from 'store/auth/auth.action';
import { FormProvider, PasswordInput } from 'components/Common/HookForm';
import { StyledCol, StyledRow } from 'components/Common/commonStyles';
import { validationSchema } from './validation';

const ChangePassword = () => {
  const { loading } = useSelector((state) => state.auth.changePass);
  const dispatch = useDispatch();
  const methods = useForm({
    defaultValues: {
      password: '',
      password_confirmation: '',
    },
    resolver: yupResolver(validationSchema),
  });
  const { handleSubmit } = methods;
  const onSubmit = (data) => dispatch(changePasswordAction(data));
  return (
    <ConatinerCard>
      <FormProvider methods={methods}>
        <StyledRow gutter={[16, 16]}>
          <StyledCol span={16}>
            <PasswordInput name="password" placeholder="New Password" />
          </StyledCol>
          <StyledCol span={16}>
            <PasswordInput
              name="password_confirmation"
              placeholder="Confirm New Password"
              border="input"
            />
          </StyledCol>
          <StyledCol span={16}>
            <Button
              htmlType="submit"
              loading={loading}
              onClick={handleSubmit(onSubmit)}
            >
              Change Password
            </Button>
          </StyledCol>
        </StyledRow>
      </FormProvider>
    </ConatinerCard>
  );
};

export default ChangePassword;
