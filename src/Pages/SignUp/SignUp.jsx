
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState('yes');
    const navigate = useNavigate();
    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };
    
    
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const company = form.company.value;
        console.log(name, email, password, company);

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your login success",
            showConfirmButton: false,
            timer: 1500
        });
        navigate("/profile")

        // createUser(email, password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);

        //     })
        //     .catch(error => console.log(error.massage))

    }

    return (
        <div className="">
            <div className="flex justify-center items-center">


                <div className="bg-[#F7F8F9] md:min-w-[576px] min-h-screen p-2 ">

                    <form onSubmit={handleSignUp} className="">
                        <div className=" flex justify-center items-center">
                            <img className='w-[500px] h-[400px]' src="https://i.postimg.cc/fW0WLNn4/Mobile-login-pana-1.png" alt="" />
                        </div>

                        <h2 className='text-2xl font-bold text-center'> Create your <br /> PopX account</h2>

                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="name" placeholder="Your name" name='name' className="input input-bordered" required />
                        </div>

                        {/* Phone number */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Phone number</span>
                            </label>
                            <input type="number" placeholder="Your phone number" name='email' className="input input-bordered" required />
                        </div>

                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" placeholder="Your email" name='email' className="input input-bordered" required />
                        </div>

                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                           
                        </div>

                        {/* company name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Company name</span>
                            </label>
                            <input type="text" placeholder="company name " name='company' className="input input-bordered" required />
                        </div>

                        {/* Agency surety */}
                        <div>
                            <p className='font-bold mt-2'>Are you an agency?</p>
                            <div className="p-2 flex items-center space-x-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        value="yes"
                                        checked={selectedOption === 'yes'}
                                        onChange={handleChange}
                                        className="form-radio text-indigo-600" required
                                    />
                                    <span className="ml-2">Yes</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        value="no"
                                        checked={selectedOption === 'no'}
                                        onChange={handleChange}
                                        className="form-radio text-indigo-600" required
                                    />
                                    <span className="ml-2">No</span>
                                </label>
                            </div>
                        </div>


                        <div className="form-control mt-6">
                            <input className="btn bg-[#6C25FF] text-white" type="submit" value="Create Account" />
                        </div>

                        <div className='text-center'>
                            <p>Or Sign up with</p>
                            <div className='flex justify-center gap-4 mt-2'>
                                <Link><FaFacebook /> </Link>
                                <Link><FaGoogle /></Link>

                            </div>
                            <div className='mt-3'>
                                <p >Already have an Account? <Link to="/login" className='text-orange-500 font-bold '>Sign in</Link></p>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;