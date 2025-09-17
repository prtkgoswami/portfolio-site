import { SanityImage } from "@sanity/types";

interface PreviewSelection {
  title?: string;
  media?: SanityImage; // could be SanityImageAsset, File, etc. depending on your schema
  category?: string;
}

const ProjectsSchema = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    {
      name: "image",
      title: "Project Screenshot",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Describe the image for accessibility & SEO",
        },
      ],
    },
    { name: "category", title: "Category", type: "string" }, // or change to reference if you want categories as docs
    { name: "liveLink", title: "Live Link", type: "url" },
    { name: "repoLink", title: "Repo Link", type: "url" },
    { name: "desc", title: "Description", type: "text" },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "showOnPortfolio",
      title: "Show on Portfolio",
      type: "boolean",
      initialValue: true,
    },
    { name: "order", title: "Order (manual)", type: "number" }, // optional for manual ordering
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
      category: "category",
    },
    prepare(selection: PreviewSelection) {
      return {
        title: selection.title,
        subtitle: selection.category,
        media: selection.media,
      };
    },
  },
};

export default ProjectsSchema;