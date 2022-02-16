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

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  return (
    <Container>
    <form onSubmit={handleSubmit}>
    <label>Selecionar arquivo... <input type="file" accept=".xlsx,.xls" onChange={handleFileSelect}/></label>
    <label>Enviar<input type="submit"></input></label>
    </form>
    </Container>
  )
};

export default FileInput;