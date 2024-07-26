import './FormItem.css';

interface FormItemProps {
  label: string;
  children: React.ReactNode;
}

const FormItem = ({ label, children }: FormItemProps) => {
  return (
    <div className='form-item-container'>
      <label htmlFor={label}>{label}</label>
      {children}
    </div>
  );
};

export default FormItem;
