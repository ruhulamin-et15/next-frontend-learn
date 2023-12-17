import Link from "next/link";
import React from "react";

function SinglePage({ params }) {
  return (
    <div>
      <h5>User: {params.user}</h5>
      <Link href={`/users/${params.user}/hobbies`}>Hobbies</Link>
    </div>
  );
}

export default SinglePage;
