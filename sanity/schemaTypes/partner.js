import { defineField, defineType } from "sanity";

export default defineType({
  name: "partner",
  title: "Partner",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: Rule => Rule.required() }),
    defineField({ name: "type", title: "Kategorie", type: "string", options: { list: ["Umsetzungspartner", "Hersteller", "Lieferant", "Kooperation"] } }),
    defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
    defineField({ name: "website", title: "Website", type: "url" }),
    defineField({ name: "description", title: "Beschreibung", type: "text", rows: 3 }),
    defineField({ name: "capacity", title: "Kapazität / Mitarbeiterzahl", type: "string" }),
    defineField({ name: "featured", title: "Hauptpartner", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Reihenfolge", type: "number", initialValue: 10 })
  ],
  preview: { select: { title: "name", subtitle: "type", media: "logo" } }
});
