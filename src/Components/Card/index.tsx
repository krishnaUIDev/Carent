import { Button, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.action.selected,
    width: "22%",
    padding: "15px",
    margin: "10px",
    boxSizing: "border-box",
    float: "left",
    textAlign: "center",
    transition: ".4s",
    borderRadius: "20px !important",
  },
}));
const Card = (props: any) => {
  const { item, onClick } = props;
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.content} onClick={onClick}>
      <h3>{(item && item.name) || "--"}</h3>
      <h4>{(item && item.price) || "--"}/day</h4>
      <img src={item && item.image} />
      <div className="home_actions">
        <div>Auto</div>
        <div>5 seats</div>
        <div>34MPG</div>
      </div>
      <Button color="primary">
        <Link to={`/${encodeURIComponent(item.name)}`}>Rent Now</Link>
      </Button>
    </Paper>
  );
};

export default Card;
