import React from 'react';
import { Detalhe } from './styles';
import { BiCloudDownload } from "react-icons/bi";
import Tooltip from '@mui/material/Tooltip';
import XLSX from 'xlsx';
import axios from "axios";
import { useNavigate } from "react-router-dom";



const ExportTable = () => {
  const navigate = useNavigate();

  const [produtos, setProdutos] = React.useState([]);

  React.useEffect(()=>{
    const getData = async () => {
      await axios
        .get("log")
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
    navigate("/admin",{state: { spinner: "on" }});
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
    navigate("/admin",{state: { spinner: "off" }});

  }

  
  return (
    <div>
      <Detalhe>
      <Tooltip title="Download Tabela de Logs.xlsx"><button onClick={downloadExcel}><BiCloudDownload/></button></Tooltip>
      </Detalhe>      
    </div>             
  )
} 

export default ExportTable;
