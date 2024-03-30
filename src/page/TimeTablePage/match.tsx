import { Button, Row, Table, Typography, Col, Space } from "antd";
import { useEffect, useState } from "react";
import { MATCH } from "src/constants";

export const Match = ({ data, unselectMatch }: any): JSX.Element => {
  const { Title } = Typography;

  return (
    <Col>  
      <Button onClick={unselectMatch}>Назад</Button>
      <Row justify="space-between">  
        <img src={data.first_logo} style={{ width: 300 }} />
        <Space style={{alignItems: "center", justifyContent: "space-between"}}>
          <Title level={1}> {data.first_team} </Title> <br/> <br/>
          <Title level={1}> {"   "} {data.goal_first} : {data.goal_second} {"   "} </Title> <br/> <br/>
          <Title level={1}> {data.second_team} </Title>
        </Space>
        <img src={data.second_logo} style={{ width: 300 }} />
      </Row>
      <Title level={1} style={{textAlign: "center", margin: 30}}> Статистика </Title>
      <Table
        columns={MATCH}
        dataSource={[
          {
            team: [data.first_team],
            possession1: [data.possession1_first], 
            possession2: [data.possession2_first],
            shots: [data.shots_first],
            shots_on_target: [data.shots_on_target_first],
            shots_wide: [data.shots_wide_first],
            corners: [data.corners_first],
            fouls: [data.fouls_first]
          },
          {
            team: [data.second_team],
            possession1: [data.possession1_second], 
            possession2: [data.possession2_second],
            shots: [data.shots_second],
            shots_on_target: [data.shots_on_target_second],
            shots_wide: [data.shots_wide_second],
            corners: [data.corners_second],
            fouls: [data.fouls_second]
          }
        ]}
        size="large"
        pagination={false}
        bordered
        style={{margin: 10}} />
     </Col>
  );
};