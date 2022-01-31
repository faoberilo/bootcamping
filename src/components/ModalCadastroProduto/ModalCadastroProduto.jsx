import { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import { useNavigate } from "react-router-dom";
import "react-responsive-modal/styles.css";
import "./styles";
import { Container, Form, Title } from "./styles";
import { BiPlusCircle } from "react-icons/bi";
import axios from 'axios';


const ModalCadastroProduto = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const AbreModal = () => setOpen(true);
  const FechaModal = () => {
    setOpen(false);
    navigate("/admin");
  };

  useEffect(() => {
    AbreModal();
  }, []);

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const codigo=evento.target.codigo.value;
    const nome=evento.target.nome.value;
    const descricao=evento.target.descricao.value;
    const categoria=evento.target.categoria.value;
    const preco1=evento.target.preco1.value;
    const promocaodesconto=evento.target.promocaodesconto.value;
    const precoliquido1=evento.target.precoliquido1.value;
    const disponivel=evento.target.disponivel.value;

    const produto = {
        codigo,
        nome,
        descricao,
        categoria,
        preco1,
        promocaodesconto,
        precoliquido1,
        disponivel     
    }

    const produto1 = {
      produto: nome,
      nome,
      descricao,
      colecao: categoria,
      grife: categoria,
      disponivel
    }
    console.log(produto);
    console.log(produto1);

    axios.post('/produto', produto1)
        .then((response)=>{
            alert('Produto cadastrado com sucesso!!!');
            navigate('/');
        });

    
  }

  return (
    <Modal open={open} onClose={FechaModal} center showCloseIcon={false}>
      <Container>
        <Title><BiPlusCircle />Cadastro de Produto</Title>
        
          <Form onSubmit={handleSubmit}>
          <div className="input_field">
            <input type="number" className="input" id="codigo" name="codigo" placeholder="Código" required></input>
          </div>
          <div className="input_field">
            <input type="text" className="input" id="nome" name="nome" placeholder="Nome" required></input>
          </div>
          <div className="input_field">
            <input type="text" className="input" id="descricao" name="descricao" placeholder="Descrição" required></input>
          </div>
          <div className="input_field">
            <input type="text" className="input" id="categoria" name="categoria" placeholder="Categoria"></input>
          </div>
          <div className="input_field">
            <input type="number" className="input" id="preco1" name="preco1" placeholder="Preço Original"></input>
          </div>
          <div className="input_field">
            <input type="number" className="input" id="promocaodesconto" name="promocaodesconto" placeholder="Porcetagem de desconto"></input>
          </div>
          <div className="input_field">
            <input type="number" className="input" id="precoliquido1" name="precoliquido1" placeholder="Preço com desconto"></input>
          </div>
          <div className="input_field">
            <input type="boolean" className="input" id="disponivel" name="disponivel" placeholder="Disponivel em estoque"></input>
          </div>
          <div className="input_field">
            <button type="submit" >Enviar</button>
          </div>
          </Form>
        
      </Container>
    </Modal>
  );
};

export default ModalCadastroProduto;
