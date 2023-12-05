// import React from 'react'

import { useState } from "react";
import styled from "styled-components";
import { Button } from "../styled/button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="" />
      </div>
      <div>
        <h1 style={{ fontSize: "90px", whiteSpace: "nowrap" }}>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
`;
