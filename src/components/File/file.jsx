import React from "react";
import { Container } from "./styles";

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(`Arquivo Selecionado - ${this.fileInput.current.files[0].name}`);
  }

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <label>
            Upload
            <input type="file" ref={this.fileInput} />
          </label>

          <button type="submit">Enviar</button>
        </form>
      </Container>
    );
  }
}

export default FileInput;
