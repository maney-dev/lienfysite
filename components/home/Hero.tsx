"use client";

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { Button } from "../Button";
import Link from "next/link";
import Image from "next/image";
import Lienfy from "../../public/assets/lienfy.png";

const BootstrapButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#FF7F2A",
  },
});
/* eslint-disable react/no-children-prop */
const Hero = () => {
  return (
    <div
      style={{
        backgroundColor: "#FFF7F2",
        paddingLeft: "5rem",
        paddingRight: "5rem",
        paddingTop: "5rem",
        gap: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ justifyContent: "space-between" }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "4.5rem",
          }}
          variant="h3"
        >
          Simplifier vos liens pour une navigation fluide grace à notre
          raccourcisseur lien<span style={{ color: "#FF7F2A" }}>fy</span>
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginTop: "0rem", color: "GrayText" }}
        >
          Lienfy est le raccourcisseur d&apos;url panafricain le plus simple.{" "}
          <br />
          Raccourcissez vos liens et faciliter vos partage url.
        </Typography>
        <Link href={"/"}>
          <BootstrapButton
            sx={{ marginTop: "2.5rem" }}
            variant={"contained"}
            color="#FF7F2A"
          >
            Commencez gratuitement
          </BootstrapButton>
        </Link>
      </Box>
      <Image
        style={{ padding: "3rem", width: "100%", height: "100%" }}
        src={Lienfy}
        alt="lienfyImage"
      />
    </div>
  );
};

export default Hero;
