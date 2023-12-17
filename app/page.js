"use client";
const Home = () => {
  const handleClick = () => {
    alert("clicked");
  };
  console.log("hi i am home route");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center font-bold p-24 text-2xl">
      <h1>Hi i am main page</h1>
      <button onClick={handleClick}>Click Me</button>
    </main>
  );
};

export default Home;
