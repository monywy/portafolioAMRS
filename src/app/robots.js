export default function robots() {
  return {
    rules: [
      {
        userAgent: "",
        allow: ["/"],
        disallow: ["/detail"],
      },
    ],
    sitemap: "https://portafolio-MónicaRoque Sánchez.vercel.app/sitemap.xml",
  };
}
