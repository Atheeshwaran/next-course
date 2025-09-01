"use client";

import Footer from "components/layout/footer";
import Header from "components/layout/header";
import ApplicationThemeProvider from "components/context/theme";
import EmotionRegistry from "./emotionRegistry";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <EmotionRegistry>
      <ApplicationThemeProvider>
        <Header />
        {children}
        <Footer />
      </ApplicationThemeProvider>
    </EmotionRegistry>
  );
};
