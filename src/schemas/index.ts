import { z } from 'zod';
export const genderizeSchema = z.object({
  count: z.number(),
  gender: z.string(),
  name: z.string(),
  probability: z.number(),
});

export const agifySchema = z.object({
  count: z.number(),
  age: z.number(),
  name: z.string(),
});

export const countrySchema = z.object({
  country_id: z.string(),
  probability: z.number(),
});

export const nationalizeSchema = z.object({
  count: z.number(),
  country: z.array(countrySchema),
  name: z.string(),
});

export const covidHistorySchema = z.object({
  data: z.array(
    z.object({
      cases: z.object({
        total: z.object({
          value: z.number().nullable(),
        }),
      }),
      date: z.string(),
      outcomes: z.object({
        death: z.object({
          total: z.object({
            value: z.number().nullable(),
          }),
        }),
      }),
      testing: z.object({
        total: z.object({
          value: z.number().nullable(),
        }),
      }),
    })
  ),
});
