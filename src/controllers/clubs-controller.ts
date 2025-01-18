import { Request, Response } from "express";
import { getClubService } from "../services/clubs-service";

export const getClub = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpsResponse = await getClubService(id);

  res.status(httpsResponse.statusCode).json(httpsResponse.body);
};
