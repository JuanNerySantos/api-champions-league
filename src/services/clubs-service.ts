import { getClubRepository } from "../repositories/club-repository";
import { ok } from "../utils/http-response";

export const getClubService = async () => {
  const club = await getClubRepository();

  return ok(club);
};
