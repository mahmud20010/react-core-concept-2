import { useState } from "react";

export default function Counter() {
  // const [count, setCount]= useState(0)
  const [count, setCount] = useState(0);
  const addCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const reduceCount = () => {
    if (count === 0) {
      return alert("Negative value not working");
    } else {
      const newReduceCount = count - 1;
      setCount(newReduceCount);
    }
  };

  return (
    <div style={{ margin: "10px", padding: "10px", border: "2px solid red" }}>
      <h2>Counter:{count}</h2>
      <div>
        <button onClick={addCount} style={{ margin: "10px", padding: "10px" }}>
          Add
        </button>
        <button onClick={reduceCount}>Reduce</button>
      </div>
    </div>
  );
}
