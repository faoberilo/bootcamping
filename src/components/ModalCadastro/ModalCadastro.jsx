import React, { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import { useLocation, useNavigate } from "react-router-dom";
import "react-responsive-modal/styles.css";
import "./styles";
import { Container, Form, Title } from "./styles";
import { BiUserPlus } from "react-icons/bi";
import axios from "axios";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import Message from "../Message/Message";

const ModalCadastro = ({ onClose = () => {}, Children }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const AbreModal = () => setOpen(true);

  useEffect(() => {
    AbreModal();
  }, []);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const nome = evento.target.name.value;
    const email = evento.target.email.value;
    const senha = evento.target.password.value;
    const passwordConfirmation = evento.target.passwordConfirmation.value;
    const isAdmin = parseInt(disp);

    if (senha === passwordConfirmation) {
      const user = {
        nome,
        email,
        senha,
        isAdmin,
      };

      axios
        .post("/usuario", user)
        .then((response) => {
          navigate("/admin", {
            state: { message: "Usuário cadastrado com sucesso!" },
          });
          document.location.reload(true);
        })
        .catch((response) => {
          navigate("/admin", {
            state: {
              message:
                "Dado já cadastrado no sistema. Por favor tente mudar algum campo",
            },
          });
          document.location.reload(true);
        });
    } else {
      navigate("/admin", {
        state: {
          message: "Senhas não conferem! Por favor tente novamente",
          type: "error",
        },
      });
      document.location.reload(true);
    }
  };

  const [disp, setDisp] = React.useState("");
  const handleChange = (event) => {
    setDisp(event.target.value);
  };

  if (localStorage.getItem("tipo") === "2") {
    return (
      <Modal open={open} onClose={onClose} center showCloseIcon={true}>
        <Container>
          <Title>
            <BiUserPlus />
            Cadastro
          </Title>

          <Form onSubmit={handleSubmit}>
            <div className="input_field">
              <TextField
                type="text"
                id="name"
                name="name"
                label="Nome"
                margin="normal"
                required
              ></TextField>
            </div>
            <div className="input_field">
              <TextField
                type="email"
                id="email"
                name="email"
                label="Email"
                margin="normal"
                required
              ></TextField>
            </div>
            <div>
              <div className="input_field">
                <TextField
                  type="password"
                  id="password"
                  name="password"
                  label="Senha"
                  margin="normal"
                  required
                ></TextField>
              </div>
              <div>
                <TextField
                  type="password"
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  label="Confirmação de Senha"
                  margin="normal"
                  required
                ></TextField>
              </div>
            </div>

            <FormControl fullWidth>
              <InputLabel id="disponivel">Permissão</InputLabel>
              <Select
                labelId="disponivel"
                id="disponivel"
                label="Tipo"
                margin="normal"
                onChange={handleChange}
                required
              >
                <MenuItem value={2}>Administrador</MenuItem>
                <MenuItem value={1}>Padrão</MenuItem>
              </Select>
            </FormControl>

            <div className="input_field">
              <button type="submit">Enviar</button>
            </div>
          </Form>
        </Container>
      </Modal>
    );
  } else {
    navigate("/admin");
    return <div></div>;
  }
};

export default ModalCadastro;
