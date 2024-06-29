import React from 'react'
import styled from 'styled-components'
const Button = ({text, ...remaing}) => {
  return (
    <Button1 isOutline={remaing.isOutline}>{text}</Button1>
)
}

const  Button1 = styled.button`
  background: ${props => (props.isOutline ? 'white' : 'black')};
  color: ${props => (props.isOutline ? 'black' : 'white')};
    border:1px solid #000;
    padding:10px 50px;
    border-radius:5px;
    font-size:18px;
    text-transform:capitalize;
    cursor:pointer;
`
export default Button