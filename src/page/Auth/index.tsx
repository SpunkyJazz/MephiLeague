import { Button, Card, Form, Input, Layout, Row } from "antd";
import { useStore } from "src/stores";
import { TLoginData } from "src/types";
import Logo from "src/assets/logo.svg";

export const AuthPage = (): JSX.Element => {
  const { login } = useStore();

  const handleFinish = (values: TLoginData): void => {
    login(values);
  };

  return (
    <Layout
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Card style={{ width: 400 }}>
        <Row justify="center" style={{ height: 64, alignItems: "center" }}>
          {/* <Logo /> */}
        </Row>
        <Form name="login" onFinish={handleFinish}>
          <Form.Item
            name="login"
            rules={[{ required: true, message: "Пожалуйста введите логин" }]}>
            <Input placeholder="Логин" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Пожалуйста введите пароль" }]}>
            <Input.Password placeholder="Пароль" />
          </Form.Item>
          <Row>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Вход
            </Button>
          </Row>
        </Form>
      </Card>
    </Layout>
  );
};
