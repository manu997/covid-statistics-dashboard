import { useQueries } from '@tanstack/react-query';
import { getAgify, getGenderize, getNationalize } from '../services';

interface useDataProps {
  name: string;
  enableQuery: boolean;
}

const useGetData = ({ name, enableQuery }: useDataProps) => {
  const [dataGenderize, dataNationalize, dataAgify] = useQueries({
    queries: [
      {
        queryKey: ['genderize', name],
        queryFn: () => getGenderize({ name }),
        enabled: enableQuery,
      },
      {
        queryKey: ['nationalize', name],
        queryFn: () => getNationalize({ name }),
        enabled: enableQuery,
      },
      {
        queryKey: ['agify', name],
        queryFn: () => getAgify({ name }),
        enabled: enableQuery,
      },
    ],
  });
  const isLoading =
    dataGenderize.isLoading || dataNationalize.isLoading || dataAgify.isLoading;

  const errors = [dataGenderize.error, dataNationalize.error, dataAgify.error];

  const genderize = dataGenderize.data;
  const nationalize = dataNationalize.data;
  const agify = dataAgify.data;

  const success =
    dataGenderize.isSuccess && dataNationalize.isSuccess && dataAgify.isSuccess;

  return {
    isLoading,
    errors,
    data: { genderize, nationalize, agify },
    success,
  };
};

export default useGetData;
