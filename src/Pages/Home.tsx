import BrandSection from "../Componets/BrandSection"
import FeatureCard from "../Componets/FeatureCard"
import HeroSection from "../Componets/HeroSection"
import Layout from "../Componets/Layout"
import ProductCard from "../Componets/ProductCard"
import ServiceApp from "../Componets/ServiceApp"

const Home = ()  => {
    return (
        <Layout>
        <HeroSection />
        <ProductCard />
        <BrandSection />
        <FeatureCard />
        <ServiceApp />
      </Layout>
    )
}

export default Home