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
import { Detalhe } from "./styles";
import { BiPlusCircle } from "react-icons/bi";
import Tooltip from "@mui/material/Tooltip";
import ModalEditarProduto from "../ModalEditarProduto/ModalEditarProduto";
import ModalDetalhesProduto from "../Produto/ModalDetalhesProduto";

const GroupButton = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isModalVisible, setisModalVisible] = React.useState(false);
  const [isModalDetalhesVisible, setisModalDetalhesVisible] = React.useState(false);
  const [produto, setProduto] = React.useState({});


  const navigate = useNavigate();
  const location = useLocation();
  let message = "";
  let type = "";
  if (location.state) {
    message = location.state.message;
    type = location.state.type;
  }

  const getProduto = () => {
    navigate(`/produto/${props.id}`, { state: props.id });
  };

  const getProdutoById = async () => {
    const request = await axios.get(`/produto/${props.id}`);
    var produto = request.data;
    setProduto(produto);
  };

  React.useEffect(() => {
    getProdutoById();
  }, []);

  const deletaProduto = () => {
    axios.delete(`/produtosprecos/${props.id}`);
    setTimeout(() => {
      axios.delete(`/produto/${props.id}`).then((response) => {
        navigate("/admin", {
          state: { message: "Produto deletado com sucesso!", type: "success" },
        });
        document.location.reload(true);
        handleClose();
      });
    }, 1000);
    const log = {};
    log.idUser= localStorage.getItem("idUser");
    log.idProduto = produto.produto1;
    log.campoAlterado = "Exclusão de produto";
    log.valorOriginal = "";
    log.valorAlterado = "";  
    axios.post(`/log`, log);
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
        <Tooltip title="Mais detalhes do produto">
          {/* <button onClick={getProduto}>
          <BiPlusCircle />
        </button></Tooltip> */}
          <button type="button" onClick={() => setisModalDetalhesVisible(true)}>
            {" "}
            <BiPlusCircle />
          </button>
        </Tooltip>
        {isModalDetalhesVisible ? (
          <ModalDetalhesProduto
            onClose={() => {
              setisModalDetalhesVisible(false);
            }}
          />
        ) : null}
        {localStorage.setItem("idEditar", props.id)}
      </Detalhe>
      <Edit>
        <Tooltip title="Editar produto">
          <button type="button" onClick={() => setisModalVisible(true)}>
            {" "}
            <BiEdit />
          </button>
        </Tooltip>
        {isModalVisible ? (
          <ModalEditarProduto
            onClose={() => {
              setisModalVisible(false);
            }}
          />
        ) : null}
        {localStorage.setItem("idEditar", props.id)}
      </Edit>
      <Del>
        <Tooltip title="Excluir produto">
          <button onClick={handleOpen}>
            <BiTrash />
          </button>
        </Tooltip>
      </Del>
    </GrupButtons>
  );
};

export default GroupButton;
