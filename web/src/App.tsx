import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import Login from "./pages/Login";
import { lightTheme, darkTheme } from "./util/styles/Theming";

const App = (): React.ReactElement => {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider theme={darkTheme}>
        <Login />
      </NextUIProvider>
    </NextThemesProvider>
  );
};

export default App;
