import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';
import TabelaUser from '../../components/TabelaUser/TabelaUser';



export default function Profile(props){

    const navigate=useNavigate();
    
    const [user,setUser] = useState({});

    useEffect(()=>{
        getUser();
    }, []);

    const getUser= async () => {
        await axios.get(`usuario/${localStorage.getItem('idUser' )}`).then((response)=>{
            const user = response.data;
            console.log(user)
            setUser(user);
        }).catch((response)=>{
            navigate('/login');
            alert('Usuário não logado!!!');            
        });       
    }

    const handleClick = event =>{
        event.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('idUser');
        localStorage.removeItem('tipo');
        alert('Usuário deslogado com sucesso!');
        navigate('/login');
        document.location.reload(true);
    }
    
    return(
        <div>
        <Container>            
            <div>
                <h2><b>Nome:</b> {user.nome}</h2>
                <h2><b>Email:</b> {user.email}</h2>
                <button className="botao"  onClick={handleClick}>Sair</button>
            </div>        
           
        </Container>
        <TabelaUser/>
        </div>
           
           
    )
}