import React, { useEffect, useState } from "react";
import "./Menu.css";
import Footer from "../Footer";
import Menu_item from "./menu_items/Menu_item";

import appetizers from "./menu_items/appetizers.js";
import salads from "./menu_items/specialty_salads";
import dinner_combinations from "./menu_items/dinner_combinations";
import entrees from "./menu_items/entrees";
import specialty_rolls from "./menu_items/specialty_rolls";
import maki_sushi from "./menu_items/maki_sushi";
import veggie_rolls from "./menu_items/veggie_rolls";
import nigiri_sashimi_combo from "./menu_items/nigiri&sashimi_combo";
import nigiri_sushi_sashimi from "./menu_items/nigiri_sushi&sashimi";
import lunch_appetizers from "./menu_items/lunch_appetizers";
import lunch_entrees from "./menu_items/lunch_entrees";

export default function Menu() {
  // const [tag, setTag] = useState("all");
  // const [filteredImages, setFilteredImages] = useState([]);

  // useEffect(() => {
  //   tag === "all"
  //     ? setFilteredImages(appetizers, salads)
  //     : setFilteredImages(appetizers.filter((image) => image.tag === tag));
  // }, [tag]);

  return (
    <>
      <h1 className="menu_page">Menu</h1>
      <div className="menu_App">
        {/* <div className="menu_tags">
          <TagButton
            name="appetizers"
            tagActive={tag === "appetizers" ? true : false}
            handleSetTag={setTag}
          />{" "}
          /
          <TagButton
            name="kitchen food"
            tagActive={tag === "kitchen food" ? true : false}
            handleSetTag={setTag}
          />{" "}
          /
          <TagButton
            name="other"
            tagActive={tag === "other" ? true : false}
            handleSetTag={setTag}
          />
        </div> */}
        <h1 className="menu_title" id="appetizers">
          Appetizers
        </h1>
        <div className="menu_container">
          <Menu_item filteredImages={appetizers} />
        </div>
        <h1 className="menu_title" id="specialty_salads">
          Specialty Salads
        </h1>
        <div className="menu_container">
          <Menu_item filteredImages={salads} />
        </div>
        <h1 className="menu_title" id="dinner_combinations">
          Dinner Combinations
        </h1>
        <p className="kmvjN">
          (Served with Miso Soup or Side Salad and Steamed Rice). (Shrimp
          tempura can be substituted with extra vegetables. No Substitutions on
          the meat, extra side of meat can be ordered)
        </p>
        <div className="menu_container">
          <Menu_item filteredImages={dinner_combinations} />
        </div>
        <h1 className="menu_title" id="dinner_combinations">
          Entrees
        </h1>
        <p className="kmvjN">
          (Served with Miso Soup or Side Salad and Steamed Rice) ​(Noodle dishes
          are not served with rice, rice available upon request)
        </p>
        <div className="menu_container">
          <Menu_item filteredImages={entrees} />
        </div>
        <h1 className="menu_title" id="specialty_salads">
          Sakana Specialty Rolls
        </h1>
        <div className="menu_container">
          <Menu_item filteredImages={specialty_rolls} />
        </div>
        <h1 className="menu_title" id="specialty_salads">
          Maki Sushi
        </h1>
        <div className="menu_container">
          <Menu_item filteredImages={maki_sushi} />
        </div>
        <h1 className="menu_title" id="specialty_salads">
          Veggie Rolls
        </h1>
        <div className="menu_container">
          <Menu_item filteredImages={veggie_rolls} />
        </div>
        <h1 className="menu_title" id="specialty_salads">
          Nigiri & Sashimi Combo
        </h1>
        <div className="menu_container">
          <Menu_item filteredImages={nigiri_sashimi_combo} />
        </div>
        <h1 className="menu_title" id="specialty_salads">
          Nigiri Sushi & Sashimi
        </h1>
        <div className="menu_container">
          <Menu_item filteredImages={nigiri_sushi_sashimi} />
        </div>

        <p className="kmvj">
          ***Food-allergic guests, please alert your server /manager to any food
          allergies before ordering. ***
        </p>{" "}
        <p className="kmvj">
          *Personal Checks are not accepted. A gratuity of 15% may be added for
          parties of 6 or more guests. Outside Food or Drinks are not allowed.
        </p>{" "}
        <p className="kmvj">
          * Thoroughly cooking foods of animal origin such as beef, eggs, fish,
          lamb, pork, poultry, or shellfish reduces the risk of food borne
          illness. Consult your physician or public health official for further
          information.{" "}
        </p>
        
        <h1 className="menu_title" id="specialty_salads">
          LUNCH MENU
          <br />
          <br />
          Appetizers
        </h1>
        <div className="menu_container">
          <Menu_item filteredImages={lunch_appetizers} />
        </div>
        <h1 className="menu_title" id="specialty_salads">
          Entrees
        </h1>
        <div className="menu_container">
          <Menu_item filteredImages={lunch_entrees} />
        </div>
        <p className="kmvjN">
          (Shrimp tempura can be substituted with extra vegetables. No
          Substitutions on the meat, extra side of meat can be ordered).{" "}
        </p>
        <p className="kmvjN">Choose one of the following:</p>
        <ul className="kmvjN">
          <li>Grilled Chicken Teriyaki & Shrimp & Vegetable Tempura</li>
          <li>Sakana Steak & Shrimp & Vegetable Tempura</li>
          <li>Salmon Teriyaki & Shrimp & Vegetable Tempura</li>
          <li>Pork Katsu & Shrimp & Vegetable Tempura</li>
          <li>Shrimp Tempura & & Vegetable Tempura</li>
        </ul>
        <p className="kmvj">
          ***Food-allergic guests, please alert your server /manager to any food
          allergies before ordering. ***
        </p>{" "}
        <p className="kmvj">
          *Personal Checks are not accepted. A gratuity of 15% may be added for
          parties of 6 or more guests. Outside Food or Drinks are not allowed.
        </p>{" "}
        <p className="kmvj">
          * Thoroughly cooking foods of animal origin such as beef, eggs, fish,
          lamb, pork, poultry, or shellfish reduces the risk of food borne
          illness. Consult your physician or public health official for further
          information.{" "}
        </p>
      </div>
      <Footer />
    </>
  );
}

// const TagButton = ({ name, handleSetTag, tagActive }) => {
//   return (
//     <a
//       className={`menu_tag ${tagActive ? "active" : null}`}
//       onClick={() => handleSetTag(name)}
//       href="#appetizers"
//     >
//       {name.toUpperCase()}
//     </a>
//   );
// };
