import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Modal from "react-responsive-modal";
import { Container, Conteudo } from "./styles";
import Typography from "@mui/material/Typography";

const ModalDetalhesProduto = ({ onClose = () => {}, Children }) => {
  const [produto, setProduto] = useState({});
  const [preco, setPreco] = useState({});

  useEffect(() => {
    getProdutoById();
    getPrecoById();
  }, []);
  const [open, setOpen] = useState(false);

  const AbreModal = () => setOpen(true);

  useEffect(() => {
    AbreModal();
  }, []);

  const id = localStorage.getItem("idEditar");

  const getProdutoById = async () => {
    const request = await axios.get(`/produto/${id}`);
    var produto = request.data;
    if (produto.disponivel === 1) {
      produto.disponivel = "Sim";
    } else {
      produto.disponivel = "Não";
    }

    setProduto(produto);
  };
  console.log(produto);
  const getPrecoById = async () => {
    const request = await axios.get(`/produtosprecos/${id}`);
    const preco = request.data;
    setPreco(preco);
  };
  return (
    <Modal open={open} onClose={onClose} center showCloseIcon={true}>
      <Container>
        <Typography gutterBottom variant="h4" component="div">
          {produto.nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Conteudo>
            <p> Código do Produto: {produto.produto1} </p>
            <p> Descrição: {produto.descricao}</p>
            <p> Coleção: {produto.colecao}</p>
            <p> Grife: {produto.grife}</p>
            <p> Preço Original: R${preco.preco1}</p>
            <p> Porcentagem da promoção: {preco.promocaodesconto}%</p>
            <p> Preço Com Desconto: R${preco.precoliquido1}</p>
            <p> Limite de desconto: {preco.limitedesconto}%</p>
            <p> Disponivel em estoque: {produto.disponivel}</p>
          </Conteudo>
        </Typography>
      </Container>
    </Modal>
  );
};

export default ModalDetalhesProduto;
