import * as React from 'react';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { BiLogInCircle } from "react-icons/bi";
import Message from "../../components/Message/Message";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Email from '@mui/icons-material/Email'

const theme = createTheme({
  palette: {
    primary: {          
      main: "#000",      
      contrastText: "#fff",   
    },
    
  },
});


export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  let message = "";
  let type = "";

  if (location.state) {
    message = location.state.message;
    type = location.state.type;
  }

  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const login = {
      email: email,
      senha: senha,
    };
    
    console.log(senha);
    axios
      .post("auth", login)
      .then((response) => {
        localStorage.setItem("token", response.data.acessToken);
        localStorage.setItem("tipo", response.data.tipo);
        localStorage.setItem("idUser", response.data.idUser);
        navigate("/admin", {
          state: { message: "Usuário logado com sucesso!", type: "success" },
        });
        document.location.reload(true);
      })
      .catch((response) => {
        navigate("/login", {
          state: {
            message: "Dados incorretos, por favor tente novamente",
            type: "error",
          },
        });
        document.location.reload(true);
      });
  };

  const [values, setValues] = React.useState({showPassword: false});

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setSenha(event.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <h1>
        <BiLogInCircle />
        Login
      </h1>
      <form className="formLogin" onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>         
          <FormControl variant="outlined" margin="normal" required>
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            id="email"  
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="email"
                  edge="end"
                >
                  <Email/>
                </IconButton>
              </InputAdornment>
            }
            label="Senha"
          />
        </FormControl>
                 
          <FormControl variant="outlined" margin="normal" required>
          <InputLabel htmlFor="password">Senha</InputLabel>
          <OutlinedInput
            id="password"            
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Senha"
          />
        </FormControl>
        </ThemeProvider>
        <a href="http://www.gogle.com"> Esqueceu sua senha?</a>
        <div>
          <button type="submit">Entrar</button>
        </div>
      </form>
      {message && <Message msg={message} type={type} />}
    </Container>
  );
}
