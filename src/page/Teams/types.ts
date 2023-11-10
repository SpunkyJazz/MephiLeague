export type TSelectedTeam = {
  name: string;
  players: string[];
  logo: string;
  img1: string;
  img2: string;
  VKgroup: string;
};

// export type TSelectedPlayers = {
//   names: string[];
//   // photo: string;
// };

export interface IBoopProps {
  scale: number;
  timing: number;
}

export interface PlayerProops {
  name: string;
}

export type TProps = {
  data: TSelectedTeam; // | undefined
  unselectTeam: () => void;
};

export type PProps = {
  data: string[];
  unselectPlayer: () => void;
};
