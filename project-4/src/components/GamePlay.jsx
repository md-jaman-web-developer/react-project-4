import React, { useState } from "react";

import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../styled/button";

const GamePlay = () => {
  const [score, setScore] = useState("0");
  const [slectectNumber, setSelectNumber] = useState();
  const [currentDice, setCurrentDice] = useState("1");
  const [error, setError] = useState("");

  const generateRandomNumber = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomNumber);
    return randomNumber;
  };

  const rollDice = () => {
    if (!slectectNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 6);
    setCurrentDice(randomNumber);

    if (slectectNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - randomNumber);
    }
    setSelectNumber(undefined);
  };

  return (
    <Main>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          setError={setError}
          error={error}
          slectectNumber={slectectNumber}
          setSelectNumber={setSelectNumber}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutlineButton>Reset</OutlineButton>
        <Button style={{ whiteSpace: "nowrap" }}>show Rules </Button>
      </div>
    </Main>
  );
};

export default GamePlay;
const Main = styled.div`
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    margin-left: 40%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
