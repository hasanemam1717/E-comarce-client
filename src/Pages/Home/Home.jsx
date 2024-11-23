import Dividar from "../../Components/Dividar";
import HeroSection from "../../Components/HeroSection";
import OurLocation from "../../Components/OurLocation";
import Categories from "../Categories/Categories";
import Contact from "../Contact/Contact";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

const Home = () => {
  return (
    <div>
      {/* This is  hero section components */}
      <HeroSection></HeroSection>
      <Dividar
        title={"Featured Products"}
        subTitle={"Highlights the most popular or new products."}
      ></Dividar>
      <FeaturedProducts></FeaturedProducts>
      <Dividar
        title={"Category"}
        subTitle={"Organizes products into categories for easy browsing."}
      ></Dividar>
      <Categories></Categories>
      <Dividar title={"Contact us"} subTitle={" "}></Dividar>
      <Contact></Contact>
      <Dividar title={"Our location"} subTitle={"If you are free you can show our outlet...!"}></Dividar>
      <OurLocation></OurLocation>
      <h1>This is a home page</h1>
      <h1>Banner</h1>
      <h1>Hero</h1>
    </div>
  );
};

export default Home;
