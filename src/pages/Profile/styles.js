import styled from "styled-components";

export const Container = styled.div`
display:flex;
justify-content: center;
    div{
        display:flex;
        align-items: center;
        background-color:rgba(205, 147, 62,0.3);
        margin-top:1rem;
        border:none;
        border-radius: 10px;
        padding:0.5rem;
        
              
    }
    h2{
        margin-right:1rem;
    }
    button {
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
    padding: 10px 20px 10px 20px;
    border: solid #000 1px;
    text-decoration: none;
  }

  button:hover {
    background: #9d9d9c;
    background-image: -webkit-linear-gradient(top, #9d9d9c, #cd933e);
    background-image: -moz-linear-gradient(top, #9d9d9c, #cd933e);
    background-image: -ms-linear-gradient(top, #9d9d9c, #cd933e);
    background-image: -o-linear-gradient(top, #9d9d9c, #cd933e);
    background-image: linear-gradient(to bottom, #9d9d9c, #cd933e);

    transition: all 200ms ease;
    transform: scale(1.1);
    text-decoration: none;
  }
    
`;