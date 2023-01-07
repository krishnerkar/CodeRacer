import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

type raceSession = {
  data?: string;
  error?: string;
};

type body = {
  githubId: string;
  code: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<raceSession>
) {
  const timestamp = Date.now();
  const json = req.body;
  const cookies = req.cookies;
  const sessionId = cookies["sessionId"];
  const session = await unstable_getServerSession(req, res, authOptions);
  //@ts-expect-error
  const githubId = session?.userObj?.githubid;

  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  if (!sessionId) {
    res.status(400).json({ error: "Invalid Request" });
    return;
  }

  const user = await prisma.user.findUnique({
    where: {
      githubid: githubId.toString(),
    },
  });

  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  await prisma.session.create({
    data: {
      sessionid: sessionId.toString(),
    },
  });

  await prisma.race.create({
    data: {
      userid: user.id,
      sessionid: sessionId.toString(),
      start: timestamp.toString(),
      code: json.code,
    },
  });

  res.status(200).json({ data: "success" });
}
