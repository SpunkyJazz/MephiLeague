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
  logo: string[];
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
  first_team: string;
  second_team: string;
  first_logo: string;
  second_logo: string;
  match_date: string;
  goal_first: number;
  goal_second: number;
  tour_number: number;
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
