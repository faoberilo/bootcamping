import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
export const Form = styled.form`
  margin: 1rem;

  input,
  select {
    width: 30rem;
    padding: 1rem;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    border-radius: 1rem;
    border-style: solid;
    border-color: black;
  }

  div {
    display: flex;
    justify-content: center;
    button {
      font-size: 1.5rem;
      border-style: none;
      padding: 0.5rem 1.5rem;
      border-radius: 1rem;
      background-color: rgb(157, 157, 156);
      width: fit-content;
      &:hover {
        cursor: pointer;
        transition: all 200ms ease;
        transform: scale(1.1);
      }
    }
  }
`;
