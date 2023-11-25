import {
  TeamOutlined,
  ProfileOutlined,
  TableOutlined,
  SolutionOutlined,
  FileImageOutlined,
  HistoryOutlined,
  ContactsOutlined
} from "@ant-design/icons";
import { createElement } from "react";
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
  },
  {
    key: clientRoutes.history,
    icon: createElement(HistoryOutlined),
    label: "История"
  },
  {
    key: clientRoutes.contacts,
    icon: createElement(ContactsOutlined),
    label: "Контакты"
  }
];

export const COLUMNS_STANDINGS: any = [
  {
    title: "№",
    dataIndex: "index",
    key: "index",
    align: "center"
  },
  {
    title: "Логотип",
    dataIndex: "logo",
    key: "logo",
    align: "center"
  },
  {
    title: "Команда",
    dataIndex: "team",
    key: "team",
    align: "center",
    responsive: ["xxl", "xl", "lg", "md"]
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
    align: "center",
    responsive: ["xxl", "xl", "lg"]
  },
  {
    title: "Ничьи",
    dataIndex: "draw",
    key: "draw",
    align: "center",
    responsive: ["xxl", "xl", "lg"]
  },
  {
    title: "Поражения",
    dataIndex: "loses",
    key: "loses",
    align: "center",
    responsive: ["xxl", "xl", "lg"]
  },
  {
    title: "Забито мячей",
    dataIndex: "scored",
    key: "scored",
    align: "center",
    responsive: ["xxl", "xl"]
  },
  {
    title: "Пропущено мячей",
    dataIndex: "missed",
    key: "missed",
    align: "center",
    responsive: ["xxl", "xl"]
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
    title: "Позиция",
    dataIndex: "index",
    key: "index",
    align: "center",
    width: 90
  },
  {
    title: "Имя",
    dataIndex: "name",
    key: "name",
    align: "center",
    width: 270
  },
  {
    title: "Команда",
    dataIndex: "team",
    key: "team",
    align: "center",
    width: 180,
    responsive: ["xxl", "xl", "lg", "md"]
  },
  {
    title: "Голы",
    dataIndex: "score",
    key: "score",
    align: "center",
    width: 90
  }
];

export const COLUMNS_ASSISTS: any = [
  {
    title: "Позиция",
    dataIndex: "index",
    key: "index",
    align: "center",
    width: 90
  },
  {
    title: "Имя",
    dataIndex: "name",
    key: "name",
    align: "center",
    width: 270
  },
  {
    title: "Команда",
    dataIndex: "team",
    key: "team",
    align: "center",
    width: 180,
    responsive: ["xxl", "xl", "lg", "md"]
  },
  {
    title: "Ассисты",
    dataIndex: "assists",
    key: "assists",
    align: "center",
    width: 90
  }
];

export const COLUMNS_GOALS_ASSISTS: any = [
  {
    title: "Позиция",
    dataIndex: "index",
    key: "index",
    align: "center",
    width: 90
  },
  {
    title: "Имя",
    dataIndex: "name",
    key: "name",
    align: "center",
    width: 270
  },
  {
    title: "Команда",
    dataIndex: "team",
    key: "team",
    align: "center",
    width: 180,
    responsive: ["xxl", "xl", "lg", "md"]
  },
  {
    title: "Голы+Ассисты",
    dataIndex: "goals_assists",
    key: "goals_assists",
    align: "center",
    width: 90
  }
];

export const COLUMNS_TEAMPLAYERS: any = [
  {
    title: "Игрок",
    dataIndex: "player_name",
    key: "player_name",
    align: "center",
    width: 200
  },
  {
    title: "Матчи",
    dataIndex: "player_games",
    key: "player_games",
    align: "center",
    width: 50,
    responsive: ["xxl", "xl", "lg", "md", "sm"]
  },
  {
    title: "Голы",
    dataIndex: "player_goals",
    key: "player_goals",
    align: "center",
    width: 50
  },
  {
    title: "Ассисты",
    dataIndex: "player_assists",
    key: "player_assists",
    align: "center",
    width: 50
  },
  {
    title: "ЖК",
    dataIndex: "player_yellowCards",
    key: "player_yellowCards",
    align: "center",
    width: 50,
    responsive: ["xxl", "xl", "lg", "md"]
  },
  {
    title: "КК",
    dataIndex: "player_redCards",
    key: "player_redCards",
    align: "center",
    width: 50,
    responsive: ["xxl", "xl", "lg", "md"]
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

export const TEAM_TIME_TABLE: any = [
  {
    title: "Тур",
    dataIndex: "tour",
    key: "tour",
    align: "center"
  },
  {
    title: "Дата",
    dataIndex: "date",
    key: "date",
    align: "center",
    responsive: ["xxl", "xl", "lg", "md"]
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
