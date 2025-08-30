"use client";

import Footer from "./footer";
import Header from "./header";
import ApplicationThemeProvider from "components/theme";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "utils/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();
const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ApplicationThemeProvider>
        <Header />
        {children}
        <Footer />
      </ApplicationThemeProvider>
    </CacheProvider>
  );
};

export default LayoutWrapper;
