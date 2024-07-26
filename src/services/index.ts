import { FormData, QueryFunction } from '../types';

export const getGenderize: QueryFunction = ({ name }: FormData) =>
  fetch(`http://localhost:3200/api/genderize/${name}`)
    .then((res) => res.json())
    .then((data) => data);

export const getNationalize: QueryFunction = ({ name }: FormData) =>
  fetch(`http://localhost:3200/api/nationalize/${name}`)
    .then((res) => res.json())
    .then((data) => data);

export const getAgify: QueryFunction = ({ name }: FormData) =>
  fetch(`http://localhost:3200/api/agify/${name}`)
    .then((res) => res.json())
    .then((data) => data);
