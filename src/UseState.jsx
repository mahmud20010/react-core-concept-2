import { useState } from "react";

const UseState = () => {
  const [count, setcount] = useState(0);

  //   adding with using a function
  const addCount = () => {
    const addNew = count + 1;
    setcount(addNew);
  };

  return (
    <div>
      <h2>Use State Count: {count} </h2>
      <button onClick={addCount}>Add Count</button>

      {/* removing with using handle function into the onclick */}
      <button onClick={() => {
        if (count ===0) {
            return alert('negative not allowed')
        }else{
            setcount(count - 1)
        }
      }}>Remove Count</button>
    </div>
  );
};

export default UseState;
