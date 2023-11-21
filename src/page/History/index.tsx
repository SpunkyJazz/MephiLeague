import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import { Card, Col, Row, Space, Table, message } from "antd";
import { useEffect, useState } from "react";
import { MephiLeagueApi } from "src/api/mephi-league";
import {
  COLUMNS_ASSISTS,
  COLUMNS_GOALS,
  HISTORY_STANDINGS
} from "src/constants";

export const HistoryPage = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  const [standings, setStandings] = useState<any>();
  useEffect(() => {
    MephiLeagueApi.getTeams()
      .then((res) => {
        console.log(res.data);
        setStandings(res.data);
      })
      .catch(() => message.error("Ошибка при загрузке"))
      .finally(() => setIsLoading(false));
  }, []);

  const [goals, setGoals] = useState<any>();
  useEffect(() => {
    MephiLeagueApi.getGoals()
      .then((res) => {
        console.log(res.data);
        setGoals(res.data);
      })
      .catch(() => message.error("Ошибка при загрузке"))
      .finally(() => setIsLoading(false));
  }, []);

  const [assists, setAssists] = useState<any>();
  useEffect(() => {
    MephiLeagueApi.getAssists()
      .then((res) => {
        console.log(res.data);
        setAssists(res.data);
      })
      .catch(() => message.error("Ошибка при загрузке"))
      .finally(() => setIsLoading(false));
  }, []);

  const steps = [
    {
      label: "Голы",
      description: (
        <Table
          columns={COLUMNS_GOALS}
          dataSource={goals?.map((p: any) => ({
            name: [p.name, " ", p.surname, " ", p.lastname],
            team: p.team,
            score: p.number_of_goals
          }))}
          size="small"
          pagination={false}
          bordered
        />
      )
    },
    {
      label: "Ассисты",
      description: (
        <Table
          columns={COLUMNS_ASSISTS}
          dataSource={assists?.map((p: any) => ({
            name: [p.name, " ", p.surname, " ", p.lastname],
            team: p.team,
            score: p.number_of_goals
          }))}
          size="small"
          pagination={false}
          bordered
        />
      )
    },
    {
      label: "Голы + ассисты",
      description: `В процессе`
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

  return (
    <Col>
      {/* <video
        loop
        muted
        playsInline
        disablePictureInPicture
        width={1620}
        height={920}>
        <source
          src="https://fclm-new.hb.bizmrg.com/iblock/980/9806a47a1dba21195a009ebb69d5b0c6/b9cb768d04adb24ccdfe1bf7cd51af43.mp4"
          type="video/mp4"
        />
      </video> */}
      <iframe
        width="1620"
        height="920"
        src="https://www.youtube.com/embed/c5wz4WBKUjg?si=q02JxtZaL4-BhsOj"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      <Row style={{ justifyContent: "space-between" }}>
        <Card style={{ textAlign: "center", fontSize: 24 }}>
          Турнирная таблица
          <Table
            columns={HISTORY_STANDINGS}
            dataSource={standings?.map((p: any) => ({
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
            bordered
          />
        </Card>
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 50,
              pl: 2,
              bgcolor: "background.default"
            }}>
            <Typography>{steps[activeStep].label}</Typography>
          </Paper>
          <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}>
            {steps[activeStep].description}
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
        <img src="" />
      </Row>
    </Col>
  );
};
