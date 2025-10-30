import "@/styles/app.scss";

// export const metadata = {
//   title: "Sdornala - Coming Soon Nextjs Template",
//   description: "Coming Soon",
//   siteName: "Sdornala",
//   url: "https://sdornala.in",
//   type: "website",

//   icons: {
//     icon: "/favicon.png",
//   },

//   metadataBase: new URL("https://sdornala.in"),
//   alternates: {
//     canonical: "/",
//   },
//   openGraph: {
//     images: "/ogimage.png",
//   },
// };

export const metadata = {
  title: "Sdornala | Coming Soon - Website & App Development Agency",
  description:
    "Sdornala is a creative tech agency offering website, app, and AI-driven solutions. Coming soon with innovative digital services!",
  keywords: [
    "web development agency",
    "app development",
    "AI solutions",
    "Sdornala",
    "coming soon website",
  ],
  metadataBase: new URL("https://sdornala.in"),
  alternates: { canonical: "https://sdornala.in" },
  openGraph: {
    title: "Sdornala | Coming Soon",
    description:
      "We build websites, apps, and AI projects that make your business stand out. Stay tuned!",
    url: "https://sdornala.in",
    siteName: "Sdornala",
    images: [
      {
        url: "/ogimage.png",
        width: 1200,
        height: 630,
        alt: "Sdornala Coming Soon",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sdornala | Coming Soon",
    description: "Innovative digital agency — launching soon!",
    images: ["/ogimage.png"],
  },
  icons: { icon: "/favicon.png" },
};

const Sdornala = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
export default Sdornala;
