// src/sanity/structure.ts
import { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(S.document().schemaType("siteConfig").documentId("siteConfig")),

      S.divider(),

      S.listItem().title("Projects").child(S.documentTypeList("project").title("Projects")),

      S.listItem().title("Experience").child(S.documentTypeList("experience").title("Experience")),

      S.listItem().title("Skills").child(S.documentTypeList("skillCategory").title("Skill Categories")),

      S.listItem().title("Contacts").child(S.documentTypeList("contact").title("Contacts")),

      S.divider(),

      // other doc types (if any)
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["siteConfig", "project", "experience", "skillCategory", "contact"].includes(listItem.getId() ?? "")
      ),
    ]);
