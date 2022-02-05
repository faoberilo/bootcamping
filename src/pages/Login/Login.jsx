import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container } from "./styles";
import { BiLogInCircle} from "react-icons/bi";

export default function Login(){
    
    const navigate=useNavigate();
      
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');

    const handleSubmit = event =>{
        event.preventDefault();

        const login = {
            email: email,
            senha: senha
        }
        console.log(login);
        
        axios.post('auth',login)
        .then(response=>{
            localStorage.setItem('token',response.data.acessToken);
            localStorage.setItem('tipo',response.data.tipo);
            localStorage.setItem('idUser',response.data.idUser);
            
            alert('Usuário logado com sucesso!');
            navigate('/admin');
            document.location.reload(true);

            
        })        
    }


    return(
        <Container>
            <h1><BiLogInCircle/>Login</h1>
            <form className='formLogin' onSubmit={handleSubmit}>
                <input type='email' placeholder='Email' required onChange={event=>setEmail(event.target.value)}/>
                <input type='password' placeholder='Senha'required onChange={event=>setSenha(event.target.value)}/>
                <div>
                    <button type="submit">Entrar</button>
                </div>
            </form>
            
        </Container>
    )
}