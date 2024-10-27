// TODO: will add in future: JWT_SECRET , JWT_EXPIRES_IN , JWT_COOKIE_EXPIRES_IN

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            // api
            API_PORT: string;
            API_PREFIX: string;
            // database
            DATABASE_URI: string;
            DATABASE_NAME: string;
        }
    }
}

export {}
