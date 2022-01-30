import { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import { useNavigate } from "react-router-dom";
import "react-responsive-modal/styles.css";
import "./styles";
import { Container, Form, Title } from "./styles";
import { BiUserPlus } from "react-icons/bi";

const ModalCadastro = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const AbreModal = () => setOpen(true);
  const FechaModal = () => {
    setOpen(false);
    navigate("/");
  };

  useEffect(() => {
    AbreModal();
  }, []);

  return (
    <Modal open={open} onClose={FechaModal} center showCloseIcon={false}>
      <Container>
        <Title>
          <BiUserPlus />
          Cadastro
        </Title>
        <Form>
          <div className="input_field">
            <input
              type="text"
              className="input"
              placeholder="Nome"
              required
            ></input>
          </div>
          <div className="input_field">
            <input
              type="email"
              className="input"
              placeholder="Email"
              required
            ></input>
          </div>
          <div className="input_field">
            <input
              type="password"
              className="input"
              placeholder="Senha"
              required
            ></input>
          </div>
          
          <div className="input_field">
            <input
              type="password"
              className="input"
              placeholder="Confirmação de Senha"
            ></input>
          </div>

          <div className="input_field">
            <select name="input">
              <option value="" disabled selected hidden>
                Selecione o tipo de usuário
              </option>
              <option value="administrador">Administrador</option>
              <option value="padrão">Padrão</option>
            </select>
          </div>
          <div className="input_field">
            <button type="submit">Enviar</button>
          </div>
        </Form>
      </Container>
    </Modal>
  );
};

export default ModalCadastro;
