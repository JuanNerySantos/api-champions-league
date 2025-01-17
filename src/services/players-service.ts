import { UpdatePlayerModel } from "../models/params-update-player";
import { PlayerModel } from "../models/player-model";
import {
  createPlayerRepository,
  DeletePlayerByIdRepository,
  findAllPlayersRepository,
  findPlayerByIdRepository,
  UpdatePlayerRepository,
} from "../repositories/players-repository";
import {
  badRequest,
  create,
  noContent,
  notFound,
  ok,
} from "../utils/http-response";

export const getPlayerService = async () => {
  const data = await findAllPlayersRepository();

  if (!data) {
    return noContent();
  }

  return ok(data);
};

export const getPlayerByIdService = async (id: number) => {
  const player = await findPlayerByIdRepository(id);

  if (!player) {
    return notFound();
  }

  return ok(player);
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

export const DeletePlayerByIdService = async (id: number) => {
  if (!id) {
    return badRequest();
  }

  const deletedPlayer = await DeletePlayerByIdRepository(id);

  if (!deletedPlayer) {
    return notFound();
  }

  return ok(deletedPlayer);
};

export const UpdatePlayerService = async (
  id: number,
  updateParams: UpdatePlayerModel
) => {
  if (Object.keys(updateParams).length === 0) {
    return badRequest();
  }

  const player = await findPlayerByIdRepository(id);

  if (!player) {
    console.log("error");
    return notFound();
  }

  const updatePlayer = await UpdatePlayerRepository(id, updateParams);

  return ok(updatePlayer);
};
