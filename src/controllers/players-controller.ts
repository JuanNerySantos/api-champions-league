import { Request, Response } from "express";
import { UpdatePlayerModel } from "../models/params-update-player";
import {
  createPlayerService,
  DeletePlayerByIdService,
  getPlayerByIdService,
  getPlayerService,
  UpdatePlayerService,
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

export const DeletePlayerById = async (req: Request, res: Response) => {
  const playerId = parseInt(req.params.id);

  const httpResponse = await DeletePlayerByIdService(playerId);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const UpdatePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const updateParams: UpdatePlayerModel = req.body;

  const httpResponse = await UpdatePlayerService(id, updateParams);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};
