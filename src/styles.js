import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const theme = createTheme({
  overrides: {},
});

const useStyles = makeStyles({
  container: {
    background: theme.palette.background.paper,
  },
  button: {
    padding: "16px",
    marginTop: "24px",
    color: "#fff",
  },
  awards: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "24px",
  },
  award: {
    marginLeft: "8px",
  },
});

export default useStyles;
