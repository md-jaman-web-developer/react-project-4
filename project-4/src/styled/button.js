import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 220px;
  padding: 10px 80px;
  border: none;
  border-radius: 5px;
  background: #000;
  color: white;
  cursor: pointer;
  border: 2px solid transparent;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: #fff8f8;
    border: 2px solid black;
    color: #000;
    transition: 0.3s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 2px solid transparent;
    color: white;
  }
`;
