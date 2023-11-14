import { PropsWithChildren, useState } from "react";
import { Row, Typography } from "antd";
import { TeamCol } from "./style";
import { TSelectedTeam } from "./types";
import { IBoopProps } from "./types";
import { Team } from "./Team";
import { TEAMS } from "src/mock";
// import icon from "src/assets/1.png";

export const TeamsPage = (): JSX.Element => {
  const { Title } = Typography;

  const [selectedTeam, setSelectedTeam] = useState<TSelectedTeam | undefined>();

  const Boop = ({ scale, timing, children }: PropsWithChildren<IBoopProps>) => {
    const [isBooped, setIsBooped] = useState(false);
    const style = {
      transform: isBooped ? `scale(${scale})` : `scale(1)`,
      transition: `transform ${timing}ms`
    };
    const trigger = (): void => {
      setIsBooped(true);
    };
    const trigger2 = (): void => {
      setIsBooped(false);
    };
    return (
      <span onMouseEnter={trigger} onMouseLeave={trigger2} style={style}>
        {children}
      </span>
    );
  };

  const handleSelectTeam = (data: TSelectedTeam): void => {
    setSelectedTeam(data);
  };

  const handleUnselectTeam = (): void => {
    setSelectedTeam(undefined);
  };

  return selectedTeam ? (
    <Team data={selectedTeam} unselectTeam={handleUnselectTeam} />
  ) : (
    <Row gutter={[30, 30]} style={{ backgroundColor: "white" }}>
      {/* <img
        src={icon}
        width="100%"
        style={{ boxShadow: "rgb(28 88 200) 0px 0px 20px 20px" }}
      /> */}
      {TEAMS.map((t) => (
        <TeamCol key={t.name} span={6} onClick={() => handleSelectTeam(t)}>
          <Boop scale={1.25} timing={200}>
            <img src={t.logo} width={260} data-proportion-h="1" />
            <Title style={{ textAlign: "center" }} level={3}>
              {t.name}
            </Title>
          </Boop>
        </TeamCol>
      ))}
    </Row>
  );
};
