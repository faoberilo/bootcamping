import { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container } from "./styles";
import { BiLogInCircle} from "react-icons/bi";
import Message from '../../components/Message/Message';
import { TextField } from '@mui/material';


export default function Login(){

    const navigate=useNavigate();
    const location = useLocation();
    let message ="";
    let type ="";

        if (location.state){
            message = location.state.message
            type = location.state.type
    }
      
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');

    const handleSubmit = event =>{
        event.preventDefault();

        const login = {
            email: email,
            senha: senha
        }
        
        axios.post('auth',login)
        .then(response=>{
            localStorage.setItem('token',response.data.acessToken);
            localStorage.setItem('tipo',response.data.tipo);
            localStorage.setItem('idUser',response.data.idUser);          
            navigate('/admin',{ state:{message:"Usuário logado com sucesso!", type:"success"}});          
            document.location.reload(true);           
        })
        .catch(response=>{
            navigate('/login',{ state:{message:"Dados incorretos, por favor tente novamente", type:"error"}});
            document.location.reload(true);           
        })        
    }
    

    return(
        <Container>
            
            <h1><BiLogInCircle/>Login</h1>
            <form className='formLogin' onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email" 
              onChange={event=>setEmail(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              onChange={event=>setSenha(event.target.value)}
              autoComplete="current-password"
            />
                <a href="http://www.gogle.com"> Esqueceu sua senha?</a>
                <div>
                    <button type="submit">Entrar</button>
                </div>
            </form>
            {message && <Message msg={message} type={type}/>}
            
        </Container>
    )
}