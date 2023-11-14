import { Button, Col, Row, Typography } from "antd";
import { PProps } from "./types";
import { PlayersCol } from "./style";
import "./index.css";

export const Players = ({ data, unselectPlayer }: PProps): JSX.Element => {
  const { Title } = Typography;

  const HoverImg = ({ player }: any) => {
    return (
      <div className="card">
        <div className="front">
          {player && <img src={player?.photo[0].url} width={360} height={360} />}
          <Title level={4} style={{ textAlign: "center" }}>
            {[player.surname, " ", player.name, " ", player.lastname]}
          </Title>
        </div>

        <div className="back">
          <div className="back-content">
            <div>
              <h2>
                {[player.surname, " ", player.name, " ", player.lastname]}
              </h2>
            </div>
            <div>
              <h3>Дата рождения: {player.date_of_birth}</h3>
            </div>
            <div>
              <h3>Родной город: {player.city}</h3>
            </div>
            <div>
              <h3>Позиция: {player.role}</h3>
            </div>
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
            <HoverImg player={player} />
          </PlayersCol>
        ))}
      </Row>
    </Col>
  );
};
