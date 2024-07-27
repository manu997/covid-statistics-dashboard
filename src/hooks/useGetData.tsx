import { useQueries } from '@tanstack/react-query';
import { getAgify, getGenderize, getNationalize } from '../services';
import { useEffect, useState } from 'react';
import {
  QueryFunctionResponseAgify,
  QueryFunctionResponseGenderize,
  QueryFunctionResponseNationalize,
} from '../types';

interface useDataProps {
  name: string;
  enableQuery: boolean;
}

const useGetData = ({ name, enableQuery }: useDataProps) => {
  const [data, setData] = useState({
    genderize: {} as QueryFunctionResponseGenderize,
    nationalize: {} as QueryFunctionResponseNationalize,
    agify: {} as QueryFunctionResponseAgify,
  });
  const [success, setSuccess] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const queryResults = useQueries({
    queries: [
      {
        queryKey: ['genderize', name],
        queryFn: () => getGenderize({ name }),
        enabled: enableQuery,
        retry: false,
      },
      {
        queryKey: ['nationalize', name],
        queryFn: () => getNationalize({ name }),
        enabled: enableQuery,
        retry: false,
      },
      {
        queryKey: ['agify', name],
        queryFn: () => getAgify({ name }),
        enabled: enableQuery,
        retry: false,
      },
    ],
  });
  const isLoading = queryResults.some((query) => query.isLoading);

  const errors = queryResults
    .map((query) => query.error)
    .filter((error) => error);

  useEffect(() => {
    const allSuccess = queryResults.every((query) => query.isSuccess);
    const allFetched = queryResults.every((query) => query.isFetched);

    if (allSuccess) {
      setData({
        genderize: queryResults[0].data!,
        nationalize: queryResults[1].data!,
        agify: queryResults[2].data!,
      });
      setSuccess(true);
    }

    if (allFetched) {
      setIsFetched(true);
    }
  }, [queryResults]);

  return {
    isLoading,
    errors,
    data,
    success,
    isFetched,
  };
};

export default useGetData;
