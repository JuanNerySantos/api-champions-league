import { getClubRepository } from "../repositories/club-repository";
import { badRequest, notFound } from "../utils/http-response";

export const getClubService = async (id: number) => {
  if (Object.keys(id).length === 0) {
    return badRequest();
  }

  const club = await getClubRepository(id);

  if (!club) {
    return notFound();
  }

  return club;
};
