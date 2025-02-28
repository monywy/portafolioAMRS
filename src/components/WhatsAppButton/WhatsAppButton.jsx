"use client";
import React, { useState, useEffect } from "react";
import styles from "./WhatsAppButton.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "@/hooks/useTranslations";

const WhatsAppButton = () => {
  const t = useTranslation();
  const [showTooltip, setShowTooltip] = useState(false);
  const messages = [t.whatsappButton.title1, t.whatsappButton.title2];
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTooltip(true);
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      setTimeout(() => setShowTooltip(false), 2000); 
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.whatsappContainer}>
      {showTooltip && (
        <div className={styles.tooltip}>
          {messages[messageIndex]}
        </div>
      )}
      <a
        href="https://wa.me/529984139599" 
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
      >
        <FaWhatsapp size={40} />
      </a>
    </div>
  );
};

export default WhatsAppButton;

