import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { lightTheme, darkTheme } from "./theme";

const htmlRoot = document.getElementById("root")!;
const root = ReactDOM.createRoot(htmlRoot);

root.render(
  <ThemeProvider theme={lightTheme}>
    <App />
  </ThemeProvider>
);
