import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import SpecialDishes from "./Components/SpecialDishes/specialDishes";
function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <SpecialDishes />
    </div>
  );
}

export default App;
