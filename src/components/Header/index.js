"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import navbarMenuData from "./navbarMenuData";

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // adjust threshold if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full ${
        scrolled ? "bg-white/20 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/images/logo/logo.png" alt="logo" width={140} height={54} priority />
          </Link>
        </div>
        <nav
          ref={menuRef}
          className="flex space-x-8 rounded-full border border-gray-200 px-6 py-2 shadow-sm"
        >
          {navbarMenuData.map((item) =>
            item.submenu ? (
              <div key={item.id || item.title} className="relative flex items-center">
                <button
                  type="button"
                  className={`flex items-center font-medium text-gray-700 hover:text-black focus:outline-none ${
                    openMenu === item.id ? "underline underline-offset-4" : ""
                  }`}
                  onClick={() => setOpenMenu(openMenu === item.id ? null : item.id)}
                >
                  {item.title}
                  <svg
                    className="ml-1"
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6 6L11 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {openMenu === item.id && (
                  <div className="absolute top-full left-0 z-10 mt-2 w-40 rounded-md border bg-white shadow-lg">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.id || subitem.title}
                        href={subitem.path}
                        className="block px-4 py-2 text-sm text-black hover:bg-gray-200"
                        onClick={() => setOpenMenu(null)}
                      >
                        {subitem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.id || item.title}
                href={item.path ? item.path : ""}
                className={`relative flex items-center font-medium text-black hover:text-black ${
                  pathname === item.path ? "underline underline-offset-4" : ""
                }`}
              >
                {item.title}
                {item.hasCaret && (
                  <svg
                    className="ml-1"
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6 6L11 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Link>
            )
          )}
        </nav>
        <div>
          <button className="bg-primary cursor-pointer rounded-full px-6 py-2 font-bold text-white drop-shadow-md hover:scale-105">
            Download Brochure
          </button>
        </div>
      </div>
    </header>
  );
}
