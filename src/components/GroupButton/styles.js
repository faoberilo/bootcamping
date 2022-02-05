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
  justify-content: center;
`;

export const Style = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 5px;
  box-shadow: 24;
  padding: 1rem;
  Button {
    margin-top: 1rem;
    margin-right: 0.5rem;
  }
`;

export const Confirm = styled.div`
  display: flex;
  justify-content: center;
`;

export const Detalhe = styled.div`
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
