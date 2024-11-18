/* eslint-disable no-undef */
import {z} from "zod";

const envScheme = z.object({
    // vitejs
    SITE_PORT: z.string(),
    // cdn
    SITE_CDN_DOMAIN: z.string(),
});

export const env = envScheme.parse({
    // vitejs
    SITE_PORT: process.env.SITE_PORT,
    // cdn
    SITE_CDN_DOMAIN: process.env.SITE_CDN_DOMAIN,
});
