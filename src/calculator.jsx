import {useState} from "react";
import "./calculator.css";
function Calculator() {
  const [input, setInput] = useState("");
  const click=(value) => {
    setInput(input + value);
  };
  const clear = () => {
    setInput("");
  } 
  const del=() => {
    setInput(input.slice(0, -1));
  }
  const equal = () => {
    setInput(eval(input).toString());
  }
  return (
    <div id="container">
      <div id="calculator">
        <input type="text" id="display" value={input} />
        <div id="buttons">
          <button class="orange" onClick={clear}>
            C
          </button>
          <button id="del" onClick={del}>
            &#9003;
          </button>
          <button class="orange" onClick={() => click("%")}>
            %
          </button>
          <button class="orange" onClick={() => click("/")}>
            /
          </button>
          <button onClick={() => click("7")}>7</button>
          <button onClick={() => click("8")}>8</button>
          <button onClick={() => click("9")}>9</button>
          <button class="orange" onClick={() => click("X")}>
            X
          </button>
          <button onClick={() => click("4")}>4</button>
          <button onClick={() => click("5")}>5</button>
          <button onClick={() => click("6")}>6</button>
          <button class="orange" onClick={() => click("-")}>
            -
          </button>
          <button onClick={() => click("1")}>1</button>
          <button onClick={() => click("2")}>2</button>
          <button onClick={() => click("3")}>3</button>
          <button class="orange" onClick={() => click("+")}>
            +
          </button>
          <button id="zero" onClick={() => click("0")}>
            0
          </button>
          <button onClick={() => click(".")}>.</button>
          <button id="equals" onClick={equal}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
