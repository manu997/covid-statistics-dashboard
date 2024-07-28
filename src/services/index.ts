import environments from '../environments';
import {
  FormData,
  QueryFunction,
  QueryFunctionResponseAgify,
  QueryFunctionResponseCovidHistory,
  QueryFunctionResponseGenderize,
  QueryFunctionResponseNationalize,
} from '../types';

export const getGenderize: QueryFunction<
  FormData,
  QueryFunctionResponseGenderize
> = async ({ name }) => {
  const data = await fetch(`${environments.BASE_URL}/genderize/${name}`);
  const jsonData = await data.json();
  return jsonData;
};

export const getNationalize: QueryFunction<
  FormData,
  QueryFunctionResponseNationalize
> = async ({ name }) => {
  const data = await fetch(`${environments.BASE_URL}/nationalize/${name}`);
  const jsonData = await data.json();
  return jsonData;
};

export const getAgify: QueryFunction<
  FormData,
  QueryFunctionResponseAgify
> = async ({ name }) => {
  const data = await fetch(`${environments.BASE_URL}/agify/${name}`);
  const jsonData = await data.json();
  return jsonData;
};

export const getCovidHistory: QueryFunction<
  void,
  QueryFunctionResponseCovidHistory
> = async () => {
  const response = await fetch(`${environments.BASE_URL}/covid/historical`);
  const jsonData = await response.json();
  console.info(jsonData);
  return jsonData;
};
