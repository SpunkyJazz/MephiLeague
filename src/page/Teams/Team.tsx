import { Button, Card, Row, Table, Typography, Col, List, message } from "antd";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { COLUMNS_TEAMPLAYERS, TEAM_TIME_TABLE } from "src/constants";
import { Players } from "./Player";
import { TwitterOutlined } from "@ant-design/icons";
import { MephiLeagueApi } from "src/api/mephi-league";
import { autoPlay } from "react-swipeable-views-utils";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { TPlayer } from "src/api/mephi-league/types";

export const Team = ({ data, unselectTeam }: any): JSX.Element => {
  const { Title } = Typography;

  const [isLoading, setIsLoading] = useState(true);

  const [team, setTeam] = useState<any>();
  useEffect(() => {
    MephiLeagueApi.getTeam(data?.team_name)
      .then((res) => {
        console.log(res.data);
        setTeam(res.data);
      })
      .catch(() => message.error("Ошибка при загрузке"))
      .finally(() => setIsLoading(false));
  }, []);

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const theme = useTheme();
  const maxSteps = 2;
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const [selectedPlayers, setSelectedPlayers] = useState<TPlayer[]>();

  const handleSelectPlayers = (data: TPlayer[]): void => {
    setSelectedPlayers(data);
  };

  const handleUnselectPlayers = (): void => {
    setSelectedPlayers(undefined);
  };

  const listData = ["Кубок МИФИ (1 место)", "Чемпионат МИФИ (1 место)"];

  return selectedPlayers ? (
    <Players data={selectedPlayers} unselectPlayer={handleUnselectPlayers} />
  ) : (
    <Row gutter={[24, 24]} justify="space-between">
      <Col xxl={12} xl={24} lg={24} md={24} sm={24} xs={24}>
        <Row justify="space-between">
          <Button onClick={unselectTeam}>Назад</Button>
          <Button
            icon={<TwitterOutlined rev={undefined} />}
            href={team?.VKgroup}
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
            backgroundColor: "white",
            borderRadius: "15px",
            marginBottom: 20,
            boxShadow: "0 0 30px grey"
          }}>
          <Col xxl={10} xl={8} lg={10} md={24} sm={24} xs={24}>
            <img src={team?.logo} width={230} height={230} />
            <Button
              onClick={() => handleSelectPlayers(team?.players)}
              style={{ fontWeight: 500, margin: 10, width: 230 }}>
              Состав команды
            </Button>
          </Col>
          <Col xxl={14} xl={16} lg={14} md={24} sm={24} xs={24}>
            <Title level={1} style={{ margin: "0px" }}>
              {team?.team_name}
            </Title>
            <Title level={4}> Капитан: </Title>
            {team?.captain}
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
        </Row>
        <Box>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents>
            {team?.gallery.map((step: string, index: number) => (
              <div>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      display: "block",
                      width: "100%"
                    }}
                    src={step}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="middle"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}>
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="middle"
                onClick={handleBack}
                disabled={activeStep === 0}>
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
              </Button>
            }
          />
        </Box>
      </Col>
      <Col xxl={12} xl={24} lg={24} md={24} sm={24} xs={24}>
        <Card
          style={{
            textAlign: "center",
            fontSize: 24,
            marginBottom: 20
          }}>
          Статистика игроков
          <Table
            columns={COLUMNS_TEAMPLAYERS}
            dataSource={team?.players.map((p: any) => ({
              player_name: [p.surname, " ", p.name, " ", p.lastname],
              player_games: p.number_of_matches,
              player_goals: p.number_of_goals,
              player_assists: p.number_of_assists,
              player_yellowCards: p.yellow_cards,
              player_redCards: p.red_cards
            }))}
            size="middle"
            pagination={false}
            bordered
          />
        </Card>
        <Card style={{ textAlign: "center", fontSize: 24 }}>
          Расписание команды
          <Table
            columns={TEAM_TIME_TABLE}
            dataSource={team?.schedule.map((p: any) => ({
              tour: p.tour_number,
              date: [p.match_date],
              teams: [p.first_team, "-", p.second_team],
              score: [p.goal_first, ":", p.goal_second]
            }))}
            size="large"
            pagination={false}
            bordered
          />
        </Card>
      </Col>
    </Row>
  );
};
