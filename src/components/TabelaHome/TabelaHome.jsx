import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Detalhes from "../Detalhes/Detalhes";
import { FaSearch } from 'react-icons/fa';
import { Container } from "./styles";
import ExportTable from "../ExportTable/ExportTable";



const columns = [
  { id: "id", label: "Id"},
  { id: "title", label: "Nome"},
  { id: "detalhes", label:"Detalhes+", align:"center"}
  
];



const TabelaHome = () => {

  const [produtos, setProdutos] = React.useState([]);

  React.useEffect(()=>{
    const getData= async ()=>{
        let result = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then (data=>data)
        for (let i=0;i<result.length;i++){
          result[i].detalhes= <Detalhes id={result[i].id}/>
        }
        setProdutos(result);
        
    }
    getData();
  }, []);

  const [page, setPage] = React.useState(0);
  const rowsPerPage = 50;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const [busca , setBusca] = React.useState('');

  const lowerBusca = busca.toLowerCase();

  const produtosFiltrados =  produtos.filter((produto)=> produto.title.toLowerCase().includes(lowerBusca));

  return (
       
    <Paper sx={{ width: "100%" }}>
     
      <TableContainer sx={{ maxHeight: 440 }}>
      
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={50}>
              <Container>
                <h2>Produtos</h2>                
                <div>
                <input
                  type='search' 
                  placeholder="O que você procura?"
                  value={busca}
                  onChange={(ev)=> setBusca(ev.target.value)} 
                  /><FaSearch/>
                </div>

                <ExportTable/>

                </Container>
                  
              </TableCell>
            </TableRow>
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody >
            {produtosFiltrados
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow  hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format ? column.format(value)
                            : value}
                            
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions=""
        component="div"
        count={produtos.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        
      />
    </Paper>

    
  );
};

export default TabelaHome;