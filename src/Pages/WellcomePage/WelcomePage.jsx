import { NavLink } from "react-router-dom";

const WelcomePage = () => {

    return (
        <div className="flex justify-center items-center">
            <div className="bg-[#F7F8F9] max-w-[576px] min-h-screen flex flex-col justify-center items-center">
                <div className="flex justify-center items-center">
                    <img className="" src="https://i.postimg.cc/qBmhkkX5/istockphoto-1010491174-612x612-removebg-preview-1.png" alt="" />
                </div>


                <div className="flex justify-end">
                    <div>

                        <div className="p-2 mb-10">
                            <h2 className="text-2xl font-bold text-center p-2"> Welcome to PopX</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, minus?</p>
                        </div>


                        <div className="p-2 flex flex-col gap-2">
                             <NavLink to="/signUp" className="btn btn-block bg-[#6C25FF] text-white font-bold hover:text-black transition">Create Account</NavLink>

                             <NavLink className="btn btn-block bg-[#6C25FF4B] font-bold" to="/login">Already Registered? Login</NavLink>
                           
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default WelcomePage;