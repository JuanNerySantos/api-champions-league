import { findAllPlayers } from "../repositories/players-repository";
import { noContent, ok } from "../utils/http-response";

export const getPlayerService = async () => {
  const data = await findAllPlayers();

  if (!data) {
    return noContent();
  }

  return ok(data);
};
