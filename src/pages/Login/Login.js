import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/ProviderContext/ProviderContext';
import useToken from '../../hooks/useToken';

const Login = () => {

    const { signIn, googleSignIn, facebookSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


    const { register, formState: { errors }, handleSubmit } = useForm();
    const [logInError, setLogInError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true })
    }

    const handleLogin = (data) => {
        console.log(data)
        setLogInError('')
        const email = data.email;
        const password = data.password;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setLoginUserEmail(email)
                toast.success('Logged in successfully!')
                navigate('/')
            })
            .catch(err => {
                console.log(err);
                setLogInError(err.message)
            })

        console.log(email, password)
    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                navigate('/')
                console.log(user);
            })
            .catch(err => console.error(err))
    }

    const handleFacebookSignIn = () => {
        facebookSignIn(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl text-success font-bold text-center'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span> </label>
                        <input type="email"
                            {...register("email", {
                                required: "Email address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span> </label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters or longer" }
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text"><small>Forgot password? </small></span> </label>
                    </div>
                    <input className='btn btn-success w-full' value='Login' type='submit' />
                    <div>
                        {logInError && <p className='text-red-600'>{logInError}</p>}
                    </div>
                </form>
                <p className='text-center my-3'>New to doctors portal ? <Link className='text-secondary' to='/signup'>Create account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                <button onClick={handleFacebookSignIn} className='btn btn-outline w-full mt-2'>CONTINUE with Facebook</button>
            </div>
        </div>
    );
};

export default Login;