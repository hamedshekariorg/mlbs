import * as yup from 'yup';
export const validationSchema = yup.object({
  password: yup
    .string()
    .required('required')
    .min(8, 'the password must be greater than 8'),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
