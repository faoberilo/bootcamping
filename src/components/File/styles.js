import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  color:#fff;
  align-items: center;
  p{
    font-size: 13px;
  }
  form {
    font-size: 13px;
    display: flex;
    background:transparent;
    align-items: center;
    margin-right:1rem;
  }
  label {
    background: #9d9d9c;
    background-image: -webkit-linear-gradient(top, #9d9d9c, #9d9d9c);
    background-image: -moz-linear-gradient(top, #9d9d9c, #9d9d9c);
    background-image: -ms-linear-gradient(top, #9d9d9c, #9d9d9c);
    background-image: -o-linear-gradient(top, #9d9d9c, #9d9d9c);
    background-image: linear-gradient(to bottom, #9d9d9c, #9d9d9c);
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 28px;
    font-family: Arial;
    color: #000;
    font-size: 13px;
    padding: 0.2rem;
    border: solid #000 1px;
    text-decoration: none;
    margin:0.1rem;
  }
  label:hover {
    background: #9d9d9c;
    background-image: -webkit-linear-gradient(top, #9d9d9c, #cd933e);
    background-image: -moz-linear-gradient(top, #9d9d9c, #cd933e);
    background-image: -ms-linear-gradient(top, #9d9d9c, #cd933e);
    background-image: -o-linear-gradient(top, #9d9d9c, #cd933e);
    background-image: linear-gradient(to bottom, #9d9d9c, #cd933e);
    text-decoration: none;
    transition: all 200ms ease;
    transform: scale(1.1);
  }
  
  
`;