import logo from "./logo.svg";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey, green, lightBlue, purple } from "@mui/material/colors";
import { Button } from "@mui/material";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Header from "./components/Header"

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[200],

    },
    secondary: {
      main: blueGrey[700],
    },
  },
});

function App() {
  return <ThemeProvider theme={theme}>
    {/* <NavBar /> */}
    <Hero />
    {/* <Header /> */}
  </ThemeProvider>;
}

export default App;
