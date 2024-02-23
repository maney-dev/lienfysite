"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";
import link from "../../public/assets/Link.png";

const BootstrapButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#FF7F2A",
  },
});

const SectionRaccourcis = () => {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        paddingLeft: "7rem",
        paddingRight: "7rem",
        gap: 20,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "5rem",
        margin: "2rem",
      }}
    >
      <Box sx={{ justifyContent: "space-between" }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "3.5rem",
          }}
          variant="h3"
        >
          Reduisez la longueur de vos liens d’un seul clic !
          <br />
          <p style={{ fontSize: "1rem", color: "gray", marginTop: "1rem" }}>
            Raccourcissez vos url pour une expérience de partage plus fluide et
            plus rapide
          </p>
        </Typography>
        <Link href={"/"}>
          <BootstrapButton
            sx={{ marginTop: "2.5rem" }}
            variant={"contained"}
            color="#FF7F2A"
          >
            Raccourcir votre lien
          </BootstrapButton>
        </Link>
      </Box>
      <Image
        style={{ padding: "3rem", width: "50%", height: "50%" }}
        src={link}
        alt="lienfyImage"
      />
    </div>
  );
};

export default SectionRaccourcis;
