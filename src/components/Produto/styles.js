import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8rem;
  max-height: 20rem;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    border: none;
    border-radius: 10px;
    padding: 1rem;
  }
  p {
    align-items: left;
    text-align: left;
  }
`;

export const Conteudo = styled.div`
  display: flex;
`;
