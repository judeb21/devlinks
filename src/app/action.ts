'use server'

import { cookies } from "next/headers";


const config = {
  maxAge: 60 * 60 * 24 * 2, // 2 days
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

export async function createCookies(data: string) {
  cookies().set('devlinks-user', data, config);
}
