'use client';

import React from 'react';
import { AuthProvider } from '@/context/AuthContext';
import "@/app/globals.css";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <div className=" w-full h-full flex flex-col">
        {/* Header / Navigation có thể thêm ở đây nếu cần */}
        <main className="flex-1 bg-white w-full">{children}</main>
        {/* Footer có thể thêm ở đây nếu cần */}
      </div>
    </AuthProvider>
  );
};

export default AboutLayout;
