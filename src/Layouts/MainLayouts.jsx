import { Outlet } from "react-router-dom";


const MainLayouts = () => {
    return (
        <div>
            <div>Navbar</div>
            <Outlet></Outlet>
            <div>Footer</div>
        </div>
    );
};

export default MainLayouts;