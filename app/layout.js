import "./globals.css";

export const metadata = {
  title: "Elektroinstallation Münster | Hell & Warm GmbH",
  description: "Elektroinstallation Münster für Gewerbe, Photovoltaik und Ladeinfrastruktur. Hell & Warm GmbH – Ihr Partner für B2B Bauprojekte in Münster und Umgebung.",
  openGraph: {
    title: "Hell & Warm GmbH – Elektroinstallation Münster",
    description: "Elektroinstallation, Photovoltaik und Ladeinfrastruktur für Unternehmen in Münster und Umgebung.",
    type: "website",
    locale: "de_DE"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
