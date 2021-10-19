import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {handleGoogleSignIn, error, setUser, setError} = useAuth();

    const location = useLocation();
    const history = useHistory();
    const render_url = location.state?.from ||'/login';

    const signInWithGoogle = () =>{
        handleGoogleSignIn()
        .then(result =>{
            setUser(result.user);
        })
        .catch(error =>{
            setError(error.message);
        })
        .finally(()=> {
            history.push(render_url);
        })
    }

    return (
        <div className='mt-16 flex flex-wrap-reverse justify-evenly items-center gap-8'>
            <div className='w-2/5'>
                <h1 className='text-4xl text-yellow-400 font-semibold mb-4'>Log In</h1>
                <input className='w-3/4 border-2 border-gray-400 rounded-md p-2 mb-4' type="email" name="" id="" placeholder='Your Email' required/>
                <br />
                <input className='w-3/4 border-2 border-gray-400 rounded-md p-2 mb-4' type="password" name="" id="" placeholder='Password' required/>
                <br />
                {
                    <button className='mb-4 text-white bg-green-500 hover:bg-green-700 px-4 py-1 rounded'>Log In</button>
                }
                <p>Don't have an account? <Link to='/signup' className='text-blue-600 underline'>Sign Up</Link></p>
                <br />
                <p>{error}</p>
                <div className='text-gray-500'>-----------Or------------</div>
                <p>Log In using</p>
                <div className='flex gap-2'>
                <button onClick={signInWithGoogle}  className='mb-4 text-white bg-pink-500 hover:bg-pink-700 px-4 py-1 rounded'>Google</button>
                <button  className='mb-4 text-white bg-indigo-500 hover:bg-indigo-700 px-4 py-1 rounded'>Facebook</button>
                </div>
            </div>
            <div className='sm:mb-2'>
                <img src='https://i.ibb.co/6Ph49CT/Woman-watching-a-laptop-screen-while-stretching-her-hand-and-typing-on-it.jpg' alt="login_img" />
            </div>
        </div>
    );
};

export default Login;