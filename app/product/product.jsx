"use client";
import { useRouter } from "next/navigation";
import React from "react";
import style from "@/styles/Button.module.css";

const ProductButton = (props) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`product/${props.id}`);
  };
  return (
    <div>
      <button className={style.button} onClick={handleClick}>
        Show Details
      </button>
    </div>
  );
};

export default ProductButton;
