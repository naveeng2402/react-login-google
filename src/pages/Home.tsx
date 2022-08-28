import { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <div className="relative h-screen w-full bg-zinc-900/10">
      <div className="absolute h-full w-full bg-sky-500 object-cover mix-blend-overlay" />

      <div className="flex h-full items-center justify-center">
        <div className="mx-auto flex w-full max-w-[400px] flex-col justify-center gap-8 rounded-lg bg-white p-8">
          <p className="text-center text-3xl font-bold">
            Welcome <span className="text-indigo-500">Naveen G</span>
          </p>
          <button className="relative mx-auto w-1/2 rounded bg-indigo-600 py-3 text-white hover:bg-indigo-500">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
