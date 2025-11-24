import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { useState } from "react";
import TargetCursor from "./components/TargetCursor";



export const metadata: Metadata = {
  title: "TELECARESERVICES",
  description: "Dev build",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
           <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
          <Navbar />
            {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
