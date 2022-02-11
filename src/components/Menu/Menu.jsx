import React from "react";
import { Container } from "./styles";
import FileInput from "../File/file";
import ModalCadastroProduto from "../ModalCadastroProduto/ModalCadastroProduto";
import ModalCadastro from "../ModalCadastro/ModalCadastro"

// import { AiOutlinePlus } from "react-icons/ai";

export default function Menu() {

  const [isModalVisible, setisModalVisible] = React.useState(false)
  const [isModalVisible1, setisModalVisible1] = React.useState(false)

  if(localStorage.getItem('tipo')==='2'){
    return (    
      <Container>
        <div>
        
          <button type="button" onClick={() => setisModalVisible(true)}> Cadastrar Produto </button>
          {isModalVisible ? (<ModalCadastroProduto onClose={() => { setisModalVisible(false) }}/>): null}
       
          <button type="button" onClick={() => setisModalVisible1(true)}> Criar usuário</button>
          {isModalVisible1 ? (<ModalCadastro onClose={() => { setisModalVisible1(false) }}/>): null}
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
