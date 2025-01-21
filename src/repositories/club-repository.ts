import fs from "fs/promises";
import { ClubModel } from "../models/club-model";

export const getClubRepository = async (): Promise<ClubModel[]> => {
  const data = await fs.readFile("./src/data/club-data.json", "utf-8");
  const club: ClubModel[] = JSON.parse(data);
  return club;
};
