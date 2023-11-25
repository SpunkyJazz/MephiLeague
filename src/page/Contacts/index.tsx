import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { Button, Card, Row, Typography, message } from "antd";
import { useEffect, useState } from "react";
import { MephiLeagueApi } from "src/api/mephi-league";
import { TeamCol } from "../Teams/style";

export const ContactsPage = (): JSX.Element => {
  const { Title } = Typography;
  const [isLoading, setIsLoading] = useState(true);

  const [admins, setAdmins] = useState<any>([]);
  useEffect(() => {
    MephiLeagueApi.getAdmins()
      .then((res) => {
        console.log(res.data);
        setAdmins(res.data);
      })
      .catch(() => message.error("Ошибка при загрузке"))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <YMaps>
        <Card style={{ textAlign: "center", fontSize: 24 }}>
          Стадион "Koshka Stadium"
        </Card>
        <div
          style={{
            marginLeft: 405,
            marginRight: 405,
            marginBottom: 30,
            marginTop: 30
            // borderRadius: "15px",
            // boxShadow: "0 0 40px grey"
          }}>
          <Map
            defaultState={{
              center: [55.641884, 37.672249],
              zoom: 16,
              controls: ["zoomControl", "fullscreenControl"]
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
            width={810}
            height={460}>
            <Placemark defaultGeometry={[55.641884, 37.672249]} />
          </Map>
        </div>
      </YMaps>
      <Card style={{ textAlign: "center", fontSize: 24 }}>
        <div style={{ marginBottom: 30, fontSize: 30 }}>Руководство лиги</div>
        <Row gutter={[24, 24]} style={{ backgroundColor: "white" }}>
          {admins?.map((a: any) => (
            <TeamCol
              key={a.name}
              xxl={6}
              xl={8}
              lg={12}
              md={12}
              sm={24}
              xs={24}>
              <img
                src={a?.photo}
                width={260}
                height={260}
                data-proportion-h="1"
              />
              <Title
                style={{ textAlign: "center", cursor: "pointer" }}
                level={3}>
                {a.name}
              </Title>
              <h3>{a.job}</h3>
              <Button href={a.tg} target="_blank">
                Связаться
              </Button>
            </TeamCol>
          ))}
        </Row>
      </Card>
    </>
  );
};
