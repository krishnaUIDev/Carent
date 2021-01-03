import { makeStyles } from "@material-ui/core";
import React from "react";
import Card from "../Card";

const useStyles = makeStyles((theme) => ({
  gallery: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const data = [
  {
    id: 1,
    name: "Renault Megane RS",
    image: "/images/bmw.png",
    price: "$100",
  },
  {
    id: 2,
    name: "Renault Megane RS",
    image: "/images/benz.jpg",
    price: "$100",
  },
  {
    id: 3,
    name: "Renault Megane RS",
    image: "/images/audi1.png",
    price: "$100",
  },
  {
    id: 4,
    name: "Renault Megane RS",
    image: "/images/bmw.png",
    price: "$100",
  },
];

const Home = () => {
  const classes = useStyles();
  // const [carsInfo, setCarsInfo] = useState([
  //   ...data.map((info) => {
  //     return { ...info, selected: false };
  //   }),
  // ]);
  const handleClicked = (id) => {
    // carsInfo[id].selected = !carsInfo[id].selected;
    // setCarsInfo(carsInfo);
    console.log(id);
  };
  return (
    <div className={classes.gallery}>
      {data &&
        data.map((item) => (
          <Card
            key={item.id}
            item={item}
            onClick={() => handleClicked(item && item.id)}
          />
        ))}
    </div>
  );
};

export default Home;
