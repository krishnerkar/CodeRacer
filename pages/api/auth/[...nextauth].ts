import NextAuth, { Profile } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  // const token = getAccessToken(req.cookies) || ""
  // const payload = jwt.verify(token, JWT_SECRET)
  // const { userId } = payload as { userId: number }

  // if (!userId) {
  //   throw new Error("Please connect your wallet")
  // }

  return await NextAuth(req, res, {
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
              races: {},
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
  });
}
