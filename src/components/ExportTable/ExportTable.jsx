import React from 'react';
import { Detalhe } from './styles';
import { BiCloudDownload } from "react-icons/bi";
import Tooltip from '@mui/material/Tooltip';
import jsPDF from 'jspdf'
import 'jspdf-autotable';
import XLSX from 'xlsx';



const ExportTable = () => {

  const [produtos, setProdutos] = React.useState([]);

  React.useEffect(()=>{
    const getData= async ()=>{
        let result = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then (data=>data)
        setProdutos(result);        
    }
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
    { title: "User Id", field: "userId", },
    { title: "Id", field: "id", },
    { title: "Title", field: "title",},    
    { title: "Completed", field: "completed",}
  ]

  const downloadPdf = () => {
    const doc = new jsPDF()
    doc.text("Logs de atualização de preços", 20, 10)
    doc.autoTable({
      theme: "grid",
      columns: columns.map(col => ({ ...col, dataKey: col.field })),
      body: produtos
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