import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Stories from './Components/stories/stories'
import Testimonial from './Components/Testimonials/testimonials'
import SpecialDishes from "./Components/SpecialDishes/specialDishes";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Categories/>
      <Stories />
      <Testimonial />
      <Footer/>
    </div>
  );
}

export default App;
