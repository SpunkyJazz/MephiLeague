import { Card, Row, Table } from "antd";
import { TableCol } from "../Teams/style";

export const StaticsPage = (): JSX.Element => {
   
   const columnsGoals = [
      {
         title: "Имя",
         dataIndex: "name",
         key: "name"
      },
      {
         title: "Команда",
         dataIndex: "team",
         key: "team"
      },
      {
         title: "Голы",
         dataIndex: "score",
         key: "score"
      }
   ];

   const columnsAssists = [
      {
         title: "Имя",
         dataIndex: "name",
         key: "name"
      },
      {
         title: "Команда",
         dataIndex: "team",
         key: "team"
      },
      {
         title: "Ассисты",
         dataIndex: "assists",
         key: "assists"
      }
   ];

   const goals = [
      {}
   ];

   const assists = [
      {}
   ];

   return (
      <Row gutter={[30, 30]}>
         <TableCol span={12}>
            <Card title="Бомбардиры" style={{ width: 750, textAlign: "center" }}>
               <Table
                  columns={columnsGoals}
                  dataSource={goals}
                  size="small"
                  pagination={false}
                  bordered
               />
            </Card>
         </TableCol>
         <TableCol span={12}>
            <Card title="Ассистенты" style={{ width: 750, textAlign: "center" }}>
               <Table
                  columns={columnsAssists}
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
