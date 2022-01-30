// import { Card, Container, Title, Tech, Icons, TechIcons } from "./styles";
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { SiNestjs, SiPrisma, SiReact } from "react-icons/si";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./styles.css";

const About = () => {
  return (
    <>
      <h1>Sobre Nós</h1>
      <div class="Cards">
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
                Bruno
              </Typography>
              <Typography variant="body2" color="text.secondary">
                FullStack Developer
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
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
          </CardActions>
        </Card>

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
                Bruno
              </Typography>
              <Typography variant="body2" color="text.secondary">
                FullStack Developer
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
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
                Bruno
              </Typography>
              <Typography variant="body2" color="text.secondary">
                FullStack Developer
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
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
                Bruno
              </Typography>
              <Typography variant="body2" color="text.secondary">
                FullStack Developer
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
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
                Bruno
              </Typography>
              <Typography variant="body2" color="text.secondary">
                FullStack Developer
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
    // <div>
    //   <Title>Sobre Nós</Title>
    //   <Container>
    //     <Card>
    //       <div className="CardFront">
    //         <img
    //           src="https://avatar.southparkstudios.com.br/wp-content/uploads/2022/01/4e38bc4f26cceb67d0a4cb96b0fe040e.png"
    //           alt="Foto de perfil linkedin"
    //         />
    //       </div>

    //       <div className="CardBack">
    //         <h1>Bruno Daniel</h1>
    //         <Icons>
    //           <a href="http://www.linkedin.com">
    //             <FaLinkedin />
    //           </a>
    //           <a href="http://www.github.com">
    //             <FaGithub />
    //           </a>
    //         </Icons>
    //       </div>
    //     </Card>
    //     <Card>
    //       <div className="CardFront">
    //         <img
    //           src="https://avatar.southparkstudios.com.br/wp-content/uploads/2022/01/4e38bc4f26cceb67d0a4cb96b0fe040e.png"
    //           alt="Foto de perfil linkedin"
    //         />
    //       </div>

    //       <div className="CardBack">
    //         <h1>Carlos Eduardo</h1>
    //         <Icons>
    //           <a href="http://www.linkedin.com">
    //             <FaLinkedin />
    //           </a>
    //           <a href="http://www.github.com">
    //             <FaGithub />
    //           </a>
    //         </Icons>
    //       </div>
    //     </Card>
    //     <Card>
    //       <div className="CardFront">
    //         <img
    //           src="https://avatar.southparkstudios.com.br/wp-content/uploads/2022/01/4e38bc4f26cceb67d0a4cb96b0fe040e.png"
    //           alt="Foto de perfil linkedin"
    //         />
    //       </div>

    //       <div className="CardBack">
    //         <h1>Felipe Amaral Oliveira</h1>
    //         <Icons>
    //           <a href="http://www.linkedin.com">
    //             <FaLinkedin />
    //           </a>
    //           <a href="http://www.github.com">
    //             <FaGithub />
    //           </a>
    //         </Icons>
    //       </div>
    //     </Card>
    //     <Card>
    //       <div className="CardFront">
    //         <img
    //           src="https://avatar.southparkstudios.com.br/wp-content/uploads/2022/01/4e38bc4f26cceb67d0a4cb96b0fe040e.png"
    //           alt="Foto de perfil linkedin"
    //         />
    //       </div>

    //       <div className="CardBack">
    //         <h1>Felipe Pereira de Pádua</h1>
    //         <Icons>
    //           <a href="http://www.linkedin.com">
    //             <FaLinkedin />
    //           </a>
    //           <a href="http://www.github.com">
    //             <FaGithub />
    //           </a>
    //         </Icons>
    //       </div>
    //     </Card>
    //     <Card>
    //       <div className="CardFront">
    //         <img
    //           src="https://avatar.southparkstudios.com.br/wp-content/uploads/2022/01/4e38bc4f26cceb67d0a4cb96b0fe040e.png"
    //           alt="Foto de perfil linkedin"
    //         />
    //       </div>

    //       <div className="CardBack">
    //         <h1>Hudson Oliveira Pereira</h1>
    //         <Icons>
    //           <a href="http://www.linkedin.com">
    //             <FaLinkedin />
    //           </a>
    //           <a href="http://www.github.com">
    //             <FaGithub />
    //           </a>
    //         </Icons>
    //       </div>
    //     </Card>
    //   </Container>

    //   <Tech>
    //     <h2>Tecnologias Utilizadas</h2>
    //     <TechIcons>
    //       <IconContext.Provider
    //         value={{ style: { fontSize: "3rem", color: "#61DBFB" } }}
    //       >
    //         <div>
    //           <a href="https://reactjs.org/">
    //             <SiReact />
    //           </a>
    //         </div>
    //       </IconContext.Provider>
    //       <IconContext.Provider value={{ style: { fontSize: "3rem" } }}>
    //         <div>
    //           <a href="https://www.prisma.io/">
    //             <SiPrisma />
    //           </a>
    //         </div>
    //       </IconContext.Provider>
    //       <IconContext.Provider
    //         value={{ style: { fontSize: "3rem", color: "#EA2845" } }}
    //       >
    //         <div>
    //           <a href="https://nestjs.com/">
    //             <SiNestjs />
    //           </a>
    //         </div>
    //       </IconContext.Provider>
    //     </TechIcons>
    //   </Tech>
    // </div>
  );
};

export default About;
