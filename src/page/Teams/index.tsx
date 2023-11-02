import { PropsWithChildren, useState } from "react";
import { Card, Row, Table, Tag, Typography } from "antd";
import barabella1 from "src/assets/barabellaPhoto1.png";
import barabella2 from "src/assets/barabellaPhoto2.png";
import barabella from "src/assets/barabella.png";
import goats from "src/assets/goats.png";
import goats1 from "src/assets/goatsPhoto1.png";
import goats2 from "src/assets/goatsPhoto2.png";
import kvant from "src/assets/kvant.png";
import mifkar from "src/assets/mifkar.png";
import mifkar1 from "src/assets/mifkarPhoto1.png";
import mifkar2 from "src/assets/mifkarPhoto2.png";
import miy from "src/assets/miy.png";
import serpent from "src/assets/serpent.png";
import stereo from "src/assets/stereo.png";
import tokos from "src/assets/tokos.png";
import { TableCol, TeamCol } from "./style";
import { TSelectedTeam } from "./types";
import { IBoopProps } from "./types";
import { Team } from "./Team";

export const TeamsPage = (): JSX.Element => {
  const { Title } = Typography;

  const [selectedTeam, setSelectedTeam] = useState<TSelectedTeam | undefined>();

  const Boop = ({
    rotation,
    scale,
    timing,
    children
  }: PropsWithChildren<IBoopProps>) => {
    const [isBooped, setIsBooped] = useState(false);
    const style = {
      transform: isBooped
        ? `rotate(${rotation}deg)
      scale(${scale})`
        : `rotate(0deg)
      scale(1)`,
      transition: `transform ${timing}ms`
    };
    const trigger = () => {
      setIsBooped(true);
    };
    const trigger2 = () => {
      setIsBooped(false);
    };
    return (
      <span onMouseEnter={trigger} onMouseLeave={trigger2} style={style}>
        {children}
      </span>
    );
  };

  const columns = [
    {
      title: "Дата",
      dataIndex: "date",
      key: "date"
    },
    {
      title: "Команды",
      dataIndex: "teams",
      key: "teams"
    },
    {
      title: "Счет",
      dataIndex: "score",
      key: "score",
      render: (e: string) => <Tag>{e}</Tag>
    }
  ];

  const playedGamesData = [
    { date: "01.01", teams: "Арсенал - Ман Сити", score: "10:0" },
    { date: "02.01", teams: "Реал - Барселона", score: "1:2" },
    { date: "03.01", teams: "Ливерпуль - Ман Юнайтед", score: "5:0" },
    { date: "04.01", teams: "Челси - Бормут", score: "0:7" },
    { date: "05.01", teams: "Зенит - ЦСКА", score: "1:4" }
  ];

  const expectedGamesData = [
    { date: null, teams: "Арсенал - Ман Сити", score: "vs" },
    { date: null, teams: "Реал - Барселона", score: "vs" },
    { date: null, teams: "Ливерпуль - Ман Юнайтед", score: "vs" },
    { date: null, teams: "Челси - Бормут", score: "vs" },
    { date: null, teams: "Зенит - ЦСКА", score: "vs" }
  ];

  const teams: TSelectedTeam[] = [
    {
      name: "Барабелла",
      players: [
        "Соколовский Степан Владимирович (К)",
        "Шлыков Павел Сергеевич",
        "Меркулов Дмитрий Вадимович",
        "Гаджиев Руслан Эльбрусович",
        "Брацун Кирилл Дмитриевич",
        "Смирнов Егор Федорович",
        "Шутов Михаил Дмитриевич",
        "Асаханов Зухраб Рустамович",
        "Доманов Макар Джангрович",
        "Увакин Иван Максимович",
        "Сухинин Александр Вячеславович"
      ],
      logo: barabella,
      img1: barabella1,
      img2: barabella2,
      VKgroup: "https://m.vk.com/bara_bella?from=groups"
    },
    {
      name: "Goats",
      players: [
        "Аджибеков Андрей Владимирович (К)",
        "Решников Максим Александрович",
        "Королев Николай Максимович",
        "Елагин Алексей Сергеевич",
        "Ищенко Тимофей Владимирович",
        "Бадыло Федор Евгеньевич",
        "Самигуллин Рустам Рамисович",
        "Китаев Степан Максимович",
        "Батаев Санал Юрьевич",
        "Уханов Александр Денисович",
        "Паджаев Егор Сергеевич",
        "Яковлев Андрей Николаевич",
        "Порфирьев Михаил Александрович",
        "Васильев Арсений Дмитриевич"
      ],
      logo: goats,
      img1: goats1,
      img2: goats2,
      VKgroup: "https://m.vk.com/club216222327"
    },
    {
      name: "Мияухихи",
      players: [
        "Круглов Иван Алексеевич (К)",
        "Невара Вадим Витальевич",
        "Глушко Глеб Андреевич",
        "Стругов Алексей Юрьевич",
        "Легостаев Станислав Дмитриевич",
        "Ахунджанов Семён Вадимович",
        "Циммерман Илья Юрьевич",
        "Бунцев Артем Александрович",
        "Нурматов Улугбек Уренбоевич"
      ],
      logo: miy,
      img1: barabella1,
      img2: barabella1,
      VKgroup: "https://m.vk.com/bara_bella?from=groups"
    },
    {
      name: "Serpent",
      players: [
        "Бердо Матвей Сергеевич (К)",
        "Бикбаев Адель Радиславович",
        "Бикбаев Азат Радиславович",
        "Гимаев Руслан Римович",
        "Садов Фёдор Антонович",
        "Зубов Лев Константинович",
        "Хабаров Сергей Михайлович",
        "Ершов Даниил Сергеевич",
        "Коваленко Михаил Иванович",
        "Санжапов Александр Борисович",
        "Пантелеев Артемий Александрович",
        "Илюхин Максим Владимирович"
      ],
      logo: serpent,
      img1: barabella1,
      img2: barabella1,
      VKgroup: "https://m.vk.com/bara_bella?from=groups"
    },
    {
      name: "Квант",
      players: [
        "Сысоев Александр Александрович (K)",
        "Байгузин Денис Рафисович",
        "Рыбаков Егор Викторович",
        "Есеналиев Аман",
        "Грачев Илья Витальевич",
        "Агринский Артём Евгеньевич",
        "Исаков Дмитрий Андреевич",
        "Кеммерер Сергей",
        "Байков Кирилл Александрович"
      ],
      logo: kvant,
      img1: barabella1,
      img2: barabella1,
      VKgroup: "https://m.vk.com/bara_bella?from=groups"
    },
    {
      name: "Стерео",
      players: [
        "Мвилима Джошуа (К)",
        "Сангано Дидье Анри",
        "Калиса Тиери",
        "Хагенимана Жан Де Дье",
        "Бигиримана Юлюс",
        "Ишимве Фистон",
        "Эфраим Чиёвела",
        "Тимоти Мвапе",
        "Шема Абдул Гаким",
        "Нгабойисонга И. Лэндри",
        "Кубана Бен Джуниор",
        "Базагота Левис Кевин"
      ],
      logo: stereo,
      img1: barabella1,
      img2: barabella1,
      VKgroup: "https://m.vk.com/bara_bella?from=groups"
    },
    {
      name: "Mifkar",
      players: [
        "Москаленко Максим Дмитриевич (K)",
        "Пахомов Владислав Алексеевич",
        "Кобозев Александр Русланович",
        "Соловьев Иван Борисович",
        "Мартыненко Александр Николаевич",
        "Стрельников Никита Анатольевич",
        "Депершмидт Александр Александрович",
        "Даев Михаил Алексеевич",
        "Мацков Владислав Алексеевич",
        "Атабаев Асадбек Отаджон Угли",
        "Лема Леконцева Даниэль",
        "Сергиевский Лев Алексеевич",
        "Дубский Дмитрий Вячеславович"
      ],
      logo: mifkar,
      img1: mifkar1,
      img2: mifkar2,
      VKgroup: "https://m.vk.com/mfcmifkar"
    },
    {
      name: "Tokos",
      players: [
        "Крис Колере (K)",
        "Нгуала Дюк",
        "Ндонго Жеорди",
        "Жеаилли Экеми",
        "Мбемба Лоик",
        "Онделе Эмиль",
        ">Масса Мадди",
        "Каролус Рой"
      ],
      logo: tokos,
      img1: barabella1,
      img2: barabella1,
      VKgroup: "https://m.vk.com/bara_bella?from=groups"
    }
  ];

  const handleSelectTeam = (data: TSelectedTeam): void => {
    setSelectedTeam(data);
  };

  const handleUnselectTeam = (): void => {
    setSelectedTeam(undefined);
  };

  return selectedTeam ? (
    <Team data={selectedTeam} unselectTeam={handleUnselectTeam} />
  ) : (
    <Row gutter={[30, 30]}>
      <TableCol span={12}>
        <Card title="Сыгранные матчи" style={{ width: 700, textAlign: "center" }}>
          <Table
            columns={columns}
            dataSource={playedGamesData}
            size="small"
            pagination={false}
            bordered
          />
        </Card>
      </TableCol>
      <TableCol span={12}>
        <Card title="Предстоящие матчи" style={{ width: 700, textAlign: "center" }}>
          <Table
            columns={columns}
            dataSource={expectedGamesData}
            size="small"
            pagination={false}
            bordered
          />
        </Card>
      </TableCol>
      {teams.map((t) => (
        <TeamCol span={6} onClick={() => handleSelectTeam(t)}>
          <Boop rotation={360} scale={1.2} timing={800}>
            <img src={t.logo} width={230} data-proportion-h="1" />
          </Boop>
          <Title level={3}>{t.name}</Title>
        </TeamCol>
      ))}
    </Row>
  );
};
