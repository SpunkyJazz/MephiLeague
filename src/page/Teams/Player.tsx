import { Button, Col, Row, Typography } from "antd";
import { PProps, PlayerProops } from "./types";
import { PlayersCol } from "./style";
import rus from "src/assets/rus.png";
import "./index.css";

export const Players = ({ data, unselectPlayer }: PProps): JSX.Element => {
  const { Title } = Typography;

  const HoverImg = ({ name }: PlayerProops) => {
    return (
      <div className="card">
        <div className="front">
          <img src={rus} style={{ width: 360, height: 360 }} />
          <Title level={4} style={{ textAlign: "center" }}>
            {name}
          </Title>
        </div>

        <div className="back">
          <div className="back-content">
            <h2>{name}</h2>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Col>
      <Button onClick={unselectPlayer}>Назад</Button>
      <Row gutter={[24, 24]} style={{ rowGap: 50 }}>
        {data.map((player) => (
          <PlayersCol span={6}>
            <HoverImg name={player} />
          </PlayersCol>
        ))}
      </Row>
    </Col>
  );
};
