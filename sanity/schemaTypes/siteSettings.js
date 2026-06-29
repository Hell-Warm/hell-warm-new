import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Website-Einstellungen",
  type: "document",
  fields: [
    defineField({ name: "companyName", title: "Firmenname", type: "string", initialValue: "Hell & Warm GmbH" }),
    defineField({ name: "address", title: "Adresse", type: "text", rows: 3 }),
    defineField({ name: "email", title: "E-Mail", type: "string" }),
    defineField({ name: "phone", title: "Telefon", type: "string" }),
    defineField({ name: "whatsapp", title: "WhatsApp Nummer", type: "string" }),
    defineField({ name: "seoTitle", title: "Standard SEO Titel", type: "string" }),
    defineField({ name: "seoDescription", title: "Standard SEO Beschreibung", type: "text", rows: 3 }),
    defineField({ name: "ogImage", title: "Social Share Bild", type: "image", options: { hotspot: true } })
  ]
});
