import { useQuery } from '@tanstack/react-query';
import environments from '../environments';
import { QueryFunctionResponseCovidHistory } from '../types';

const getCovidHistory = async () => {
  const response = await fetch(`${environments.BASE_URL}/covid/historical`);
  const jsonData = await response.json();
  return jsonData as QueryFunctionResponseCovidHistory;
};

export const useCovidHistory = () =>
  useQuery({
    queryKey: ['covidHistory'],
    queryFn: getCovidHistory,
    refetchOnWindowFocus: false,
    retry: false,
  });
