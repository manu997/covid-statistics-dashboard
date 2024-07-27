import environments from '../environments';
import {
  FormData,
  QueryFunction,
  QueryFunctionResponseAgify,
  QueryFunctionResponseGenderize,
  QueryFunctionResponseNationalize,
} from '../types';

export const getGenderize: QueryFunction<QueryFunctionResponseGenderize> = ({
  name,
}: FormData) =>
  fetch(`${environments.BASE_URL}/genderize/${name}`)
    .then((res) => res.json())
    .then((data) => data);

export const getNationalize: QueryFunction<
  QueryFunctionResponseNationalize
> = ({ name }: FormData) =>
  fetch(`${environments.BASE_URL}/nationalize/${name}`)
    .then((res) => res.json())
    .then((data) => data);

export const getAgify: QueryFunction<QueryFunctionResponseAgify> = ({
  name,
}: FormData) =>
  fetch(`${environments.BASE_URL}/agify/${name}`)
    .then((res) => res.json())
    .then((data) => data);
