import { Card, Table, message } from "antd";
import { useEffect, useState } from "react";
import { MephiLeagueApi } from "src/api/mephi-league";
import { COLUMNS_STANDINGS } from "src/constants";

export const StandingsPage = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  const [standings, setStandings] = useState<any>();
  useEffect(() => {
    MephiLeagueApi.getTeams()
      .then((res) => {
        console.log(res.data);
        setStandings(res.data);
      })
      .catch(() => message.error("Ошибка при загрузке"))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Card style={{ textAlign: "center", fontSize: 24 }}>
        Турнирная таблица
      </Card>
      <Table
        columns={COLUMNS_STANDINGS}
        dataSource={standings?.map((p: any) => ({
          team: p.team_name,
          games: p.games_played,
          win: p.victory,
          draw: p.draw,
          loses: p.defeat,
          scored: p.goals_scored,
          missed: p.missed_goals,
          points: p.score
        }))}
        size="small"
        pagination={false}
        bordered
      />
    </>
  );
};
