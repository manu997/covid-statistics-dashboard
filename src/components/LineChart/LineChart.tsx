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
}

const LineChart = ({ data, x, y, isLoading }: LineChartProps) => {
  const { i18n } = useTranslation();

  const sampleData = useMemo(() => {
    const step = Math.floor(data?.length / 5);
    return data?.filter((_, index) => index % step === 0).slice(0, 5);
  }, [data]);

  const formatter = new Intl.NumberFormat(i18n.language);

  return isLoading ? (
    <BounceLoader color='#0369a1' size={50} />
  ) : (
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
            stroke: '#0284c7',
          },
        }}
      />
      <VictoryScatter
        size={5}
        data={sampleData}
        labelComponent={<VictoryTooltip />}
        x={x}
        y={y}
        style={{ data: { fill: '#0369a1' } }}
        labels={({ datum }) => formatter.format(datum._y)}
      />
    </VictoryChart>
  );
};

export default LineChart;
