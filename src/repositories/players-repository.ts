import { UpdatePlayerModel } from "../models/params-update-player";
import { PlayerModel } from "../models/player-model";

const dataBase: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Inter Miami",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 92,
      Passing: 91,
      Dribbling: 96,
      Defending: 38,
      Physical: 65,
    },
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Al Nassr",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 87,
      Shooting: 93,
      Passing: 82,
      Dribbling: 89,
      Defending: 34,
      Physical: 77,
    },
  },
  {
    id: 3,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "Midfielder",
    statistics: {
      Overall: 91,
      Pace: 76,
      Shooting: 86,
      Passing: 93,
      Dribbling: 88,
      Defending: 64,
      Physical: 78,
    },
  },
  {
    id: 4,
    name: "Virgil van Dijk",
    club: "Liverpool",
    nationality: "Netherlands",
    position: "Defender",
    statistics: {
      Overall: 90,
      Pace: 72,
      Shooting: 60,
      Passing: 71,
      Dribbling: 72,
      Defending: 92,
      Physical: 86,
    },
  },
  {
    id: 5,
    name: "Kylian Mbappé",
    club: "Paris Saint-Germain",
    nationality: "France",
    position: "Forward",
    statistics: {
      Overall: 92,
      Pace: 97,
      Shooting: 89,
      Passing: 80,
      Dribbling: 92,
      Defending: 36,
      Physical: 76,
    },
  },
  {
    id: 6,
    name: "Neymar Jr",
    club: "Al Hilal",
    nationality: "Brazil",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 91,
      Shooting: 85,
      Passing: 87,
      Dribbling: 94,
      Defending: 37,
      Physical: 62,
    },
  },
  {
    id: 7,
    name: "Robert Lewandowski",
    club: "Barcelona",
    nationality: "Poland",
    position: "Forward",
    statistics: {
      Overall: 92,
      Pace: 78,
      Shooting: 94,
      Passing: 79,
      Dribbling: 86,
      Defending: 43,
      Physical: 82,
    },
  },
  {
    id: 8,
    name: "Mohamed Salah",
    club: "Liverpool",
    nationality: "Egypt",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 93,
      Shooting: 87,
      Passing: 81,
      Dribbling: 90,
      Defending: 45,
      Physical: 75,
    },
  },
  {
    id: 9,
    name: "Erling Haaland",
    club: "Manchester City",
    nationality: "Norway",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 89,
      Shooting: 93,
      Passing: 65,
      Dribbling: 80,
      Defending: 45,
      Physical: 88,
    },
  },
  {
    id: 10,
    name: "Luka Modrić",
    club: "Real Madrid",
    nationality: "Croatia",
    position: "Midfielder",
    statistics: {
      Overall: 89,
      Pace: 75,
      Shooting: 76,
      Passing: 90,
      Dribbling: 91,
      Defending: 72,
      Physical: 65,
    },
  },
  {
    id: 11,
    name: "Casemiro",
    club: "Manchester United",
    nationality: "Brazil",
    position: "Midfielder",
    statistics: {
      Overall: 89,
      Pace: 65,
      Shooting: 73,
      Passing: 77,
      Dribbling: 74,
      Defending: 88,
      Physical: 90,
    },
  },
  {
    id: 12,
    name: "Thibaut Courtois",
    club: "Real Madrid",
    nationality: "Belgium",
    position: "Goalkeeper",
    statistics: {
      Overall: 90,
      Pace: 50,
      Shooting: 40,
      Passing: 65,
      Dribbling: 45,
      Defending: 15,
      Physical: 70,
    },
  },
  {
    id: 13,
    name: "Harry Kane",
    club: "Bayern Munich",
    nationality: "England",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 70,
      Shooting: 93,
      Passing: 83,
      Dribbling: 81,
      Defending: 47,
      Physical: 82,
    },
  },
  {
    id: 14,
    name: "Joshua Kimmich",
    club: "Bayern Munich",
    nationality: "Germany",
    position: "Midfielder",
    statistics: {
      Overall: 89,
      Pace: 69,
      Shooting: 73,
      Passing: 91,
      Dribbling: 84,
      Defending: 80,
      Physical: 76,
    },
  },
  {
    id: 15,
    name: "Sergio Ramos",
    club: "Sevilla",
    nationality: "Spain",
    position: "Defender",
    statistics: {
      Overall: 87,
      Pace: 68,
      Shooting: 62,
      Passing: 71,
      Dribbling: 70,
      Defending: 88,
      Physical: 84,
    },
  },
];

export const findAllPlayersRepository = async (): Promise<PlayerModel[]> => {
  return dataBase;
};

export const findPlayerByIdRepository = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return dataBase.find((player) => player.id === id);
};

export const createPlayerRepository = async (data: PlayerModel) => {
  dataBase.push(data);
  return {
    data,
  };
};

export const DeletePlayerByIdRepository = async (id: number) => {
  const index = dataBase.findIndex((player) => player.id === id);

  if (index !== -1) {
    return dataBase.splice(index, 1);
  }
};

export const UpdatePlayerRepository = async (
  id: number,
  updateParams: UpdatePlayerModel
) => {
  const indexPlayer = dataBase.findIndex((player) => player.id === id);

  if (indexPlayer !== -1) {
    return (dataBase[indexPlayer] = {
      ...dataBase[indexPlayer],
      ...updateParams,
    });
  }
};
