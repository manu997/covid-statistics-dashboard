// import { useCovidHistory } from '../../hooks/useCovidHistory';
import mock from './mock.json';
import './Exercice2.css';
import LineChart from '../../components/LineChart';

const Exercice2 = () => {
  //   const { data, isLoading, isSuccess } = useCovidHistory();
  return (
    <div className='chart-container'>
      <LineChart data={mock} x='date' y='cases.total.value' />
      <LineChart data={mock} x='date' y='testing.total.value' />
      <LineChart data={mock} x='date' y='outcomes.death.total.value' />
    </div>
  );
};

export default Exercice2;
