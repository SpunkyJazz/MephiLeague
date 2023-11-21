import { Table, Tabs, message } from "antd";
import { useEffect, useState } from "react";
import { MephiLeagueApi } from "src/api/mephi-league";
import { COLUMNS_TIME_TABLE } from "src/constants";

export const TimeTablePage = (): JSX.Element => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const [isLoading, setIsLoading] = useState(true);

  const [timeTable, setTimeTable] = useState<any>();
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
    <>
      <Tabs
        onChange={onChange}
        type="card"
        items={timeTable.map((i: any) => {
          return {
            label: `${i.id} тур`,
            key: i.id,
            children: (
              <Table
                columns={COLUMNS_TIME_TABLE}
                dataSource={i?.res.map((p: any) => ({
                  data: [p.match_date],
                  teams: [p.first_team, "-", p.second_team],
                  score: [p.goal_first, ":", p.goal_second],
                }))}
                size="small"
                pagination={false}
                bordered
              />
            )
          };
        })}
      />
    </>
  );
};
