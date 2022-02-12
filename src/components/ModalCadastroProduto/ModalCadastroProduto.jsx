import React, { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./styles";
import { Container, Form, Title } from "./styles";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useLocation, useNavigate } from "react-router-dom";
import { BiPlusCircle } from "react-icons/bi";

const ModalCadastroProduto = ({ onClose = () => {}, Children }) => {
  const [open, setOpen] = useState(false);

  const AbreModal = () => setOpen(true);

  useEffect(() => {
    AbreModal();
  }, []);

  const [disp, setDisp] = React.useState("");
  const handleChange = (event) => {
    setDisp(event.target.value);
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

    axios.post("/produto", produto).then((response) => {});

    setTimeout(() => {
      axios
        .post("/produtosprecos", produtopreco)
        .then((response) => {
          onClose();
          navigate("/admin", {
            state: {
              message: "Produto cadastrado com sucesso!!!",
              type: "success",
            },
          });
          document.location.reload(true);
        })
        .catch((response) => {
          axios.delete(`/produto/${produto.id}`);
          alert(response.message);
        });
    }, 1000);
  };

  const inputLabelProps = {
    style: { fontSize: 15 },
  };

  const inputProps = {
    step: 0.01,
  };

  return (
    <Modal open={open} onClose={onClose} center showCloseIcon={true}>
      <Container>
        <Title>
          <BiPlusCircle />
          Cadastro de Produto
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
                inputProps={inputProps}
                InputLabelProps={inputLabelProps}
                maxlength="9"
                required
              ></TextField>
            </div>
            <div>
              <TextField
                type="number"
                id="promocaodesconto"
                name="promocaodesconto"
                label="Desconto(%)"
                margin="normal"
                InputLabelProps={inputLabelProps}
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
                maxlength="9"
                required
              ></TextField>
            </div>
            <div>
              <TextField
                type="number"
                id="limitedesconto"
                name="limitedesconto"
                label="Limite de Desconto(%)"
                margin="normal"
                InputLabelProps={inputLabelProps}
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
                onChange={handleChange}
                InputLabelProps={inputLabelProps}
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

export default ModalCadastroProduto;
