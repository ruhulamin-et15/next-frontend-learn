import Link from "next/link";
import React from "react";

const Users = () => {
  return (
    <div>
      <ul>
        <Link href="/users/1">User 1</Link>
        <br />
        <Link href="/users/2">User 2</Link>
        <br />
        <Link href="/users/3">User 3</Link>
        <br />
        <Link href="/users/4">User 4</Link>
        <br />
        <Link href="/users/5">User 5</Link>
      </ul>
    </div>
  );
};

export default Users;
