import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const Josefin = Josefin_Sans({
  subsets: ["latin"],
});



export const metadata = {
  title: "Wanderlust | Explore Your Next Adventure",
  description: "Discover premium destinations, handpicked travel experiences, and seamless bookings for adventure seekers worldwide.",
  keywords: ["travel", "booking", "tour", "destination", "wanderlust", "adventure"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${Josefin.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-gray-900">
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
