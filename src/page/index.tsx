import { createElement, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Avatar, Button, Layout, Menu, Row } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined, TwitterOutlined, YoutubeOutlined } from "@ant-design/icons";
import { AuthPage } from "./Auth";
import { TeamsPage } from "./Teams";
import { TimeTablePage } from "./TimeTablePage";
import { StandingsPage } from "./Standings";
import { StaticsPage } from "./Statics";
import { MediaPage } from "./Media";
import { clientRoutes } from "src/routes/client";
import { MENU_ITEMS } from "src/constants";
import Logo from "src/assets/logo.svg";
import "src/styles/index.css";
import { Space } from 'antd';

export const Page = observer((): JSX.Element => {
  const { Content, Header, Sider } = Layout;

  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: "100vh" }}>
      {location.pathname !== clientRoutes.auth && (
        <Sider
          theme="dark"
          width={240}
          trigger={null}
          collapsible
          collapsed={collapsed}>
          <Row justify="center" style={{ height: 64, alignItems: "center" }}>
            <Logo width={85} height={64}/>
          </Row>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[location.pathname]}
            items={MENU_ITEMS}
            onClick={(info) => navigate(info.key)}
          />
        </Sider>
      )}
      <Layout>
        {location.pathname !== clientRoutes.auth && (
          <Header
            style={{
              padding: "0 24px 0 0",
              background: "white",
              overflowX: "auto"
            }}>
            <Row justify="space-between" style={{ alignItems: "center" }}>
              <Button
                type="text"
                icon={createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
                )}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64
                }}
              />
              <Space>
                <Button icon={<YoutubeOutlined rev={undefined} />} href="https://www.youtube.com/@mephileague" target="_blank"/>
                <Button icon={<TwitterOutlined rev={undefined} />} href="https://m.vk.com/mephileague?from=groups" target="_blank"/>
                <Avatar>МД</Avatar>
              </Space>
            </Row>
          </Header>
        )}
        <Content
          style={{
            padding: 24,
            minHeight: 280,
            overflow: "auto"
          }}>
          <Routes>
            <Route path={clientRoutes.auth} element={<AuthPage />} />
            <Route path={clientRoutes.teams} element={<TeamsPage />} />
            <Route path={clientRoutes.timetable} element={<TimeTablePage />} />
            <Route path={clientRoutes.standings} element={<StandingsPage />} />
            <Route path={clientRoutes.statics} element={<StaticsPage />} />
            <Route path={clientRoutes.media} element={<MediaPage />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
});
