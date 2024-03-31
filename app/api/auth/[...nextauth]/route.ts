import { db } from "@/lib/db";
import { Account, AuthOptions, Profile, Session, User } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { JWT } from "next-auth/jwt";
import { MyUser } from "@/types/next-auth";
import NextAuth from "next-auth/next";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                    placeholder: 'your@email.com'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            authorize: async (credentials) => {
                if(!credentials) {
                    return null;
                }

                const { email, password } = credentials;

                const user = await db.user.findUnique({
                    where: {
                        email
                    }
                });

                if(!user) {
                    return null;
                }

                const userPassword = user.password;

                const isValidPassword = bcrypt.compareSync(password, userPassword);

                if(!isValidPassword) {
                    return null;
                }

                return user;
            }
        })
    ],
    pages: {
        signIn: '/login',
        signOut: '/register',
    },
    secret: process.env.NEXTAUTH_SECRET,
    jwt: {
        async encode({secret, token}) {
            if(!token) {
                throw new Error('No token to encode');
            }
            return jwt.sign(token, secret);
        },
        async decode({secret, token}) {
            if(!token) {
                throw new Error('No token to decode');
            }
            const decodedToken = jwt.verify(token, secret);
            if(typeof decodedToken === 'string') {
                return JSON.parse(decodedToken);
            } else {
                return decodedToken;
            }
        }
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60,
    },
    callbacks: {
        async session(params: {session: Session; token: JWT; user: MyUser}) {
            if(params.session.user) {
                params.session.user.email = params.token.email;
                params.session.user.firstName = params.token.firstName; 
                params.session.user.lastName = params.token.lastName; 
                params.session.user.role = params.token.role; 
            }

            return params.session;
        },
        async jwt(params: {
            token: JWT;
            user?: MyUser | undefined;
            account?: Account | null | undefined;
            profile?: Profile | undefined;
            isNewUser?: boolean | undefined;
          }) {
            if (params.user) {
              params.token.email = params.user.email;
              params.token.firstName = params.user.firstName; 
              params.token.lastName = params.user.lastName; 
              params.token.role = params.user.role; 
            }
          
            return params.token;
          }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };