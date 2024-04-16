import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Login = () => {
    // const [disabled, setDisabled] = useState(true);
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state)

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

                alert.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });

            })
            .catch(error => console.log(error))



    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');


            })
            .catch(error => console.log(error.message))
    }

    return (

        <>

            <div className="flex justify-center items-center">
                <div className="bg-[#F7F8F9] md:min-w-[576px] min-h-screen p-2 ">

                    <form onSubmit={handleLogin} >
                        <div className="flex justify-center items-center">
                            {/* image of login page */}
                            <img className="w-[570px]" src="https://i.postimg.cc/fW0WLNn4/Mobile-login-pana-1.png" alt="" />
                        </div>
                        <p className='text-2xl font-bold text-center'> Signin to your PopX account</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" placeholder=" email Address" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold"> Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover font-bold">Forgot password?</a>
                            </label>
                        </div>

                        {/* sign in button */}
                        <div className="form-control mt-2">
                            {/* TODO: apply disable for re captcha*/}
                            <input disabled={false} className="btn bg-[#6C25FF] text-white" type="submit" value="Login" />
                        </div>

                        <div className='text-center'>
                            <div className='mt-3'>
                                <p >New here? <br /> <Link to="/signup" className='text-lime-600 font-bold '>Create a New Account</Link></p>
                                <p>Or Sign In with</p>
                                <div className='flex justify-center gap-4 mt-2'>
                                    <Link>facebook </Link>
                                    <Link onClick={handleGoogleSignIn}>google</Link>

                                </div>
                            </div>
                        </div>

                    </form>










                </div>
            </div>

        </>
    );
};

export default Login;