import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {

  const { setUser, error, setError, handleSignUp } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // get field value:
  const getName = (e) => {
    const userName = e.target.value;
    if (userName.length < 3) {
      setError("Name must be more than two characters");
      return;
    }
    setName(userName);
    setError("");
  };

  const getEmail = (e) => {
    const userEmail = e.target.value;
    if (!/(\S+@\S+\.\S+)/.test(userEmail)) {
      setError("Invalid email address");
      return;
    }
    setEmail(userEmail);
    setError("");
  };

  const getPassword = (e) => {
    const userPassword = e.target.value;
    setPassword(userPassword);
  };

//   submit handler:
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must more than 6 characters");
      return;
    }
    if (!/(?=.*?[A-Z])/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (!/(?=.*?[a-z])/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError("Password must contain at least one special character");
      return;
    }
    handleSignUp(email, password)
    .then(result =>{
        setUser(result.user);
        setError("");
    })
    .catch(err =>{
        setError(err.message);
    })
    setError('');
    console.log(name, email, password);
  };

  return (
    <div className="flex justify-center items-center mt-24">
      <div>
        <h1 className="text-center text-4xl text-green-700 font-medium mb-2">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full border-2 border-gray-400 rounded-sm py-1 px-2 mb-2"
            onBlur={getName}
            type="text"
            placeholder="Name"
          />
          <br />
          <input
            className="w-full border-2 border-gray-400 rounded-sm py-1 px-2 mb-2"
            onBlur={getEmail}
            type="email"
            name=""
            id=""
            placeholder="Email"
            required
          />
          <br />
          <input
            className="w-full border-2 border-gray-400 rounded-sm py-1 px-2 mb-2"
            onBlur={getPassword}
            type="password"
            name=""
            id=""
            placeholder="Password"
            required
          />
          <br />
          <p className="text-red-700 text-xl">{error}</p>
          <input
            type="submit"
            value="Sign Up"
            className="bg-red-500 hover:bg-red-400 rounded cursor-pointer py-2 px-4 text-white shadow-md"
          />
          <br />
          <p className="mt-4 text-blue-400 font-medium">
            Already having an account? Try to{" "}
            <Link className="underline text-blue-500" to="/login">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
