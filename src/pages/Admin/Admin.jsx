import Menu from "../../components/Menu/Menu";
import Message from "../../components/Message/Message";
import TabelaAdmin from "../../components/TabelaAdmin/TabelaAdmin";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from '../../components/Spinner/Spinner';
import axios from "axios";
import React from "react";




export default function Admin() {

  const navigate = useNavigate();

  const location = useLocation();
  let message ="";
  let type ='';
  let spinner ="off";
  if (location.state){
    message = location.state.message;
    type = location.state.type;
    spinner = location.state.spinner;
  }
  const getLogin = async () => {
    await axios
      .get("produto")
      .catch((response) => {
        navigate("/login");
      });
  };

  React.useEffect(() => {
    getLogin();
  },[]);

  return (
    <>
      <Menu></Menu>
      {message && <Message msg={message} type={type}/>}
      {spinner && <Spinner spin={spinner}/>}
      <TabelaAdmin />
    </>
  );
}
