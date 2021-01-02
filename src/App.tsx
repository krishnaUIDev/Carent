import { makeStyles } from "@material-ui/core";
import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "15px 80px 0px",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.body}>test</div>
    </div>
  );
}

export default App;
