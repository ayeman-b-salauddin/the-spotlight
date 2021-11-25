import { Toolbar } from "../components/toolbar";
import "tailwindcss/tailwind.css";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Toolbar />
      <div class="flex justify-center items-center w-screen md:mt-20 lg:mt-40">
        <h1 class="text-gray-600 font-bold sm:text-xl md:text-5xl">
          Welcome to Spotlight!
        </h1>
      </div>
    </div>
  );
}
