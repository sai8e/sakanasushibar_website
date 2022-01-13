import React, { useEffect, useState } from "react";
import "./Specials.css";
import Footer from "../Footer";
import Menu_item from "./menu_items/Menu_item";

import specialty_rolls from "./menu_items/specialty_rolls";

export default function Specials() {
  return (
    <>
      {/* <h1 className="specials">Specials</h1> */}
      <div className="specials_container">
        <div className="lunch_specials" id="lunch_specials">
          <h1 className="menu_title">LUNCH SPECIALS</h1>
          <h2>Choose any 2 Maki Sushi Rolls.</h2>
          <h2>ONLY <span className="orange">$12!</span></h2>
          <h4 class="italic">Includes Free order of Miso Soup</h4>
          <h4 class="italic">Available Monday - Friday 12:00 Noon - 3:00 PM</h4>
          <h4 class="italic">-----------------------------------------------------------------------------------------</h4>

          <h2>Choose from the following Specialty Rolls.</h2>
          <h2>ONLY <span className="orange">$8.99 each!</span></h2>
          <p className="lunch_special_rolls">
            <span className="orange">Playboy Roll - </span>
            {
              specialty_rolls.find((item) => item.name === "Playboy Roll")
                .description
            }
          </p>
          <p className="lunch_special_rolls">
            <span className="orange">Sunset Roll - </span>
            {
              specialty_rolls.find((item) => item.name === "Sunset")
                .description
            }
          </p>
          <p className="lunch_special_rolls">
            <span className="orange">Caterpillar Roll - </span>
            {
              specialty_rolls.find((item) => item.name === "Caterpillar Roll")
                .description
            }
          </p>
          <p className="lunch_special_rolls">
            <span className="orange">Rainbow Roll - </span>
            {
              specialty_rolls.find((item) => item.name === "Rainbow Roll")
                .description
            }
          </p>
          <p className="lunch_special_rolls">
            <span className="orange">Vegas Roll - </span>
            {
              specialty_rolls.find((item) => item.name === "Vegas Roll")
                .description
            }
          </p>
          <p className="lunch_special_rolls">
            <span className="orange">Pink Flamingo - </span>
            {
              specialty_rolls.find((item) => item.name === "Pink Flamingo")
                .description
            }
          </p>
          <p className="lunch_special_rolls">
            <span className="orange">G2 Roll - </span>
            {
              specialty_rolls.find((item) => item.name === "G2 Roll")
                .description
            }
          </p>
          <p className="lunch_special_rolls">
            <span className="orange">Spider Roll - </span>
            {
              specialty_rolls.find((item) => item.name === "Spider Roll")
                .description
            }
          </p>
          <p className="lunch_special_rolls">
            <span className="orange">Wasatch Roll - </span>
            {
              specialty_rolls.find((item) => item.name === "Wasatch Roll")
                .description
            }
          </p>
          <p className="lunch_special_rolls">
            <span className="orange">Utah Roll - </span>
            {
              specialty_rolls.find((item) => item.name === "Utah Roll")
                .description
            }
          </p>
          <p className="lunch_special_rolls">
            <span className="orange">Sunrise Roll - </span>
            {
              specialty_rolls.find((item) => item.name === "Sunrise Roll")
                .description
            }
          </p>
          <p className="lunch_special_rolls">
            <span className="orange">New York Roll - </span>
            {
              specialty_rolls.find((item) => item.name === "New York Roll")
                .description
            }
          </p>
          <p className="lunch_special_rolls">
            <span className="orange">Lucky Roll - </span>
            {
              specialty_rolls.find((item) => item.name === "Lucky Roll")
                .description
            }
          </p>
          <p className="lunch_special_rolls">
            <span className="orange">Funky Roll - </span>
            {
              specialty_rolls.find((item) => item.name === "Funky Roll")
                .description
            }
          </p>
          <h4 class="italic">Selection subject to change.</h4>
          
        </div>

         {/*<div className="happy_hour_specials">
          <h1 className="menu_title">HAPPY HOUR SPECIALS</h1>
          <h2>Buy 2 Specialty sushi rolls & 2 drinks.</h2>
          <h2>Get 1 Specialty Roll FREE!</h2>
          <h4 class="italic">Free roll equal or lesser value.</h4>
          <h4 class="italic">*Valid Monday & Tuesday Dinner Only 5:00PM - 9:00PM</h4>
          <h4 class="italic">Limited Time Only. Subject to change without notice.</h4>
        </div>*/}

      </div>
      <Footer />
    </>
  );
}
