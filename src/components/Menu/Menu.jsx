import React from "react";
import { Container } from "./styles";
import FileInput from '../File/file';

export default function Menu(){
    return(
        <Container>
            <button ><a href="/registerproduct">Adicionar produto</a></button>
            <FileInput/>
        </Container>
    )
}