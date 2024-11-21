'use client'; // Đảm bảo đánh dấu là Client Component

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation"; // Dùng next/navigation thay vì next/router trong Client Components

// Định nghĩa kiểu dữ liệu cho context
interface AuthContextType {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

// Tạo context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Tạo provider cho context
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const router = useRouter(); // Gọi useRouter trực tiếp trong function component

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUser(storedUsername); // Đặt trạng thái người dùng từ localStorage
    }
  }, []);

  const login = useCallback((username: string) => {
    localStorage.setItem("username", username);
    setUser(username);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("username");
    setUser(null);
    router.push("/login"); // Chuyển hướng sau khi logout
  }, [router]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook để sử dụng context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
