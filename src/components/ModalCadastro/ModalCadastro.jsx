import { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import { useNavigate } from "react-router-dom";
import "react-responsive-modal/styles.css";
import "./styles";
import { Container, Form, Title } from "./styles";
import { BiUserPlus } from "react-icons/bi";
import axios from 'axios';

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

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const name=evento.target.name.value;
    const email=evento.target.email.value;
    const password=evento.target.password.value;
    const passwordConfirmation=evento.target.passwordConfirmation.value;
    const isAdmin=evento.target.isadmin.value;

 
    const user = {
        name,
        email,
        password,     
    }
    axios.post('/usuario', user)
        .then((response)=>{
            alert('Usuário cadastrado com sucesso!!!');            
        }).catch((response)=>{
          alert('Dado já cadastrado no sistema. Por favor tente mudar algum campo');            
      });

    
  }

  return (
    <Modal open={open} onClose={FechaModal} center showCloseIcon={false}>
      <Container>
        <Title>
          <BiUserPlus />
          Cadastro
        </Title>
        <Form onSubmit={handleSubmit}>
          <div className="input_field">
            <input
              type="text"
              className="input"
              placeholder="Nome"
              id="name" 
              name="name"
              required
            ></input>
          </div>
          <div className="input_field">
            <input
              type="email"
              className="input"
              placeholder="Email"
              id="email" 
              name="email"
              required
            ></input>
          </div>
          <div className="input_field">
            <input
              type="password"
              className="input"
              placeholder="Senha"
              id="password" 
              name="password"
              required
            ></input>
          </div>
          
          <div className="input_field">
            <input
              type="password"
              className="input"
              placeholder="Confirmação de Senha"
              id="passwordConfirmation" 
              name="passwordConfirmation"
            ></input>
          </div>

          <div className="input_field">
            <select id="isadmin" name="isadmin">
              <option value="" disabled selected hidden>
                Selecione o tipo de usuário
              </option>
              <option id="administrador" name="administrador" value="administrador">Administrador</option>
              <option id="padrao" name="padrao" value="padrão">Padrão</option>
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
