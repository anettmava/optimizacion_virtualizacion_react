import { useState } from "react";
import "./App.css";
import HijoA from "./components/HijoA";
import HijoB from "./components/HijoB";
import HijoC from "./components/HijoC";

function MemoExercise() {
  const [contador, setContador] = useState(0);

  console.log("Render memoExercise");

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>

      <HijoA />
      <HijoB />
      <HijoC />
    </div>
  );
}

export default MemoExercise;