import React from "react";
import { useNavigate } from "react-router-dom";
import { Edit } from "./styles";
import { BiEdit } from "react-icons/bi";
import { Del } from "./styles";
import { BiTrash } from "react-icons/bi";
import { GrupButtons } from "./styles";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";
import { Style } from "./styles";
import { Confirm } from "./styles";
import { Detalhe } from "./styles";
import { BiPlusCircle } from "react-icons/bi";

const GroupButton = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const getProduto = () => {
    navigate(`/produto/${props.id}`, { state: props.id });
  };

  const editaProduto = () => {
    navigate(`/produto/editar/${props.id}`, { state: props.id });
  };
  const deletaProduto = () => {
    axios.delete(`/produtosprecos/${props.id}`).then((response) => {
      alert("Preço deletado com sucesso!!!");
    });
    setTimeout(()=>{
      axios.delete(`/produto/${props.id}`)
      .then((response) => {
        alert("Produto deletado com sucesso!!!")
        handleClose()})
    },100);

  };

  return (
    <GrupButtons>
      <Modal open={open} onClose={handleClose}>
        <Style>
          <Box>
            <h2>Deseja realmente excluir o produto?</h2>
            <Confirm>
              <Button
                variant="contained"
                color="success"
                onClick={deletaProduto}
              >
                Sim
              </Button>
              <Button variant="contained" color="error" onClick={handleClose}>
                Não
              </Button>
            </Confirm>
          </Box>
        </Style>
      </Modal>
      <Detalhe>
        <button onClick={getProduto}>
          <BiPlusCircle />
        </button>
      </Detalhe>
      <Edit>
        <button onClick={editaProduto}>
          <BiEdit />
        </button>
      </Edit>
      <Del>
        <button onClick={handleOpen}>
          <BiTrash />
        </button>
      </Del>
    </GrupButtons>
  );
};

export default GroupButton;
