import { ClubModel } from "../models/club-model";

const dataBase: ClubModel[] = [{ id: 1, name: "juan" }];

export const getClubRepository = async (): Promise<ClubModel[]> => {
  return dataBase;
};
