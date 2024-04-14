import React, { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div style={{ border: "5px solid purple" }}>
        {count} <br />
        <button onClick={() => setCount(count + 1)}>
          Click to increase the count
        </button>
      </div>
    </>
  );
};

export default Button;
