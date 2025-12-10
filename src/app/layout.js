import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lake Pichola | Lake Pichola Udaipur | Udaipur Rajasthan | Udaipur India",
  description: "All you need to know about Lake Pichola of Udaipur Rajasthan. Seep in the 360 degree view and information of your holiday destination",
   icons: {
    icon: [
      { url: '/pichola-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/pichola-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/pichola-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
