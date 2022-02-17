import React from 'react';
import axios from 'axios';
import { Container } from "./styles";
import { useNavigate } from 'react-router-dom';



const FileInput= () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = React.useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("upload", selectedFile);
    try {
      await axios({
        method: "post",
        url: "/produto/upload",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((response) => {
        navigate("/admin", {
          state: { message: "Produtos atualizados com sucesso!", type: "success",  },
        });
        document.location.reload(true);
      });     

    } catch(error) {
      console.log(error)
    }
  }

  const handleSubmit1 = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("upload", selectedFile);
    try {
      document.getElementById('spinner').style.display = 'block';
      await axios({
        method: "post",
        url: "/produtosprecos/upload",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((response) => {
        navigate("/admin", {
          state: { message: "Preços atualizados com sucesso!", type: "success",  },
        });
        document.location.reload(true);
      });     

    } catch(error) {
      console.log(error).finally(() => {
        document.getElementById('spinner').style.display = 'none';
    });
    }
  }


  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  return (
    <Container>
    <p>Atualização em massa ┤</p>
    <div>
    <p> Produtos→</p>
    <p> Preços--→</p>
    </div>
    <div>
    <form onSubmit={handleSubmit}>
    <label>Selecionar...<input type="file" accept=".xlsx,.xls" onChange={handleFileSelect}/></label>
    <label>Enviar<input type="submit"></input></label>
    </form>
    <form onSubmit={handleSubmit1}>
    <label>Selecionar...<input type="file" accept=".xlsx,.xls" onChange={handleFileSelect}/></label>
    <label>Enviar<input type="submit"></input></label>
    </form>
    </div>
    </Container>
  )
};

export default FileInput;