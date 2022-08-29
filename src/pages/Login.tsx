import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { FC, FormEvent, FormEventHandler, useEffect, useState } from "react";
import GoogleLogin from "react-google-login";

const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("auth") === "true") navigate("/");
  }, []);

  const onSignIn = (res: any) => {
    console.log(res);
  };

  const handleForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    fetch("https://react-login-internshala.herokuapp.com/login", {
      mode: "cors",
      credentials: "omit",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      method: "POST",
      body: JSON.stringify({ email, pass }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 1) alert("Something went wrong try again!!!");
        else {
          localStorage.setItem("auth", "true");
          localStorage.setItem("id", data.id);
          localStorage.setItem("name", data.name);
          localStorage.setItem("email", data.email);
          localStorage.setItem("isGoogle", data.isGoogle);
        }
        navigate("/");
      });
  };

  return (
    <div className="relative h-screen w-full bg-zinc-900/10">
      <div className="absolute h-full w-full bg-sky-500 object-cover mix-blend-overlay" />

      <div className="flex h-full items-center justify-center">
        <form
          className="mx-auto w-full max-w-[400px] rounded-lg bg-white p-8"
          onSubmit={handleForm}
        >
          <h2 className="select-none py-4 text-center text-4xl font-bold text-blue-900">
            COURSE HERO
          </h2>
          <div className="flex justify-between py-8">
            <p className="relative flex w-full cursor-pointer items-center  justify-center rounded border-2 border-indigo-400 px-6 py-2 shadow-lg hover:border-indigo-500 hover:shadow-xl">
              <FcGoogle className="mr-2 h-5 w-5 " data-onsuccess="onSignIn" />{" "}
              Login with Google
            </p>
            {/* <GoogleLogin
              clientId="444649926393-m08qv7i1tjgir8oj0kubapohuh0vkduf.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={onSignIn}
              onFailure={onSignIn}
              cookiePolicy={"single_host_origin"}
            /> */}
          </div>
          <div className="mb-4 flex flex-col">
            <label>Email</label>
            <input
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="relative border bg-gray-100 p-2"
              type="email"
            />
          </div>
          <div className="flex flex-col ">
            <label>Password</label>
            <input
              value={pass}
              name="pass"
              onChange={(e) => setPass(e.target.value)}
              className="relative border bg-gray-100 p-2"
              type="password"
            />
          </div>
          <button
            type="submit"
            className="relative mt-8 w-full bg-indigo-600 py-3 text-white hover:bg-indigo-500"
          >
            Sign In
          </button>
          <div className="relative mt-8 flex items-center justify-center gap-2 ">
            <p className="text-center">Not a member?</p>
            <Link
              to="/sign-up"
              className="font-semibold text-indigo-600 ring-indigo-500/50 hover:text-indigo-400 focus-visible:ring-2"
            >
              Sign Up now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
