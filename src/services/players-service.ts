import {
  findAllPlayersRepository,
  findPlayerByIdRepository,
} from "../repositories/players-repository";
import { noContent, ok } from "../utils/http-response";

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
