import React from 'react';



export default class App extends React.Component{
  
    constructor(){
        super();
        this.state={
            nomeBotao:'Esconder',
            classeDiv:'show'
        }
    }

    alterarEstado(){      

        var Estado;
        var NomeBotao;
        if(this.state.classeDiv === 'show'){
            Estado="hide";
            NomeBotao='Desativado';
         
        }else{
            Estado="show";
            NomeBotao='Ativo';
        }
        this.setState({
            nomeBotao: NomeBotao,
            classeDiv: Estado
        })
    }

    render(){
        return(
            <div>
                <button onClick={ this.alterarEstado.bind(this)} value={this.state.nomeBotao}>{this.state.nomeBotao}</button>
            </div>
        );
    }

}
