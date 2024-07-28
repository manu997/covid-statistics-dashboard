import environments from '../environments';
import {
  genderizeSchema,
  nationalizeSchema,
  agifySchema,
  covidHistorySchema,
} from '../schemas';
import { FormData } from '../types';

export const getGenderize = async ({ name }: FormData) => {
  const data = await fetch(`${environments.BASE_URL}/genderize/${name}`);
  const jsonData = await data.json();
  const result = genderizeSchema.safeParse(jsonData);
  if (result.error) {
    throw new Error(result.error.message);
  }
  return jsonData;
};

export const getNationalize = async ({ name }: FormData) => {
  const data = await fetch(`${environments.BASE_URL}/nationalize/${name}`);
  const jsonData = await data.json();
  const result = nationalizeSchema.safeParse(jsonData);
  if (result.error) {
    throw new Error(result.error.message);
  }
  return jsonData;
};

export const getAgify = async ({ name }: FormData) => {
  const data = await fetch(`${environments.BASE_URL}/agify/${name}`);
  const jsonData = await data.json();
  const result = agifySchema.safeParse(jsonData);
  if (result.error) {
    throw new Error(result.error.message);
  }
  return jsonData;
};

export const getCovidHistory = async () => {
  const response = await fetch(`${environments.BASE_URL}/covid/historical`);
  const jsonData = await response.json();
  const result = covidHistorySchema.safeParse(jsonData);
  if (result.error) {
    console.info(result.error.message);
    throw new Error(result.error.message);
  }
  return result.data;
};
