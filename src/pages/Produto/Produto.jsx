import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Container, Conteudo } from "./styles";

export default function Produto(props) {
  const [produto, setProduto] = useState({});
  const [preco, setPreco] = useState({});

  useEffect(() => {
    getProdutoById();
    getPrecoById();
  }, []);

  const { id } = useParams();

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

  const getPrecoById = async () => {
    const request = await axios.get(`/produtosprecos/${id}`);
    const preco = request.data;
    setPreco(preco);
  };

  return (
    <Modal>
      <Container>
        <Card sx={{ maxWidth: 745 }}>
          <CardActionArea>
            <CardContent>
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
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </Modal>
  );
}
