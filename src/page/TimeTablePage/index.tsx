import { Table, Tabs } from "antd";
import { COLUMNS_TIME_TABLE } from "src/constants";

export const TimeTablePage = (): JSX.Element => {
  const dataSource = [{}];

  const onChange = (key: string) => {
    console.log(key);
  };

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
                dataSource={dataSource}
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
