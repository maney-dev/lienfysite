import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import Cody_Fisher from "../../public/assets/Cody Fisher.png";
import Kristin_Watson from "../../public/assets/Kristin Watson.png";
import Jerome_Bell from "../../public/assets/Jerome Bell.png";
// import { shadows } from "@material-ui/system";

const SectionVisiteur = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#EEEEEE",
        justifyContent: "center",
        alignItems: "center",
        padding: "5.0rem",
        paddingBottom: "0.5rem",
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
        Ce que disent nos visiteurs
      </Typography>
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
            backgroundColor: "#FFFFFF",
            borderRadius: "2rem",
            width: "100%",
            height: "100%",
            marginTop: "5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "5px",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                position: "absolute",
                objectFit: "cover",
              }}
              src={Cody_Fisher}
              alt="cody"
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontSize: "25px",
              fontWeight: "bold",
              paddingTop: "4rem",
              paddingBottom: "2rem",
            }}
          >
            Cody Fisher
          </Typography>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore <br /> Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo con <br /> Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatu <br />{" "}
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id es
          </Typography>
        </Box>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            display: "block",
            backgroundColor: "#FFFFFF",
            borderRadius: "2rem",
            width: "100%",
            height: "100%",
            marginTop: "5rem",
            marginBottom: "18rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "5px",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                position: "absolute",
                objectFit: "cover",
              }}
              src={Kristin_Watson}
              alt="kristin"
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontSize: "25px",
              fontWeight: "bold",
              paddingTop: "4rem",
              paddingBottom: "2rem",
            }}
          >
            Kristin Waston
          </Typography>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore <br /> Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo con <br /> Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatu <br />{" "}
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id es
          </Typography>
        </Box>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            display: "block",
            backgroundColor: "#FFFFFF",
            borderRadius: "2rem",
            width: "100%",
            height: "100%",
            marginTop: "5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "5px",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                position: "absolute",
                objectFit: "cover",
              }}
              src={Jerome_Bell}
              alt="jerome"
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontSize: "25px",
              fontWeight: "bold",
              paddingTop: "4rem",
              paddingBottom: "2rem",
            }}
          >
            Jerome_Bell
          </Typography>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore <br /> Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo con <br /> Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatu <br />{" "}
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id es
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionVisiteur;
