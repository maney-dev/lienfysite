import React from "react";
import { Box, Typography } from "@mui/material";

const SectionFaq = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FCFCFC",
        justifyContent: "center",
        alignItems: "center",
        padding: "5.0rem",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
          paddingBottom: "2rem",
        }}
      >
        FAQ
      </Typography>
      <Box
        sx={{
          display: "bock",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
          paddingLeft: "90px",
          paddingRight: "90px",
          paddingTop: "0rem",
        }}
      >
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            display: "block",
            backgroundColor: "#FFFFFF",
            border: "1px solid",
            borderBlockColor: "GrayText",
            borderRadius: "1rem",
            width: "100%",
            height: "100%",
            marginTop: "2rem",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
              paddingTop: "4rem",
              paddingBottom: "2rem",
              color: "#FF7F2A",
            }}
          >
            1. Q : Pourquoi raccourcir un lien ?
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              fontSize: "22px",
              paddingRight: "8%",
              paddingLeft: "8%",
              paddingBottom: "5%",
            }}
          >
            <span style={{ color: "#FF7F2A" }}>. R : </span>Les liens raccourcis
            sont plus esthétiques et prennent moins de place. <br />
            Ils sont souvent utilisés sur les plateformes de médias sociaux où
            l&apos;espace est limité.
          </Typography>
        </Box>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            display: "block",
            backgroundColor: "#FFFFFF",
            border: "1px solid",
            borderBlockColor: "GrayText",
            borderRadius: "1rem",
            width: "100%",
            height: "100%",
            marginTop: "2rem",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
              paddingTop: "4rem",
              paddingBottom: "2rem",
              color: "#FF7F2A",
            }}
          >
            2. Q : Quels sont les avantages de raccourcir un lien ?
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              fontSize: "22px",
              paddingRight: "8%",
              paddingLeft: "8%",
              paddingBottom: "5%",
            }}
          >
            <span style={{ color: "#FF7F2A" }}>. R : </span> Amélioration de
            l&apos;esthétique des liens <br />
            <span style={{ color: "#FF7F2A" }}>.</span>Économie d&apos;espace
            sur les supports limités en caractères <br />{" "}
            <span style={{ color: "#FF7F2A" }}>.</span>Suivi des clics pour
            évaluer la popularité ou l&#39;efficacité du lien
          </Typography>
        </Box>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            display: "block",
            backgroundColor: "#FFFFFF",
            border: "1px solid",
            borderBlockColor: "gray",
            borderRadius: "1rem",
            width: "100%",
            height: "100%",
            marginTop: "2rem",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
              paddingTop: "4rem",
              paddingBottom: "2rem",
              color: "#FF7F2A",
            }}
          >
            3. Q : Est-ce sécuritaire d&apos;utiliser des liens raccourcis
            ?Est-ce sécuritaire d&apos;utiliser des liens raccourcis ?
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              fontSize: "22px",
              paddingRight: "8%",
              paddingLeft: "8%",
              paddingBottom: "5%",
            }}
          >
            <span style={{ color: "#FF7F2A" }}>. R : </span> En général, oui.
            Cependant, soyez conscient que les liens raccourcis peuvent <br />{" "}
            masquer la destination réelle, ce qui pourrait être exploité à des
            fins malveillantes. Utilisez des services réputés pour minimiser les
            risques.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionFaq;
