const SkillSchema = {
  name: "skillCategory",
  title: "Skill Category",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "order", title: "Order (manual)", type: "number" },
  ],
  preview: { select: { title: "title" } },
};

export default SkillSchema;