import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';

interface FormProps<T extends FieldValues> {
  form: UseFormReturn<T, any, undefined>;
  onSubmit: (data: T) => void;
  children: React.ReactNode;
}

const Form = <T extends FieldValues>({
  form,
  onSubmit,
  children,
}: FormProps<T>) => {
  return (
    <FormProvider {...form}>
      <form className='form-container' onSubmit={form.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
