import SymbioNetCard from "@/assets/images/SymbioNet/Symbionet.webp";
import SymbionNetFirtBanner from "@/assets/images/SymbioNet/first_banner.webp";
import SymbioNet from "@/assets/images/SymbioNet/symbionet_detail.webp";
import portfolioModal from "@/assets/images/Portfolio/headerModalPortfolio.webp";
import portfolioCard from "@/assets/images/Portfolio/cardPortfolio.webp";
import portfolioCapture_1 from "@/assets/images/Portfolio/imageRepresentPortfolio.webp";
import mawidaCard from "@/assets/images/PosadaMawida/mawidaCard.webp";
import posadaModal from "@/assets/images/PosadaMawida/headerModalPosada.webp";
import PosadaCapture_1 from "@/assets/images/PosadaMawida/capture_1.webp";
import driverCard from "@/assets/images/Drivers/DriverCard.webp";
import driversModal from "@/assets/images/Drivers/headerModalDriver.webp";
import driversCapture_1 from "@/assets/images/Drivers/Capture_1.webp";
import MexicoDestinosCard from "@/assets/images/MexicoDestinos/img2.png";
import MexicoDestinosModal from "@/assets/images/MexicoDestinos/img1portada.png";
import MIACard from "@/assets/images/MIA/mia-reef3.jpg";
import MIACard1 from "@/assets/images/MIA/mia-bacalar.webp";
import MIACard2 from "@/assets/images/MIA/city-villahermosa.webp";
import XtremeJumpingCard from "@/assets/images/XtremeJumping/xtreme-jumping.webp";
import weCapture_1 from "@/assets/images/WeDevelop/capture_1.webp";
import grupoZuritaCard from "@/assets/images/GrupoZurita/GrupoZuritaCard.webp";
import grupoZuritaBanner from "@/assets/images/GrupoZurita/grupoZuritaBanner.webp";
import grupoZuritaWeb from "@/assets/images/GrupoZurita/paginaWebZurita.webp";
import { useTranslation } from "@/hooks/useTranslations";

export const getProjects = () => {
  const t = useTranslation();

  return [
    {
      id: 1,
      name: t.projects.projectDetails.weDevelop.name,
      cargo: t.projects.projectDetails.weDevelop.cargo,
      date: t.projects.projectDetails.weDevelop.date,
      imageCard: MexicoDestinosCard,
      imageModal:MexicoDestinosModal,
      paragraph_1: t.projects.projectDetails.weDevelop.paragraph_1,
      paragraph_2: t.projects.projectDetails.weDevelop.paragraph_2,
      technologies:
        "Javascript · ReactJs · Redux · NodeJs · Express · MongoDB · Mercado Pago · Aut0",
      repository: "https://github.com/Freetzen/WeDevelop",
      img: weCapture_1,
    },
    {
      id: 2,
      name: t.projects.projectDetails.drivers.name,
      cargo: t.projects.projectDetails.drivers.cargo,
      date: t.projects.projectDetails.drivers.date,
      imageCard: MIACard,
      imageModal: driversModal,
      paragraph_1: t.projects.projectDetails.drivers.paragraph_1,
      paragraph_2: t.projects.projectDetails.drivers.paragraph_2,
      technologies:
        "Javascript · React · Redux · Node.js · Express · Postgresql · Sequelize",
      repository: "https://github.com/monywy?tab=repositories",
      img: driversCapture_1,
    },

    {
      id: 3,
      name: t.projects.projectDetails.symbioNet.name,
      cargo: t.projects.projectDetails.symbioNet.cargo,
      date: t.projects.projectDetails.symbioNet.date,
      imageCard: MIACard1,
      imageModal: SymbionNetFirtBanner,
      paragraph_1: t.projects.projectDetails.symbioNet.paragraph_1,
      paragraph_2: t.projects.projectDetails.symbioNet.paragraph_2,
      technologies: "Javascript · React · Next.js · CSS Modules · GSAP",
      repository: "https://github.com/monywy?tab=repositories",
      web: "https://www.symbionet.tech/",
      img: SymbioNet,
    },

    {
      id: 4,
      name: t.projects.projectDetails.grupoZurita.name,
      cargo: t.projects.projectDetails.grupoZurita.cargo,
      date: t.projects.projectDetails.grupoZurita.date,
      imageCard:MIACard2,
      imageModal: grupoZuritaBanner,
      paragraph_1: t.projects.projectDetails.grupoZurita.paragraph_1,
      paragraph_2: t.projects.projectDetails.grupoZurita.paragraph_2,
      technologies: "Javascript · React · Next.js · CSS Modules · GSAP",
      repository: "https://github.com/monywy?tab=repositories",
      web: "https://grupo-zurita.vercel.app/",
      img: grupoZuritaWeb,
    },

    {
      id: 5,
      name: t.projects.projectDetails.posadaMawida.name,
      cargo: t.projects.projectDetails.posadaMawida.cargo,
      date: t.projects.projectDetails.posadaMawida.date,
      imageCard: XtremeJumpingCard,
      imageModal: posadaModal,
      paragraph_1: t.projects.projectDetails.posadaMawida.paragraph_1,
      paragraph_2: t.projects.projectDetails.posadaMawida.paragraph_2,
      technologies:
        "Javascript · ReactJs · chakraUi · Redux · Node.js · Express · MongoDB",
      repository: "https://github.com/Freetzen/Menu-Posada-Mawida",
      img: PosadaCapture_1,
    },

    {
      id: 6,
      name: t.projects.projectDetails.personalPortfolio.name,
      cargo: t.projects.projectDetails.personalPortfolio.cargo,
      date: t.projects.projectDetails.personalPortfolio.date,
      imageCard: portfolioCard,
      imageModal: portfolioModal,
      paragraph_1: t.projects.projectDetails.personalPortfolio.paragraph_1,
      paragraph_2: t.projects.projectDetails.personalPortfolio.paragraph_2,
      technologies:
        "JavaScript · React.js · Next.js · CSS Modules · Zustand · GSAP",
      repository: "https://github.com/monywy?tab=repositories",
      img: portfolioCapture_1,
    },
  ];
};
