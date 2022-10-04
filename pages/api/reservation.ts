// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { createReservation } from "../../utils/helpers/writeFuncs";
import { userReservation } from "../../utils/types/projectTypes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // console.log(req.body);
    const resp = await createReservation(req.body);

    // console.log(resp);

    res.status(200).json({ word: "success" });
  } else {
    res.status(403).json({ error: "This route only accepts post requests" });
  }
}
