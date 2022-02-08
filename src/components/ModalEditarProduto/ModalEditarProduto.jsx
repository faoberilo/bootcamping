import { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import { useNavigate, useParams } from "react-router-dom";
import "react-responsive-modal/styles.css";
import "./styles";
import { Container, Form, Title } from "./styles";
import { BiEdit } from "react-icons/bi";
import axios from 'axios';


const ModalEditarProduto = () => {
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

  const [produto,setProduto]=useState({});
  const [preco,setPreco]=useState({});

    useEffect(()=>{
        getProdutoById();
    }, []);

    useEffect(()=>{
      getPrecoById();
  }, []);

    const { id } = useParams();

    const getProdutoById = async () => {
        const request = await axios.get(`/produto/${id}`);
        const produto = request.data;
        setProduto(produto);
      } 

    const getPrecoById = async () => {
        const request = await axios.get(`/produtosprecos/${id}`);
        const preco = request.data;
        setPreco(preco);
      }
    const handleFieldsChange = (evento) => {
        const campos = { ...produto}          
        campos[evento.target.name] = evento.target.value;    
        setProduto(campos);        
      } 
      const handleFieldsChange1 = (evento) => {
        const campos = { ...preco}          
        campos[evento.target.name] = evento.target.value;    
        setPreco(campos);        
      }
      
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
    axios.patch(`/produto/${id}`, produto)
        .then((response)=>{
            alert('Produto editado com sucesso!!!');
        });   

        setTimeout(()=>{
          axios.patch(`/produtosprecos/${id}`, produtopreco)
          .then((response) => {
            alert("Preço editado com sucesso!!!")
            navigate('/')})
        },1000);
    
    
    
  }

  return (
    <Modal open={open} onClose={FechaModal} center showCloseIcon={false}>
      <Container>
        <div>
        <Title><BiEdit/></Title>
          <Title>Edição de Produto</Title>
          <button onClick={FechaModal}>X</button>
        </div>    
      <Form onSubmit={handleSubmit}>
          <div>
            <input type="text"  id="codigo" name="produto1" placeholder="Código" onChange={handleFieldsChange} value={produto.produto1} required></input>
          </div>
          <div>
            <input type="text"  id="nome" name="nome" placeholder="Nome" onChange={handleFieldsChange} value={produto.nome} required></input>
          </div>
          <div>
            <input type="text"  id="descricao" name="descricao" placeholder="Descrição"  onChange={handleFieldsChange} value={produto.descricao} required></input>
          </div>
          <div>
            <input type="text"  id="categoria" name="colecao" placeholder="Categoria" onChange={handleFieldsChange} value={produto.colecao} required></input>
          </div>
          <div>
            <input type="text"  id="grife" name="grife" placeholder="Grife" onChange={handleFieldsChange} value={produto.grife} required></input>
          </div>
          <div >
            <input 
              type="text"  
              id="preco1" 
              name="preco1" 
              placeholder="Preço Original" 
              onChange={handleFieldsChange1}
              onKeyUp={formatar}
              maxlength="9" 
              value={preco.preco1}></input>
          </div>
          <div >
            <input 
              type="number"  
              id="promocaodesconto" 
              name="promocaodesconto" 
              placeholder="Porcetagem de desconto"  
              onChange={handleFieldsChange1} 
              min="1" 
              max="99"
              value={preco.promocaodesconto}></input>
          </div>
          <div >
            <input 
              type="text"  
              id="precoliquido1" 
              name="precoliquido1" 
              placeholder="Preço com desconto"  
              onChange={handleFieldsChange1}
              onKeyUp={formatar}
              maxlength="9"
              value={preco.precoliquido1}></input>
          </div>
          <div >
            <input 
              type="number"  
              id="limitedesconto" 
              name="limitedesconto" 
              placeholder="Limite de desconto"  
              onChange={handleFieldsChange1}
              min="1" 
              max="99" 
              value={preco.limitedesconto}></input>
          </div>
          <div>
            <select id="disponivel" name="disponivel">
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
            <button type="submit" >Enviar</button>
          </div>
          </Form>
        
      </Container>
    </Modal>
  );
};

export default ModalEditarProduto;
