import { Request, Response } from "express";

export const getPlayer = async (req: Request, res: Response) => {
  res.json({ player: "iii" });
};
