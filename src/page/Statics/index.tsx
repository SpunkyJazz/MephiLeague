import { Card, Row, Table, message } from "antd";
import { TableCol } from "../Teams/style";
import { COLUMNS_ASSISTS, COLUMNS_GOALS } from "src/constants";
import { useEffect, useState } from "react";
import { MephiLeagueApi } from "src/api/mephi-league";

export const StaticsPage = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  const [goals, setGoals] = useState<any>();
  useEffect(() => {
    MephiLeagueApi.getGoals()
      .then((res) => {
        console.log(res.data);
        setGoals(res.data);
      })
      .catch(() => message.error("Ошибка при загрузке"))
      .finally(() => setIsLoading(false));
  }, []);

  const [assists, setAssists] = useState<any>();
  useEffect(() => {
    MephiLeagueApi.getAssists()
      .then((res) => {
        console.log(res.data);
        setAssists(res.data);
      })
      .catch(() => message.error("Ошибка при загрузке"))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Row gutter={[30, 30]}>
      <TableCol span={12}>
        <Card style={{ width: 750, textAlign: "center", fontSize: 24 }}>
          Бомбардиры
          <Table
            columns={COLUMNS_GOALS}
            dataSource={goals?.map((p: any) => ({
              name: [p.name, " ", p.surname, " ", p.lastname],
              team: p.team,
              score: p.number_of_goals
            }))}
            size="small"
            pagination={false}
            bordered
          />
        </Card>
      </TableCol>
      <TableCol span={12}>
        <Card style={{ width: 750, textAlign: "center", fontSize: 24 }}>
          Ассистенты
          <Table
            columns={COLUMNS_ASSISTS}
            dataSource={assists?.map((p: any) => ({
              name: [p.name, " ", p.surname, " ", p.lastname],
              team: p.team,
              assists: p.number_of_assists
            }))}
            size="small"
            pagination={false}
            bordered
          />
        </Card>
      </TableCol>
    </Row>
  );
};
