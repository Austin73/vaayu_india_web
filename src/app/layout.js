import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  title: "Vaayu AHU innovative",
  description: "vaayuindia.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <ModalProvider>
          <main className="flex-1">{children}</main>
        </ModalProvider>
        <Footer />
      </body>
    </html>
  );
}
