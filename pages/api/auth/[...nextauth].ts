import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import prisma from "@/lib/prisma";

export default NextAuth({
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
          },
        });
      }

      return true;
    },
  },
});
