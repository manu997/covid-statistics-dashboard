import { useFormContext } from 'react-hook-form';
import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  name: string;
  defaultValue?: string;
}

const Input = ({
  type,
  placeholder,
  name,
  defaultValue,
  ...props
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={
          errors[name] ? `${props.className || ''} error` : props.className
        }
        {...props}
        {...register(name)}
      />
      {errors[name] && <span>{errors[name].message as string}</span>}
    </>
  );
};

export default Input;
