import styled from "styled-components";

export const Container = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
        input{
            margin-top:.5rem;
            color: black;
            font-size: 1rem;
            outline: 0;
            border-width: 0 0 0.1rem;
            border-color: rgb(0,0,0);
            padding-left: 1rem;
            background-color: transparent;
            
        }
        input::placeholder {
        color: black;
        }
        button{
            font-size:1rem;
            color: black;
            border:none;
            background-color: transparent;
            align-items: center;
            cursor: pointer;
            padding-left: 0px;
        }    
    
`;