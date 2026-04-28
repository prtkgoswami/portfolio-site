import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/checkSecret/", "/api/sendMail/"],
    },
    sitemap: "https://www.pratikgoswami.dev/sitemap.xml",
  };
}
