import { defineField, defineType } from "sanity";

export default defineType({
  name: "job",
  title: "Karriere / Stellen",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Stellentitel", type: "string", validation: Rule => Rule.required() }),
    defineField({ name: "slug", title: "URL / Slug", type: "slug", options: { source: "title", maxLength: 96 } }),
    defineField({ name: "location", title: "Standort", type: "string", initialValue: "Münster" }),
    defineField({ name: "employmentType", title: "Art", type: "string", options: { list: ["Vollzeit", "Teilzeit", "Ausbildung", "Minijob", "Praktikum"] } }),
    defineField({ name: "summary", title: "Kurzbeschreibung", type: "text", rows: 3 }),
    defineField({ name: "tasks", title: "Aufgaben", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "benefits", title: "Benefits", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "active", title: "Aktiv sichtbar", type: "boolean", initialValue: true }),
    defineField({ name: "order", title: "Reihenfolge", type: "number", initialValue: 10 })
  ],
  preview: { select: { title: "title", subtitle: "employmentType" } }
});
