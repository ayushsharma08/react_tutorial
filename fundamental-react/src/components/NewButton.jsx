import React from "react";

export default function NewButton({ count, handleClick }) {
  return (
    <div style={{ border: "5px solid purple" }}>
      <button onClick={handleClick}>
        click on me to {count} increase the count
      </button>
    </div>
  );
}
