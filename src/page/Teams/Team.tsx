import { Button, Card, Row, Space, Table, Typography } from "antd";
import { TSelectedTeam } from "./types";
import { SpaceImage } from "./style";

type TProps = {
  data: TSelectedTeam | undefined;
  unselectTeam: () => void;
};

export const Team = ({ data, unselectTeam }: TProps): JSX.Element => {
  const { Title } = Typography;

  const columns: any = [
    {
      title: "Игрок",
      dataIndex: "player_name",
      key: "player_name",
      align: "center"
    }
  ];

  return (
    <>
      <Row gutter={[30, 30]} justify="space-between">
        <Button onClick={unselectTeam}>Назад</Button>
        <Title level={1} style={{ color: "red" }}>
          {data?.name}
        </Title>
        <Space>
          <Button>inst</Button>
          <Button>telegram</Button>
        </Space>
      </Row>
      <SpaceImage>
        <img src={data?.img1} width={280} data-proportion-h="1" />
        <img src={data?.logo} width={280} data-proportion-h="1" />
        <img src={data?.img2} width={280} data-proportion-h="1" />
      </SpaceImage>
      <Row gutter={[30, 30]} justify="space-around">
        <Card title="Состав команды" style={{ width: 600 }}>
          <Table
            columns={columns}
            dataSource={data?.players.map((p) => ({ player_name: p }))}
            size="middle"
            pagination={false}
            bordered
          />
        </Card>
        <Card title="Расписание команды" style={{ width: 600 }}>
          <Table
          // columns={}
          // dataSource={}
          // size="large"
          // pagination={false}
          // bordered
          />
        </Card>
      </Row>
    </>
  );
};
