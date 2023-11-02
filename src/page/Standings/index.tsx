import { Card, Table } from "antd";

export const StandingsPage = (): JSX.Element => {

   const columns = [
      {
         title: "Команда",
         dataIndex: "team",
         key: "team"
      },
      {
         title: "Игры",
         dataIndex: "games",
         key: "games"
      },
      {
         title: "Победы",
         dataIndex: "win",
         key: "win",
      },
      {
         title: "Ничьи",
         dataIndex: "draw",
         key: "draw"
      },
      {
         title: "Поражения",
         dataIndex: "loses",
         key: "loses"
      },
      {
         title: "Забито мячей",
         dataIndex: "scored",
         key: "scored"
      },
      {
         title: "Пропущено мячей",
         dataIndex: "missed",
         key: "missed"
      },
      {
         title: "Разница мячей",
         dataIndex: "difference",
         key: "difference"
      },
      {
         title: "Очки",
         dataIndex: "points",
         key: "points"
      },
   ];

   const dataSource = [
      {}
   ];
   
   return (
      <>
         <Card title="Турнирная таблица" style={{ textAlign: "center" }}></Card>
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
