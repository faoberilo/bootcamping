import React, { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import { useLocation, useNavigate } from "react-router-dom";
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
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      contrastText: "#fff",
    },
  },
});
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

  const id = localStorage.getItem("idEditar");

  const [user, setUser] = useState({});

  const getUserById = async () => {
    const request = await axios.get(`/usuario/${id}`);
    const user = request.data
     setUser(user);
  };

  useEffect(() => {
    getUserById();
  }, []);

  console.log(user)

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const nome = evento.target.name.value;
    const email = evento.target.email.value;
    const senha = evento.target.password.value;
    const isAdmin = parseInt(disp);
    
      const user = {
        nome,
        email,
        senha,
        isAdmin,
      };

      axios
        .patch(`/usuario/${id}`, user)
        .then((response) => {
          navigate("/admin", {
            state: { message: "Usuário editado com sucesso!", type: "success",  },
          });
          document.location.reload(true);
        })
        .catch((response) => {
          navigate("/admin", {
            state: {
              message:
                "Error",
                type: "error",
            },
          });
          document.location.reload(true);
        });
    
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
            <BiEdit />
            Editar Usuário
          </Title>

          <Form onSubmit={handleSubmit}>
          <ThemeProvider theme={theme}>
            <div >
              <TextField
                type="text"
                id="name"
                name="name"
                label="Nome"
                margin="normal"
                value={user.nome}
                required
              ></TextField>
            </div>
            <div >
              <TextField
                type="email"
                id="email"
                name="email"
                label="Email"
                margin="normal"
                value={user.email}
                required
              ></TextField>
            </div>
            
              <div >
                <TextField
                  type="text"
                  id="password"
                  name="password"
                  label="Senha"
                  color="primary"
                  margin="normal"
                  value={user.senha}
                  required
                ></TextField>
              </div>
              

            <FormControl fullWidth>
              <InputLabel id="disponivel">Permissão</InputLabel>
              <Select
                labelId="disponivel"
                id="disponivel"
                label="Tipo"
                color="primary"
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
          </ThemeProvider>
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
