import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Stories from "./Components/stories/stories";
import Testimonial from "./Components/Testimonials/testimonials";
import Footer from "./Components/Footer/Footer";
import Categories from "./Components/Categories/categories";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Categories />
      <Stories />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
