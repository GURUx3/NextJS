import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [count, setCount] = useState(0)

  function increseCount() {
    setCount(value => value + 1)
  }

  return (
    <main>
      <h1 className="font-bold text-8xl">First Next Js App !!!</h1>
      <h1 className="font-semibold text-7xl">
        {count}
      </h1>
      <button className="bg-white px-8 text-black rounded-md font-bold py-2" onClick={increseCount}>increse</button>
    </main>
  );
}
