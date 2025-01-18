import { Request, Response } from "express";
import { getClubService } from "../services/clubs-service";

export const getClub = async (req: Request, res: Response) => {
  const httpsResponse = await getClubService();

  res.status(httpsResponse.statusCode).json(httpsResponse.body);
};
