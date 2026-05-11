const ArticleSchema = {
  name: "article",
  title: "Write-Ups & Articles",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "postedOn",
      title: "Posted On",
      type: "date",
      options: {
        dateFormat: "MM-DD-YYYY",
        calendarTodayLabel: "Today",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "links",
      title: "Platform Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              type: "string",
              options: { list: ["Medium", "Dev.to", "LinkedIn", "Hashnode"] },
            },
            { name: "url", type: "url" },
          ],
        },
      ],
    },
  ],
};

export default ArticleSchema;
