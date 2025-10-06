"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  const certificationImages = [
    {
      id: "1",
      path: "/images/certifications/make-in-india.png",
      alt: "Make in India",
      imageWidth: 68,
      imageHeight: 31,
    },
    {
      id: "2",
      path: "/images/certifications/iso.png",
      alt: "iso",
      imageWidth: 103,
      imageHeight: 63,
    },
    {
      id: "3",
      path: "",
      alt: "",
      imageWidth: 68,
      imageHeight: 31,
    },
    {
      id: "4",
      path: "",
      alt: "",
      imageWidth: 68,
      imageHeight: 31,
    },
    {
      id: "5",
      path: "",
      alt: "",
      imageWidth: 68,
      imageHeight: 31,
    },
    {
      id: "6",
      path: "",
      alt: "",
      imageWidth: 68,
      imageHeight: 31,
    },
  ];
  const renderCertificationImages = () =>
    certificationImages.map((certImg) => {
      return (
        <div
          key={certImg.id}
          className="flex size-18 items-center justify-center rounded-full bg-white"
        >
          {certImg?.path && (
            <Image
              src={certImg.path}
              alt={certImg.alt}
              width={certImg.imageWidth}
              height={certImg.imageHeight}
            />
          )}
        </div>
      );
    });

  return (
    <footer className="bg-gray-700 px-4 pt-12 pb-6 text-gray-300">
      {/* Top Row: Logo left, certification/social right */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 pb-10 md:flex-row">
        {/* Company Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo/logo.png"
            alt="Vaayu India Logo"
            className="h-10 w-auto"
            width={140}
            height={54}
          />
        </div>
        {/* Certification Logos / Social Icons */}
        <div className="flex items-center gap-5">{renderCertificationImages()}</div>
      </div>

      {/* Middle Row: 4 Columns */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 border-b border-white py-10 md:grid-cols-4">
        {/* Plan */}
        <div>
          <div className="mb-3 font-bold text-gray-300">Plan</div>
          <ul className="space-y-2">
            <li>
              <a href="/product" className="text-white hover:text-gray-200">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                Pricings
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-200">
                Technology
              </a>
            </li>
          </ul>
        </div>
        {/* Help */}
        <div>
          <div className="mb-3 font-bold text-gray-300">Help</div>
          <ul className="space-y-2">
            <li>
              <a href="/contactus" className="text-white hover:text-gray-200">
                Customer Support
              </a>
            </li>
            <li>
              <a href="/career" className="text-white hover:text-gray-200">
                Career Support
              </a>
            </li>
            <li>
              <a href="/contactus" className="text-white hover:text-gray-200">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* Media */}
        <div>
          <div className="mb-3 font-bold text-gray-300">Media</div>
          <ul className="space-y-2">
            <li>
              <a href="/media" className="text-white hover:text-gray-200">
                Awards & Recognition
              </a>
            </li>
            <li>
              <a href="/pressrelease" className="text-white hover:text-gray-200">
                Press Release
              </a>
            </li>
          </ul>
        </div>
        {/* Address */}
        <div>
          <div className="mb-3 font-bold text-gray-300">Address</div>
          <div className="mb-3 text-white">
            International Office:
            <br />
            Luniya Compound, Vaayu Global Tower,
            <br /> behind Tata Showroom, Lasudia
            <br />
            Mori, Indore, Madhya Pradesh 452010          
          </div>
          <div className="mb-3 text-white">
            Experience Zone:FH-196,
            <br />
            Scheme No.54, Vijay Nagar, Indore -
            <br />
            452010, (M.P)
          </div>
        </div>
      </div>

      {/* Bottom Row: Copyright, Links, Social */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 pt-8 text-sm md:flex-row">
        {/* Left: Copyright */}
        <div className="text-white">
          © {new Date().getFullYear()} Vaayu Aircool. All rights reserved.
        </div>
        {/* Center: Links */}
        <div className="flex gap-6">
          <a href="#" className="text-white hover:text-gray-200">
            Terms
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            Privacy Policy
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            Cookie Policy
          </a>
        </div>
        {/* Right: Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/vaayu_aircon?igsh=MWljN3NnbmE3ZWs0ZQ==&utm_source=ig_contact_invite"
            aria-label="Instagram"
            className="hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/social/instagram.svg"
              alt="Instagram"
              className="size-10"
              width={42}
              height={42}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/vaayu-aircon/"
            aria-label="LinkedIn"
            className="hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/social/linkedin.svg"
              alt="Linkedin"
              className="size-10"
              width={42}
              height={42}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
