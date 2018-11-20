import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  if (true) {
    throw new Error("Noooooooooo");
  }
  return (
    <div>
      {robots.map((robot, idx) => (
        <Card key={idx} {...robot} />
      ))}
    </div>
  );
};

export default CardList;
