import React, { useState } from "react";

import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

const App = () => {
  const [isGameStarted, setisGameStarted] = useState(false);

  const toggleGamePLay = () => {
    setisGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePLay} />}</>
  );
};

export default App;
