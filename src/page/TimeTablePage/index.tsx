import { Table, Tabs } from "antd";

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
               children: <Table
                           columns={columns}
                           dataSource={dataSource}
                           size="small"
                           pagination={false}
                           bordered
                        />,
               };
            })}
         />
      </>
   )
};
