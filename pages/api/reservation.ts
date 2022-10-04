// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { createReservation } from "../../utils/helpers/writeFuncs";

import { isDate } from "date-fns";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, date, time, numPeople } = req.body;
  if (req.method === "POST" && name && email && date && time && numPeople) {
    if (isDate(new Date(`${date.mm}/${date.dd}/${date.yy}`))) {
      // createReservation(req.body);
      res.status(200).json({ word: "success" });
    }
  } else {
    res.status(403).json({
      error:
        "This route only accepts post requests. Missing/invalid properties.",
    });
  }
}
