import React from "react";
import { useNavigate } from "react-router-dom";
import { Edit } from "./styles";
import { BiEdit } from "react-icons/bi";
import { Del } from "./styles";
import { BiTrash } from "react-icons/bi";
import { GrupButtons } from "./styles";
const GroupButton = (props) => {
  const navigate = useNavigate();

  const editaProduto = () => {
    navigate(`/produto/edit/${props.id}`, { state: props.id });
  };
  const deletaProduto = () => {
    navigate(`/produto/delete/${props.id}`, { state: props.id });
  };
  return (
    <GrupButtons>
      <Edit>
        <button onClick={editaProduto}>
          <BiEdit />
        </button>
      </Edit>
      <Del>
        <button onClick={deletaProduto}>
          <BiTrash />
        </button>
      </Del>
    </GrupButtons>
  );
};

export default GroupButton;
