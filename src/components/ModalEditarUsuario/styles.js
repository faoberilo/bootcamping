import styled from "styled-components";

export const Container = styled.div`
  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 0.01rem;
    button {
      font-size: 1rem;
      font-weight: bolder;
      background: transparent;
      border: none;
    }
    button:hover {
      color: #cd933e;
      transition: all 200ms ease;
      transform: scale(1.2);
      text-decoration: none;
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 0.5rem;
  display: flex;
  text-align: center;
  justify-content: center;
`;
export const Form = styled.form`
  div {
    display: flex;
    justify-content: center;
    button {
      background: transparent;
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
      font-size: 1rem;
      padding: 10px 20px 10px 20px;
      border: solid #000 1px;
      text-decoration: none;
      margin-top: 0.5rem;
    }
    button:hover {
      color: black;
      background: #9d9d9c;
      background-image: -webkit-linear-gradient(top, #9d9d9c, #cd933e);
      background-image: -moz-linear-gradient(top, #9d9d9c, #cd933e);
      background-image: -ms-linear-gradient(top, #9d9d9c, #cd933e);
      background-image: -o-linear-gradient(top, #9d9d9c, #cd933e);
      background-image: linear-gradient(to bottom, #9d9d9c, #cd933e);
      cursor:pointer;
      transition: all 200ms ease;
      transform: scale(1.1);
      text-decoration: none;
    }
  }
`;
