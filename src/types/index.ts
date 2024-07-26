export type FormData = {
  name: string;
};

export type QueryFunctionResponse = {
  count: number;
  gender: string;
  name: string;
  probability: number;
};

export type QueryFunction = (
  params: FormData
) => Promise<QueryFunctionResponse>;
