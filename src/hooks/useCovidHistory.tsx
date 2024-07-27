import { useQuery } from '@tanstack/react-query';
import environments from '../environments';

const getCovidHistory = async () => {
  const response = await fetch(`${environments.BASE_URL}/covid/historical`);
  const jsonData = await response.json();
  return jsonData;
};

export const useCovidHistory = () =>
  useQuery({
    queryKey: ['covidHistory'],
    queryFn: getCovidHistory,
    enabled: true,
    refetchOnWindowFocus: false,
    retry: false,
  });
