import { useMemo } from 'react';
import { VictoryChart, VictoryLine, VictoryScatter } from 'victory';

interface LineChartProps {
  data: any[];
  x: string;
  y: string;
}

const LineChart = ({ data, x, y }: LineChartProps) => {
  const sampleData = useMemo(() => {
    const step = Math.floor(data.length / 5);
    return data.filter((_, index) => index % step === 0).slice(0, 5);
  }, [data]);

  return (
    <VictoryChart
      domainPadding={{ x: 20, y: 20 }}
      animate={{
        duration: 500,
        onLoad: { duration: 500 },
      }}
      padding={{ left: 100, bottom: 50, right: 50, top: 20 }}
    >
      <VictoryLine data={sampleData} x={x} y={y} />
      <VictoryScatter size={7} data={sampleData} x={x} y={y} />
    </VictoryChart>
  );
};

export default LineChart;
