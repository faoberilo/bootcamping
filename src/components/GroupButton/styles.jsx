import styled from "styled-components";

export const Edit = styled.div`
  button,
  button:hover,
  button:active,
  button:visited,
  button:focus {
    font-size: 1.5rem;
    color: black;
    text-decoration: none;
    background-color: transparent;
    border: none;
    :hover {
      color: rgb(205, 147, 62);
      cursor: pointer;
      transition: all 200ms ease;
      transform: scale(1.1);
    }
  }
`;
export const Del = styled.div`
  button,
  button:hover,
  button:active,
  button:visited,
  button:focus {
    font-size: 1.5rem;
    color: black;
    text-decoration: none;
    background-color: transparent;
    border: none;
    :hover {
      color: rgb(205, 147, 62);
      cursor: pointer;
      transition: all 200ms ease;
      transform: scale(1.1);
    }
  }
`;

export const GrupButtons = styled.div`
  display: flex;
  justify-content:center;
`;
