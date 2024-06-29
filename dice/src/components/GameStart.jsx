import React from 'react'
import styled from 'styled-components'

const GameStart = ({gamePlay}) => {
  return (
    <Wrapper>
        <div className='container'>
            <div className='diceImg'>
                <img src='images/dices.png'/>
            </div>
            <div className='content'>
                <h3>dice game</h3>
                <Button onClick={gamePlay}> Play Now </Button>
                
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    min-height:100vh;
    display:flex;
    align-items:center;
    .container{
        padding:0px 10px;
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .diceImg{
            text-align:center;
            width:60%;
            img{
                max-width:550px;
            }
        }
        .content{
            width:40%;
            text-align:right;
            h3{
                font-size:5rem;
                font-weight:700;
                text-transform:uppercase;   
                margin:0;
            }
        }
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
export default GameStart