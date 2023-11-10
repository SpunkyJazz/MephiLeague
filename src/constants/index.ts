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

export const COLUMNS_STANDINGS: any = [
  {
    title: "Команда",
    dataIndex: "team",
    key: "team",
    align: "center"
  },
  {
    title: "Игры",
    dataIndex: "games",
    key: "games",
    align: "center"
  },
  {
    title: "Победы",
    dataIndex: "win",
    key: "win",
    align: "center"
  },
  {
    title: "Ничьи",
    dataIndex: "draw",
    key: "draw",
    align: "center"
  },
  {
    title: "Поражения",
    dataIndex: "loses",
    key: "loses",
    align: "center"
  },
  {
    title: "Забито мячей",
    dataIndex: "scored",
    key: "scored",
    align: "center"
  },
  {
    title: "Пропущено мячей",
    dataIndex: "missed",
    key: "missed",
    align: "center"
  },
  {
    title: "Очки",
    dataIndex: "points",
    key: "points",
    align: "center"
  }
];

export const COLUMNS_GOALS: any = [
  {
    title: "Имя",
    dataIndex: "name",
    key: "name",
    align: "center"
  },
  {
    title: "Команда",
    dataIndex: "team",
    key: "team",
    align: "center"
  },
  {
    title: "Голы",
    dataIndex: "score",
    key: "score",
    align: "center"
  }
];

export const COLUMNS_ASSISTS: any = [
  {
    title: "Имя",
    dataIndex: "name",
    key: "name",
    align: "center"
  },
  {
    title: "Команда",
    dataIndex: "team",
    key: "team",
    align: "center"
  },
  {
    title: "Ассисты",
    dataIndex: "assists",
    key: "assists",
    align: "center"
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
  },
  {
    title: "ЖК",
    dataIndex: "player_yellowCards",
    key: "player_yellowCards",
    align: "center"
  },
  {
    title: "КК",
    dataIndex: "player_redCards",
    key: "player_redCards",
    align: "center"
  }
];

export const COLUMNS_TIME_TABLE: any = [
  {
    title: "Дата",
    dataIndex: "date",
    key: "date",
    align: "center"
  },
  {
    title: "Команды",
    dataIndex: "teams",
    key: "teams",
    align: "center"
  },
  {
    title: "Счет",
    dataIndex: "score",
    key: "score",
    align: "center"
  }
];
