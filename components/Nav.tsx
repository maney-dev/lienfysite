"use client";

import { Button } from "./Button";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/assets/logo.png";

const BootstrapButton = styled(Button)({
  "&:hover": {
    backgroundColor: "#FF7F2A",
  },
});
const Nav = () => {
  return (
    <div
      style={{
        backgroundColor: "#0E1D34",
        paddingLeft: "5rem",
        paddingRight: "5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        width: "100%",
        zIndex: 10,
      }}
    >
      <Link href={"/"}>
        <Image src={Logo} alt="logo" width={120} height={40} />
      </Link>
      <ul
        style={{
          textDecoration: "none",
          color: "white",
          justifyContent: "space-between",
        }}
      >
        <Link href={"/"} style={{ marginRight: "2rem", transition: "all" }}>
          <span style={{ color: "#FF7F2A" }}>Accueil</span>
        </Link>
        <Link href={"/"} style={{ marginRight: "2rem" }}>
          Mes Liens
        </Link>
        <Link href={"/"} style={{ marginRight: "2rem" }}>
          Blog
        </Link>
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          //   gap: "10px",
          padding: "1rem 1rem",
        }}
      >
        <BootstrapButton
          variant="text"
          style={{
            backgroundColor: "#FF7F2A",
            marginRight: "2rem",
            padding: "1rem",
            color: "white",
            border: "1px solide",
            borderRadius: "10px",
            width: "190px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
          color={""}
        >
          {" "}
          <span style={{ textAlign: "center" }}>Se connecter</span>
        </BootstrapButton>
        <BootstrapButton
          variant="text"
          style={{
            backgroundColor: "#FF7F2A",
            marginRight: "2rem",
            padding: "1rem",
            color: "white",
            border: "1px solide",
            borderRadius: "10px",
            width: "190px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
          color={""}
        >
          <span> S&apos;inscrire</span>
        </BootstrapButton>
      </div>
    </div>
  );
};

export default Nav;
