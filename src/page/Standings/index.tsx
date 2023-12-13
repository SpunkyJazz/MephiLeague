import { Card, Col, Table, message } from "antd";
import { useEffect, useState } from "react";
import { MephiLeagueApi } from "src/api/mephi-league";
import { COLUMNS_STANDINGS } from "src/constants";
import { Team } from "../Teams/Team";

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

  const [selectedTeam, setSelectedTeam] = useState<any>();

  const handleSelectTeam = (data: any): void => {
    setSelectedTeam(data);
  };

  const handleUnselectTeam = (): void => {
    setSelectedTeam(undefined);
  };

  return selectedTeam ? (
    <Team data={selectedTeam} unselectTeam={handleUnselectTeam} />
  ) : (
    <Col>
      <Card
        style={{
          textAlign: "center",
          fontSize: 24,
          boxShadow: "0 0 30px #CCD2FF"
        }}>
        Турнирная таблица
      </Card>
      <Table
        style={{ boxShadow: "0 0 30px #CCD2FF" }}
        columns={COLUMNS_STANDINGS}
        dataSource={standings?.map((p: any, index: number) => ({
          index: index + 1,
          logo: (
            <img
              src={p?.logo}
              width={70}
              height={70}
              onClick={() => handleSelectTeam(p)}
              style={{ cursor: "pointer" }}
            />
          ),
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
        loading={isLoading}
        bordered
      />
    </Col>
  );
};
