import { PropsWithChildren, useEffect, useState } from "react";
import { Card, Col, Row, Space, Typography, message } from "antd";
import { TeamCol } from "./style";
import { TSelectedTeam } from "./types";
import { IBoopProps } from "./types";
import { Team } from "./Team";
import { MephiLeagueApi } from "src/api/mephi-league";

export const TeamsPage = (): JSX.Element => {
  const { Title } = Typography;

  const [isLoading, setIsLoading] = useState(true);

  const [team, setTeam] = useState<any>();
  useEffect(() => {
    MephiLeagueApi.getTeams()
      .then((res) => {
        console.log(res.data);
        setTeam(res.data);
      })
      .catch(() => message.error("Ошибка при загрузке"))
      .finally(() => setIsLoading(false));
  }, []);

  const [mainPage, setMainPage] = useState<any>();
  useEffect(() => {
    MephiLeagueApi.getMainPage()
      .then((res) => {
        console.log(res.data);
        setMainPage(res.data);
      })
      .catch(() => message.error("Ошибка при загрузке"))
      .finally(() => setIsLoading(false));
  }, []);

  const [selectedTeam, setSelectedTeam] = useState<TSelectedTeam | undefined>();

  const Boop = ({ scale, timing, children }: PropsWithChildren<IBoopProps>) => {
    const [isBooped, setIsBooped] = useState(false);
    const style = {
      transform: isBooped ? `scale(${scale})` : `scale(1)`,
      transition: `transform ${timing}ms`
    };
    const trigger = (): void => {
      setIsBooped(true);
    };
    const trigger2 = (): void => {
      setIsBooped(false);
    };
    return (
      <span onMouseEnter={trigger} onMouseLeave={trigger2} style={style}>
        {children}
      </span>
    );
  };

  const handleSelectTeam = (data: TSelectedTeam): void => {
    setSelectedTeam(data);
  };

  const handleUnselectTeam = (): void => {
    setSelectedTeam(undefined);
  };

  return selectedTeam ? (
    <Team data={selectedTeam} unselectTeam={handleUnselectTeam} />
  ) : (
    <Col>
      <Row gutter={[24, 24]}>
        {team?.map((t: any) => (
          <TeamCol
            key={t.team_name}
            onClick={() => handleSelectTeam(t)}
            xxl={6}
            xl={6}
            lg={8}
            md={8}
            sm={12}
            xs={24}>
            <Boop scale={1.2} timing={200}>
              <img
                src={t?.logo}
                width={210}
                height={210}
                data-proportion-h="1"
              />
              <Title style={{ textAlign: "center" }} level={3}>
                {t.team_name}
              </Title>
            </Boop>
          </TeamCol>
        ))}
      </Row>
      <Row
        gutter={[24, 24]}
        style={{ justifyContent: "space-between", marginTop: 20 }}>
        <Col xxl={8} xl={12} lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{
              textAlign: "center",
              fontSize: 24,
              boxShadow: "0 0 30px #CCD2FF"
            }}>
            Лучший Бомбардир
            <Col>
              <img
                src={mainPage?.best_goal?.photo}
                width={220}
                height={220}
                style={{ borderRadius: 150, marginBottom: 20 }}
              />
              <Title level={5}>ГОЛЫ</Title>
              <div
                style={{
                  margin: "0 auto",
                  fontSize: 30,
                  fontWeight: 600,
                  backgroundColor: "#5e8ff0",
                  border: "4px solid black",
                  borderRadius: 160,
                  width: 60
                }}>
                {mainPage?.best_goal?.number_of_goals}
              </div>
              <Title
                level={3}
                style={{ textAlign: "center", marginTop: 20 }}>
                {mainPage?.best_goal?.surname + " " + mainPage?.best_goal?.name}
              </Title>
            </Col>
          </Card>
        </Col>
        <Col xxl={8} xl={12} lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{
              textAlign: "center",
              fontSize: 24,
              boxShadow: "0 0 30px #CCD2FF"
            }}>
            Лучший Ассистент
            <Col>
              <img
                src={mainPage?.best_assists?.photo}
                width={220}
                height={220}
                style={{ borderRadius: 150, marginBottom: 20 }}
              />
              <Title level={5}>ПЕРЕДАЧИ</Title>
              <div
                style={{
                  margin: "0 auto",
                  fontSize: 30,
                  fontWeight: 600,
                  backgroundColor: "#5e8ff0",
                  border: "4px solid black",
                  borderRadius: 160,
                  width: 60
                }}>
                {mainPage?.best_assists?.number_of_assists}
              </div>
              <Title
                level={3}
                style={{ textAlign: "center", marginTop: 20 }}>
                {mainPage?.best_assists?.surname +
                  " " +
                  mainPage?.best_assists?.name}
              </Title>
            </Col>
          </Card>
        </Col>
        <Col xxl={8} xl={24} lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{
              textAlign: "center",
              fontSize: 24,
              boxShadow: "0 0 30px #CCD2FF"
            }}>
            Ближайший матч
            <Col>
              <Row justify="space-between">
                <Col>
                  <img
                    style={{ marginTop: 65 }}
                    width={90}
                    src={mainPage?.match?.first_logo}
                  />
                  <Title
                    level={4}
                    style={{ textAlign: "center", marginTop: 25, width: 110 }}>
                    {mainPage?.match?.first_team}
                  </Title>
                </Col>
                <Space style={{alignContent: "center", fontSize: 30, fontWeight: 600}}>
                  :
                </Space>
                <Col>
                  <img
                    style={{ marginTop: 65 }}
                    width={90}
                    src={mainPage?.match?.second_logo}
                  />
                  <Title
                    level={4}
                    style={{ textAlign: "center", marginTop: 25, width: 110 }}>
                    {mainPage?.match?.second_team}
                  </Title>
                </Col>
              </Row>
              <Title level={4} style={{ textAlign: "center", marginTop: 50 }}>
                {mainPage?.match?.match_date}
              </Title>
            </Col>
          </Card>
        </Col>
      </Row>
    </Col>
  );
};
