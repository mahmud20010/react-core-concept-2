import { useState } from "react";

const Tasbih = () => {
  const [count, setCount] = useState(0);
  const addCount = () => {
    if (count === 33) {
      return alert("Subhan Allah completed");
    }
    let newAdd = count + 1;
    setCount(newAdd);
  };

  const removeCount = () => {
    if (count === 0) {
      return alert("Negative not allowed");
    } else {
      const newRemove = count - 1;
      setCount(newRemove);
    }
  };
  return (
    <div
      style={{
        margin: "10px",
        backgroundColor: "purple",
        borderRadius: "10px",
        padding: "25px",
      }}
    >
      <h3>Subhan Allah: {count}</h3>
      <button onClick={addCount} style={{ margin: "15px" }}>
        Add
      </button>
      <button onClick={removeCount}>Remove</button>
    </div>
  );
};

export default Tasbih;
