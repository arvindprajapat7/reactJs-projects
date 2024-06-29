import { useState } from "react"
import GameStart from "./components/GameStart"
import GamePlay from "./components/GamePlay"

function App() {
  const [isGamerStarted, setIsGameStarted] = useState(false)

  const gameStart = ()=>{
    setIsGameStarted((prev)=> !prev);
  }

  return (
    <>{
      isGamerStarted ? <GamePlay /> : <GameStart gamePlay={gameStart}/>
    }
     
    </>
  )
}

export default App
