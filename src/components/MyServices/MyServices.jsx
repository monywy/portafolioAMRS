"use client";
import styles from "./MyServices.module.css";
import { useEffect, useRef } from "react";
import { servicesAnimation } from "@/utils/animationGsap/AnimationGsap";
import { useTranslation } from "@/hooks/useTranslations";
import { Bolt, Server, Brush, LayoutTemplate, Lightbulb, Monitor } from "lucide-react";

const MyServices = () => {
  const t = useTranslation();

  const services = [
    {
      icon: <Bolt color="var(--subtitle)" width="25px" height="25px" />,
      title: t.services.cards.card_1.title,
      description: t.services.cards.card_1.description,
    },
    {
      icon: <Server color="var(--subtitle)" width="25px" height="25px" />,
      title: t.services.cards.card_2.title,
      description: t.services.cards.card_2.description,
    },
    {
      icon: <Brush color="var(--subtitle)" width="25px" height="25px" />,
      title: t.services.cards.card_3.title,
      description: t.services.cards.card_3.description,
    },
    {
      icon: <LayoutTemplate color="var(--subtitle)" width="25px" height="25px" />,
      title: t.services.cards.card_4.title,
      description: t.services.cards.card_4.description,
    },
    {
      icon: <Lightbulb color="var(--subtitle)" width="25px" height="25px" />,
      title: t.services.cards.card_5.title,
      description: t.services.cards.card_5.description,
    },
    {
      icon: <Monitor color="var(--subtitle)" width="25px" height="25px" />,
      title: t.services.cards.card_6.title,
      description: t.services.cards.card_6.description,
    },
  ];

  const container = useRef(null);
  const title = useRef(null);
  const cardsRef = useRef([]);
  useEffect(() => {
    servicesAnimation({ container, title, cardsRef });
  }, []);

  return (
    <section className={styles.container} ref={container}>
      <div className={styles.content_title} ref={title}>
        <span className={styles.subtitle}>
          <div className={styles.circle}></div>
          {t.services.subtitle}
        </span>
        <h2>{t.services.title}</h2>
      </div>

      <div className={styles.content_card_services}>
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={styles.card_service}
          >
            <i>{service.icon}</i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyServices;
