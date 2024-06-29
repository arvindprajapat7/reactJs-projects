import React, { useState } from 'react'
import styled from 'styled-components'

const SelectNumber = ({select_data}) => {
    const num = [1,2,3,4,5,6];

    const numberHandle=(value)=>{
        select_data.setSelected(value);
        select_data.setError('')
    }
  return (
    <NumberWrapper>
        <div className='selectNumber'>
            {select_data.error ? select_data.error: null}
            <ul>
                {
                    num.map((value, index)=> <li style={{background:select_data.selected === value ? 'black' : 'white', color:select_data.selected===value?'white':'black'}}  onClick={()=>numberHandle(value)} key={index}>{value}</li>)
                }
            </ul>
            <p>Select Number</p>
        </div>
    </NumberWrapper>
  )
}

const NumberWrapper = styled.div`
    .selectNumber{
            text-align:right;
            ul{
                display:flex;
                list-style:none;

                li{
                    width:40px;
                    height:40px;
                    display:grid;
                    place-items:center;
                    border:1px solid #000;
                    margin-left:10px;
                    font-weight:bold;
                    cursor:pointer;
                    background:${(props)=>(props.isSelected ? 'black' : 'white')}
                }
            }
            p{
                font-size:18px;
                font-weight:600;
                margin:0;
            }
        }
`
export default SelectNumber