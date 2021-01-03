import React from "react";
import { useParams } from "react-router";

const Details = (props: any) => {
  // const { id } = useParams();
  console.log(props && props.details);
  return <div>test</div>;
};

export default Details;
