import { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import { useNavigate } from "react-router-dom";
import "react-responsive-modal/styles.css";
import "./styles";
import { Container, Form, Title } from "./styles";
import { BiPlusCircle } from "react-icons/bi";
import axios from "axios";
import TextField from '@mui/material/TextField';


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
    const codigo = evento.target.codigo.value;
    const nome = evento.target.nome.value;
    const descricao = evento.target.descricao.value;
    const colecao = evento.target.colecao.value;
    const grife = evento.target.grife.value;
    const preco1 = parseFloat(evento.target.preco1.value);
    const promocaodesconto = parseInt(evento.target.promocaodesconto.value);
    const precoliquido1 = parseFloat(evento.target.precoliquido1.value);
    const limitedesconto = parseInt(evento.target.limitedesconto.value);
    const disponivel = parseInt(evento.target.disponivel.value);

    const produto = {
      produto1: codigo,
      nome,
      descricao,
      colecao,
      grife,
      disponivel,
    };

    const produtopreco = {
      codigo: 13,
      produtoid: codigo,
      preco1,
      limitedesconto,
      promocaodesconto,
      precoliquido1,
    };

    axios.post("/produto", produto).then((response) => { 
      alert("Produto cadastrado com sucesso!!!");
    });

    setTimeout(()=>{
      axios.post("/produtosprecos", produtopreco)
      .then((response) => {
        alert("Preço cadastrado com sucesso!!!")
        navigate('/')})
      .catch((response)=>{
        axios.delete(`/produto/${produto.id}`)
        alert(response.message)
      })
    },1000);

  };

  const formatar = (evento)=> {
     
    var elemento = document.getElementById(evento.target.id);
    var valor = elemento.value;

    valor = valor + '';
    valor = parseFloat(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ".$1");

    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1.$2");
    }

    elemento.value = valor;
    if(valor === 'NaN') elemento.value = '';

}

  return (
    <Modal open={open} onClose={FechaModal} center showCloseIcon={false}>
      <Container>
        <div>
        <Title><BiPlusCircle/></Title>   
        <Title>Cadastro de Produto</Title>
        <button onClick={FechaModal}>X</button>
        </div>

        <Form onSubmit={handleSubmit}>
          <div>
            <TextField
              type="text"
              id="codigo"
              name="codigo"
              label="Código do Produto"
              required
            ></TextField>
          </div>
          <div>
            <label><b>Nome: </b> 
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              required
            ></input></label>
          </div>
          <div>
            <input
              type="text"
              id="descricao"
              name="descricao"
              placeholder="Descrição"
              required
            ></input>
          </div>
          <div>
            <input
              type="text"
              id="colecao"
              name="colecao"
              placeholder="Coleção"
              required
            ></input>
          </div>
          <div>
            <input
              type="text"
              id="grife"
              name="grife"
              placeholder="Grife"
              required
            ></input>
          </div>
          <div>
            <input
              type="text"
              id="preco1"
              name="preco1"
              placeholder="Preço Original"
              onKeyUp={formatar}
              maxlength="9"
              required
            ></input>
          </div>
          <div>
            <input
              type="number"
              id="promocaodesconto"
              name="promocaodesconto"
              placeholder="Porcentagem da promoção"
              min="1" 
              max="99"
              required
            ></input>
          </div>
          <div>
            <input
              type="text"
              id="precoliquido1"
              name="precoliquido1"
              placeholder="Preço com desconto"
              onKeyUp={formatar}
              maxlength="9"
              required
            ></input>
          </div>
          <div>
            <input
              type="number"
              id="limitedesconto"
              name="limitedesconto"
              placeholder="Limite de porcetagem desconto"
              min="1" 
              max="99"
              required
            ></input>
          </div>
          <div>
            <select id="disponivel" name="disponivel" required>
              <option value="" disabled selected hidden>
                Disponivel em estoque
              </option>
              <option id="sim" name="sim" value="1">
                Sim
              </option>
              <option id="não" name="não" value="0">
                Não
              </option>
            </select>
          </div>

          <div>
            <button type="submit">Enviar</button>
          </div>
        </Form>
      </Container>
    </Modal>
  );
};

export default ModalCadastroProduto;
