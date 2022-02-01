import React from "react";
import { Container } from "./styles";
import FileInput from "../File/file";
import ModalCadastroProduto from "../ModalCadastroProduto/ModalCadastroProduto";
import { AiOutlinePlus } from "react-icons/ai";
export default function Menu() {
  return (
    <Container>
      <button onClick={<ModalCadastroProduto />}>
        {/* <AiOutlinePlus /> */}Cadastrar Produto
      </button>
      <FileInput />
    </Container>
  );
}
