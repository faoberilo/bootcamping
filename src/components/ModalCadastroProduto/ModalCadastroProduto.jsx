import { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import { useNavigate } from "react-router-dom";
import "react-responsive-modal/styles.css";
import "./styles";
import { Container, Form, Title } from "./styles";
import { BiPlusCircle } from "react-icons/bi";


const ModalCadastroProduto = () => {
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

  return (
    <Modal open={open} onClose={FechaModal} center showCloseIcon={false}>
      <Container>
        <Title><BiPlusCircle />Cadastro de Produto</Title>
        <Form>
          <div className="input_field">
            <input type="number" className="input" placeholder="Código" required></input>
          </div>
          <div className="input_field">
            <input type="email" className="input" placeholder="Nome" required></input>
          </div>
          <div className="input_field">
            <input type="text" className="input" placeholder="Descrição" required></input>
          </div>
          <div className="input_field">
            <input type="text" className="input" placeholder="Categoria"></input>
          </div>
          <div className="input_field">
            <input type="number" className="input" placeholder="Preço Original"></input>
          </div>
          <div className="input_field">
            <input type="number" className="input" placeholder="Porcetagem de desconto"></input>
          </div>
          <div className="input_field">
            <input type="number" className="input" placeholder="Preço com desconto"></input>
          </div>
          <div className="input_field">
            <input type="boolean" className="input" placeholder="Disponivel em estoque"></input>
          </div>
          <div className="input_field">
            <button type="submit">Enviar</button>
          </div>
        </Form>
      </Container>
    </Modal>
  );
};

export default ModalCadastroProduto;
