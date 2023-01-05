import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export type SimpleUser = {
  githubid: string;
  username: string;
  avatar: string;
  topspeed: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SimpleUser[]>
) {
  const leaderboard = await prisma.user.findMany({
    select: {
      githubid: true,
      username: true,
      avatar: true,
      topspeed: true,
    },
    orderBy: {
      topspeed: "desc",
    },
    where: {
      topspeed: {
        not: 0,
      },
    },
  });

  res.status(200).json(leaderboard);
}
