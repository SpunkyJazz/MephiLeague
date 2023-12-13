import { Col } from "antd";
import styled from "styled-components";

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
  /* gap: 5px; */
`;

export const PlayersCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
