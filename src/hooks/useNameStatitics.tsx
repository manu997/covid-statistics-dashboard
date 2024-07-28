import { useQueries } from '@tanstack/react-query';
import { getAgify, getGenderize, getNationalize } from '../services';
import { useMemo } from 'react';

interface useDataProps {
  name: string;
  enableQuery: boolean;
}

const useNameStatitics = ({ name, enableQuery }: useDataProps) => {
  const queryResults = useQueries({
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

  const [genderizeQueryResult, nationalizeQueryResult, agifyQueryResult] =
    queryResults;

  const isLoading = queryResults.some((query) => query.isLoading);

  const errors = useMemo(
    () => queryResults.map((query) => query.error).filter((error) => error),
    [queryResults]
  );

  console.info(errors);

  const success = queryResults.every((query) => query.isSuccess);

  const data = useMemo(
    () => ({
      genderize: genderizeQueryResult.data,
      nationalize: nationalizeQueryResult.data,
      agify: agifyQueryResult.data,
    }),
    [
      agifyQueryResult.data,
      genderizeQueryResult.data,
      nationalizeQueryResult.data,
    ]
  );

  return {
    isLoading,
    errors,
    data,
    success,
  };
};

export default useNameStatitics;
