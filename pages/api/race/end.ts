import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { unstable_getServerSession } from "next-auth";
import { calculateSpeed } from "@/lib/utils";
import { authOptions } from "../auth/[...nextauth]";

type raceSession = {
  sessionid?: string;
  error?: string;
};

type body = {
  text: string;
  timestamp: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<raceSession>
) {
  const json = req.body as body;
  const timestamp = json.timestamp;
  const correctText = json.text;
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

  const race = await prisma.race.findUnique({
    where: {
      sessionid: sessionId.toString(),
    },
    select: {
      start: true,
    },
  });

  if (!race || !race.start) {
    res.status(404).json({
      error: "Race doesn't exist",
    });
    return;
  }

  const startingTime = parseInt(race?.start);
  const endingTime = timestamp;

  const secondsPassed = (endingTime - startingTime) / 1000;

  if (secondsPassed < 10) {
    res.status(400).json({
      error:
        "Stop cheating, if you didn't cheat, dm me @krishnerkar on twitter",
    });
    return;
  }

  const wpm = calculateSpeed(0, secondsPassed, correctText) + 1;

  if (wpm > 180) {
    res.status(400).json({
      error:
        "Stop cheating, if you didn't cheat, dm me @krishnerkar on twitter",
    });
    return;
  }

  await prisma.race.update({
    where: {
      sessionid: sessionId.toString(),
    },
    data: {
      end: timestamp.toString(),
      wpm: wpm,
    },
  });

  const user = await prisma.user.findUnique({
    where: {
      githubid: githubId.toString(),
    },
    select: {
      topspeed: true,
    },
  });

  const topspeed = user?.topspeed || 0;

  await prisma.user.update({
    where: {
      githubid: githubId.toString(),
    },
    data: {
      topspeed: wpm > topspeed ? wpm : topspeed,
    },
  });

  res.status(200).json({ sessionid: sessionId });
}
