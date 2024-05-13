import { TwitterOutlined, YoutubeOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Button, Layout, Menu, Row, Space } from "antd";
import { AuthPage } from "./Auth";
import { TeamsPage } from "./Teams";
import { TimeTablePage } from "./TimeTablePage";
import { StandingsPage } from "./Standings";
import { StaticsPage } from "./Statics";
import { MediaPage } from "./Media";
import { HistoryPage } from "./History";
import { ContactsPage } from "./Contacts";
import { clientRoutes } from "src/routes/client";
import { SiderStyled } from "./style"
import { MENU_ITEMS } from "src/constants";
import "src/styles/index.css";

export const Page = observer((): JSX.Element => {
  const { Content, Sider } = Layout;

  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: "100vh" }}>
      <SiderStyled
        width={250}
        breakpoint="lg"
        collapsedWidth="0"
        style={{backgroundColor: "#1A3262" }}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}>
        <Row justify="center" style={{ height: 64, alignItems: "center" }}>
          {collapsed ? (
            <img src="https://i.yapx.ru/W2oMO.png" width={50} height={50} />
          ) : (
            <img src="https://i.yapx.ru/W2oMN.png" width={160} height={50} />
          )}
        </Row>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={MENU_ITEMS}
          onClick={(info) => navigate(info.key)}
          style={{
            fontSize: 18,
            fontWeight: 600,
            height: "100%",
            backgroundColor: "#1A3262",
            color: "white"
          }}
        />
        <Space
          style={{
            paddingLeft: 71
          }}>
          <Row style={{ alignItems: "center" }}>
            <Space>
              <Button
                style={{width: 50}}
                icon={<YoutubeOutlined rev={undefined} />}
                href="https://www.youtube.com/@mephileague"
                target="_blank"
              />
              <Button
              style={{width: 50}}
                icon={<TwitterOutlined rev={undefined} />}
                href="https://m.vk.com/mephileague?from=groups"
                target="_blank"
              />
            </Space>
          </Row>
        </Space> 
      </SiderStyled>
      <Layout>
        {/* <Header
          style={{
            padding: "0 24px 0 0",
            background: "white",
            overflowX: "auto"
          }}>
          <Row justify="end" style={{ alignItems: "center" }}>
            <Space>
              <Button
                icon={<YoutubeOutlined rev={undefined} />}
                href="https://www.youtube.com/@mephileague"
                target="_blank"
              />
              <Button
                icon={<TwitterOutlined rev={undefined} />}
                href="https://m.vk.com/mephileague?from=groups"
                target="_blank"
              />
            </Space>
          </Row>
        </Header> */}
        <Content
          style={{
            padding: 24,
            minHeight: 280,
            overflow: "auto",
            // backgroundColor: "rgb(220, 220, 220),
            backgroundColor: "#395283"
          }}>
          <Routes>
            <Route path={clientRoutes.auth} element={<AuthPage />} />
            <Route path={clientRoutes.teams} element={<TeamsPage />} />
            <Route path={clientRoutes.timetable} element={<TimeTablePage />} />
            <Route path={clientRoutes.standings} element={<StandingsPage />} />
            <Route path={clientRoutes.statics} element={<StaticsPage />} />
            {/* <Route path={clientRoutes.media} element={<MediaPage />} /> */}
            <Route path={clientRoutes.history} element={<HistoryPage />} />
            <Route path={clientRoutes.contacts} element={<ContactsPage />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
});
