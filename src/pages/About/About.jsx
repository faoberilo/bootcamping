import { Container, Tech, TechIcons, Icons } from "./styles";
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiNestjs, SiPrisma, SiReact, SiPostgresql } from "react-icons/si";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { CardIcons, Cards } from "./styles";

const About = () => {
  return (
    <Container>
      <h1>Sobre o Projeto</h1>
      <div>
        <p>
          Esse projeto tem como objetivo gerenciar um sistema de Ecommerce.
          Proporcionando uma maneira fácil para o usuário final realizar
          cadastro de produtos, atualização de multiplos itens, geração de
          relatórios e etc.
        </p>
      </div>
      <div>
        <h2>Equipe de Criação</h2>
        <Cards>
          {/* Card Bruno */}
          <Card sx={{ maxWidth: 340 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://avatar.southparkstudios.com.br/wp-content/uploads/2022/01/4e38bc4f26cceb67d0a4cb96b0fe040e.png"
                alt="foto de perfil"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bruno Daniel
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  FullStack Developer
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <CardIcons>
                <IconContext.Provider
                  value={{ style: { fontSize: "2rem", color: "#0e76a8" } }}
                >
                  <a href="http://www.linkedin.com">
                    <FaLinkedin />
                  </a>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ style: { fontSize: "2rem", color: "#171515" } }}
                >
                  <a href="http://www.github.com">
                    <FaGithub />
                  </a>
                </IconContext.Provider>
              </CardIcons>
            </CardActions>
          </Card>
          {/* Card  Felipe Amaral*/}
          <Card sx={{ maxWidth: 340 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://avatar.southparkstudios.com.br/wp-content/uploads/2022/01/4e38bc4f26cceb67d0a4cb96b0fe040e.png"
                alt="foto de perfil"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Felipe Amaral Oliveira
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  FullStack Developer
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <CardIcons>
                <IconContext.Provider
                  value={{ style: { fontSize: "2rem", color: "#0e76a8" } }}
                >
                  <a href="http://www.linkedin.com">
                    <FaLinkedin />
                  </a>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ style: { fontSize: "2rem", color: "#171515" } }}
                >
                  <a href="http://www.github.com">
                    <FaGithub />
                  </a>
                </IconContext.Provider>
              </CardIcons>
            </CardActions>
          </Card>
          {/* Card Felipe Pereira de Pádua */}
          <Card sx={{ maxWidth: 340 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://avatar.southparkstudios.com.br/wp-content/uploads/2022/01/4e38bc4f26cceb67d0a4cb96b0fe040e.png"
                alt="foto de perfil"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Felipe Amaral Oliveira
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  BackEnd Developer
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <CardIcons>
                <IconContext.Provider
                  value={{ style: { fontSize: "2rem", color: "#0e76a8" } }}
                >
                  <a href="http://www.linkedin.com">
                    <FaLinkedin />
                  </a>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ style: { fontSize: "2rem", color: "#171515" } }}
                >
                  <a href="http://www.github.com">
                    <FaGithub />
                  </a>
                </IconContext.Provider>
              </CardIcons>
            </CardActions>
          </Card>

          {/* Card Carlos Eduardo */}
          <Card sx={{ maxWidth: 340 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://avatar.southparkstudios.com.br/wp-content/uploads/2022/01/4e38bc4f26cceb67d0a4cb96b0fe040e.png"
                alt="foto de perfil"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Carlos Eduardo
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  BackEnd Developer
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <CardIcons>
                <IconContext.Provider
                  value={{ style: { fontSize: "2rem", color: "#0e76a8" } }}
                >
                  <a href="http://www.linkedin.com">
                    <FaLinkedin />
                  </a>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ style: { fontSize: "2rem", color: "#171515" } }}
                >
                  <a href="http://www.github.com">
                    <FaGithub />
                  </a>
                </IconContext.Provider>
              </CardIcons>
            </CardActions>
          </Card>

          {/* Card Hudson Oliveira Pereira */}
          <Card sx={{ maxWidth: 340 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://avatar.southparkstudios.com.br/wp-content/uploads/2022/01/4e38bc4f26cceb67d0a4cb96b0fe040e.png"
                alt="foto de perfil"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Hudson Oliveira Pereira
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  BackEnd Developer
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <CardIcons>
                <IconContext.Provider
                  value={{ style: { fontSize: "2rem", color: "#0e76a8" } }}
                >
                  <a href="http://www.linkedin.com">
                    <FaLinkedin />
                  </a>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ style: { fontSize: "2rem", color: "#171515" } }}
                >
                  <a href="http://www.github.com">
                    <FaGithub />
                  </a>
                </IconContext.Provider>
              </CardIcons>
            </CardActions>
          </Card>
          {/* --------------------------------------------------- */}
        </Cards>
      </div>
      <Tech>
        <h2>Tecnologias Utilizadas</h2>
        <TechIcons>
          <IconContext.Provider
            value={{ style: { fontSize: "3rem", color: "#61DBFB" } }}
          >
            <Icons>
              <a href="https://reactjs.org/">
                <SiReact />
              </a>
            </Icons>
          </IconContext.Provider>
          <IconContext.Provider value={{ style: { fontSize: "3rem" } }}>
            <Icons>
              <a href="https://www.prisma.io/">
                <SiPrisma />
              </a>
            </Icons>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ style: { fontSize: "3rem", color: "#EA2845" } }}
          >
            <Icons>
              <a href="https://nestjs.com/">
                <SiNestjs />
              </a>
            </Icons>
          </IconContext.Provider>{" "}
          <IconContext.Provider
            value={{ style: { fontSize: "3rem", color: "#0064a5" } }}
          >
            <Icons>
              <a href="https://www.postgresql.org/">
                <SiPostgresql />
              </a>
            </Icons>
          </IconContext.Provider>
        </TechIcons>
      </Tech>
    </Container>
  );
};

export default About;
