interface PlayerModel {
  id: number;
  name: string;
}

const dataBase: PlayerModel[] = [
  { id: 1, name: "Juan" },
  { id: 2, name: "Jorge" },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return dataBase;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return dataBase.find((player) => {
    player.id === id;
  });
};
