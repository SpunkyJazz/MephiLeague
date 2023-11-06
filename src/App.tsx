import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import ru_RU from "antd/lib/locale/ru_RU";
import { createStore, StoreContext } from "./stores";
import { Page } from "./page";
import { THEME } from "./styles/theme";
import { ParallaxProvider } from "react-scroll-parallax"
import React from "react";

export const App = (): JSX.Element => {
  const stores = createStore();

  return (
    <BrowserRouter>
      <ConfigProvider locale={ru_RU} theme={THEME}>
        <StoreContext.Provider value={stores}>
          <ParallaxProvider scrollAxis="horizontal">
            <React.StrictMode>  
              <Page />
            </React.StrictMode> 
          </ParallaxProvider>
        </StoreContext.Provider>
      </ConfigProvider>
    </BrowserRouter>
  );
};
