import { Col, Space, Table, Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;

export const TableCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TeamCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  gap: 10px;
`;

export const TitleTeam = styled(Title)`
  text-align: center;
`;

export const SpaceImage = styled(Space)`
  display: block;
  justify-content: space-around;
`;

export const TableSquadTeam = styled(Table)`
  text-align: center;
`;

export const TableSkedTeam = styled(Table)`
  text-align: center;
`;