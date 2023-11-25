import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Card, Col, Row, Table, Tabs, Typography, message } from "antd";
import { useEffect, useState } from "react";
import { MephiLeagueApi } from "src/api/mephi-league";
import {
  COLUMNS_ASSISTS,
  COLUMNS_GOALS,
  COLUMNS_GOALS_ASSISTS,
  COLUMNS_STANDINGS
} from "src/constants";
import { Team } from "../Teams/Team";

export const HistoryPage = (): JSX.Element => {
  const { Title } = Typography;

  const [isLoading, setIsLoading] = useState(true);

  const [history, setHistory] = useState<any>([]);
  useEffect(() => {
    MephiLeagueApi.getHistory()
      .then((res) => {
        console.log(res.data);
        setHistory(res.data);
      })
      .catch(() => message.error("Ошибка при загрузке"))
      .finally(() => setIsLoading(false));
  }, []);

  const steps = [
    {
      label: "Голы"
    },
    {
      label: "Ассисты"
    },
    {
      label: "Голы + ассисты"
    }
  ];

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [selectedTeam, setSelectedTeam] = useState<any>();

  const handleSelectTeam = (data: any): void => {
    setSelectedTeam(data);
  };

  const handleUnselectTeam = (): void => {
    setSelectedTeam(undefined);
  };

  const onChange = (key: string) => {
    console.log(key);
  };

  return selectedTeam ? (
    <Team data={selectedTeam} unselectTeam={handleUnselectTeam} />
  ) : (
    <Tabs
      onChange={onChange}
      type="card"
      items={history.map((k: any) => {
        return {
          label: `${k.name_of_tournament}`,
          key: k.name_of_tournament,
          children: (
            <>
              <Col span={24}>
                <iframe
                  width="100%"
                  height="920"
                  src={k?.video}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              </Col>
              <Col span={24}>
                <Card style={{ textAlign: "center", fontSize: 24 }}>
                  Турнирная таблица
                  <Table
                    columns={COLUMNS_STANDINGS}
                    dataSource={k?.table.map((p: any, index: number) => ({
                      index: index + 1,
                      logo: (
                        <img
                          src={p?.logo[0].url}
                          width={70}
                          height={70}
                          onClick={() => handleSelectTeam(p)}
                          style={{ cursor: "pointer" }}
                        />
                      ),
                      team: p.team_name,
                      games: p.games_played,
                      win: p.victory,
                      draw: p.draw,
                      loses: p.defeat,
                      scored: p.goals_scored,
                      missed: p.missed_goals,
                      points: p.score
                    }))}
                    size="small"
                    pagination={false}
                    loading={isLoading}
                    bordered
                  />
                </Card>
              </Col>
              <Row gutter={[24, 24]}>
                <Col xxl={12} xl={24} lg={24} md={24} sm={24} xs={24}>
                  <Box>
                    <Card style={{ textAlign: "center", fontSize: 24 }}>
                      {steps[activeStep].label}
                    </Card>
                    <Box>
                      {activeStep == 0 && (
                        <Table
                          columns={COLUMNS_GOALS}
                          dataSource={k?.top_goals.map(
                            (p: any, index: number) => ({
                              index: index + 1,
                              name: [p.surname, " ", p.name],
                              team: p.team,
                              score: p.number_of_goals
                            })
                          )}
                          size="small"
                          pagination={false}
                          loading={isLoading}
                          bordered
                        />
                      )}
                      {activeStep == 1 && (
                        <Table
                          columns={COLUMNS_ASSISTS}
                          dataSource={k?.top_assists.map(
                            (p: any, index: number) => ({
                              index: index + 1,
                              name: [p.surname, " ", p.name],
                              team: p.team,
                              assists: p.number_of_assists
                            })
                          )}
                          size="small"
                          pagination={false}
                          loading={isLoading}
                          bordered
                        />
                      )}
                      {activeStep == 2 && (
                        <Table
                          columns={COLUMNS_GOALS_ASSISTS}
                          dataSource={k?.top_goals_assists.map(
                            (p: any, index: number) => ({
                              index: index + 1,
                              name: [p.surname, " ", p.name],
                              team: p.team,
                              goals_assists:
                                p.number_of_assists + p.number_of_goals
                            })
                          )}
                          size="small"
                          pagination={false}
                          loading={isLoading}
                          bordered
                        />
                      )}
                    </Box>
                    <MobileStepper
                      variant="text"
                      steps={maxSteps}
                      position="static"
                      activeStep={activeStep}
                      nextButton={
                        <Button
                          size="small"
                          onClick={handleNext}
                          disabled={activeStep === maxSteps - 1}>
                          Next
                          {theme.direction === "rtl" ? (
                            <KeyboardArrowLeft />
                          ) : (
                            <KeyboardArrowRight />
                          )}
                        </Button>
                      }
                      backButton={
                        <Button
                          size="small"
                          onClick={handleBack}
                          disabled={activeStep === 0}>
                          {theme.direction === "rtl" ? (
                            <KeyboardArrowRight />
                          ) : (
                            <KeyboardArrowLeft />
                          )}
                          Back
                        </Button>
                      }
                    />
                  </Box>
                </Col>
                <Col xxl={12} xl={24} lg={24} md={24} sm={24} xs={24}>
                  <img src={k?.photo} width="100%" />
                </Col>
              </Row>
            </>
          )
        };
      })}
    />
  );
};
