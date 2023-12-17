import React from "react";

const HobbieSinglePage = ({ params }) => {
  return (
    <div>
      <h3>Your Hobbie Details</h3>
      <h5>User ID: {params.user}</h5>
      <h5>Hobbie: {params.hobbie}</h5>
    </div>
  );
};

export default HobbieSinglePage;
