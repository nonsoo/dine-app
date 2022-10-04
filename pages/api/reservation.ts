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
    const dateCheck = new Date(
      `${date.mm}/${date.dd}/${date.yy} ${time.hh}:${time.mm} ${time.hrType}`
    );
    if (isDate(dateCheck)) {
      createReservation(req.body);
      res.status(200).json({ word: "success" });
    } else {
      res.status(404).json({ error: "Missing/invalid properties" });
    }
  } else {
    res.status(405).json({
      error:
        "This route only accepts post requests. Missing/invalid properties.",
    });
  }
}
