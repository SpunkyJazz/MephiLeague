import { Card, Table } from "antd";

export const TimeTablePage = (): JSX.Element => {

   const columns = [
      {
         title: "Дата",
         dataIndex: "date",
         key: "date"
      },
      {
         title: "Команды",
         dataIndex: "teams",
         key: "teams"
      },
      {
         title: "Счет",
         dataIndex: "score",
         key: "score",
      }
   ];

   const dataSource = [
      {}
   ];
   
   return (
      <>
         <Card title="Расписание матчей" style={{ textAlign: "center" }}/>
         <Card title="1 тур" style={{ textAlign: "center" }}/>
         <Table
            columns={columns}
            dataSource={dataSource}
            size="small"
            pagination={false}
            bordered
         />
         <Card title="2 тур" style={{ textAlign: "center" }}/>
         <Table
            columns={columns}
            dataSource={dataSource}
            size="small"
            pagination={false}
            bordered
         />
      </>
   )
};
