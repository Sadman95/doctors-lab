import React, { useState } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {
    user,
    handleGoogleSignIn,
    handleFacebookSignIn,
    error,
    setUser,
    setError,
    handleSignIn,
    resetPassword,
  } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const history = useHistory();
  const render_url = location.state?.from || "/login";

  // google sign in:
  const signInWithGoogle = () => {
    handleGoogleSignIn()
      .then((result) => {
        setUser(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        history.push(render_url);
      });
  };
  // facebook sign in:
  const signInWithFacebook = () => {
    handleFacebookSignIn()
      .then((result) => {
        setUser(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        history.push(render_url);
      });
  };

  const getEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const getPassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  //submit handler:
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn(email, password)
      .then((result) => {
        setUser(result.user);
        setError('');
      })
      .catch(() => {
        setError("Email or Password may not match");
      })
      .finally(() => {
        history.push(render_url);
      });
    setError("");
    console.log(email, password);
  };

  // reset password:
  const passwordReset = () => {
    resetPassword(email)
      .then(() => {
        Swal.fire("Password reset mail sent");
        setError("");
      })
      .catch(() => {
        setError("Put your email first");
      });
  };

  return (
    <div className="mt-16 flex flex-wrap-reverse justify-evenly items-center gap-8">
      <div className="w-2/5">
        <h1 className="text-4xl text-yellow-400 font-semibold mb-4">Log In</h1>
        <form onSubmit={handleSubmit}>
          <input
            onBlur={getEmail}
            className="w-3/4 border-2 border-gray-400 rounded-md p-2 mb-4"
            type="email"
            name=""
            id=""
            placeholder="Your Email"
            required
          />
          <br />
          <input
            onBlur={getPassword}
            className="w-3/4 border-2 border-gray-400 rounded-md p-2 mb-4"
            type="password"
            name=""
            id=""
            placeholder="Password"
            required
          />
          <br />
          <p className="text-red-700 text-xl">{error}</p>
          <br />
          <input
            type="submit"
            disabled={user.email ? true : false}
            className={
              !user.email
                ? "mb-4 mr-2 text-white bg-green-500 hover:bg-green-700 px-4 py-1 rounded"
                : "mb-4 mr-2 text-white bg-green-500 px-4 py-1 rounded"
            }
            value="Log In"
          />
          {user.email && (
            <button
              onClick={passwordReset}
              className="bg-red-600 hover:bg-red-400 rounded py-1 px-4 text-white"
            >
              Reset Password
            </button>
          )}
          <br />
          <p className="text-blue-400 underline">
            Don't have an account?{" "}
            <Link className="text-blue-600" to="/signup">
              Sign Up
            </Link>
          </p>
        </form>
        <div className="text-gray-500">-----------Or------------</div>
        <p>Log In using</p>
        <div className="flex gap-2">
          <button
            disabled={user.email ? true : false}
            onClick={signInWithGoogle}
            className={!user.email ? "mb-4 cursor-pointer text-white bg-pink-500 hover:bg-pink-700 px-4 py-1 rounded": "mb-4 text-white bg-pink-500 px-4 py-1 rounded cursor-not-allowed"}
          >
            Google
          </button>
          <button
            disabled={user.email ? true : false}
            onClick={signInWithFacebook}
            className={!user.email ? "mb-4 cursor-pointer text-white bg-indigo-500 hover:bg-indigo-700 px-4 py-1 rounded":"mb-4 text-white bg-indigo-500 px-4 py-1 rounded cursor-not-allowed"}
          >
            Facebook
          </button>
        </div>
      </div>
      <div className="sm:mb-2">
        <img
          src="https://i.ibb.co/6Ph49CT/Woman-watching-a-laptop-screen-while-stretching-her-hand-and-typing-on-it.jpg"
          alt="login_img"
        />
      </div>
    </div>
  );
};

export default Login;
