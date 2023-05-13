"use client";

import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";

export const metadata = {
  title: "COZ Shopping",
  description: "COZ Shopping App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
