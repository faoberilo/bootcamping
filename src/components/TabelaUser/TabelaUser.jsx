import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { FaSearch } from 'react-icons/fa';
import { Container } from "./styles";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Ativo from "../Ativo/Ativo";


const columns = [
  { id: "id", label: "Id"},
  { id: "email", label: "Email"},
  { id: "isAdmin", label:"Tipo"},
  { id: "ativo", label:"Ativo?", align:"center"}  
];

const TabelaUser = () => {

  const navigate=useNavigate();

    
    var [users,setUsers] = React.useState([]);

    React.useEffect(()=>{
        getUsers();
    }, []);


    const getUsers= async () => {
        await axios.get("usuario").then((response)=>{
          setUsers(response.data);
        }).catch((response)=>{
            navigate('/login');
        });       
    }
    
   

    for (let i = 0; i < users.length; i++) {
      users[i].ativo = <Ativo id={users[i].id} />;
      console.log(users[i].isAdmin)
      if (users[i].isAdmin===2){
        users[i].isAdmin = "Admin";
      } 
      if (users[i].isAdmin===1){
        users[i].isAdmin = "Padrão";
      }
    }
   

  const [page, setPage] = React.useState(0);
  const rowsPerPage = 50;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const [busca , setBusca] = React.useState('');

  const lowerBusca = busca.toLowerCase();

  const usersFiltrados =  users.filter(
    (user)=> 
    user.email.toLowerCase().includes(lowerBusca) || 
    String(user.id).includes(busca)
    );


  return (
       
    <Paper sx={{ width: "100%" }}>
     
      <TableContainer sx={{ maxHeight: 440 }}>
      
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={50}>
              <Container>
                <h2>Usuários</h2>                
                <div>
                <input
                  type='search' 
                  placeholder="O que você procura?"
                  value={busca}
                  onChange={(ev)=> setBusca(ev.target.value)} 
                  /><FaSearch/>
                </div>

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
            {usersFiltrados
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
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        
      />
    </Paper>

    
  );
};

export default TabelaUser;