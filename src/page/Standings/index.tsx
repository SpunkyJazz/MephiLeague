import { Card, Table } from "antd";
import { COLUMNS_STANDINGS } from "src/constants";

export const StandingsPage = (): JSX.Element => {
  const dataSource = [{}];

  return (
    <>
      <Card title="Турнирная таблица" style={{ textAlign: "center" }}></Card>
      <Table
        columns={COLUMNS_STANDINGS}
        dataSource={dataSource}
        size="small"
        pagination={false}
        bordered
      />
    </>
  );
};
