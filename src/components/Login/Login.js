import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {
    handleGoogleSignIn,
    error,
    setUser,
    setError,
    handleSignIn,
    handleSignUp,
  } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

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

  //   get name:
  const getName = (e) => {
    setName(e.target.value);
  };

  // get email:
  const getEmail = (e) => {
    const email = e.target.value;
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email address");
      return;
    }
    setEmail(e.target.value);
    setError("");
  };

  // get password:
  const getPassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    setError("");
  };

  // toggle:
  const toggleSign = (e) => {
    setIsSignUp(e.target.checked);
  };

  //
  const userSignIn = (email, password) => {
    handleSignIn(email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
      })
      .catch(() => {
        setError("Email or Password do not match");
      });
    setEmail("");
    setPassword("");
  };

  //
  const userSignUp = (email, password) => {
    handleSignUp(email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
      })
      .catch(() => {
        setError("Already taken...try to log in");
      });
  };

  // handle submit:
  const handleSubmit = (e) => {
    e.target.preventDefault();
    if (password.length < 6) {
      setError("Password must be more than 6 characters");
      return;
    }
    if (!/(?=.*?[A-Z])/.test(password)) {
      setError("Password must have one uppercase letter");
      return;
    }
    if (!/(?=.*?[0-9])/.test(password)) {
      setError("Password must have one digit");
      return;
    }
    if (isSignUp) {
      userSignUp(email, password);
    } else {
      userSignIn(email, password);
    }
  };

  return (
    <div className="mt-16 flex flex-wrap-reverse justify-evenly items-center gap-8">
      <div className="w-2/5">
        <h1 className="text-4xl text-yellow-400 font-semibold mb-4">
          {isSignUp ? "Sign Up" : "Log In"}
        </h1>
        <form action="" onSubmit={handleSubmit}>
        {isSignUp && (
          <>
            <input
              onBlur={getName}
              className="w-3/4 border-2 border-gray-400 rounded-md p-2 mb-4"
              type="text"
              name=""
              id=""
              placeholder="Your Name"
              required
            />
            <br />
          </>
        )}
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
        <input
          type="submit"
          className="mb-4 text-white bg-green-500 hover:bg-green-700 px-4 py-1 rounded"
          value={isSignUp ? "Sign Up" : "Log In"}              
        />
        <br />
        <input
          className="mr-2"
          onChange={toggleSign}
          type="checkbox"
          name="check"
          id="check"
        />
        <label htmlFor="check" className="text-blue-600 underline">
          Don't have an account? Sign Up
        </label>
        <br />
        <p className="text-red-700 text-2xl">{error}</p>
        </form>
        <div className="text-gray-500">-----------Or------------</div>
        <p>Log In using</p>
        <div className="flex gap-2">
          <button
            onClick={signInWithGoogle}
            className="mb-4 text-white bg-pink-500 hover:bg-pink-700 px-4 py-1 rounded"
          >
            Google
          </button>
          <button className="mb-4 text-white bg-indigo-500 hover:bg-indigo-700 px-4 py-1 rounded">
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
