import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
