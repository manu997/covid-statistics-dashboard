import { ComponentProps } from 'react';
import './FormInputItem.css';
import Input from '../Input';

interface FormItemProps extends ComponentProps<typeof Input> {
  label: string;
}

const FormInputItem = ({ label, id, ...props }: FormItemProps) => {
  return (
    <div className='form-item-container'>
      <label htmlFor={id}>{label}</label>
      <Input id={id} {...props} />
    </div>
  );
};

export default FormInputItem;
