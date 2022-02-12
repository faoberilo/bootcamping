import styled from "styled-components";

export const Container = styled.div`
  h1 {
    margin-top: 1rem;
    text-align: center;
    font-size: 35px;
  }
  p {
    margin-top: 1rem;
    margin-right: 4rem;
    margin-left: 4rem;
    justify-content: center;
    align: justify;
  }
  h2 {
    margin-top: 1rem;
    text-align: center;
    font-size: 35px;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 1rem;
  margin-top: 3rem;
  align-items: center;
  .MuiTypography-h5 {
    text-align: center;
  }
  .body2 {
    text-align: center;
  }
  .MuiCardActions-root {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const CardIcons = styled.div``;

export const Tech = styled.div`
  margin-top: 5rem;
`;
export const TechIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 1rem;
  align-items: center;
`;

export const Icons = styled.div``;
