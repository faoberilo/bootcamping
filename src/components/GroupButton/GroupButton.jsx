import React from "react";
import { useNavigate } from "react-router-dom";
import { Edit } from "./styles";
import { BiEdit } from "react-icons/bi";
import { Del } from "./styles";
import { BiTrash } from "react-icons/bi";
import { GrupButtons } from "./styles";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';




const GroupButton = (props) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose= () => setOpen(false);


  const navigate = useNavigate();

  const editaProduto = () => {
    navigate(`/produto/edit/${props.id}`, { state: props.id });
  };
  const deletaProduto = () => {
    axios.delete(`/produto/${props.id}`)
    .then((response)=>{
      alert('Produto deletado com sucesso!!!');            
  })
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fitcontent',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <GrupButtons>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <h2>Deseja realmente excluir o produto?</h2>
          <Button variant="contained" color="success" onClick={deletaProduto} >Sim</Button>
          <Button variant="contained" color="error" onClick={handleClose}>Não</Button>
        </Box>
      </Modal>
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
