import React from 'react';
import { Detalhe } from './styles';
import { BiCloudDownload } from "react-icons/bi";
import Tooltip from '@mui/material/Tooltip';
import jsPDF from 'jspdf'
import 'jspdf-autotable';
import XLSX from 'xlsx';
import axios from "axios";
import { useNavigate } from "react-router-dom";



const ExportTable = () => {
  const navigate = useNavigate();

  const [produtos, setProdutos] = React.useState([]);

  React.useEffect(()=>{
    const getData = async () => {
      await axios
        .get("produto")
        .then((response) => {;
               
          setProdutos(response.data);
        })
        .catch((response) => {
          navigate("/login");
        });
    };
    getData();
  }, []);

  const downloadExcel=()=>{
    const newData=produtos.map(row=>{
      delete row.tableData
      return row
    })
    const workSheet=XLSX.utils.json_to_sheet(newData)
    const workBook=XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workBook,workSheet,"produtos")
    let buf=XLSX.write(workBook,{bookType:"xlsx",type:"buffer"})
    XLSX.write(workBook,{bookType:"xlsx",type:"binary"})
    XLSX.writeFile(workBook,"Log.xlsx")
  }

  const columns = [
    { field: "id", title: "ID" },
    { field: "produto1", title: "Código" },
    { field: "nome", title: "Nome" },
    { field: "descricao", title: "Descrição" },
    { field: "colecao", title: "Coleção" },
    { field: "grife", title: "Grife" },
    { field: "disponivel", title: "Disponivel?" },
    { field: "created_at", title: "Criado em: " },
    { field: "updated_at", title: "Última atualização: " },
  ];


  const downloadPdf = () => {
    const doc = new jsPDF('l', 'pt')
    doc.text("Logs de atualização de preços", 20, 10)
    doc.autoTable({
      theme: "grid",
      columns: columns.map(col => ({ ...col, dataKey: col.field })),
      body: produtos,
      margin: 40
    })
    doc.save('Logs.pdf')
  }
  
  return (
    <div>
      <Detalhe>
      <Tooltip title="Download Tabela de Logs.xlsx"><button onClick={downloadExcel}><BiCloudDownload/></button></Tooltip>
      <Tooltip title="Download Tabela de Logs.pdf"><button onClick={downloadPdf}><BiCloudDownload/></button></Tooltip>
      </Detalhe>      
    </div>             
  )
} 

export default ExportTable;