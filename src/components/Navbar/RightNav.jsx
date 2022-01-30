import React from "react";
import { BiLogInCircle, BiUser, BiUserPlus, BiUserPin, BiLogOutCircle} from "react-icons/bi";
import { FiSettings } from "react-icons/fi"
import { useNavigate } from "react-router-dom";
import { Ul } from "./styles";


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
  else if(localStorage.getItem('tipo')==="admin"){
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
          <a href="/login" >
            <span >
              <BiLogOutCircle />
              Logout
            </span>
          </a>
        </li>
        <li>
          <a href="/register">
            <span>
              <BiUserPlus /> Criar Usuário
            </span>
          </a>
        </li>
        <li>
          <a href="/profile/">
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
    )}
    else if(localStorage.getItem('tipo')==="user"){
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
            <a href="/login" >
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
