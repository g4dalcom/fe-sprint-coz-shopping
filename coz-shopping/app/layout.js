"use client";

import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";
import Toast from "./component/Toast";

export const metadata = {
  title: "COZ Shopping",
  description: "Solo Project COZ Shopping App",
};

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <title>COZ Shopping</title>
        </head>
        <body>
          <Header />
          {children}
          <Toast />
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
