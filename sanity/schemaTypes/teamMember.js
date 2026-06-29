import { defineField, defineType } from "sanity";

export default defineType({
  name: "teamMember",
  title: "Team",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: Rule => Rule.required() }),
    defineField({ name: "role", title: "Rolle / Position", type: "string" }),
    defineField({ name: "order", title: "Reihenfolge", type: "number", initialValue: 10 }),
    defineField({ name: "image", title: "Foto", type: "image", options: { hotspot: true } }),
    defineField({ name: "quote", title: "Kurztext", type: "text", rows: 3 }),
    defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
    defineField({ name: "showContact", title: "Kontakt anzeigen", type: "boolean", initialValue: false })
  ],
  preview: { select: { title: "name", subtitle: "role", media: "image" } }
});
