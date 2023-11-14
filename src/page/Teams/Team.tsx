import {
  Button,
  Card,
  Row,
  Space,
  Table,
  Typography,
  Col,
  List,
  message
} from "antd";
import { TProps } from "./types";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { COLUMNS_TEAMPLAYERS } from "src/constants";
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

export const Team = ({ data, unselectTeam }: TProps): JSX.Element => {
  const { Title } = Typography;

  const [isLoading, setIsLoading] = useState(true);

  const [team, setTeam] = useState<any>();
  useEffect(() => {
    MephiLeagueApi.getTeam(data?.name)
      .then((res) => {
        console.log(res.data);
        setTeam(res.data);
      })
      .catch(() => message.error("Ошибка при загрузке"))
      .finally(() => setIsLoading(false));
  }, []);

  const images = [
    {
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
    },
    {
      imgPath:
        "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
    },
    {
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250"
    },
    {
      imgPath:
        "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
    }
  ];

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const theme = useTheme();
  const maxSteps = images.length;
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
    <Row gutter={[20, 20]} justify="space-between">
      <Col style={{ width: 860 }}>
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
            margin: "7px"
            // border: "15px ridge black"
          }}>
          <Col style={{ width: 230 }}>
            {team && <img src={team?.logo[0].url} width={230} height={230} />}
            <Button
              style={{
                margin: "10px",
                backgroundColor: "grey",
                fontSize: "16px",
                color: "white",
                border: "3px solid black"
              }}
              onClick={() => handleSelectPlayers(team?.players)}>
              Состав команды
            </Button>
          </Col>
          <Space style={{ display: "block", width: "520px" }}>
            <Col>
              <Title level={1} style={{ margin: "0px" }}>
                {data?.name}
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
          </Space>
        </Row>
        <Box>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents>
            {images.map((step, index) => (
              <div>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 480,
                      display: "block",
                      maxWidth: 860,
                      overflow: "hidden",
                      width: "100%"
                    }}
                    src={step.imgPath}
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
      <Col style={{ width: 780 }}>
        <Card style={{ width: 780, textAlign: "center", fontSize: 24 }}>
          Статистика игроков
          <Table
            columns={COLUMNS_TEAMPLAYERS}
            dataSource={team?.players.map((p: any) => ({
              player_name: [p.name, " ", p.surname, " ", p.lastname],
              player_games: p.number_of_matches,
              player_goals: p.number_of_goals,
              player_assists: p.number_of_assists,
              player_yellowCards: p.yellow_cards,
              player_redCards: p.red_cards
            }))}
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
