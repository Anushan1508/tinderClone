import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Anushan Santhirakumar",
      url: "https://media-exp1.licdn.com/dms/image/C5603AQEtH8WxomIXvg/profile-displayphoto-shrink_800_800/0/1628754446701?e=1635379200&v=beta&t=Ov0P1twAOqiwB944FaO33p9vMMDJKAS-a_ULDObDLNw",
    },
    {
      name: "Elon Musk",
      url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
    //setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "Left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
