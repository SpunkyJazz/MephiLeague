import { createElement } from "react";
import {
  TeamOutlined,
  ProfileOutlined,
  TableOutlined,
  SolutionOutlined,
  FileImageOutlined
} from "@ant-design/icons";
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

export const COLUMNS_STANDINGS = [
  {
    title: "Команда",
    dataIndex: "team",
    key: "team"
  },
  {
    title: "Игры",
    dataIndex: "games",
    key: "games"
  },
  {
    title: "Победы",
    dataIndex: "win",
    key: "win"
  },
  {
    title: "Ничьи",
    dataIndex: "draw",
    key: "draw"
  },
  {
    title: "Поражения",
    dataIndex: "loses",
    key: "loses"
  },
  {
    title: "Забито мячей",
    dataIndex: "scored",
    key: "scored"
  },
  {
    title: "Пропущено мячей",
    dataIndex: "missed",
    key: "missed"
  },
  {
    title: "Разница мячей",
    dataIndex: "difference",
    key: "difference"
  },
  {
    title: "Очки",
    dataIndex: "points",
    key: "points"
  }
];

export const COLUMNS_GOALS = [
  {
    title: "Имя",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Команда",
    dataIndex: "team",
    key: "team"
  },
  {
    title: "Голы",
    dataIndex: "score",
    key: "score"
  }
];

export const COLUMNS_ASSISTS = [
  {
    title: "Имя",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Команда",
    dataIndex: "team",
    key: "team"
  },
  {
    title: "Ассисты",
    dataIndex: "assists",
    key: "assists"
  }
];

export const COLUMNS_TEAMPLAYERS: any = [
  {
    title: "Игрок",
    dataIndex: "player_name",
    key: "player_name",
    align: "center"
  },
  {
    title: "Матчи",
    dataIndex: "player_games",
    key: "player_games",
    align: "center"
  },
  {
    title: "Голы",
    dataIndex: "player_goals",
    key: "player_goals",
    align: "center"
  },
  {
    title: "Ассисты",
    dataIndex: "player_assists",
    key: "player_assists",
    align: "center"
  }
];
