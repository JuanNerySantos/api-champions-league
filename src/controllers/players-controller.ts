import { Request, Response } from "express";
import {
  createPlayerService,
  getPlayerByIdService,
  getPlayerService,
} from "../services/players-service";

export const getPlayers = async (req: Request, res: Response) => {
  const httpResponse = await getPlayerService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await getPlayerByIdService(id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const createPlayer = async (req: Request, res: Response) => {
  const player = req.body;
  const httpResponse = await createPlayerService(player);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};
