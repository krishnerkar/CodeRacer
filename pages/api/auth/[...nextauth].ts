import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      // @ts-expect-error
      const username = profile?.login as string;
      // @ts-expect-error
      const githubId = profile?.id as string;
      const email = profile?.email as string;
      // @ts-expect-error
      const avatar = profile?.avatar_url as string;

      const user = await prisma.user.findUnique({
        where: {
          githubid: githubId.toString(),
        },
      });

      if (!user) {
        await prisma.user.create({
          data: {
            githubid: githubId.toString() || "",
            username: username || "",
            email: email || "",
            avatar: avatar || "",
            topspeed: 0,
          },
        });
      } else {
        await prisma.user.update({
          where: {
            githubid: githubId.toString(),
          },
          data: {
            username: username || "",
            email: email || "",
            avatar: avatar || "",
          },
        });
      }

      return true;
    },

    async session({ session, user, token }) {
      const userObj = await prisma.user.findFirst({
        where: {
          email: session?.user?.email || "",
        },
      });

      const data = {
        ...session,
        userObj,
      };

      return data;
    },
  },
};

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, authOptions);
}
