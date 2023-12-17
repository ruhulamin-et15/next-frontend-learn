"use client";

import ExampleServer from "./ExampleServer";

const ExampleClient = () => {
  console.log("i am client component");
  return (
    <div>
      <p>this is client component</p>
      <ExampleServer />
    </div>
  );
};

export default ExampleClient;
