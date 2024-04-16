import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="bg-[#EEEEEE] max-w-xl mx-auto">
           
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;