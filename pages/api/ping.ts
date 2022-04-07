import type { NextApiRequest, NextApiResponse } from "next";

const ping = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ pong: "️☘️" });
};

export default ping;
