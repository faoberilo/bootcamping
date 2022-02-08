import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  display: flex;
  justify-content: space-between;
  margin-top: 0;
  padding: 0.5rem;
  align-items: center;

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
    margin-left: 10px;
    cursor: pointer;
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
  input[type="file"] {
    display: none;
  }
  label {
    font-size: 1rem;
    border-style: none;
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;
    background-color: rgb(157, 157, 156);
    width: fit-content;
    cursor: pointer;
  }
  a:link,
  a:visited {
    color: #000;
  }
`;
