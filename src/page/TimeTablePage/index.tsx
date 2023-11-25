import { Table, Tabs, message } from "antd";
import { useEffect, useState } from "react";
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

  return (
    <Tabs
      onChange={onChange}
      type="card"
      items={timeTable.map((index: any) => {
        return {
          label: `${index.id} тур`,
          key: index.id,
          children: (
            <Table
              columns={COLUMNS_TIME_TABLE}
              dataSource={index?.res.map((p: any) => ({
                date: [p.match_date],
                teams: [
                  <img src={p.first_logo} />,
                  "   ",
                  p.first_team,
                  "-",
                  p.second_team,
                  "   ",
                  <img src={p.second_logo} />
                ],
                score: [p.goal_first, ":", p.goal_second]
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
