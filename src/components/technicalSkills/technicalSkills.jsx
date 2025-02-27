"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import styles from "./technicalSkills.module.css";
import { useTranslation } from "@/hooks/useTranslations";

// Habilidades divididas por categorías
const skillsCategories = [
  {
    title: "Análisis y Diseño",
    skills: [
      { name: "Mapas de calor", value: 75 },
      { name: "Adobe XD", value: 85 },
      { name: "Wireframing", value: 90 },
      { name: "Sketch", value: 85 },
      { name: "Usabilidad", value: 85 },
      { name: "Responsivo", value: 90 },
      { name: "UI/UX", value: 90 },
      { name: "Figma", value: 88 },
    ],
    color: "#FF6600", 
  },
  {
    title: "Desarrollo Web y Móvil",
    skills: [
      { name: "HTML", value: 95 },
      { name: "JavaScript", value: 90 },
      { name: "TypeScript", value: 90 },
      { name: "Angular", value: 85 },
      { name: "React", value: 80 },
      { name: "Vue.js", value: 75 },
      { name: "Laravel", value: 85 },
      { name: "Flutter", value: 63 },
      { name: "PHP", value: 75 },
      { name: "C#", value: 70 },
    ],
    color: "#007bff",
  },
  {
    title: "Backend y Bases de Datos",
    skills: [
      { name: "MongoDB", value: 80 },
      { name: "SQL Server", value: 85 },
      { name: "Firebase", value: 70 },
      { name: "AWS", value: 75 },
      { name: "Node.js", value: 95 }, 
      { name: "Express", value: 87 },
      { name: "MySQL", value: 98 },   
      { name: "PostgreSQL", value: 62 },
    ],
    color: "#28a745", 
  },
];

const TechnicalSkills = () => {
  const t = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.content_title}>
        <span className={styles.subtitle}>
          <div className={styles.circle}></div>
          {t.skills.subtitle}
        </span>
        <h2>{t.skills.title}</h2>
      </div>

      <div className={styles.chartGrid}>
        {skillsCategories.map((category, index) => (
          <DonutChart key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

const DonutChart = ({ category }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const svg = d3.select(chartRef.current);
    svg.selectAll("*").remove();

    const width = 400;
    const height = 400;
    const margin = { top: 40, right: 40, bottom: 40, left: 40 };
    const radius = Math.min(width, height) / 2;

    svg.attr("width", width).attr("height", height);

    // Crear el arco de donut
    const arc = d3.arc().innerRadius(radius - 100).outerRadius(radius - 30);

    // Crear el generador de gráficos
    const pie = d3.pie().value(d => d.value);

    const colorScale = d3.scaleOrdinal().domain(category.skills.map(d => d.name)).range(d3.schemeCategory10);

    // Grupo para el gráfico
    const g = svg.append("g").attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Agregar los segmentos de la dona
    g.selectAll(".arc")
      .data(pie(category.skills))
      .enter()
      .append("g")
      .attr("class", "arc")
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => colorScale(d.data.name));

    // Agregar etiquetas de habilidad
    g.selectAll(".arc")
      .append("text")
      .attr("transform", d => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("fill", "white")
      .text(d => d.data.name);

  }, [category]);

  return (
    <div className={styles.chartContainer}>
      <h3>{category.title}</h3>
      <svg ref={chartRef} />
    </div>
  );
};

export default TechnicalSkills;









