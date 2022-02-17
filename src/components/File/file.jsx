import React from 'react';
import axios from 'axios';
import { Container } from "./styles";
import { useNavigate } from 'react-router-dom';




const FileInput= () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = React.useState();

 
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
        document.location.reload(true);
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
        document.location.reload(true);
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