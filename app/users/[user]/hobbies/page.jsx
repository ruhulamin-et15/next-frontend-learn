import Link from "next/link";
import React from "react";

const Hobbies = ({ params }) => {
  return (
    <div>
      <h3>User ID: {params.user}</h3>
      <h3>Your Hobbies</h3>
      <ul>
        <Link href={`../${params.user}/hobbies/football`}>Football</Link>
        <br />
        <Link href={`../${params.user}/hobbies/cricket`}>Cricket</Link>
        <br />
        <Link href={`../${params.user}/hobbies/cycling`}>Cycling</Link>
        <br />
        <Link href={`../${params.user}/hobbies/onlinegaming`}>
          Online Gamming
        </Link>
        <br />
      </ul>
    </div>
  );
};

export default Hobbies;
