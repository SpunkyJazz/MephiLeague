import {
  Button,
  Card,
  Row,
  Space,
  Table,
  Typography,
  Carousel,
  Col
} from "antd";
import { TSelectedTeam } from "./types";
import { CSSProperties } from "react";

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
    },
    {
      title: "Матчи",
      dataIndex: "player_games",
      key: "player_games",
      align: "center"
    },
    {
      title: "Голы",
      dataIndex: "player_goals",
      key: "player_goals",
      align: "center"
    },
    {
      title: "Ассисты",
      dataIndex: "player_assists",
      key: "player_assists",
      align: "center"
    }
  ];

  const contentStyle: CSSProperties = {
    height: "480px",
    width: "820px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#000000"
  };

  return (
    <Row gutter={[20, 20]} justify="space-between">
      <Col style={{ width: 820 }}>
        <Row justify="space-between">
          <Button onClick={unselectTeam}>Назад</Button>
          <Title level={1}>{data?.name}</Title>
          <Space>
            <Button href={data?.VKgroup} target="_blank">
              VK
            </Button>
          </Space>
        </Row>
        <img
          style={{ justifyContent: "center" }}
          src={data?.logo}
          width={300}
          data-proportion-h="1"
        />
        <Carousel
          autoplay
          effect="scrollx"
          dotPosition="bottom"
          style={{ width: 820 }}>
          <div>
            <h3 style={contentStyle}>
              <img src={data?.img1} width={680} height={480} />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img src={data?.img2} width={680} height={480} />
            </h3>
          </div>
        </Carousel>
      </Col>
      <Col style={{ width: 820 }}>
        <Card title="Состав команды" style={{ width: 820, textAlign: "center" }}>
          <Table
            columns={columns}
            dataSource={data?.players.map((p) => ({ player_name: p }))}
            size="small"
            pagination={false}
            bordered
          />
        </Card>
        <Card title="Расписание команды" style={{ width: 820, textAlign: "center" }}>
          <Table
          // columns={}
          // dataSource={}
          // size="large"
          // pagination={false}
          // bordered
          />
        </Card>
      </Col>
    </Row>
  );
};
