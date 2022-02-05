import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items: center;
    img{
        width:10rem;
        height:10rem;
        object-fit: cover;
        border: solid;
        border-color: #000000;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        text-align: center;
        font-family: arial;
        margin: 0.5rem;
        :hover {
        cursor: pointer;
        transition: all 500ms ease;
        transform: scale(1.1);
        border-color: rgb(205,147,62);
    }
    }
    `;