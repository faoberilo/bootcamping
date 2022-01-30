import styled from "styled-components";

export const Container = styled.div`
    background-color: rgb(205,147,62);
    display: flex;
    justify-content: space-between;
    margin-top: 0px;
    padding: 0.5rem;
    align-items: center;

    button{ 
            font-size: 1rem;
            border-style: none;
            padding: 0.5rem 1.5rem;
            border-radius: 1rem;
            background-color: rgb(157,157,156);
            width: fit-content;
            cursor:pointer;
            .a,
            a:hover,
            a:active,
            a:visited,
            a:focus {
                color:black;
                text-decoration: none;
            }
    } 
    input[type='file'] {
    display: none;
    }
    label {
        font-size: 1rem;
        border-style: none;
        padding: 0.5rem 1.5rem;
        border-radius: 1rem;
        background-color: rgb(157,157,156);
        width: fit-content;
        cursor: pointer;     
    }

    
    
    
`