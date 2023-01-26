import React from "react";

const PropChildren = ({ children, propNormal }) => {
  return (
    <div>
      <h1>Oláá</h1>
      {children}
      <p>Render {propNormal}</p>
    </div>
  );
};

export default PropChildren;
