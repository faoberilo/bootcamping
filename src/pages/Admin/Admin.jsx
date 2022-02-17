import Menu from "../../components/Menu/Menu";
import Message from "../../components/Message/Message";
import TabelaAdmin from "../../components/TabelaAdmin/TabelaAdmin";
import { useLocation } from "react-router-dom";
import Spinner from '../../components/Spinner/Spinner';



export default function Admin() {

  const location = useLocation();
  let message ="";
  let type ='';
  let spinner ="off";
  if (location.state){
    message = location.state.message;
    type = location.state.type;
    spinner = location.state.spinner;
  }
  return (
    <>
      <Menu></Menu>
      {message && <Message msg={message} type={type}/>}
      {spinner && <Spinner spin={spinner}/>}
      <TabelaAdmin />
    </>
  );
}
