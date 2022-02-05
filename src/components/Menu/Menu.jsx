import React from "react";
import { Container } from "./styles";
import FileInput from "../File/file";
// import ModalCadastroProduto from "../ModalCadastroProduto/ModalCadastroProduto";
// import { AiOutlinePlus } from "react-icons/ai";

export default function Menu() {

  if(localStorage.getItem('tipo')==='2'){
    return (    
      <Container>
        <div>
          <button>
            <a href="/registerproduct">Cadastrar Produto</a>
          </button>
          <button>
            <a href="/register">Criar Usuário</a>
          </button>
        </div>
        <FileInput />
      </Container>
    );} else{
       return (    
    <Container>
      <div>
        <button>
          <a href="/registerproduct">Cadastrar Produto</a>
        </button>
      </div>
      <FileInput />
    </Container>
  );
    }

  }
