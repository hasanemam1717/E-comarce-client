import { Outlet } from "react-router-dom";
import LeftSide from "../Components/DashboardComponent/LeftSide";

const Dashboard = () => {
    return (
        <div className="grid lg:grid-cols-12 container mx-auto ">
            <div className="lg:col-span-2 col-span-1 lg:border-r-8 shadow-inner border-orange-300 "><LeftSide></LeftSide></div>
            <div className="lg:col-span-10 p-12"><Outlet></Outlet></div>
        </div>
    );
};

export default Dashboard;