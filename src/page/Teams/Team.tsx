import {
  Button,
  Card,
  Row,
  Space,
  Table,
  Typography,
  Col,
  Carousel
} from "antd";
import { TProps } from "./types";
import { CSSProperties } from "react";
import VK from "src/assets/iconVK.png";
import { COLUMNS_TEAMPLAYERS } from "src/constants";

export const Team = ({ data, unselectTeam }: TProps): JSX.Element => {
  const { Title } = Typography;

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
            <Button href={data?.VKgroup} style={{ width: 72 }} target="_blank">
              <img src={VK} width={24} />
            </Button>
          </Space>
        </Row>
        <img
          style={{ display: "block", margin: "0 auto" }}
          src={data?.logo}
          width={250}
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
        <Card
          title="Состав команды"
          style={{ width: 820, textAlign: "center" }}>
          <Table
            columns={COLUMNS_TEAMPLAYERS}
            dataSource={data?.players.map((p) => ({ player_name: p }))}
            size="small"
            pagination={false}
            bordered
          />
        </Card>
        <Card
          title="Расписание команды"
          style={{ width: 820, textAlign: "center" }}>
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
