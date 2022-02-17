import styled from "styled-components";

export const Container = styled.div`
.spinner {
    animation: is-rotating 1s infinite;
    border: 6px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: #cd933e;
    height: 50px;
    width: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
}
@keyframes is-rotating {
  to {
  transform: rotate(1turn);
  }
}
`