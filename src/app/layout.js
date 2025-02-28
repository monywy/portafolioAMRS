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
  title: "Mónica Roque Sánchez  - Desarrolladora Full Stack Junio",
  description:
    "¡Hola! Soy Mónica, desarrolladora full stack junior.Me especializo en el desarrollo de aplicaciones web y móviles intuitivas y eficientes, diseñadas para optimizar la experiencia del usuario. Cada desafío representa una oportunidad para innovar y ofrecer soluciones tecnológicas de alto impacto.",
  keywords:
    "Mónica Roque Sánchez ,Desarrolladora Full Stack Junior, Me especializo en el desarrollo de aplicaciones web y móviles intuitivas y eficientes, diseñadas para optimizar la experiencia del usuario. Cada desafío representa una oportunidad para innovar y ofrecer soluciones tecnológicas de alto impacto.",
  author: "Mónica Roque Sánchez ",
  openGraph: {
    title: "Mónica Roque Sánchez  - Desarrolladora Full Stack Junior",
    description:
      "Me especializo en el desarrollo de aplicaciones web y móviles intuitivas y eficientes, diseñadas para optimizar la experiencia del usuario. Cada desafío representa una oportunidad para innovar y ofrecer soluciones tecnológicas de alto impacto.",
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
    title: "Mónica Roque Sánchez  - Desarrolladora Full Stack Junior",
    description:
      "Me especializo en el desarrollo de aplicaciones web y móviles intuitivas y eficientes, diseñadas para optimizar la experiencia del usuario. Cada desafío representa una oportunidad para innovar y ofrecer soluciones tecnológicas de alto impacto.",
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
