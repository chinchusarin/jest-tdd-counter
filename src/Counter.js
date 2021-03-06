import React from "react";

export default function Counter() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <h1>This is counter app</h1>
      <div id="counter-val">{counter}</div>
      <button id="increment-btn" onClick={() => setCounter(counter + 1)}>
        increment
      </button>
      <button id="decrement-btn" onClick={() => setCounter(counter - 1)}>
        decrement
      </button>
    </div>
  );
}
