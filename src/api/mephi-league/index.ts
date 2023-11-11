import { ApiCommon } from "../Common";
import { TResponse } from "../Common/types";
import { TTeam } from "./types";

export class MephiLeagueApiClass extends ApiCommon {
  public getTeam = <T = TTeam>(id: string): TResponse<T> =>
    this.get<T>(`/league/v1/team/${id}`);

  public getWay = <T = string>(): TResponse<T> =>
    this.get<T>(`http://192.168.31.116:5005/test`);
  }

export const MephiLeagueApi = new MephiLeagueApiClass();