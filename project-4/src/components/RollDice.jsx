// import React from 'react';
import styled from 'styled-components';

const RollDice = (props) => {
  const { currentDice, rollDice } = props;

  return (
    <Dice>
      <div className='dice' onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </Dice>
  );
};

export default RollDice;

const Dice = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice img {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
