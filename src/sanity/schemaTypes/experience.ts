import type { Rule as RuleType } from "@sanity/types";

const ExperienceSchema =  {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Experience", value: "experience" },
          { title: "Education", value: "education" },
        ],
        layout: "dropdown",
      },
      validation: (Rule: RuleType) => Rule.required(),
    },
    { name: "organization", title: "Organization", type: "string" },
    { name: "position", title: "Position", type: "string" },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "altText", title: "Alt Text", type: "string" }],
    },
    { name: "from", title: "From (date)", type: "date" },
    { name: "to", title: "To (date)", type: "date" },
    {
      name: "isCurrent",
      title: "Current?",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "desc",
      title: "Description / bullets",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "order", title: "Order (manual)", type: "number" },
  ],
  preview: {
    select: { title: "organization", subtitle: "position", media: "logo" },
  },
};

export default ExperienceSchema;