import { ClubModel } from "../models/club-model";

const dataBase: ClubModel[] = [{ id: 1, name: "Botafogo" }];

export const getClubRepository = async (): Promise<ClubModel[]> => {
  return dataBase;
};
