import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayouts = () => {
  return (
    <div>
      <div className="lg:mx-14 lg:mt-2">
        <Navbar></Navbar>
      </div>
      <div className="min-h-screen container mx-auto">
        <Outlet></Outlet>
      </div>
     <div>
        <Footer></Footer>
     </div>
    </div>
  );
};

export default MainLayouts;
