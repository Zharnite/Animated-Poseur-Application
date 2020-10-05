import React from "react";

import { graphql } from "@apollo/react-hoc";
import { flowRight as compose, random } from "lodash";
import { GET_DB_ANIMATIONSPRITE } from "../../cache/queries";
import { useQuery } from "@apollo/react-hooks";

const Homescreen = (props) => {
  let animationSprites = [];
  const { loading, error, data, refetch } = useQuery(GET_DB_ANIMATIONSPRITE);
  if (loading) {
    /* Good place for a spinner or something */
  }
  if (error) {
    console.log(error);
  }
  if (data) {
    animationSprites = data.getAllTodos;
  }

  return (
    <div className="homescreen">
      <h1> HomeScreen </h1>
    </div>
  );
};

export default Homescreen;
