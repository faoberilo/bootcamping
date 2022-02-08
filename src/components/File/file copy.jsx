import React from "react";
import { Container } from "./styles";
import axios from 'axios';

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    axios.post('massa', this.fileInput.current);
    alert(`Arquivo Selecionado - ${this.fileInput.current.files[0].name}`);
  }

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <label>
            Upload
            <input type="file" ref={this.fileInput} accept="application/xlxs" />
          </label>
         <button type="submit">Enviar</button>
         
        </form>
      </Container>
    );
  }
}

export default FileInput;
