import { Table, Tabs, message, Button, Row } from "antd";
import { useEffect, useState } from "react";
import { TSelectedMatch } from "./types";
import { Match } from "./match";
import { MephiLeagueApi } from "src/api/mephi-league";
import { COLUMNS_TIME_TABLE } from "src/constants";

export const TimeTablePage = (): JSX.Element => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const [isLoading, setIsLoading] = useState(true);

  const [timeTable, setTimeTable] = useState<any>([]);
  useEffect(() => {
    MephiLeagueApi.getTimeTable()
      .then((res) => {
        console.log(res.data);
        setTimeTable(res.data);
      })
      .catch(() => message.error("Ошибка при загрузке"))
      .finally(() => setIsLoading(false));
  }, []);

  const [selectedMatch, setSelectedMatch] = useState<TSelectedMatch | undefined>();

  const handleSelectMatch = (data: any): void => {
    setSelectedMatch(data);
  };

  const handleUnselectMatch = (): void => {
    setSelectedMatch(undefined);
  };

  return selectedMatch ? (
    <Match data={selectedMatch} unselectMatch={handleUnselectMatch} />
  ) : (
    <Tabs
      onChange={onChange}
      type="card"
      items={timeTable.map((index: any) => {
        return {
          label: `${index.id} тур`,
          key: index.id,
          children: (
            <Table
              style={{ boxShadow: "0 0 30px #CCD2FF" }}
              columns={COLUMNS_TIME_TABLE}
              dataSource={index?.res.map((p: any) => ({
                date: [p.match_date],
                teams: [
                  <img src={p.first_logo} style={{ width: 50 }} />,
                  "   ",
                  p.first_team,
                  "-",
                  p.second_team,
                  "   ",
                  <img src={p.second_logo} style={{ width: 50 }} />, <br/>, <br/>,
                  <Button onClick={() => handleSelectMatch(p)}>Статистика матча</Button>
                ],
                score: [p.goal_first, ":", p.goal_second],
              }))}
              size="small"
              pagination={false}
              loading={isLoading}
              bordered
            />
          )
        };
      })}
    />
  );
};
