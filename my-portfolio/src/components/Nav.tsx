'use client';

import React, { useState, useEffect, useCallback } from "react";
import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const Nav: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [animateLogout, setAnimateLogout] = useState(false);
  const { user, logout } = useAuth();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (user) setAnimateLogout(true);
  }, [user]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const openMenu = useCallback(() => setToggle(true), []);
  const closeMenu = useCallback(() => setToggle(false), []);

  const handleLogout = useCallback(() => {
    if (window.confirm("Bạn muốn Logout?")) {
      logout();
    }
  }, [logout]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    setIsLogoutVisible(true);
    if (timeoutId) clearTimeout(timeoutId);
  }, [timeoutId]);

  const handleMouseLeave = useCallback(() => {
    const id = setTimeout(() => {
      setIsLogoutVisible(false);
      setIsHovered(false);
    }, 3000);
    setTimeoutId(id);
  }, []);

  return (
    <div className="bg-blue-50 text-black">
      <div style={{ height: 72 }}></div>
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-blue-50 p-4 flex items-center justify-between lg:flex-row transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div>
          <Link href="/" className="font-mono custom-logo text-3xl tracking-wider flex items-center logo bounce-on-load">
            <CgNametag />
            LOGO
          </Link>
        </div>
        <div className="space-x-4">
          <div className="ssm:hidden lg:block space-x-2">
            <Link href="/about" className="hover:bg-gray-500 rounded-full px-5 py-2 text_xl">
              About
            </Link>
            <Link href="/blog" className="hover:bg-gray-500 rounded-full px-5 py-2 text_xl">
              Post
            </Link>
            <Link href="/contact" className="hover:bg-gray-500 rounded-full px-5 py-2 text_xl">
              Contact
            </Link>
            {user ? (
              <div className="relative inline-block text-left animate-bounce">
                <button
                  className="hover:bg-gray-500 rounded-full px-5 py-2 text_x1"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Hi, {user}
                </button>
                <div
                  className={`absolute right-0 mt-2 w-56 bg-gray-100 rounded-md shadow-lg z-10 transition-transform duration-300 ${
                    isHovered || isLogoutVisible ? "scale-y-100" : "scale-y-0"
                  }`}
                  style={{ transformOrigin: "top" }}
                >
                  <button
                    onClick={handleLogout}
                    onMouseEnter={() => setIsLogoutVisible(true)}
                    onMouseLeave={handleMouseLeave}
                    className="block px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-zinc-400 w-full text-left"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <Link href="/login" className="hover:bg-gray-500 rounded-full px-5 py-2 text_x1">
                Log In
              </Link>
            )}
          </div>
          <div className="ssm:block lg:hidden">
            {toggle ? (
              <AiOutlineClose onClick={closeMenu} size={30} className="cursor-pointer" />
            ) : (
              <HiMenuAlt1 onClick={openMenu} size={30} />
            )}
          </div>
        </div>
      </div>

      <div className="ssm:block lg:hidden">
        {toggle && (
          <div className="flex justify-between ml-10">
            <ul>
              <li className="text-xl mb-2 cursor-pointer">
                <Link href="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li className="text-xl mb-2 cursor-pointer">
                <Link href="/blog" onClick={closeMenu}>
                  Post
                </Link>
              </li>
              <li className="text-xl mb-2 cursor-pointer">
                <Link href="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
              {user ? (
                <li className="text-xl mb-2 cursor-pointer">
                  <button onClick={handleLogout}>Log Out</button>
                </li>
              ) : (
                <li className="text-xl mb-2 cursor-pointer">
                  <Link href="/login" onClick={closeMenu}>
                    Log In
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
