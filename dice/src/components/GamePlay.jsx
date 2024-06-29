import React, {useState} from 'react'
import styled from 'styled-components'
import Score from './Score';
import SelectNumber from './SelectNumber';
import RollCard from './RollCard';
const GamePlay = () => {
    const [selected, setSelected] = useState();
    const [rollDice, setRollDice] = useState(1);
    const [score, setScore] = useState(0);
    const [error, setError] = useState(false)


    const roleDice = (min, max)=>{
        if(!selected){
            setError("sdfsdf")
            return ;
        } 
        setError('')
        const randomNumber = Math.floor(Math.random() * (max - min)) + min;
        setRollDice(randomNumber)
        if(selected === randomNumber){
            setScore((prev)=> prev + randomNumber)
        }else{
            setScore((prev)=> prev - 2)
        }
        setSelected(undefined)
        
    }
  return (
    <Wrapper>
        <div className='container'>
            <div className='row'>
                <Score score={score}/>            
                <SelectNumber select_data={{error, setError, selected, setSelected}}/>
            </div>
            <RollCard roll_data={{roleDice, setScore, selected, setSelected, rollDice, setRollDice, setError}}/>
        </div>
    </Wrapper> 
  )
}

const Wrapper = styled.section`
    .container{
        .row{
            display:flex;
            justify-content:space-between;
        }
        
        
    }
`;
export default GamePlay