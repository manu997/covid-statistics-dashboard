import environments from '../environments';
import {
  FormData,
  QueryFunction,
  QueryFunctionResponseAgify,
  QueryFunctionResponseGenderize,
  QueryFunctionResponseNationalize,
} from '../types';

export const getGenderize: QueryFunction<
  QueryFunctionResponseGenderize
> = async ({ name }: FormData) => {
  const data = await fetch(`${environments.BASE_URL}/genderize/${name}`);
  const jsonData = await data.json();
  return jsonData;
};

export const getNationalize: QueryFunction<
  QueryFunctionResponseNationalize
> = async ({ name }: FormData) => {
  const data = await fetch(`${environments.BASE_URL}/nationalize/${name}`);
  const jsonData = await data.json();
  return jsonData;
};

export const getAgify: QueryFunction<QueryFunctionResponseAgify> = async ({
  name,
}: FormData) => {
  const data = await fetch(`${environments.BASE_URL}/agify/${name}`);
  const jsonData = await data.json();
  return jsonData;
};
