import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { FloatingDonationButton } from "@/components/donation/floating-donation-button";
import { Navbar } from "@/components/navigation/navbar";

export const metadata: Metadata = {
  title: "FPVM FR-MG Teny Fiainana Analamahitsy",
  description: "Église Protestante Malagasy - Une communauté de foi et d'amour",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <FloatingDonationButton />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}