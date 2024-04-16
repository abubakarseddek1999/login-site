import { NavLink } from "react-router-dom";

const WelcomePage = () => {

    return (
        <div className="flex justify-center items-center">
            <div className="bg-[#F7F8F9] max-w-xl min-h-screen">
                <div className="flex justify-center items-center">
                    <img className="" src="https://i.postimg.cc/hPJNtXsf/istockphoto-1010491174-612x612.jpg" alt="" />
                </div>


                <div className="flex justify-end">
                    <div>

                        <div className="p-2">
                            <h2 className="text-2xl font-bold text-center p-2"> Welcome to PopX</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, minus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, minus?</p>
                        </div>


                        <div className="p-2 flex flex-col gap-2">
                            <button className="btn btn-block bg-[#6C25FF] text-white font-bold"> <NavLink to="/login">Create Account</NavLink></button>
                            <button className="btn btn-block font-bold bg-[#6C25FF4B]">Already Registered? Login</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default WelcomePage;