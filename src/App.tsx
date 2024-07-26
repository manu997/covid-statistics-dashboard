import FormItem from './components/FormItem';
import './App.css';
import Input from './components/Input';
import { FormProvider, useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { FormSchema } from './resolvers';
import { FormData } from './types';
import { zodResolver } from '@hookform/resolvers/zod';

function App() {
  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = useCallback((data: FormData) => {
    console.log(data);
  }, []);

  return (
    <div className='container'>
      <FormProvider {...form}>
        <form className='form-container' onSubmit={form.handleSubmit(onSubmit)}>
          <FormItem label='Nombre'>
            <Input type='text' placeholder='Introduce tu nombre' name='name' />
          </FormItem>
          <button type='submit'>Generar estadísticas</button>
        </form>
      </FormProvider>
    </div>
  );
}

export default App;
