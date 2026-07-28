import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { ModalProvider } from "@/components/common/BookCallWithExpertModal";
import MaintenanceMessage from "@/components/common/MaintenanceMessage";
import { MAINTENANCE_MODE } from "@/constants/maintenance";

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
          <main className="flex-1">
            {MAINTENANCE_MODE ? <MaintenanceMessage /> : children}
          </main>
        </ModalProvider>
        <Footer />
        <WhatsAppButton />
       </body>
     </html>
   );
}
