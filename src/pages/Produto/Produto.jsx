import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';



export default function Produto(props){
    const navigate = useNavigate();

    
    const [produto,setProduto]=useState({});
    useEffect(()=>{
        getProdutoById();
    }, []);

    const { id } = useParams();

    const getProdutoyId = async () => {
        const request = await axios.get(`/produto/${id}`);
        const produto = request.data;
        setProduto(produto);
      } 
    
    return(
        <div className='filme'>
            <div className='capa'>            
                <img src={filme.cover} alt={filme.imageAlt}/>
            </div>
            <div className='detalhes'>
                <h1>{filme.title}</h1>
                <h2><b>Ano: </b> {filme.year}</h2>
                <h2><b>Sinopse: </b> {filme.resume}</h2>
                <h2><b>Elenco: </b> {filme.cast}</h2>
                <h2><b>Genero: </b> {filme.genres}</h2>
                <button className="botao" onClick={handleClick}>Assitiu</button>
            </div>            
        </div>
           
    )
}