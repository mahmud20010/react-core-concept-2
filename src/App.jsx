import "./App.css";
import Counter from "./Counter";
import Tasbih from "./Tasbih";
import Team from "./Team";
import UseState from "./UseState";
import Users from "./Users";
import Friends from "./Friends";

function App() {
  function clickButton() {
    alert("Button clicked");
  }

  const clickBtn2 = () => {
    alert("button 2 clicked");
  };

  const addFive = (num) => {
    alert(num + 8);
  };
  return (
    <>
      <h3>React Core concept part 2</h3>
      <Friends></Friends>
      <Users></Users>
      <UseState></UseState>
      <Team></Team>
      <Tasbih></Tasbih>
      <Counter></Counter>
      <button onClick={clickButton}>Click me</button>
      <button onClick={clickBtn2}>Click Button</button>
      <button
        onClick={function click() {
          alert("third button clicked");
        }}
      >
        click third
      </button>

      <button
        onClick={() => {
          alert("btn fourth clicked");
        }}
      >
        button fourth
      </button>

      <button onClick={() => addFive(5)}>fifth btn</button>
    </>
  );
}

export default App;
