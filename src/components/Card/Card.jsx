import React from 'react';
import { Container } from "./styles";
import {useNavigate} from 'react-router-dom';

const Card = (props) => {

  const navigate = useNavigate();

  const vaParaProduto = () =>{
    navigate(`/produto/${props.id}`, {state: props.id})
  }
  
  return (
    <Container>
        <img src={props.image} alt={props.imageAlt} onClick={vaParaProduto}/>       
    </Container>
             
  )
} 

export default Card