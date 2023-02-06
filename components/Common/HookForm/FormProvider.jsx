import { FormProvider as Form } from 'react-hook-form';
export const FormProvider = ({ children, methods }) => {
  return <Form {...methods}>{children}</Form>;
};
