import { ApiCommon } from "../Common";
import { TResponse } from "../Common/types";
import {
  TPlayer,
  TTimeTable,
  TTeam,
  THistory,
  TAdmins,
  TMainPage
} from "./types";

export class MephiLeagueApiClass extends ApiCommon {
  public getPlayer = <T = TPlayer>(): TResponse<T> =>
    this.get<T>(`/api/GetPlayers`);

  public getTeam = <T = TTeam>(id: string): TResponse<T> =>
    this.get<T>(`/api/GetTeam/${id}`);

  public getTeams = <T = TTeam[]>(): TResponse<T> =>
    this.get<T>(`/api/GetTeams`);

  public getGoals = <T = TPlayer[]>(): TResponse<T> =>
    this.get<T>(`/api/GetGoals`);

  public getAssists = <T = TPlayer[]>(): TResponse<T> =>
    this.get<T>(`/api/GetAssists`);

  public getTimeTable = <T = TTimeTable[]>(): TResponse<T> =>
    this.get<T>(`/api/GetSchedule`);

  public getHistory = <T = THistory[]>(): TResponse<T> =>
    this.get<T>(`/api/GetHistory`);

  public getAdmins = <T = TAdmins[]>(): TResponse<T> =>
    this.get<T>(`/api/GetAdmins`);

  public getMainPage = <T = TMainPage>(): TResponse<T> =>
    this.get<T>(`/api/GetMain`);
}

export const MephiLeagueApi = new MephiLeagueApiClass();
