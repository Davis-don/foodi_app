import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import SpecialDishes from "./Components/SpecialDishes/specialDishes";

import Stories from "./Components/stories/stories";
import Testimonial from "./Components/Testimonials/testimonials";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />

      <SpecialDishes />
      <Stories />
      <Testimonial />
    </div>
  );
}

export default App;
