import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container } from './styles';
import TabelaUser from '../../components/TabelaUser/TabelaUser';
import Message from '../../components/Message/Message';

export default function Profile(props){

    const navigate=useNavigate();
    
    const [user,setUser] = useState({});

    useEffect(()=>{
        getUser();
    }, {});

    const getUser= async () => {
        await axios.get(`usuario/${localStorage.getItem('idUser' )}`).then((response)=>{
            const user = response.data;
            setUser(user);
        }).catch((response)=>{
            navigate('/login');
        });       
    } 

    const handleClick = event =>{
        event.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('idUser');
        localStorage.removeItem('tipo');
        navigate('/login');
        document.location.reload(true);
    }

    const location = useLocation();
    let message ="";
    let type ='';
        if (location.state){
            message = location.state.message;
            type = location.state.type;
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
        {message && <Message msg={message} type={type}/>}
        <TabelaUser/>
        </div>
           
           
    )
}