import { z } from 'zod';
import {
  genderizeSchema,
  agifySchema,
  countrySchema,
  nationalizeSchema,
  covidHistorySchema,
} from '../schemas';

export type FormData = {
  name: string;
};

export type Genderize = z.infer<typeof genderizeSchema>;

export type Agify = z.infer<typeof agifySchema>;

export type Country = z.infer<typeof countrySchema>;

export type Nationalize = z.infer<typeof nationalizeSchema>;

export type CovidHistory = z.infer<typeof covidHistorySchema>;
