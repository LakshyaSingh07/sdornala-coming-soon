import "@/styles/app.scss";

export const metadata = {
  title: "Sdornala - Coming Soon Nextjs Template",
  description: "Coming Soon",
  siteName: "Slink",
  url: "https://sdornala.in",
  type: "website",

  icons: {
    icon: "/favicon.png",
  },

  metadataBase: new URL("https://sdornala.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/ogimage.png",
  },
};

const SlinkApp = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
export default SlinkApp;