import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { user } from "@prisma/client";
import { unstable_getServerSession } from "next-auth";
import { calculateSpeed } from "@/lib/utils";

type raceSession = {
  sessionid?: string;
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
  const correctText = json.text;
  const cookies = req.cookies;
  const sessionId = cookies["sessionId"];

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

  const wpm = calculateSpeed(0, secondsPassed, correctText);

  const result = await prisma.race.update({
    where: {
      sessionid: sessionId.toString(),
    },
    data: {
      end: timestamp.toString(),
      wpm: wpm,
    },
  });
  
  console.log(result)

  res.status(200).json({ sessionid: sessionId });
}
