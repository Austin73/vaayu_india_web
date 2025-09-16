"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import navbarMenuData from "./navbarMenuData";

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const mobileMenuRef = useRef(null);

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

  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        setOpenMenu(null);
      }
    }
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const toggleMobileSubMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full ${
        scrolled ? "bg-white/20 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Mobile hamburger button */}
        <button
          type="button"
          className="text-gray-700 focus:outline-none md:hidden"
          aria-label="Toggle menu"
          onClick={() => {
            setMobileMenuOpen((prev) => {
              if (prev) {
                setOpenMenu(null);
              }
              return !prev;
            });
          }}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Centered logo on mobile */}
        <div className="flex flex-1 justify-center md:hidden">
          <Link href="/">
            <Image src="/images/logo/logo.png" alt="logo" width={140} height={54} priority />
          </Link>
        </div>

        {/* Desktop nav and button */}
        <div className="hidden flex-1 items-center justify-between md:flex">
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
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div ref={mobileMenuRef} className="border-t border-gray-200 bg-white shadow-md md:hidden">
          <nav className="flex flex-col space-y-2 px-4 py-4">
            {navbarMenuData.map((item) =>
              item.submenu ? (
                <div key={item.id || item.title} className="flex flex-col">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-2 font-medium text-gray-700 hover:bg-gray-100 focus:outline-none"
                    onClick={() => toggleMobileSubMenu(item.id)}
                  >
                    {item.title}
                    <svg
                      className={`ml-2 h-4 w-4 transform transition-transform ${
                        openMenu === item.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openMenu === item.id && (
                    <div className="flex flex-col pl-6">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.id || subitem.title}
                          href={subitem.path}
                          className="block px-4 py-2 text-black hover:bg-gray-100"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setOpenMenu(null);
                          }}
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
                  className={`block px-4 py-2 font-medium text-black hover:bg-gray-100 ${
                    pathname === item.path ? "underline underline-offset-4" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              )
            )}
            <button
              className="bg-primary mt-2 cursor-pointer rounded-full px-6 py-2 font-bold text-white drop-shadow-md hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download Brochure
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
