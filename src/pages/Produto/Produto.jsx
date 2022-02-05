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
  useEffect(() => {
    getProdutoById();
  }, []);

  const { id } = useParams();

  const getProdutoById = async () => {
    const request = await axios.get(`/produto/${id}`);
    const produto = request.data;
    setProduto(produto);
  };

  return (
    <Container>
      <Card sx={{ maxWidth: 545 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {produto.nome}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Conteudo>
                <p> Descrição: {produto.descricao}</p>
                <p> Coleção: {produto.colecao}</p>
                <p> Grife: {produto.grife}</p>
                <p> Categoria: {produto.categoria}</p>
                <p> Preço: {produto.preco}</p>
              </Conteudo>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
