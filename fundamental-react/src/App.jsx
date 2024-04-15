import { useState } from "react";
import Products from "./components/Products.jsx";
import Button from "./components/Button.jsx";
import Form from "./components/Form.jsx";
import NewButton from "./components/NewButton.jsx";
import "./style.css";
import Board from "./components/Board.jsx";
import Ref from "./components/Ref.jsx";

function App() {
  const [count, setCount] = useState(0);
  // function handleClick() {
  //   setCount(count + 1);
  // }

  // const squares = [1, null, null, null, null, null, null, null, null];

  return (
    <>
      <div style={{ border: "5px solid purple", padding: "15px" }}>
        <Products />
        <hr />
        <Button />
        <hr />
        <Form />
        <hr />
        {/* passing the props to the button component so that on clicking the one button both button count value will be changed  */}
        <NewButton
          count={count}
          handleClick={() => {
            setCount(count + 1);
          }}
        />
        <NewButton
          count={count}
          handleClick={() => {
            setCount(count + 1);
          }}
        />
        <hr />
        <Board />
        <hr />
        <Ref />
      </div>
    </>
  );
}

export default App;
