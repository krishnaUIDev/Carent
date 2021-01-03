import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import "./App.scss";
import Header from "./Components/Header/Header";
import RouteConfig from "./Routeconfig";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectedTheme } from "./modules/reducers/counterSlice";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "15px 80px 0px",
  },
}));

function App() {
  const classes = useStyles();
  const selected = useSelector(selectedTheme);
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  const lightTheme = createMuiTheme({
    palette: {
      type: "light",
    },
  });
  return (
    <ThemeProvider theme={selected ? darkTheme : lightTheme}>
      <Paper style={{ height: "100vh" }}>
        <div>
          <Header />
          <div className={classes.body}>
            <RouteConfig />
          </div>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
