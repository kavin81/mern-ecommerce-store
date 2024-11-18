import { z } from "zod";

export const envSchema = z.object({
    // api
    API_PORT: z.string().transform((val) => Number(val)),
    API_PREFIX: z.string(),
    // database
    DATABASE_URI: z.string().url(),
    DATABASE_NAME: z.string(),
    // jwt access
    JWT_SECRET: z.string(),
    JWT_EXPIRATION: z.string().optional().default("1d"),
    // jwt refresh
    JWT_REFRESH_SECRET: z.string(),
    JWT_REFRESH_EXPIRATION: z.string().optional().default("7d"),
});

export const env = envSchema.parse({
    // api
    API_PORT: process.env.API_PORT,
    API_PREFIX: process.env.API_PREFIX,
    // database
    DATABASE_URI: process.env.DATABASE_URI,
    DATABASE_NAME: process.env.DATABASE_NAME,
    // jwt access
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRATION: process.env.JWT_EXPIRATION,
    // jwt refresh
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
    JWT_REFRESH_EXPIRATION: process.env.JWT_REFRESH_EXPIRATION,
});
