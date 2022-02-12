import { Container, Tech, TechIcons, Icons } from "./styles";
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  SiNestjs,
  SiPrisma,
  SiReact,
  SiPostgresql,
  SiSwagger,
} from "react-icons/si";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { CardIcons, Cards } from "./styles";
import Tooltip from "@mui/material/Tooltip";
import { Icon } from "@iconify/react";
import fileTypeJsOfficial from "@iconify/icons-vscode-icons/file-type-js-official";

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
                height="300"
                image="https://avatars.githubusercontent.com/u/7354637?s=400&u=a130b60d999099fe833134e357fb1ffc24959826&v=4"
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
                height="300"
                image="https://avatars.githubusercontent.com/u/89050385?v=4"
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
                height="300"
                image="https://avatars.githubusercontent.com/u/89053801?v=4"
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
                height="300"
                image="https://avatars.githubusercontent.com/u/83725112?v=4"
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
                height="300"
                image="https://avatars.githubusercontent.com/u/79792101?v=4"
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
          <Icons>
            <Tooltip title="Material Design" placement="right-start">
              <a href="https://mui.com/">
                <Icon icon="simple-icons:mui" width="60" height="60" />
              </a>
            </Tooltip>
          </Icons>
          <Icons>
            <Tooltip title="Javascript" placement="right-start">
              <a href="https://www.javascript.com/">
                <Icon icon={fileTypeJsOfficial} width="60" />
              </a>
            </Tooltip>
          </Icons>

          <Icons>
            <Tooltip title="React" placement="right-start">
              <a href="https://reactjs.org/">
                <Icon icon="logos:react" width="60" height="60" />
              </a>
            </Tooltip>
          </Icons>

          <Icons>
            <Tooltip title="Prisma" placement="right-start">
              <a href="https://www.prisma.io/">
                <Icon
                  icon="vscode-icons:file-type-light-prisma"
                  width="60"
                  height="60"
                />
              </a>
            </Tooltip>
          </Icons>

          <Icons>
            <Tooltip title="NestJS" placement="right-start">
              <a href="https://nestjs.com/">
                <Icon icon="logos:nestjs" width="60" height="60" />
              </a>
            </Tooltip>
          </Icons>

          <Icons>
            <Tooltip title="PostgreSQL" placement="right-start">
              <a href="https://www.postgresql.org/">
                <Icon icon="logos:postgresql" width="60" height="60" />
              </a>
            </Tooltip>
          </Icons>
          <Icons>
            <Tooltip title="Swagger" placement="right-start">
              <a href="https://swagger.io/">
                <Icon icon="logos:swagger" width="60" />
              </a>
            </Tooltip>
          </Icons>
        </TechIcons>
      </Tech>
    </Container>
  );
};

export default About;
