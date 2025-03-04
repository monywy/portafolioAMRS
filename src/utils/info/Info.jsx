import SymbioNetCard from "@/assets/images/SymbioNet/Symbionet.webp";
import SymbionNetFirtBanner from "@/assets/images/SymbioNet/first_banner.webp";
import SymbioNet from "@/assets/images/SymbioNet/symbionet_detail.webp";
import portfolioModal from "@/assets/images/CardioTrack/cardio-track1.png";
import portfolioCard from "@/assets/images/Portfolio/cardPortfolio.webp";
import portfolioCapture_1 from "@/assets/images/CardioTrack/panel-cardiotrack.png";
import mawidaCard from "@/assets/images/PosadaMawida/mawidaCard.webp";
import posadaModal from "@/assets/images/PosadaMawida/headerModalPosada.webp";
import PosadaCapture_1 from "@/assets/images/PosadaMawida/capture_1.webp";
import driversModal from "@/assets/images/Drivers/headerModalDriver.webp";
import driversCapture_1 from "@/assets/images/Drivers/Capture_1.webp";
import MexicoDestinosCard from "@/assets/images/MexicoDestinos/img6.png";
import MexicoDestinosModal from "@/assets/images/MexicoDestinos/img5.png";
import MexicoDestinosImg from "@/assets/images/MexicoDestinos/img1portada.png";
import MIACard from "@/assets/images/MIA/mia-reef3.jpg";
import MIAModal from "@/assets/images/MIA/mia-reef2.jpg";
import MIAImg1 from "@/assets/images/MIA/mia-reefp1.png";
import MIACard1 from "@/assets/images/MIA/mia-bacalar.webp";
import MIAModal1 from "@/assets/images/MIA/mia-bacalar2.jpg";
import MIAImg2 from "@/assets/images/MIA/mia-bacalarp1.png";
import MIACard2 from "@/assets/images/MIA/city-villahermosa.webp";
import MIAModal2 from "@/assets/images/MIA/city-villahermosa2.webp";
import MIAImg3 from "@/assets/images/MIA/villahermosa3.png";
import XtremeJumpingCard from "@/assets/images/XtremeJumping/xtreme-jumping.webp";
import XtremeJumpingModal from "@/assets/images/XtremeJumping/xtreme1.png";
import XtremeJumpingImg from "@/assets/images/XtremeJumping/panel-xtreme.png";
import CardioTrackCard from "@/assets/images/CardioTrack/img-product2.webp";
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
        "Javascript · ReactJs · NodeJs · Express · MongoDB · Strippe",
      web: "https://www.mexicodestinos.com/",
      img: MexicoDestinosImg,
    },
    {
      id: 2,
      name: t.projects.projectDetails.drivers.name,
      cargo: t.projects.projectDetails.drivers.cargo,
      date: t.projects.projectDetails.drivers.date,
      imageCard: MIACard,
      imageModal: MIAModal,
      paragraph_1: t.projects.projectDetails.drivers.paragraph_1,
      paragraph_2: t.projects.projectDetails.drivers.paragraph_2,
      technologies:
        "JavaScript · React · Tailwind CSS · SQL · PostgreSQL · Adobe XD",
      web: "https://www.hotelmiareefislamujeres.com/",
      img: MIAImg1,
    },

    {
      id: 3,
      name: t.projects.projectDetails.symbioNet.name,
      cargo: t.projects.projectDetails.symbioNet.cargo,
      date: t.projects.projectDetails.symbioNet.date,
      imageCard: MIACard1,
      imageModal: MIAModal1,
      paragraph_1: t.projects.projectDetails.symbioNet.paragraph_1,
      paragraph_2: t.projects.projectDetails.symbioNet.paragraph_2,
      technologies: "Javascript · React · Tailwind CSS · SQL · Postgresql ·Adobe XD",
      web: "https://www.miabacalar.com/",
      img: MIAImg2,
    },

    {
      id: 4,
      name: t.projects.projectDetails.grupoZurita.name,
      cargo: t.projects.projectDetails.grupoZurita.cargo,
      date: t.projects.projectDetails.grupoZurita.date,
      imageCard:MIACard2,
      imageModal: MIAModal2,
      paragraph_1: t.projects.projectDetails.grupoZurita.paragraph_1,
      paragraph_2: t.projects.projectDetails.grupoZurita.paragraph_2,
      technologies:  "Javascript · React · Tailwind CSS · SQL · Postgresql ·Adobe XD",
      web: "https://www.miacityvillahermosa.com/",
      img: MIAImg3,
    },

    {
      id: 5,
      name: t.projects.projectDetails.posadaMawida.name,
      cargo: t.projects.projectDetails.posadaMawida.cargo,
      date: t.projects.projectDetails.posadaMawida.date,
      imageCard: XtremeJumpingCard,
      imageModal: XtremeJumpingModal,
      paragraph_1: t.projects.projectDetails.posadaMawida.paragraph_1,
      paragraph_2: t.projects.projectDetails.posadaMawida.paragraph_2,
      technologies:
        "Angular · SCSS · Heroku · Mongo DB · Firebase · Strippe · Figma · Prime NG",
      repository: "https://github.com/Freetzen/Menu-Posada-Mawida",
      img: XtremeJumpingImg,
    },

    {
      id: 6,
      name: t.projects.projectDetails.personalPortfolio.name,
      cargo: t.projects.projectDetails.personalPortfolio.cargo,
      date: t.projects.projectDetails.personalPortfolio.date,
      imageCard: CardioTrackCard,
      imageModal: portfolioModal,
      paragraph_1: t.projects.projectDetails.personalPortfolio.paragraph_1,
      paragraph_2: t.projects.projectDetails.personalPortfolio.paragraph_2,
      technologies:
        "Angular · SCSS · Firebase · MongoDB · Google Analytics · Prime NG · Adobe XD",
      web: "https://www.cardiotrack.mx/home",
      img: portfolioCapture_1,
    },
  ];
};
