import { FC, FormEventHandler, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SignUp: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("auth") === "true") navigate("/");
  }, []);

  const handleForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/sign-up", {
      mode: "cors",
      credentials: "omit",
      headers: {
        "Access-Control-Allow-Origin": "true",
      },
      method: "POST",
      body: JSON.stringify({ name, email, pass: pass1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 1) alert("Something went wrong try again!!!");
        else navigate("/login");
      });
  };

  return (
    <div className="relative h-screen w-full bg-zinc-900/10">
      <div className="absolute h-full w-full bg-sky-500 object-cover mix-blend-overlay" />

      <div className="flex h-full items-center justify-center">
        <form
          onSubmit={handleForm}
          className="mx-auto w-full max-w-[400px] rounded-lg bg-white p-8"
        >
          <h2 className="select-none py-4 text-center text-4xl font-bold text-blue-900">
            COURSE HERO
          </h2>
          <div className="mb-4 flex flex-col">
            <label>Name</label>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="relative border bg-gray-100 p-2"
              type="text"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="relative border bg-gray-100 p-2"
              type="email"
            />
          </div>
          <div className="flex flex-col ">
            <label>Password</label>
            <input
              className="relative border bg-gray-100 p-2"
              value={pass1}
              onChange={(e) => setPass1(e.target.value)}
              name="pass1"
              type="password"
            />
          </div>
          <div className="flex flex-col ">
            <label>Confirm Password</label>
            <input
              className="relative border bg-gray-100 p-2"
              value={pass2}
              onChange={(e) => setPass2(e.target.value)}
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
