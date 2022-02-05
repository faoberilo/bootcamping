import styled from "styled-components";

export const Container = styled.div`
  h1 {
    margin-top: 1rem;
    text-align: center;
    font-size: 35px;
  }
  p {
    margin-top: 1rem;
    margin-right: 2rem;
    margin-left: 2rem;
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

export const CardIcons = styled.div`
  /* margin-left: 30%;
  margin-right: 40%; */
`;

export const Tech = styled.div``;
export const TechIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  align-items: center;
`;

export const Icons = styled.div``;
