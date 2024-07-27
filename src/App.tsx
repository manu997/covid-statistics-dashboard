import FormItem from './components/FormItem';
import './App.css';
import Input from './components/Input';
import { useForm } from 'react-hook-form';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FormSchema } from './resolvers';
import { Country, FormData } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import Form from './components/Form';
import useGetData from './hooks/useGetData';
import Card from './components/Card';
import Table from './components/Table';
import { ColumnsDef } from './components/Table/Table';
import ReactCountryFlag from 'react-country-flag';

function App() {
  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });
  const regionNames = useMemo(
    () => new Intl.DisplayNames(['es'], { type: 'region' }),
    []
  );
  const [enableQuery, setEnableQuery] = useState(false);
  const [name, setName] = useState('');

  const { data, isLoading, isFetched, success, errors } = useGetData({
    name,
    enableQuery,
  });

  const onSubmit = useCallback(async ({ name }: FormData) => {
    setName(name);
    setEnableQuery(true);
  }, []);

  useEffect(() => {
    isFetched && setEnableQuery(false);
  }, [isFetched]);

  const columnsDef: ColumnsDef<Country> = useMemo(
    () => [
      {
        accessor: 'country_id',
        header: 'País',
        cell: (info) => (
          <div className='flag-item'>
            <ReactCountryFlag countryCode={info} svg />
            <span>{regionNames.of(info)}</span>
          </div>
        ),
        size: 500,
      },
      {
        accessor: 'probability',
        header: 'Probabilidad',
        cell: (info) => <span>{Math.trunc(info * 100)}%</span>,
        align: 'right',
        size: 50,
      },
    ],
    [regionNames]
  );

  const cardTitle = `El nombre de ${data.genderize?.name} tiene las siguientes estadísticas:`;

  return (
    <div className='container'>
      <Form form={form} onSubmit={onSubmit}>
        <FormItem label='Nombre'>
          <Input type='text' placeholder='Introduce tu nombre' name='name' />
        </FormItem>
        <button type='submit' disabled={isLoading}>
          {isLoading ? <span className='loader' /> : 'Generar estadísticas'}
        </button>
      </Form>
      {success && (
        <Card title={cardTitle}>
          <p>
            Su género es <strong>{data.genderize?.gender}</strong> con un{' '}
            <strong>{data.genderize?.probability}%</strong> de probabilidad.
          </p>
          <p>
            Su edad es de <strong>{data.agify?.age} años</strong>.
          </p>
          <p>Probabilidad de su país sea...</p>
          <Table columns={columnsDef} data={data.nationalize?.country || []} />
        </Card>
      )}
      {errors?.map(
        (error) =>
          error && (
            <span key={error.message} className='error-message'>
              {error?.message}
            </span>
          )
      )}
    </div>
  );
}

export default App;
