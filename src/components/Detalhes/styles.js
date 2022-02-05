import styled from "styled-components";

export const Detalhe = styled.div`
            button,
            button:hover,
            button:active,
            button:visited,
            button:focus {
                font-size:1.5rem;
                color:black;
                text-decoration: none;
                background-color: transparent;
                border:none;
                :hover {
                    color: rgb(205,147,62);
                    cursor: pointer;
                    transition: all 200ms ease;
                    transform: scale(1.1);
                }
            }
`;