import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src="images/menu.jpeg" text="MENU" path="/menu" />
            <CardItem
              src="images/happyHours.jpeg"
              text="HAPPY HOUR SPECIALS"
              path="/specials"
            />
            <CardItem
              src="images/lunchSpecials.jpeg"
              text="LUNCH SPECIALS"
              path="/specials"
            />
          </ul>
          <ul className="cards__items">
            <CardItem src="images/gallery.png " text="GALLERY" path="/gallery" />
            <CardItem
              src="images/hoursAndLocation.jpeg"
              text="HOURS & LOCATION"
              path="/contact"
            />
            <li className="cards__item">
              <div className="cards__item__info">
                <h5 className="cards__item__text">
                  Sakana Sushi Bar & Japanese Cuisine was voted #1 for best
                  Sushi Restaurant 2010!
                  <br />
                  <br />
                  To all our voters, loyal customers, and sushi lovers... Thank
                  You!
                </h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
