import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import { Poppins } from "next/font/google";
import ButtonLanguague from "@/components/ButtonLanguague/ButtonLanguague";
import CursorPoiter from "@/components/CursorPoiter/CursorPoiter";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://MónicaRoque.com.ar/"),
  title: "Mónica Roque Sánchez  - Front End Developer",
  description:
    "Desarrollador Front End en React y Next.js, creando aplicaciones web optimizadas y experiencias de usuario. Descubre mis proyectos y desafíos profesionales.",
  keywords:
    "Mónica Roque Sánchez , Front End Developer, desarrollador web, React, Next.js, desarrollo de aplicaciones, interfaces de usuario, diseño web, JavaScript, desarrollo web, UI/UX, optimización de rendimiento, integración de APIs, desarrollo responsivo, animaciones web, tecnologías modernas",
  author: "Mónica Roque Sánchez ",
  openGraph: {
    title: "Mónica Roque Sánchez  - Front End Developer",
    description:
      "Desarrollador Front End con experiencia en React y Next.js, especializado en la creación de interfaces intuitivas y optimizadas.",
    images: "/image.jpeg",
    url: "/",
    type: "website",
    site_name: "Mónica Roque Sánchez  - Portfolio",
  },
  alternates: {
    canonical: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mónica Roque Sánchez  - Front End Developer",
    description:
      "Soy desarrollador Front End con experiencia en React y Next.js. Diseño y desarrollo aplicaciones web con un enfoque en rendimiento y usabilidad.",
    images: "/image.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <NavBar />
        <CursorPoiter />
        {children}
        <ButtonLanguague />
        <Footer />
      </body>
    </html>
  );
}
