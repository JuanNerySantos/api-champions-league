import { PlayerModel } from "../models/player-model";
import {
  createPlayerRepository,
  findAllPlayersRepository,
  findPlayerByIdRepository,
} from "../repositories/players-repository";
import { badRequest, create, noContent, ok } from "../utils/http-response";

export const getPlayerService = async () => {
  const data = await findAllPlayersRepository();

  if (!data) {
    return noContent();
  }

  return ok(data);
};

export const getPlayerByIdService = async (id: number) => {
  const data = await findPlayerByIdRepository(id);

  if (!data) {
    return noContent();
  }

  return ok(data);
};

export const createPlayerService = async (data: PlayerModel) => {
  if (!data) {
    return noContent();
  }

  const createPlayer = await createPlayerRepository(data);

  if (!createPlayer) {
    return badRequest();
  }

  return create(createPlayer);
};
