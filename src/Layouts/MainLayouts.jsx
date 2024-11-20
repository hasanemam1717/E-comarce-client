import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const MainLayouts = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div>Footer</div>
        </div>
    );
};

export default MainLayouts;