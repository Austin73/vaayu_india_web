import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { ModalProvider } from "@/components/common/BookCallWithExpertModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Energy Saving Air Coolers for Industrial & Commercial Use | Vaayu",
  description:
    "Vaayu designs hybrid air cooling systems that reduce energy costs by up to 80%. Ideal for factories, warehouses, and commercial spaces. Book a free consultation.",
};

export default function RootLayout({ children }) {
 return (
     <html lang="en">
       <body className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}>
        <Header />
        <ModalProvider>
          <main className="flex-1">{children}</main>
        </ModalProvider>
        <Footer />
        <WhatsAppButton />
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-4">Site Under Maintenance</h1>
          <p className="text-lg text-gray-700">Our site is temporarily offline. We will be back shortly.</p>
        </div>
       </body>
     </html>
   );
}
