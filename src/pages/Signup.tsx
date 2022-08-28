import { FC } from "react";
import { Link } from "react-router-dom";

const SignUp: FC = () => {
  return (
    <div className="relative h-screen w-full bg-zinc-900/10">
      <div className="absolute h-full w-full bg-sky-500 object-cover mix-blend-overlay" />

      <div className="flex h-full items-center justify-center">
        <form className="mx-auto w-full max-w-[400px] rounded-lg bg-white p-8">
          <h2 className="select-none py-4 text-center text-4xl font-bold text-blue-900">
            COURSE HERO
          </h2>
          <div className="mb-4 flex flex-col">
            <label>Name</label>
            <input
              name="name"
              className="relative border bg-gray-100 p-2"
              type="text"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label>Email</label>
            <input
              name="email"
              className="relative border bg-gray-100 p-2"
              type="email"
            />
          </div>
          <div className="flex flex-col ">
            <label>Password</label>
            <input
              className="relative border bg-gray-100 p-2"
              name="pass1"
              type="password"
            />
          </div>
          <div className="flex flex-col ">
            <label>Confirm Password</label>
            <input
              className="relative border bg-gray-100 p-2"
              name="pass2"
              type="password"
            />
          </div>
          <button
            type="submit"
            className="relative mt-8 w-full bg-indigo-600 py-3 text-white hover:bg-indigo-500"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
