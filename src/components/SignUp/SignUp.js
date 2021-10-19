import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const onSubmit = (data) => console.log(data);

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className='flex justify-center items-center'>
        <div>
      <h1 className="text-4xl text-gray-600 font-semibold mt-16 mb-6">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='First Name'
          className="w-3/4 border-2 border-gray-400 rounded-md p-2 mb-4"
          {...register("firstName", { required: true, maxLength: 20 })}
        />
        <input placeholder='Second Name'
          className="w-3/4 border-2 border-gray-400 rounded-md p-2 mb-4"
          {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
        />
        <input placeholder='Email'
          className="w-3/4 border-2 border-gray-400 rounded-md p-2 mb-4"
          type="email"
          {...register("email", { pattern: /^[S+@\S+.\S+]/i })}
        />
        <input
          className="w-3/4 border-2 border-gray-400 rounded-md p-2 mb-4"
          type="password"
          placeholder="Password"
        />
        <br />
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded-md"
        >
          Sign Up
        </button>
      </form>
      <p className="text-gray-600 mt-5">Already having an account? Please <Link className='text-blue-600 underline' to='/login'>Login</Link></p>
    </div>
    </div>
  );
};

export default SignUp;
