"use client";
import { useState } from "react";
import style from "@/styles/Button.module.css";

const Couner = () => {
  const [count, setCount] = useState(0);

  return (
    <div className=" h-screen">
      <button className={style.button} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <h1>{count}</h1>
    </div>
  );
};

export default Couner;
