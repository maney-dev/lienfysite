import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Lienfy_Xarala from "../../public/assets/lienfy_xarala.png";
import Facilité from "../../public/assets/facilite.png";
import Optimisation from "../../public/assets/optimisation.png";
import Fiabilité from "../../public/assets/fiabilite.png";

const SectionLienfy = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
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
        C’est quoi lienfy ?
      </Typography>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          gap: 50,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "24px",
            fontWeight: "medium",
            paddingBottom: "2rem",
            color: "grey",
          }}
        >
          Lienfy simplifie le partage d&apos;URL en fournissant une solution de{" "}
          <br />
          raccourcissement de liens rapide, sécurisée et conviviale. Explorez
          nos <br />
          fonctionnalités pour comprendre comment Lienfy peut rendre votre{" "}
          <br />
          expérience de partage en ligne plus efficace.&quot;
        </Typography>
        <Image src={Lienfy_Xarala} alt="lien-xarala" />
      </Box>
      <Box
        sx={{
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
          paddingLeft: "400px",
          paddingRight: "400px",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <Box
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
            display: "block",
            backgroundColor: "#FFF7F2",
            borderRadius: "1.5rem",
            width: "100%",
            height: "100%",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#FF7F2A",
              padding: "1.5rem",
            }}
          >
            Facilité
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "5px",
            }}
          >
            <Image src={Facilité} alt="facilité" />
          </Box>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              fontSize: "22px",
              paddingRight: "5%",
              paddingLeft: "5%",
              paddingBottom: "5%",
            }}
          >
            Utilisez notre raccourcisseur d&apos;URL pour rendre vos liens plus
            faciles à partager. Rassemblez gratuitement des statistiques et des
            informations sur le trafic généré par vos liens et impressionnez vos
            cibles avec des liens mémorables et faciles à retenir.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
          paddingLeft: "90px",
          paddingRight: "90px",
          gap: 6,
          paddingTop: "2rem",
        }}
      >
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            display: "block",
            backgroundColor: "#FFF7F2",
            borderRadius: "5px",
            width: "100%",
            height: "100%",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#FF7F2A",
              padding: "1.5rem",
            }}
          >
            Optimisation
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "5px",
            }}
          >
            <Image src={Optimisation} alt="optimisation" />
          </Box>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              fontSize: "22px",
              paddingRight: "5%",
              paddingLeft: "5%",
              paddingBottom: "5%",
            }}
          >
            Une solution pour optimiser l&apos;information face aux limites de
            caractères posées par certains canaux de communication. Notre
            plateforme vous aide à élargir l&apos;étendu de votre message et
            captiver votre cible par des liens simples et attractifs
          </Typography>
        </Box>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            display: "block",
            backgroundColor: "#FFF7F2",
            borderRadius: "5px",
            width: "100%",
            height: "100%",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#FF7F2A",
              padding: "1.5rem",
            }}
          >
            Fiabilité
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "5px",
            }}
          >
            <Image src={Fiabilité} alt="fiabilité" />
          </Box>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              fontSize: "21px",
              paddingRight: "5%",
              paddingLeft: "5%",
              paddingBottom: "5%",
            }}
          >
            Instaurez et Augmentez la fiabilité de vos liens lorsque ceux-ci
            sont longs et/ou incluent une série de variables ambigu. Lienfy est
            conçue pour vous aider à renforcer la sécurité de vos privilèges en
            générant des liens permanents depuis une source fiable.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionLienfy;
