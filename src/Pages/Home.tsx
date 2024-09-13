import BannerProducts from "../Componets/BannerProducts"
import FeatureCard from "../Componets/FeatureCard"
import Layout from "../Componets/Layout"
import ProductCard from "../Componets/ProductCard"
import ProductCategory from "./ProductCategory"

const Home = ()  => {
    return (
        <Layout>
          <ProductCategory/>
          <BannerProducts/>
        {/* <HeroSection /> */}
        <ProductCard />
        {/* <BrandSection /> */}
        <FeatureCard title={"Customers also purchased "} />
        {/* <ServiceApp /> */}
      </Layout>
    )
}

export default Home