import { useCovidHistory } from '../../hooks/useCovidHistory';
import './Exercice2.css';
import LineChart from '../../components/LineChart';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

const Exercice2 = () => {
  const { data, isLoading } = useCovidHistory();
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('EX2_TITLE')}</h1>
      <div className='ex2-container'>
        <div className='chart-container'>
          <h2>{t('CASES_PER_DAY')}</h2>
          <LineChart
            data={data?.data || []}
            x={(t) => moment(t.date).format('MM/YYYY')}
            y='cases.total.value'
            isLoading={isLoading}
          />
        </div>
        <div className='chart-container'>
          <h2>{t('TESTING_PER_DAY')}</h2>
          <LineChart
            data={data?.data || []}
            x={(t) => moment(t.date).format('MM/YYYY')}
            y='testing.total.value'
            isLoading={isLoading}
          />
        </div>
        <div className='chart-container'>
          <h2>{t('DEATHS_PER_DAY')}</h2>
          <LineChart
            data={data?.data || []}
            x={(t) => moment(t.date).format('MM/YYYY')}
            y='outcomes.death.total.value'
            isLoading={isLoading}
          />
        </div>
      </div>
    </>
  );
};

export default Exercice2;
