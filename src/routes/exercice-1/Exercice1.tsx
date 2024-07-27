import './Exercice1.css';
import { useForm } from 'react-hook-form';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import ReactCountryFlag from 'react-country-flag';
import { Trans, useTranslation } from 'react-i18next';
import Card from '../../components/Card';
import FormItem from '../../components/FormItem';
import Input from '../../components/Input';
import Table from '../../components/Table';
import { ColumnsDef } from '../../components/Table/Table';
import { Country, FormData } from '../../types';
import { z } from 'zod';
import Form from '../../components/Form';
import useNameStatitics from '../../hooks/useNameStatitics';

function Exercice1() {
  const [enableQuery, setEnableQuery] = useState(false);
  const [name, setName] = useState('');

  const { t, i18n } = useTranslation();

  const form = useForm<FormData>({
    resolver: zodResolver(
      z.object({
        name: z.string().min(1, t('REQUIRED_FIELD')),
      })
    ),
  });

  const { data, isLoading, isFetched, success, errors } = useNameStatitics({
    name,
    enableQuery,
  });

  const onSubmit = useCallback(({ name }: FormData) => {
    setName(name);
    setEnableQuery(true);
  }, []);

  const regionNames = useMemo(
    () => new Intl.DisplayNames([i18n.language], { type: 'region' }),
    [i18n.language]
  );
  const columnsDef: ColumnsDef<Country> = useMemo(
    () => [
      {
        accessor: 'country_id',
        header: t('COUNTRY'),
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
        header: t('PROBABILITY'),
        cell: (info) => <span>{Math.trunc(info * 100)}%</span>,
        align: 'right',
        size: 50,
      },
    ],
    [regionNames, t]
  );

  useEffect(() => {
    isFetched && setEnableQuery(false);
  }, [isFetched]);

  return (
    <Trans t={t}>
      <div className='container'>
        <h3 className='title'>{t('FORM_TITLE')}</h3>
        <Form form={form} onSubmit={onSubmit}>
          <FormItem label={t('NAME')}>
            <Input type='text' placeholder={t('INTRODUCE_NAME')} name='name' />
          </FormItem>
          <button type='submit' disabled={isLoading}>
            {isLoading ? <span className='loader' /> : t('GENERATE_STATITICS')}
          </button>
        </Form>
        {success && (
          <Card title={t('DATA_TITLE', { name: data.genderize?.name })}>
            <p>
              {t('DATA_GENDERIZE', {
                gender: t(data.genderize?.gender.toUpperCase()).toLowerCase(),
                probability: data.genderize?.probability * 100,
              })}
            </p>
            <p>{t('DATA_AGIFY', { age: data.agify?.age })}</p>
            <p>{t('DATA_NATIONALIZE_TITLE')}</p>
            <Table
              columns={columnsDef}
              data={data.nationalize?.country || []}
            />
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
    </Trans>
  );
}

export default Exercice1;
