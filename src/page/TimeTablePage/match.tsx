import { Button, Row, Table, Typography, Col, Space } from "antd";

export const Match = ({ data, unselectMatch }: any): JSX.Element => {
  const { Title } = Typography;

  return (
    <Col>
      <Button onClick={unselectMatch} style={{marginBottom: "10px"}}>Назад</Button>
      <Col style={{backgroundColor: "white"}}>  
        <Row justify="space-between">
          <Col>
            <img src={data.first_logo} style={{ width: 230, padding: "20px" }} />
            <Title
              level={1}
              style={{textAlign: "center"}}>
              {data.first_team}
            </Title>
          </Col>
          <Title level={1} style={{ alignContent: "center"}}> {data.goal_first} </Title>
          <Space style={{alignContent: "center", fontSize: 35, fontWeight: 600}}>
            :
          </Space>
          <Title level={1} style={{ alignContent: "center"}}> {data.goal_second} </Title>
          <Col>
            <img src={data.second_logo} style={{ width: 230, padding: "20px" }} />
            <Title
              level={1}
              style={{textAlign: "center"}}>
              {data.second_team}
            </Title>
          </Col>
        </Row>
        <Col style={{width: "100%", justifyItems: "center", backgroundColor: "white", padding: "20px"}}>
          <Title level={1} style={{textAlign: "center", margin: 30}}> Статистика </Title>
          <Row style={{height: 50}}>
            <Space style={{width: "100%", justifyContent: "space-between", alignItems: "center"}}>
              <Title level={3}> {data.first_team} </Title>
              <Title level={4} style={{fontWeight: 800}}> Команда </Title>
              <Title level={3}> {data.second_team} </Title>
            </Space>
          </Row>
          <hr style={{border: "5px solid black", marginBottom: "27px", marginTop: "-12px"}}></hr>
          <Row style={{height: 50}}>
            <Space style={{width: "100%", justifyContent: "space-between", alignItems: "center"}}>
              <Title level={3}> {data.possession1_first} </Title>
              <Title level={4} style={{fontWeight: 800}}> Владение (1 тайм) </Title>
              <Title level={3}> {data.possession1_second} </Title>
            </Space>
          </Row>
          <div style={{display: "flex", marginBottom: "27px", marginTop: "-12px"}}>
            <div style={{width: `${((data.possession1_first * 100)/(data.possession1_first + data.possession1_second))}%`, height: "10px", backgroundColor: "black"}}></div>
            <div style={{width: `${((data.possession1_second * 100)/(data.possession1_first + data.possession1_second))}%`, height: "10px", backgroundColor: "red", float: "right"}}></div>
          </div>
          <Row style={{height: 60}}>
            <Space style={{width: "100%", justifyContent: "space-between", alignItems: "center"}}>
              <Title level={3}> {data.possession2_first} </Title>
              <Title level={4} style={{fontWeight: 800}}> Владение (2 тайм) </Title>
              <Title level={3}> {data.possession2_second} </Title>
            </Space>
          </Row>
          <div style={{display: "flex", marginBottom: "27px", marginTop: "-12px"}}>
            <div style={{width: `${((data.possession2_first * 100)/(data.possession2_first + data.possession2_second))}%`, height: "10px", backgroundColor: "black"}}></div>
            <div style={{width: `${((data.possession2_second * 100)/(data.possession2_first + data.possession2_second))}%`, height: "10px", backgroundColor: "red", float: "right"}}></div>
          </div>
          <Row style={{height: 60}}>
            <Space style={{width: "100%", justifyContent: "space-between", alignItems: "center"}}>
              <Title level={3}> {data.shots_first} </Title>
              <Title level={4} style={{fontWeight: 800}}> Удары </Title>
              <Title level={3}> {data.shots_second} </Title>
            </Space>
          </Row>
          <div style={{display: "flex", marginBottom: "27px", marginTop: "-12px"}}>
            <div style={{width: `${((data.shots_first * 100)/(data.shots_first + data.shots_second))}%`, height: "10px", backgroundColor: "black"}}></div>
            <div style={{width: `${((data.shots_second * 100)/(data.shots_first + data.shots_second))}%`, height: "10px", backgroundColor: "red", float: "right"}}></div>
          </div>
          <Row style={{height: 60}}>
            <Space style={{width: "100%", justifyContent: "space-between", alignItems: "center"}}>
              <Title level={3}> {data.shots_on_target_first} </Title>
              <Title level={4} style={{fontWeight: 800}}> Удары в створ </Title>
              <Title level={3}> {data.shots_on_target_second} </Title>
            </Space>
          </Row>
          <div style={{display: "flex", marginBottom: "27px", marginTop: "-12px"}}>
            <div style={{width: `${((data.shots_on_target_first * 100)/(data.shots_on_target_first + data.shots_on_target_second))}%`, height: "10px", backgroundColor: "black"}}></div>
            <div style={{width: `${((data.shots_on_target_second * 100)/(data.shots_on_target_first + data.shots_on_target_second))}%`, height: "10px", backgroundColor: "red", float: "right"}}></div>
          </div>
          <Row style={{height: 60}}>
            <Space style={{width: "100%", justifyContent: "space-between", alignItems: "center"}}>
              <Title level={3}> {data.shots_wide_first} </Title>
              <Title level={4} style={{fontWeight: 800}}> Удары мимо </Title>
              <Title level={3}> {data.shots_wide_second} </Title>
            </Space>
          </Row>
          <div style={{display: "flex", marginBottom: "27px", marginTop: "-12px"}}>
            <div style={{width: `${((data.shots_wide_first * 100)/(data.shots_wide_first + data.shots_wide_second))}%`, height: "10px", backgroundColor: "black"}}></div>
            <div style={{width: `${((data.shots_wide_second * 100)/(data.shots_wide_first + data.shots_wide_second))}%`, height: "10px", backgroundColor: "red", float: "right"}}></div>
          </div>
          <Row style={{height: 60}}>
            <Space style={{width: "100%", justifyContent: "space-between", alignItems: "center"}}>
              <Title level={3}> {data.corners_first} </Title>
              <Title level={4} style={{fontWeight: 800}}> Угловые </Title>
              <Title level={3}> {data.corners_second} </Title>
            </Space>
          </Row>
          <div style={{display: "flex", marginBottom: "27px", marginTop: "-12px"}}>
            <div style={{width: `${((data.corners_first * 100)/(data.corners_first + data.corners_second))}%`, height: "10px", backgroundColor: "black"}}></div>
            <div style={{width: `${((data.corners_second * 100)/(data.corners_first + data.corners_second))}%`, height: "10px", backgroundColor: "red", float: "right"}}></div>
          </div>
          <Row style={{height: 60}}>
            <Space style={{width: "100%", justifyContent: "space-between", alignItems: "center"}}>
              <Title level={3}> {data.fouls_first} </Title>
              <Title level={4} style={{fontWeight: 800}}> Фолы </Title>
              <Title level={3}> {data.fouls_second} </Title>
            </Space>
          </Row>
          <div style={{display: "flex", marginBottom: "27px", marginTop: "-12px"}}>
            <div style={{width: `${((data.fouls_first * 100)/(data.fouls_first + data.fouls_second))}%`, height: "10px", backgroundColor: "black"}}></div>
            <div style={{width: `${((data.fouls_second * 100)/(data.fouls_first + data.fouls_second))}%`, height: "10px", backgroundColor: "red", float: "right"}}></div>
          </div>
        </Col>
      </Col>
    </Col>
  );
};