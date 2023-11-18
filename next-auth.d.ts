import {DefaultSession, DefaultUser} from "next-auth";
import {JWT, DefaultJWT} from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        user: {
            image: string,
            roles: string[],
        } & DefaultSession
    }

    interface User extends DefaultUser {
        roles: string[],
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        roles: string[],
    }
}