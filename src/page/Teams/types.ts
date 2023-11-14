import { TPlayer } from "src/api/mephi-league/types";

export type TSelectedTeam = {
  name: string;
  logo: string;
};

export interface IBoopProps {
  scale: number;
  timing: number;
}

export type TProps = {
  data: TSelectedTeam;
  unselectTeam: () => void;
};

export type PProps = {
  data: TPlayer[];
  unselectPlayer: () => void;
};
