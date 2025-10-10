// If your CSS file is at app/globals.css (recommended)


// If your CSS is at styles/globals.css (root/styles), use:
import "../styles/globals.css";

const title = "PenakaKred — Debt Collection Agency in Bengaluru";
const description =
  "Ethical, AI-driven loan recovery for Banks, NBFCs & FinTechs. Omnichannel collections, legal desk, repayment portals.";

export const metadata = {
  title,
  description,
  metadataBase: new URL("https://penakakred.com"),
  openGraph: {
    title,
    description,
    url: "https://penakakred.com",
    siteName: "PenakaKred",
    type: "website",
    locale: "en_IN",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {   // ← no types here in JS
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
