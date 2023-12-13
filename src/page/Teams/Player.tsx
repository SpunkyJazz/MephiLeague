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
          {player && <img src={player?.photo} width={300} height={300} />}
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
            <Row justify="space-between" style={{ margin: 10, marginTop: 20 }}>
              <Col>
                Матчей
                <h3>{player.number_of_matches}</h3>
              </Col>
              <Col>
                Голов
                <h3>{player.number_of_goals}</h3>
              </Col>
              <Col>
                Передачи
                <h3>{player.number_of_assists}</h3>
              </Col>
              <Col>
                ЖК
                <h3>{player.yellow_cards}</h3>
              </Col>
              <Col>
                КК
                <h3>{player.red_cards}</h3>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Col>
      <Button onClick={unselectPlayer}>Назад</Button>
      <Row gutter={[24, 24]} style={{ rowGap: 60 }}>
        {data.map((player) => (
          <PlayersCol xxl={6} xl={8} lg={12} md={12} sm={24} xs={24}>
            <HoverImg player={player} />
          </PlayersCol>
        ))}
      </Row>
    </Col>
  );
};
