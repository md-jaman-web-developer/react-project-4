import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  slectectNumber,
  setSelectNumber,
}) => {
  const arry = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value) => {
    setSelectNumber(value);
    setError("");
  };
  console.log(slectectNumber);
  return (
    <Slect
      style={{ display: "flex", flexDirection: "column", alignItems: "end" }}
    >
      <p style={{ color: "red" }}>{error}</p>
      <div className="flex">
        {arry.map((value, i) => (
          <Box
            isSelected={value === slectectNumber}
            onClick={() => numberSelectorHandler(value)}
            key={i}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Selected Number</p>
    </Slect>
  );
};

export default NumberSelector;
const Slect = styled.div`
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
