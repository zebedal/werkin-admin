import "scss/main.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import BaseLayout from "./components/Layout/BaseLayout";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    success: {
      main: "#02a499",
      light: "#02a499",
      dark: "#02a499",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BaseLayout></BaseLayout>
    </MuiThemeProvider>
  );
}

export default App;
