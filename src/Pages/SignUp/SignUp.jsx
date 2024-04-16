import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../components/socialLogin/SocialLogin";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const navigate =useNavigate();
    const onSubmit = (data) => {
        // console.log(data)
        createUser(data.email, data.password, data.photo)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        // console.log("user profile info update");
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photo: data.photo

                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log("user added database");
                                    reset();
                                    Swal.fire({
                                        title: "user created successfully",
                                        text: "Congratulation",
                                        icon: "success"
                                    });
                                    navigate('/');

                                }
                            })

                    })
                    .catch((error) => console.log(error))

            })
    }

    return (
        <>
            <Helmet>
                <title> Bistro Boss || Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-1/2 mr-14 lg:text-left">
                        {/* <img src={img} alt="" /> */}
                        <img src="https://i.postimg.cc/fW0WLNn4/Mobile-login-pana-1.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h2 className='text-2xl font-bold text-center'> Sign Up</h2>
                            {/* name field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="name" placeholder="name" className="input input-bordered" />
                                {/* errors will return when field validation fails  */}
                                {errors.name && <span className="text-red-600 font-bold">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input {...register("photo", { required: true })} type="photo" placeholder="name" className="input input-bordered" />
                                {/* errors will return when field validation fails  */}
                                {errors.photo && <span className="text-red-600 font-bold">Photo URL is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                                {/* errors will return when field validation fails  */}
                                {errors.email && <span className="text-red-600 font-bold">email field is required</span>}
                            </div>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])./
                                })} type="password" placeholder="password" className="input input-bordered" />

                                {/* errors will return when field validation fails  */}

                                {errors.password?.type === "required" && (
                                    <p role="alert" className="text-red-600 font-bold">password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p role="alert" className="text-red-600 font-bold">password must be 6 character</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p role="alert" className="text-red-600 font-bold">password must be less than 20 character</p>
                                )}

                                {errors.password?.type === "pattern" && (
                                    <p role="alert" className="text-red-600 font-bold">password must have one uppercase ,one lowercase, one number, one special character</p>
                                )}


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>

                            </div>

                            <div className="form-control ">
                                <input className="btn btn-primary" type="submit" value="Sign up" />

                            </div>
                            <p className="text-center">already Sign up? <span className="text-lime-600 font-bold"><Link to='/login'>Sign In</Link></span></p>
                            <div className="divider"></div>
                            <SocialLogin></SocialLogin>
                            
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;