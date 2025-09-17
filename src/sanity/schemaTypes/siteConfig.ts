const SiteConfigSchema =  {
  name: "siteConfig",
  title: "Site Configuration",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "altText", title: "Alt Text", type: "string" }],
    },
    { name: "title", title: "Site Title", type: "string" },
    { name: "subTitle", title: "Subtitle", type: "string" },
    { name: "cv", title: "CV / Resume", type: "file" },
    {
      name: "about",
      title: "About",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "text", title: "Text", type: "text" },
      ],
    },
    { name: "footerText", title: "Footer text", type: "string" },
  ],
  preview: { select: { title: "title" } },
};

export default SiteConfigSchema;