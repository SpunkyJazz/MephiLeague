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
    this.get<T>(`http://192.168.31.116:5005/GetPlayers`);

  public getTeam = <T = TTeam>(id: string): TResponse<T> =>
    this.get<T>(`http://192.168.31.116:5005/GetTeam/${id}`);

  public getTeams = <T = TTeam[]>(): TResponse<T> =>
    this.get<T>(`http://192.168.31.116:5005/GetTeams`);

  public getGoals = <T = TPlayer[]>(): TResponse<T> =>
    this.get<T>(`http://192.168.31.116:5005/GetGoals`);

  public getAssists = <T = TPlayer[]>(): TResponse<T> =>
    this.get<T>(`http://192.168.31.116:5005/GetAssists`);

  public getTimeTable = <T = TTimeTable[]>(): TResponse<T> =>
    this.get<T>(`http://192.168.31.116:5005/GetSchedule`);

  public getHistory = <T = THistory[]>(): TResponse<T> =>
    this.get<T>(`http://192.168.31.116:5005/GetHistory`);

  public getAdmins = <T = TAdmins[]>(): TResponse<T> =>
    this.get<T>(`http://192.168.31.116:5005/GetAdmins`);

  public getMainPage = <T = TMainPage>(): TResponse<T> =>
    this.get<T>(`http://192.168.31.116:5005/GetMain`);
}

export const MephiLeagueApi = new MephiLeagueApiClass();
