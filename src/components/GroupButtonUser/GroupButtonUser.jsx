import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import Tooltip from '@mui/material/Tooltip';
import ModalEditarUsuario from '../ModalEditarUsuario/ModalEditarUsuario'

const GroupButton = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isModalVisible, setisModalVisible] = React.useState(false)


  const navigate = useNavigate();
  const location = useLocation();
    let message ="";
    let type ="";
        if (location.state){
            message = location.state.message
            type = location.state.type
    }
  
  const deletaUser = () => {
    axios.delete(`/usuario/${props.id}`).then((response) => {
      navigate("/profile", {
        state: { message: "Usuário deletado com sucesso!", type: "success",  },
      });
      document.location.reload(true);
    });
        
  };

  return (
    <GrupButtons>
      <Modal open={open} onClose={handleClose}>
        <Style>
          <Box>
            <h2>Deseja realmente excluir o usuário?</h2>
            <Confirm>
              <Button
                variant="contained"
                color="success"
                onClick={deletaUser}>
                Sim
              </Button>
              <Button variant="contained" color="error" onClick={handleClose}>
                Não
              </Button>
            </Confirm>
          </Box>
        </Style>
      </Modal>
      
      <Edit>
      <Tooltip title="Editar usuário">
      <button type="button" onClick={() => setisModalVisible(true)}> <BiEdit/></button></Tooltip>
          {isModalVisible ? (<ModalEditarUsuario onClose={() => { setisModalVisible(false) }}/>): null}
          {  localStorage.setItem("idEditar",props.id)}
      
      </Edit>
      <Del>
      <Tooltip title="Excluir usuário">
        <button onClick={handleOpen}>
          <BiTrash />
        </button>
        </Tooltip>
      </Del>
    </GrupButtons>
  );
};

export default GroupButton;