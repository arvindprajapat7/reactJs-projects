import React from 'react'
import styled from 'styled-components'


const RollCard = ({roll_data}) => {
    
const resetScore=()=>{
    roll_data.setScore(0)
}
  return (
    <>
        <Card className='card'>
            <img src={`../images/dice_${roll_data.rollDice}.png`} width={150} onClick={()=>roll_data.roleDice(1, 7)} />
            <p>Click on Dice to roll</p>
            <Button isOutline={true}  onClick={resetScore}>Reset Score</Button>
        </Card>
    </>
  )
}
const Card = styled.div`
    margin-top:50px;
    text-align:center;
    img{
        cursor:pointer;
    }
`
const  Button = styled.button`
    background:#000;
    padding:10px 50px;
    border-radius:5px;
    color:#fff;
    border:none;
    font-size:18px;
    text-transform:capitalize;
    cursor:pointer;
`
export default RollCard;