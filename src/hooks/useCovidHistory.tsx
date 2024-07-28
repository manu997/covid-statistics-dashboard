import { useQuery } from '@tanstack/react-query';
import { getCovidHistory } from '../services';

export const useCovidHistory = () =>
  useQuery({
    queryKey: ['covidHistory'],
    queryFn: getCovidHistory,
    refetchOnWindowFocus: false,
    retry: false,
  });
