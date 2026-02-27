import { useState } from 'react'
import './App.css'
import HijoA from './components/HijoA'
import HijoB from './components/HijoB'
import HijoC from './components/HijoC'

function PokemonExcercise() {
  const [contador, setContador] = useState(0);
 
  console.log("Render App");

  return (
      <div>
        <h1>AQUI VAN LOS POKEMONES</h1>
        <h2>Contador: {contador}</h2>
          <button onClick={() => setContador(contador+1)}>
            Incrementar
          </button>

          <HijoA/>
          <HijoB/>
          <HijoC/>
      </div>
  )
}

export default PokemonExcercise