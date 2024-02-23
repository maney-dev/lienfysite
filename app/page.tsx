import Image from "next/image";
import styles from "./page.module.css";
import Nav from "@/components/Nav";
import Hero from "@/components/home/Hero";
import SectionCompte from "@/components/home/SectionCompte";
import SectionLienfy from "@/components/home/SectionLienfy";
import SectionVisiteur from "@/components/home/SectionVisiteur";
import SectionFaq from "@/components/home/SectionFaq";
import SectionRaccourcis from "@/components/home/SectionRaccourcis";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div style={{ justifyContent: "center" }}>
      <Nav />
      <Hero />
      <div
        style={{
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#EEEEEE",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: "bold",
            paddingBottom: "2rem",
          }}
        >
          Creez un compte et commencez à raccourcir vos liens
        </p>
        <div
          style={{
            border: "1px solid ",
            borderColor: "#858585",
            padding: "50px",
            width: "100%",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        >
          {" "}
          <SectionCompte />
        </div>
      </div>
      <SectionLienfy />
      <SectionVisiteur />
      <SectionFaq />
      <SectionRaccourcis />
      <Footer />
    </div>
  );
}
