import Menu from "../../components/Menu/Menu";
import Message from "../../components/Message/Message";
import TabelaAdmin from "../../components/TabelaAdmin/TabelaAdmin";
import { useLocation } from "react-router-dom";


export default function Admin() {

  const location = useLocation();
  let message ="";
  let type ='';
  if (location.state){
    message = location.state.message;
    type = location.state.type;
  }
  return (
    <>
      <Menu></Menu>
      {message && <Message msg={message} type={type}/>}
      <TabelaAdmin />
    </>
  );
}
