import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    `;

export const Title = styled.h1`
    display:flex;
    align-items:center;
    margin-bottom:.5rem;
    `;
export const Form = styled.form`
    margin: .5rem;

    input{
        width: 30rem;
          padding: .8rem;
          font-size: 1rem;
          margin-bottom: .8rem;
          border-radius: .8rem;
          border-style: solid;
          border-color: black;
    }
    div{
            display: flex;
            justify-content: center;
    button{
        font-size: 1.3rem;
        border-style: none;
        padding: 0.5rem 1.5rem;
        border-radius: 1rem;
        background-color: rgb(157,157,156);
        width: fit-content;
        &:hover {
            cursor: pointer;
            transition: all 200ms ease;
            transform: scale(1.1);
        }
    }}`;
