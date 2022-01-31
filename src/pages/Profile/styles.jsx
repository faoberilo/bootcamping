import styled from "styled-components";

export const Container = styled.div`
display:flex;
justify-content: center;
    div{
        display:flex;
        flex-direction: column;
        align-items: center;
        background-color:rgba(205, 147, 62,0.3);
        margin-top:10rem;
        border:none;
        border-radius: 10px;
        padding: 1rem;
      
    }
    h1{
        margin-top:1rem;
    }
    button{ 
            font-size: 1.5rem;
            border-style: none;
            padding: 0.5rem 1.5rem;
            border-radius: 1rem;
            background-color: rgb(157,157,156);
            width: fit-content;
            margin-top:1rem;
            &:hover {
                cursor: pointer;
                transition: all 200ms ease;
                transform: scale(1.1);
                color:black;
                background-color: rgb(205,147,62);
            } 
      
    
`;