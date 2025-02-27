"use client";
import MainPage from "@/components/MainPage/MainPage";
import styles from "./page.module.css";
import AboutMe from "@/components/AboutMe/AboutMe";
import MyProjects from "@/components/MyProjects/MyProjects";
import MyServices from "@/components/MyServices/MyServices";
import ContactMe from "@/components/ContactMe/ContactMe";
import TechnicalSkills from "@/components/technicalSkills/technicalSkills";

export default function Home() {
  return (
    <main className={styles.page}>
      <MainPage />
      <AboutMe />
      <TechnicalSkills />
      <MyServices />
      <MyProjects />
      <ContactMe />
    </main>
  );
}
