'use client';

import React, { PropsWithChildren } from "react";
import "@/app/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className="w-full h-full">
      <body className="bg-gray-50 w-full h-full flex flex-col">
        <AuthProvider>
          <Nav />
          <main className="flex-grow w-full">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
};

export default Layout;
