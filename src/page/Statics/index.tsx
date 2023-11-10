import { Card, Row, Table } from "antd";
import { TableCol } from "../Teams/style";
import { COLUMNS_ASSISTS, COLUMNS_GOALS } from "src/constants";

export const StaticsPage = (): JSX.Element => {
  const goals = [{}];

  const assists = [{}];

  return (
    <Row gutter={[30, 30]}>
      <TableCol span={12}>
        <Card style={{ width: 750, textAlign: "center", fontSize: 24 }}>Бомбардиры
          <Table
            columns={COLUMNS_GOALS}
            dataSource={goals}
            size="small"
            pagination={false}
            bordered
          />
        </Card>
      </TableCol>
      <TableCol span={12}>
        <Card style={{ width: 750, textAlign: "center", fontSize: 24 }}>Ассистенты
          <Table
            columns={COLUMNS_ASSISTS}
            dataSource={assists}
            size="small"
            pagination={false}
            bordered
          />
        </Card>
      </TableCol>
    </Row>
  );
};
