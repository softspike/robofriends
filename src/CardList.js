import React from "react";
import Card from "./Card";

// CardList reeives robots in index.js so we have access to (props) or destructure in {robots}
const CardList = ({ robots }) => {
  // loop over the robots list and every time create a card component
  //map needs a return
  const cardsArray = robots.map((user, i) => {
    return (
      <Card
        // key = unique key (works without it)
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });

  return <div>{cardsArray}</div>;
};

export default CardList;
