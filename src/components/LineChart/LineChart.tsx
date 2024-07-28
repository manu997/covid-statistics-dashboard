import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { BounceLoader } from 'react-spinners';
import {
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryTooltip,
} from 'victory';

interface LineChartProps {
  data: any[];
  x: string | ((data: any) => any);
  y: string | ((data: any) => any);
  isLoading: boolean;
  error: any;
}

const LineChart = ({ data, x, y, isLoading, error }: LineChartProps) => {
  const { i18n, t } = useTranslation();

  const sampleData = useMemo(() => {
    if (!data || data.length <= 5) {
      return data; // Devuelve el array original si tiene 5 o menos elementos
    }

    // Calcula el paso, considerando que el primer elemento no se incluye
    const step = (data.length - 1) / 4; // -1 para incluir el último elemento

    // Selecciona 5 elementos equidistantes, omitiendo el primer elemento
    const result = [];
    for (let i = 0; i < 5; i++) {
      const index = Math.round(i * step);
      if (index < data.length) {
        result.push(data[index]);
      }
    }

    return result;
  }, [data]);

  const formatter = new Intl.NumberFormat(i18n.language);

  if (isLoading) {
    return <BounceLoader color='var(--sky-700)' size={30} />;
  }

  if (error) {
    return <h3 className='error-message'>{t('ERROR_FETCH_DATA')}</h3>;
  }

  return (
    <VictoryChart
      domainPadding={{ x: 20, y: 20 }}
      animate={{
        duration: 500,
        onLoad: { duration: 500 },
      }}
      padding={{ left: 100, bottom: 75, right: 50 }}
    >
      <VictoryLine
        data={sampleData}
        x={x}
        y={y}
        style={{
          data: {
            stroke: 'var(--sky-600)',
          },
        }}
      />
      <VictoryScatter
        size={5}
        data={sampleData}
        labelComponent={<VictoryTooltip />}
        x={x}
        y={y}
        style={{ data: { fill: 'var(--sky-700)' } }}
        labels={({ datum }) => formatter.format(datum._y)}
      />
    </VictoryChart>
  );
};

export default LineChart;
