import Dividar from "../../Components/Dividar";
import HeroSection from "../../Components/HeroSection";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

const Home = () => {
  return <div>
    {/* This is  hero section components */}
    <HeroSection></HeroSection>
    <Dividar title={"Featured Products"} subTitle={"Highlights the most popular or new products."}></Dividar>
    <FeaturedProducts></FeaturedProducts>
    <h1>This is a home page</h1>
    <h1>Banner</h1>
    <h1>Hero</h1>
  </div>;
};

export default Home;
