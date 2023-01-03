// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

type Data = {
  id: Number;
  code: String;
  language: String;
  url: String;
  repo_name: String;
  repo_url: String;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const result = await prisma.snippets.findMany();
  res.status(200).json(result);
}
