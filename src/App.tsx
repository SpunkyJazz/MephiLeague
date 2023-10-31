import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import ru_RU from "antd/lib/locale/ru_RU";
import { createStore, StoreContext } from "./stores";
import { Page } from "./page";

export const App = (): JSX.Element => {
  const stores = createStore();

  return (
    <BrowserRouter>
      <ConfigProvider locale={ru_RU}>
        <StoreContext.Provider value={stores}>
          <Page />
        </StoreContext.Provider>
      </ConfigProvider>
    </BrowserRouter>
  );
};
