import * as yup from 'yup';
export const validationSchema = yup.object({
  country_id: yup.string().nullable().required('required'),
  state_id: yup.string().nullable().required('required'),
  city_id: yup.string().nullable().required('required'),
  gender: yup.string().nullable().required('required'),
  birth_day: yup.string().nullable().required('required'),
});
