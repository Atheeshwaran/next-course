"use client";

import Footer from "./footer";
import Header from "./header";
import ApplicationThemeProvider from "components/theme";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApplicationThemeProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </ApplicationThemeProvider>
  );
};

export default LayoutWrapper;
