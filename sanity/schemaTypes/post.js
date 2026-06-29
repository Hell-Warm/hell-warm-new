import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Blog / News",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titel", type: "string", validation: Rule => Rule.required() }),
    defineField({ name: "slug", title: "URL / Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: Rule => Rule.required() }),
    defineField({ name: "publishedAt", title: "Veröffentlicht am", type: "datetime" }),
    defineField({ name: "coverImage", title: "Titelbild", type: "image", options: { hotspot: true } }),
    defineField({ name: "excerpt", title: "Kurztext", type: "text", rows: 3 }),
    defineField({ name: "body", title: "Inhalt", type: "array", of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] }),
    defineField({ name: "seoTitle", title: "SEO Titel", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO Beschreibung", type: "text", rows: 3 })
  ],
  preview: { select: { title: "title", subtitle: "publishedAt", media: "coverImage" } }
});
