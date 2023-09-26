import BrandSection from "./Componets/BrandSection";
import HeroSection from "./Componets/HeroSection";
import ProductCard from "./Componets/ProductCard";
import FeatureCard from "../src/Componets/FeatureCard"
import ServiceApp from "./Componets/ServiceApp";

const App = () => {
  return (
    <div>
      <HeroSection />
      <ProductCard />
      <BrandSection />
      <FeatureCard />
      <ServiceApp />
    </div>
  );
};

export default App;
