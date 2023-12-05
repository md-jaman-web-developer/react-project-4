import React from 'react'
import styled from 'styled-components'

const TotalScore = ({score}) => {
  return (
    <ScoreConyainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoreConyainer>
  )
}

export default TotalScore

const ScoreConyainer=styled.div`
max-width: 200px;
text-align: center;
/* color: goldenrod; */

h1{
      font-size: 100px;
        /* background: linear-gradient(to top,white, #ff9100, #f5f237);
  -webkit-background-clip: text;
  color: transparent; */

 }
 p{
    font-size: 24px;
    font-weight:500px;
 }
`;