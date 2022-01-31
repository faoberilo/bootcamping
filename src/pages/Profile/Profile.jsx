import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';



export default function Profile(props){

    const navigate=useNavigate();

    
    const [user,setUser] = useState({});

    useEffect(()=>{
        getUser();
    }, []);


    const getUser= async () => {
        await axios.get(`/usuario/${localStorage.getItem('idUser')}`).then((response)=>{
            const user = response.data;
            console.log(user)
            setUser(user);
        }).catch((response)=>{
            navigate('/login');
        });       
    }

    const handleClick = event =>{
        event.preventDefault();
        localStorage.removeItem('token');
        alert('Usuário deslogado com sucesso!');
        navigate('/');
    }
    
    return(
        <Container>            
            <div>
                <h1><b>Nome:</b> {user.nome}</h1>
                <h1><b>Email:</b> {user.email}</h1>
                <button className="botao"  onClick={handleClick}>Sair</button>
            </div>    
           
        </Container>
           
    )
}