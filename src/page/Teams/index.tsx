import { PropsWithChildren, useState } from "react";
import { Card, Row, Table, Tag, Typography } from "antd";
import { TableCol, TeamCol } from "./style";
import { TSelectedTeam } from "./types";
import { IBoopProps } from "./types";
import { Team } from "./Team";
import { EXPECTED_GAMES_DATA, PLAYED_GAMES_DATA, TEAMS } from "src/mock";

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
            dataSource={PLAYED_GAMES_DATA.map((g) => ({
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
            dataSource={EXPECTED_GAMES_DATA.map((g) => ({
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
