import React, { useState } from "react";

function FormExample() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Form submit ke default behavior ko rokne ke liye

    // Form se input value collect kare aur state ko update kare
    console.log("Submitted value:", inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormExample;
