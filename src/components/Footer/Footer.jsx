import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
const Footer = () => {
  return (
    <Box
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5, sm: 10 }}
      bgcolor="text.secondary"
      color="white"
      sx={{ height: "-1em" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={8} sm={4}>
            <Box borderBottom={1}>Help</Box>
            <Box>
              <Link href="/" color="inherit">
                Contato
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Suporte
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
