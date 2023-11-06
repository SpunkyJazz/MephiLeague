import { createElement } from "react";
import { TeamOutlined, ProfileOutlined, TableOutlined, SolutionOutlined, FileImageOutlined } from "@ant-design/icons";
import { clientRoutes } from "src/routes/client";

export const MENU_ITEMS = [
  {
    key: clientRoutes.teams,
    icon: createElement(TeamOutlined),
    label: "Главная страница"
  },
  {
    key: clientRoutes.timetable,
    icon: createElement(ProfileOutlined),
    label: "Расписание"
  },
  {
    key: clientRoutes.standings,
    icon: createElement(TableOutlined),
    label: "Турнирная таблица"
  },
  {
    key: clientRoutes.statics,
    icon: createElement(SolutionOutlined),
    label: "Статистика"
  },
  {
    key: clientRoutes.media,
    icon: createElement(FileImageOutlined),
    label: "Галерея"
  }
];
