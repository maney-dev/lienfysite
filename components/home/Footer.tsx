import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0E1D34",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2.0rem",
          paddingBottom: "0.5rem",
          gap: 6,
        }}
      >
        <Box
          sx={{
            display: "block",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
            paddingLeft: "90px",
            paddingRight: "90px",
            paddingTop: "2rem",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontSize: "2rem", paddingBottom: "1rem" }}
          >
            Lien<span style={{ color: "#FF7F2A" }}>fy</span>
            <p style={{ fontSize: "1rem", color: "gray" }}>
              Le raccourcisseur d&apos;url panafricain.
            </p>{" "}
            <br />
          </Typography>
          <Typography variant="body1" sx={{ color: "gray" }}>
            Sicap Mbao <br />
            Boutique Baye Niass <br />
            Dakar, Senegal
          </Typography>{" "}
          <br />
          <Typography>
            Phone: <span style={{ color: "gray" }}>+221 77 860 60 64</span>{" "}
            <br />
            Email:<span style={{ color: "gray" }}> xaralatech@gmail.com</span>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "block",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
            paddingLeft: "90px",
            paddingRight: "90px",
            paddingTop: "2rem",
          }}
        >
          <Typography variant="h6">Lienfy</Typography> <br />
          <Typography variant="body1" sx={{ color: "gray" }}>
            C’est quoi lienfy ? <br />
            <br />
            Accueil <br />
            <br />
            Blog <br />
            <br />
            Nous contactez <br />
            <br />
            Déconnexion
          </Typography>
        </Box>
        <Box
          sx={{
            display: "block",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
            paddingLeft: "90px",
            paddingRight: "90px",
            // paddingTop: "2rem",
            paddingBottom: "160px",
          }}
        >
          <Typography variant="h6" sx={{ paddingBottom: "25px" }}>
            Mes liens
          </Typography>
          <Typography variant="body1" sx={{ color: "gray" }}>
            Nombre de click{" "}
          </Typography>{" "}
        </Box>
      </Box>

      <Typography variant="body1" sx={{ textAlign: "center", padding: "2rem" }}>
        © Copyright Lienfy. All Rights Reserved. Crée par{" "}
        <span style={{ color: "#FF7F2A" }}>Xarala</span>
      </Typography>
    </Box>
  );
};

export default Footer;
