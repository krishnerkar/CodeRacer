import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { user } from "@prisma/client";

type raceData = {
  wpm: number;
  time: number;
  code: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<user>
) {
  const json = JSON.parse(req.body.race);

  const previousRaces = await prisma.user.findUnique({
    where: {
      githubid: req.body.githubId.toString(),
    },
    select: {
      races: true,
      topspeed: true,
    },
  });

  const prev = previousRaces?.races as raceData[];

  const topspeed = previousRaces?.topspeed || 0;

  const raceData = {
    wpm: json.wpm,
    time: json.time,
    code: json.code,
  };

  let newRaces;

  if (Object.keys(prev[0]).length === 0) {
    newRaces = [raceData];
  } else {
    newRaces = [...prev, raceData];
  }

  const result = await prisma.user.update({
    where: {
      githubid: req.body.githubId.toString(),
    },
    data: {
      races: newRaces,
      topspeed: json.wpm > topspeed ? json.wpm : topspeed,
    },
  });

  res.status(200).json(result);
}
