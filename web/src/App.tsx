import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

export default function App() {
  const [display, setDisplay] = useState("");

  const append = (v: string) => setDisplay((prev) => prev + v);
  const clear = () => setDisplay("");
  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setDisplay(String(eval(display)));
    } catch {
      setDisplay("Erro");
    }
  };

  const buttons = [
    "7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"
  ];

  return (
    <div className="calculator">
      <input className="display" value={display} readOnly />
      <div className="buttons">
        {buttons.map((v) =>
          v === "=" ? (
            <Button key={v} label={v} onClick={calculate} />
          ) : (
            <Button key={v} label={v} onClick={() => append(v)} />
          )
        )}
        <Button label="C" onClick={clear} wide />
      </div>
    </div>
  );
}
