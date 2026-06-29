import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Projekte",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Projekttitel", type: "string", validation: Rule => Rule.required() }),
    defineField({ name: "slug", title: "URL / Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: Rule => Rule.required() }),
    defineField({ name: "location", title: "Ort", type: "string" }),
    defineField({ name: "category", title: "Kategorie", type: "string", options: { list: ["Elektroinstallation", "Photovoltaik", "Ladeinfrastruktur", "Generalunternehmer", "HKLS", "Trockenbau"] } }),
    defineField({ name: "year", title: "Jahr", type: "number" }),
    defineField({ name: "featured", title: "Auf Startseite hervorheben", type: "boolean", initialValue: false }),
    defineField({ name: "coverImage", title: "Titelbild", type: "image", options: { hotspot: true } }),
    defineField({ name: "gallery", title: "Bildergalerie", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "summary", title: "Kurzbeschreibung", type: "text", rows: 3 }),
    defineField({ name: "challenge", title: "Herausforderung", type: "text", rows: 4 }),
    defineField({ name: "solution", title: "Lösung", type: "text", rows: 4 }),
    defineField({ name: "result", title: "Ergebnis", type: "text", rows: 4 }),
    defineField({ name: "stats", title: "Kennzahlen", type: "array", of: [{ type: "object", fields: [
      { name: "label", title: "Bezeichnung", type: "string" },
      { name: "value", title: "Wert", type: "string" }
    ] }] }),
    defineField({ name: "seoTitle", title: "SEO Titel", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO Beschreibung", type: "text", rows: 3 })
  ],
  preview: { select: { title: "title", subtitle: "location", media: "coverImage" } }
});
