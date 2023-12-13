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
    <Row gutter={[24, 24]}>
      <TableCol xxl={12} xl={24} lg={24} md={24} sm={24} xs={24}>
        <Card
          style={{
            textAlign: "center",
            fontSize: 24,
            boxShadow: "0 0 30px #CCD2FF"
          }}>
          Бомбардиры
          <Table
            columns={COLUMNS_GOALS}
            dataSource={goals?.map((p: any, index: number) => ({
              index: index + 1,
              name: [p.surname, " ", p.name],
              team: p.team,
              score: p.number_of_goals
            }))}
            size="small"
            pagination={false}
            loading={isLoading}
            bordered
          />
        </Card>
      </TableCol>
      <TableCol xxl={12} xl={24} lg={24} md={24} sm={24} xs={24}>
        <Card
          style={{
            textAlign: "center",
            fontSize: 24,
            boxShadow: "0 0 30px #CCD2FF"
          }}>
          Ассистенты
          <Table
            columns={COLUMNS_ASSISTS}
            dataSource={assists?.map((p: any, index: number) => ({
              index: index + 1,
              name: [p.surname, " ", p.name],
              team: p.team,
              assists: p.number_of_assists
            }))}
            size="small"
            pagination={false}
            loading={isLoading}
            bordered
          />
        </Card>
      </TableCol>
    </Row>
  );
};
