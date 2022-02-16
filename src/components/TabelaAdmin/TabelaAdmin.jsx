import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { FaSearch } from "react-icons/fa";
import { Container } from "./styles";
import GroupButton from "../GroupButton/GroupButton";
import ExportTable from "../ExportTable/ExportTable";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const columns = [
  { id: "produto1", label: "Código" },
  { id: "nome", label: "Nome" },
  { id: "descricao", label: "Descrição" },
  { id: "colecao", label: "Coleção" },
  { id: "grife", label: "Grife" },
  { id: "gerenciar", label: "Gerenciar", align: "center" },
];

const TabelaAdmin = () => {
  const navigate = useNavigate();

  const [produtos, setProdutos] = React.useState([]);

  const getData = async () => {
    await axios
      .get("produto")
      .then((response) => {
        const produto = response.data;
        for (let i = 0; i < produto.length; i++) {
          produto[i].gerenciar = <GroupButton id={produto[i].id} />;
        }        
        setProdutos(produto);
      })
      .catch((response) => {
        navigate("/login");
      });
  };

  React.useEffect(() => {
    getData();
  },[]);  

  const [page, setPage] = React.useState(0);
  const rowsPerPage = 50;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const [busca, setBusca] = React.useState("");

  const lowerBusca = busca.toLowerCase();

  const produtosFiltrados = produtos.filter(
    (produto) =>
      produto.nome.toLowerCase().includes(lowerBusca) ||
      produto.produto1.includes(lowerBusca)
  );

  return (
    <Paper key='Paper'sx={{ width: "100%" }} >
      <TableContainer key='TableContainer'sx={{ maxHeight: 440 }}>
        <Table key='Table'stickyHeader aria-label="sticky table">
          <TableHead key='TableHead'>
            <TableRow key='TableRow'>
              <TableCell key='TableCell'align="center" colSpan={columns.length}>
                <Container key='Container'>
                  <h2 key='h2'>Produtos</h2>
                  <div key='div'>
                    <input
                      key='searcg'
                      type="search"
                      placeholder="O que você procura? "
                      value={busca}
                      onChange={(ev) => setBusca(ev.target.value)}
                    />
                    <FaSearch key='fasearch'/>
                  </div>
                  <ExportTable key='ExportTable' />
                </Container>
              </TableCell>
            </TableRow>
            <TableRow key='TableRow2'>
              {columns.map((column) => (
                <TableCell
                  key={column.id.toString()}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody key='TableBody'>
            {produtosFiltrados
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id.toString()} align={column.align}>
                          {column.format ? column.format(value) : value}
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
        key='TablePagination'
        rowsPerPageOptions={[]}
        component="div"
        count={produtos.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </Paper>
  );
};

export default TabelaAdmin;
