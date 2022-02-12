import React, { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./styles";
import { Container, Form, Title } from "./styles";
import { BiEdit } from "react-icons/bi";
import axios from "axios";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { useLocation, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
      contrastText: "#fff",
    },
  },
});

const ModalEditarProduto = ({ onClose = () => {}, Children }) => {
  const [open, setOpen] = useState(false);

  const AbreModal = () => setOpen(true);

  useEffect(() => {
    AbreModal();
  }, []);

  const [produto, setProduto] = useState({});
  const [preco, setPreco] = useState({});

  useEffect(() => {
    getProdutoById();
  }, []);

  useEffect(() => {
    getPrecoById();
  }, []);

  const id = localStorage.getItem("idEditar");

  const getProdutoById = async () => {
    const request = await axios.get(`/produto/${id}`);
    const produto = request.data;
    setProduto(produto);
  };

  const getPrecoById = async () => {
    const request = await axios.get(`/produtosprecos/${id}`);
    const preco = request.data;
    setPreco(preco);
  };
  const handleFieldsChange = (evento) => {
    const campos = { ...produto };
    campos[evento.target.name] = evento.target.value;
    setProduto(campos);
  };
  const handleFieldsChange1 = (evento) => {
    const campos = { ...preco };
    campos[evento.target.name] = evento.target.value;
    setPreco(campos);
  };

  const navigate = useNavigate();
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
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
    const disponivel = parseInt(disp);

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
    axios.patch(`/produto/${id}`, produto).then((response) => {});

    setTimeout(() => {
      axios.patch(`/produtosprecos/${id}`, produtopreco).then((response) => {
        onClose();
        navigate("/admin", {
          state: { message: "Produto editado com sucesso!!!", type: "success" },
        });
        document.location.reload(true);
      });
    }, 1000);
  };

  const [disp, setDisp] = React.useState("");
  const handleChange = (event) => {
    setDisp(event.target.value);
  };

  const inputLabelProps = {
    style: { fontSize: 15 },
    shrink: true,
  };

  const inputProps = {
    step: 0.01,
  };

  return (
    <Modal open={open} onClose={onClose} center showCloseIcon={true}>
      <Container>
        <Title>
          <BiEdit />
          Edição de Produto
        </Title>

        <Form onSubmit={handleSubmit}>
          <div>
            <TextField
              type="text"
              id="codigo"
              name="codigo"
              label="Código do Produto"
              margin="normal"
              InputLabelProps={inputLabelProps}
              onChange={handleFieldsChange}
              defaultValue={produto.produto1}
              value={produto.produto1}
              required
            ></TextField>
          </div>
          <div>
            <TextField
              type="text"
              id="nome"
              name="nome"
              label="Nome do Produto"
              margin="normal"
              InputLabelProps={inputLabelProps}
              onChange={handleFieldsChange}
              value={produto.nome}
              required
            ></TextField>
          </div>
          <div>
            <TextField
              type="text"
              id="descricao"
              name="descricao"
              label="Descrição do Produto"
              margin="normal"
              InputLabelProps={inputLabelProps}
              onChange={handleFieldsChange}
              value={produto.descricao}
              required
            ></TextField>
          </div>
          <div>
            <TextField
              type="text"
              id="colecao"
              name="colecao"
              label="Coleção"
              margin="normal"
              InputLabelProps={inputLabelProps}
              onChange={handleFieldsChange}
              value={produto.colecao}
              required
            ></TextField>
          </div>
          <div>
            <TextField
              type="text"
              id="grife"
              name="grife"
              label="Grife"
              margin="normal"
              InputLabelProps={inputLabelProps}
              onChange={handleFieldsChange}
              value={produto.grife}
              required
            ></TextField>
          </div>
          <div>
            <div>
              <TextField
                type="number"
                id="preco1"
                name="preco1"
                label="Preço Original"
                margin="normal"
                InputLabelProps={inputLabelProps}
                onChange={handleFieldsChange1}
                inputProps={inputProps}
                value={preco.preco1}
                required
              ></TextField>
            </div>
            <div>
              <TextField
                type="number"
                id="promocaodesconto"
                name="promocaodesconto"
                label="Porcentagem da promoção"
                margin="normal"
                InputLabelProps={inputLabelProps}
                onChange={handleFieldsChange1}
                value={preco.promocaodesconto}
                min="1"
                max="99"
                required
              ></TextField>
            </div>
          </div>
          <div>
            <div>
              <TextField
                type="number"
                id="precoliquido1"
                name="precoliquido1"
                label="Preço com desconto"
                margin="normal"
                InputLabelProps={inputLabelProps}
                inputProps={inputProps}
                onChange={handleFieldsChange1}
                value={preco.precoliquido1}
                maxlength="9"
                required
              ></TextField>
            </div>
            <div>
              <TextField
                type="number"
                id="limitedesconto"
                name="limitedesconto"
                label="Limite de porcentagem desconto"
                margin="normal"
                InputLabelProps={inputLabelProps}
                onChange={handleFieldsChange1}
                value={preco.limitedesconto}
                min="1"
                max="99"
                required
              ></TextField>
            </div>
          </div>
          <div>
            <FormControl fullWidth required>
              <InputLabel id="disponivel">Disponivel</InputLabel>
              <Select
                labelId="disponivel"
                id="disponivel"
                value={disp}
                label="Disponivel"
                margin="normal"
                InputLabelProps={inputLabelProps}
                onChange={handleChange}
              >
                <MenuItem value={1}>Sim</MenuItem>
                <MenuItem value={0}>Não</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div>
            <button type="submit">Enviar</button>
          </div>
        </Form>
      </Container>
    </Modal>
  );
};

export default ModalEditarProduto;
