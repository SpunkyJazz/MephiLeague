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
        items={new Array(8).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `${id} тур`,
            key: id,
            children: (
              <Table
                columns={COLUMNS_TIME_TABLE}
                dataSource={timeTable?.map((p: any) =>
                  p?.map((a: any) => ({
                    data: [a.match_date],
                    teams: [a.first_team, "-", a.second_team],
                    score: [a.goal_first, ":", a.goal_second]
                  }))
                )}
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
