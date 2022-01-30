import { useEffect, useState } from "react";
import axios from 'axios';

function Pagination (){

    const [produtos, setProdutos] = useState([]);
    const [produtosPerPage, setProdutosPerPages] = useState(10);
    const [currentPage, setCurrentPage]= useState(0);

    const pages = Math.ceil(produtos.length/produtosPerPage);
    const startIndex = currentPage*produtosPerPage;
    const endIndex = startIndex + produtosPerPage;
    const currentProdutos = produtos.slice(startIndex,endIndex) 

    useEffect(()=>{
        const getData= async ()=>{
            const result = await fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then (data=>data)
            setProdutos(result);
        }
        getData();
    }, [])
    return(
        
        <div>
            {currentProdutos.map(produto=>{
                return <div><h1>{produto.id} {produto.title}</h1></div> 
            })}

            <div>
            {Array.from(Array(pages),(produto, index)=>{
                return <button value={index} onClick={(e)=>setCurrentPage(Number(e.target.value))}>{index+1}</button>
             })}
            </div>
        </div>

    )
}

export default Pagination;