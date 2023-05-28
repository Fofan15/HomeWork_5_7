import React, {createContext, useState} from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import { LogOutRoute as appLogOutRoute } from "./routes";
import { loginRoute as apploginRouteRoute } from "./routes";
import Layout from "./components/Layout/Layout";
import AuthStore from "./stores/AuthStore";
import RegisterStore from "./stores/RegisterStore";
import UserStore from "./stores/UserStore";
import {IAppStore} from "./interfaces/appStore";

const store: IAppStore = {
  'authStore':  new AuthStore(),
  'registerStore': new RegisterStore(),
  'userStore': new UserStore()
}
export const AppStoreContext = createContext(store);

function App() {
  // define theme
  const theme = createTheme({
    palette: {
      primary: {
        light: "#63b8ff",
        main: "#0989e3",
        dark: "#005db0",
        contrastText: "#000",
      },
      secondary: {
        main: "#4db6ac",
        light: "#82e9de",
        dark: "#00867d",
        contrastText: "#000",
      },
    },
  });

  const [appStore, setAppStore] = useState(store);

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <AppStoreContext.Provider value={appStore}>
        <Layout>
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
            {appLogOutRoute.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
            {apploginRouteRoute.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Layout>
      </AppStoreContext.Provider>
    </Router>
  </ThemeProvider>
  );
}

export default App;
