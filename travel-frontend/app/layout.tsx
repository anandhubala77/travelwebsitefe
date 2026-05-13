import "./globals.css";
import Navbar from "@/components/Navbar";
import React from "react"; 
import type { Metadata } from "next";// Import React

export const metadata = {

  
  title: "ExploreWorld | Premium Travel Agency",
  description: "Book your dream vacation with our curated travel packages. Experience the world like never before.",
  keywords: ["travel agency", "tour packages", "luxury travel", "vacation booking"],
  openGraph: {
    title: "ExploreWorld Travel",
    description: "Your gateway to the world's most beautiful destinations.",
    images: ["/og-image.jpg"], // Image that shows when you share the link on WhatsApp/FB
  }





};

// Define the type for the props
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar />
        {/* We add a main tag with padding-top so the fixed Navbar doesn't cover content */}
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}