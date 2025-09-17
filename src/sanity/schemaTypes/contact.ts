const ContactSchema =  {
  name: "contact",
  title: "Contact / Social",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "url", title: "URL", type: "url" },
    {
      name: "icon",
      title: "FontAwesome Icon Name",
      type: "string",
      description: "e.g., 'github', 'linkedin', 'twitter' or provide glyph",
    },
    { name: "order", title: "Order (manual)", type: "number" },
  ],
  preview: { select: { title: "title", subtitle: "url" } },
};

export default ContactSchema;