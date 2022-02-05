import React from "react";
import { BiLogInCircle, BiUser, BiUserPin, BiLogOutCircle} from "react-icons/bi";
import { FiSettings } from "react-icons/fi"
import { Ul } from "./styles";

const handleClick = event =>{
  event.preventDefault();
  localStorage.removeItem('token');
  localStorage.removeItem('idUser');
  localStorage.removeItem('tipo');
  alert('Usuário deslogado com sucesso!');
  document.location.reload('/login'); 
}

const RightNav = ({ open }) => {

  if (!localStorage.getItem('token')) {

  return (
    <Ul open={open}>
      <li>
        <a href="/login">
          <span>
            <BiLogInCircle />
            Login
          </span>
        </a>
      </li>     
      
      <li>
        <a href="/about">
          <span>
            <BiUserPin />
            Sobre Nós
          </span>
        </a>
      </li>
    </Ul>
  )}  
    else {
      return (
        <Ul open={open}>
          <li>
            <a href="/admin">
              <span>
                <FiSettings />
                Administrar
              </span>
            </a>
          </li>
          <li>
            <a href="/login" onClick={handleClick}>
              <span >
                <BiLogOutCircle />
                Logout
              </span>
            </a>
          </li>
          <li>
            <a href="/profile">
              <span>
                <BiUser />
                Perfil
              </span>
            </a>
          </li>
          <li>
            <a href="/about">
              <span>
                <BiUserPin />
                Sobre Nós
              </span>
            </a>
          </li>
        </Ul>
      )};
};

export default RightNav;
