import FormItem from './components/FormItem';
import './App.css';
import Input from './components/Input';
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { FormSchema } from './resolvers';
import { FormData } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import Form from './components/Form/Form';

function App() {
  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = useCallback((data: FormData) => {
    console.log(data);
  }, []);

  return (
    <div className='container'>
      <Form form={form} onSubmit={onSubmit}>
        <FormItem label='Nombre'>
          <Input type='text' placeholder='Introduce tu nombre' name='name' />
        </FormItem>
        <button type='submit'>Generar estadísticas</button>
      </Form>
    </div>
  );
}

export default App;
