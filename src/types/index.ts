export type FormData = {
  name: string;
};

export type QueryFunctionResponseGenderize = {
  count: number;
  gender: string;
  name: string;
  probability: number;
};

export type QueryFunctionResponseAgify = {
  count: number;
  age: string;
  name: string;
};

export type Country = {
  country_id: string;
  probability: number;
};

export type QueryFunctionResponseNationalize = {
  count: number;
  country: Country[];
  name: string;
};

export type QueryFunctionResponseCovidHistory = {
  data: {
    cases: { total: { value: number } };
    date: string;
    outcomes: { deaths: { total: { value: number } } };
    testing: { total: { value: number } };
  }[];
};

export type QueryFunction<K, T> = (params: K) => Promise<T>;
