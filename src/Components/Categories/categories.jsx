import React from "react";
import burger from "../../assets/burger.png";
import breakfast from "../../assets/breakfast.png";
import dessert from "../../assets/dessert.png";
import browse from "../../assets/browse.png";
import "./Categories.css";

const categories = [
  { title: "Main Dish", image: burger, items: "(86 dishes)" },
  { title: "Break Fast", image: breakfast, items: "(12 break fast)" },
  { title: "Dessert", image: dessert, items: "(48 dessert)" },
  { title: "Browse All", image: browse, items: "(255 items)" },
];

function Categories() {
  return (
    <section className="categories">
      <h5 className="categories-subtitle">Customer Favorites</h5>
      <h2 className="categories-title">Popular Categories</h2>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <div className="category-image">
              <img src={category.image} alt={category.title} />
            </div>
            <h3 className="category-title">{category.title}</h3>
            <p className="category-items">{category.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
