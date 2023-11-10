import {
  Button,
  Card,
  Row,
  Space,
  Table,
  Typography,
  Col,
  Carousel,
  List
} from "antd";
import { TProps } from "./types";
import { CSSProperties, useState } from "react";
import { COLUMNS_TEAMPLAYERS } from "src/constants";
import { Players } from "./Player";
import { TwitterOutlined } from "@ant-design/icons";

export const Team = ({ data, unselectTeam }: TProps): JSX.Element => {
  const { Title } = Typography;

  const [selectedPlayers, setSelectedPlayers] = useState<string[]>();

  const handleSelectPlayers = (data: string[]): void => {
    setSelectedPlayers(data);
  };

  const handleUnselectPlayers = (): void => {
    setSelectedPlayers(undefined);
  };

  const listData = ["Кубок МИФИ (1 место)", "Чемпионат МИФИ (1 место)"];

  return selectedPlayers ? (
    <Players data={selectedPlayers} unselectPlayer={handleUnselectPlayers} />
  ) : (
    <Row gutter={[20, 20]} justify="space-between">
      <Col style={{ width: 860 }}>
        <Row justify="space-between">
          <Button onClick={unselectTeam}>Назад</Button>
          <Button
            icon={<TwitterOutlined rev={undefined} />}
            href={data?.VKgroup}
            style={{ width: 72 }}
            target="_blank"
          />
        </Row>
        <Row
          justify="space-between"
          style={{
            textAlign: "center",
            padding: "7px",
            margin: "7px",
            border: "15px ridge black"
          }}>
          <Col style={{ width: 230 }}>
            <img src={data?.logo} width={230} height={230} />
            <Button
              style={{
                margin: "10px",
                backgroundColor: "grey",
                fontSize: "16px",
                color: "white",
                border: "3px solid black"
              }}
              onClick={() => handleSelectPlayers(data?.players)}>
              Состав команды
            </Button>
          </Col>
          <Space style={{ display: "block", width: "520px" }}>
            <Col>
              <Title level={1} style={{ margin: "0px" }}>
                {data?.name}
              </Title>
              <Title level={4}> Капитан: </Title>
              Соколовский Степан Владимирович
              <Title level={4}>
                Предыдущие заслуги:
                <List
                  size="small"
                  bordered
                  dataSource={listData}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              </Title>
            </Col>
          </Space>
        </Row>
        <Carousel
          autoplay
          effect="scrollx"
          dotPosition="bottom"
          style={{ width: 840, backgroundColor: "black" }}>
          {[data?.img1, data?.img2].map((image, index) => (
            <a href={image} key={index}>
              <img
                height={480}
                style={{
                  display: "block",
                  margin: "0 auto",
                  overflow: "hidden"
                }}
                src={image}
              />
            </a>
          ))}
        </Carousel>
      </Col>
      <Col style={{ width: 780 }}>
        <Card style={{ width: 780, textAlign: "center", fontSize: 24 }}>
          Статистика игроков
          <Table
            columns={COLUMNS_TEAMPLAYERS}
            dataSource={data?.players.map((p) => ({ player_name: p }))}
            size="large"
            pagination={false}
            bordered
          />
        </Card>
        <Card style={{ width: 780, textAlign: "center", fontSize: 24 }}>
          Расписание команды
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
