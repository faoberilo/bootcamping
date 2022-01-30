import React from "react";
import { useNavigate } from "react-router-dom";
import { Detalhe } from "./styles";
import { BiPlusCircle } from "react-icons/bi";

const Detalhes = (props) => {
  const navigate = useNavigate();

  const deletaProduto = () => {
    navigate(`/produto/delete/${props.id}`, { state: props.id });
  };

  return (
    <div>
      <Detalhe>
        <button onClick={deletaProduto}>
          <BiPlusCircle />
        </button>
      </Detalhe>
    </div>
  );
};

export default Detalhes;
