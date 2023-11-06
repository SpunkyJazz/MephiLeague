import { PropsWithChildren, useState } from "react";
import { Card, Row, Table, Tag, Typography } from "antd";
import { TableCol, TeamCol } from "./style";
import { TSelectedTeam } from "./types";
import { IBoopProps } from "./types";
import { Team } from "./Team";
import { TEAMS } from "src/mock";

export const TeamsPage = (): JSX.Element => {
  const { Title } = Typography;

  const [selectedTeam, setSelectedTeam] = useState<TSelectedTeam | undefined>();

  const Boop = ({ scale, timing, children }: PropsWithChildren<IBoopProps>) => {
    const [isBooped, setIsBooped] = useState(false);
    const style = {
      transform: isBooped ? `scale(${scale})` : `scale(1)`,
      transition: `transform ${timing}ms`
    };
    const trigger = (): void => {
      setIsBooped(true);
    };
    const trigger2 = (): void => {
      setIsBooped(false);
    };
    return (
      <span onMouseEnter={trigger} onMouseLeave={trigger2} style={style}>
        {children}
      </span>
    );
  };

  const columns = [
    {
      title: "Дата",
      dataIndex: "date",
      key: "date"
    },
    {
      title: "Команды",
      dataIndex: "teams",
      key: "teams"
    },
    {
      title: "Счет",
      dataIndex: "score",
      key: "score",
      render: (e: string) => <Tag>{e}</Tag>
    }
  ];

  const playedGamesData = [
    { date: "01.01", teams: "Арсенал - Ман Сити", score: "10:0" },
    { date: "02.01", teams: "Реал - Барселона", score: "1:2" },
    { date: "03.01", teams: "Ливерпуль - Ман Юнайтед", score: "5:0" },
    { date: "04.01", teams: "Челси - Бормут", score: "0:7" },
    { date: "05.01", teams: "Зенит - ЦСКА", score: "1:4" }
  ];

  const expectedGamesData = [
    { date: null, teams: "Арсенал - Ман Сити", score: "vs" },
    { date: null, teams: "Реал - Барселона", score: "vs" },
    { date: null, teams: "Ливерпуль - Ман Юнайтед", score: "vs" },
    { date: null, teams: "Челси - Бормут", score: "vs" },
    { date: null, teams: "Зенит - ЦСКА", score: "vs" }
  ];

  const handleSelectTeam = (data: TSelectedTeam): void => {
    setSelectedTeam(data);
  };

  const handleUnselectTeam = (): void => {
    setSelectedTeam(undefined);
  };

  return selectedTeam ? (
    <Team data={selectedTeam} unselectTeam={handleUnselectTeam} />
  ) : (
    <Row gutter={[30, 30]}>
      <TableCol span={12}>
        <Card
          title="Сыгранные матчи"
          style={{ width: 700, textAlign: "center" }}>
          <Table
            columns={columns}
            dataSource={playedGamesData.map((g) => ({
              ...g,
              key: `${String(g.date)} ${g.teams}`
            }))}
            size="small"
            // pagination={false}
            bordered
          />
        </Card>
      </TableCol>
      <TableCol span={12}>
        <Card
          title="Предстоящие матчи"
          style={{ width: 700, textAlign: "center" }}>
          <Table
            columns={columns}
            dataSource={expectedGamesData.map((g) => ({
              ...g,
              key: `${String(g.date)} ${g.teams}`
            }))}
            size="small"
            // pagination={false}
            bordered
          />
        </Card>
      </TableCol>
      {TEAMS.map((t) => (
        <TeamCol key={t.name} span={6} onClick={() => handleSelectTeam(t)}>
          <Boop scale={1.25} timing={200}>
            <img src={t.logo} width={230} data-proportion-h="1" />
            <Title style={{ textAlign: "center" }} level={3}>
              {t.name}
            </Title>
          </Boop>
        </TeamCol>
      ))}
    </Row>
  );
};
