import React from 'react'
import styled from 'styled-components'

const Score = ({score}) => {
  return (
    <ScoreCard>
    <div className='score'>
        <h4>{score}</h4>
        <p>Total Score</p>
    </div>
    </ScoreCard>
  )
}

const ScoreCard = styled.div`
    .score{
            text-align:center;

            h4{
                font-size:3rem;
                margin:0;
            }
            p{
                font-size:18px;
                font-weight:500;
                margin:0;
            }
        }
`

export default Score