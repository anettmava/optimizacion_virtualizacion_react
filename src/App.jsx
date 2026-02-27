import { Routes, Route, useNavigate } from "react-router-dom";
import MemoExercise from "./MemoExercise";
import PokemonExercise from "./PokemonExercise";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/memo")}>Memo</button>
      <button onClick={() => navigate("/pokemon")}>Pokemon</button>

      <Routes>
        <Route path="/memo" element={<MemoExercise />} />
        <Route path="/pokemon" element={<PokemonExercise />} />
      </Routes>
    </>
  );
}

export default App;