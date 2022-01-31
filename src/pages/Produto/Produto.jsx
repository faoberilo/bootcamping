import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';

export default function Produto(props){
    
    const [produto,setProduto]=useState({});
    useEffect(()=>{
        getProdutoById();
    }, []);

    const { id } = useParams();

    const getProdutoById = async () => {
        const request = await axios.get(`/produto/${id}`);
        const produto = request.data;
        setProduto(produto);
      } 
    
    return(
        <div>
            
                <h1>{produto.nome}</h1>
                        
        </div>
           
    )
}