import React from 'react';
import axios from 'axios';
import { Container } from "./styles";
import { useNavigate } from 'react-router-dom';

const FileInput= () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = React.useState();
  const [produtos, setProdutos] = React.useState([]);
  const [produtosOriginais, setProdutosOriginais] = React.useState([]);
  const [precos, setPrecos] = React.useState([]);
  const [precosOriginais, setPrecosOriginais] = React.useState([]);

  const getProdutosOriginais = async () => {
    const request = await axios.get(`/produto/`);
    const produtos = request.data;
    setProdutosOriginais(produtos);
  };

  React.useEffect(() => {
    getProdutosOriginais();
    getPrecosOriginais();
  }, []);

  const getProdutos = async () => {
    const request = await axios.get(`/produto/`);
    const produtos = request.data;
    setProdutos(produtos);
    
    for (let i =0;i<produtos.length;i++){  
      delete produtosOriginais[i].id
      delete produtosOriginais[i].created_at
      delete produtosOriginais[i].updated_at
      
      delete produtos[i].id
      delete produtos[i].created_at
      delete produtos[i].updated_at
      
      console.log(produtosOriginais);
      console.log(produtos);
      
      const produtosValores = Object.values(produtosOriginais[i]);
      const produtosEditadosValores = Object.values(produtos[i]);
      const produtosKey = Object.keys(produtos[i]);        
        
        for (let v =0;v<produtosValores.length;v++){
          if(produtosValores[v] !== produtosEditadosValores[v]){
              const log={};
              log.idUser= localStorage.getItem("idUser");
              log.idProduto = produtosOriginais[i].produto1.toString();
              log.campoAlterado = produtosKey[v].toString();
              log.valorOriginal = produtosValores[v];
              log.valorAlterado = produtosEditadosValores[v].toString();
              axios.post(`/log`, log)
          }};        
      };
  };

  const getPrecosOriginais = async () => {
    const request = await axios.get(`/produtosprecos/`);
    const precos = request.data;
    setPrecosOriginais(precos);
  };

  const getPrecos = async () => {
    const request = await axios.get(`/produtosprecos/`);
    const precos = request.data;
    setPrecos(precos);
    
    for (let i =0;i<precos.length;i++){  
      delete precosOriginais[i].id
      delete precosOriginais[i].created_at
      delete precosOriginais[i].updated_at
      
      delete precos[i].id
      delete precos[i].created_at
      delete precos[i].updated_at
      
      const precosValores = Object.values(precosOriginais[i]);
      const precosEditadosValores = Object.values(precos[i]);
      const precosKey = Object.keys(precos[i]);        
        
        for (let v =0;v<precosValores.length;v++){
          if(precosValores[v] !== precosEditadosValores[v]){
              const log={};
              log.idUser= localStorage.getItem("idUser");
              log.idProduto = precos[i].produtoid.toString();
              log.campoAlterado = precosKey[v].toString();
              log.valorOriginal = precosValores[v].toString();
              log.valorAlterado = precosEditadosValores[v].toString();
              axios.post(`/log`, log)
          }};        
      };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate("/admin",{state: { spinner: "on" }});
    const formData = new FormData();
    formData.append("upload", selectedFile);
    try {
      await axios({
        method: "post",
        url: "/produto/upload",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((response) => {
        console.log(formData)
        getProdutos();
        setTimeout(()=>{document.location.reload(true);},1000);
        navigate("/admin", {
          state: { message: "Produtos atualizados com sucesso!", type: "success", spinner: "off"   },
        });
      }); 
    } catch(error) {
      console.log(error)
    }
                 
    

  }

  const handleSubmit1 = async (event) => {
    event.preventDefault();
    navigate('/admin', {state: { spinner: "on" }});
    const formData = new FormData();
    formData.append("upload", selectedFile);
    try {
        await axios({
        method: "post",
        url: "/produtosprecos/upload",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((response) => {
        getPrecos();
        //setTimeout(()=>{document.location.reload(true);},1000);
        navigate("/admin", {
          state: { message: "Preços atualizados com sucesso!", type: "success", spinner: "off"},
        });
      }) 

    } catch(error) {
      console.log(error)
    }
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  return (
    <Container>
    <p>Atualização em massa ┤</p>
    
    <div>
    <div>
    
    <form onSubmit={handleSubmit}>
    <p> Produtos</p>
    <label>Selecionar...<input type="file" onChange={handleFileSelect}/></label>
    <label>Enviar<input type="submit"></input></label>
    </form>
    </div>

    <div>
    
    <form onSubmit={handleSubmit1}>
    <p> Preços...</p>
    <label>Selecionar...<input type="file" onChange={handleFileSelect}/></label>
    <label>Enviar<input type="submit"></input></label>
    </form>
    </div>
    </div>

    </Container>
  )
};

export default FileInput;
