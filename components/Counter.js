// components/Counter.js
"use client"; // Ensures this component runs on the client

import { useState } from "react";

function Counter({ incrementBy, bgColor }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newCount = count + incrementBy;
    setCount(newCount > 10 ? 0 : newCount);
  };

  const decrement = () => {
    const newCount = count - incrementBy;
    setCount(newCount < 0 ? 0 : newCount);
  };

  return (
    <div className="flex flex-col items-center" style={{ backgroundColor: bgColor, padding: "10px", borderRadius: "5px", margin: "10px" }}>
      <h1>Counter: {count}</h1>
      <div className="mt-4">
        <button onClick={increment} style={{ marginRight: "10px" }}>Increment by {incrementBy}</button>
        <button onClick={decrement}>Decrement by {incrementBy}</button>
      </div>
    </div>
  );
}

export default Counter;