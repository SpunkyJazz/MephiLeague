export type TPlayer = {
  name: string;
  surname: string;
  lastname: string;
  photo: string[];
  team: string;
  number_of_matches: number;
  number_of_goals: number;
  number_of_assists: number;
  yellow_cards: number;
  red_cards: number;
  date_of_birth: string;
  city: string;
  role: string;
};

export type TTeam = {
  team_name: string;
  logo: string;
  VK: string;
  captain: string;
  gallery: string[];
  players: TPlayer[];
  place_in_the_tournament: number;
  games_played: number;
  victory: number;
  defeat: number;
  draw: number;
  goals_scored: number;
  missed_goals: number;
  score: number;
};

export type TTimeTable = {
  id: number;
  res: games[];
};

type games = {
  first_team: string;
  second_team: string;
  first_logo: string;
  second_logo: string;
  match_date: string;
  goal_first: number;
  goal_second: number;
  tour_number: number;
  possession1_first: number,
  possession1_second: number,
  possession2_first: number,
  possession2_second: number,
  shots_first: number,
  shots_second: number,
  shots_on_target_first: number,
  shots_on_target_second: number,
  shots_wide_first: number,
  shots_wide_second: number,
  corners_first: number,
  corners_second: number,
  fouls_first: number,
  fouls_second: number
};

export type TGoals = {
  name: string;
  team: string;
  goals: number;
};

export type TAssists = {
  name: string;
  team: string;
  asissts: number;
};

export type THistory = {
  name_of_tournament: string;
  video: string;
  photo: string;
  top_goals: TPlayer[];
  top_assists: TPlayer[];
  top_goals_assists: TPlayer[];
  table: TTeam[];
};

export type TAdmins = {
  name: string;
  photo: string;
  tg: string;
  job: string;
};

export type TMainPage = {
  best_goals: TPlayer;
  best_assists: TPlayer;
};
