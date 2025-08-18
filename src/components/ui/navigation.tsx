"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cross, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/gallery", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <Cross className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl text-slate-800 hidden sm:block">FPVM TENY FIAINANA</span>
            <span className="font-bold text-lg text-slate-800 sm:hidden">FPVM</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-slate-700 hover:text-blue-600 transition-colors font-medium ${
                  pathname === item.href ? "text-blue-600 border-b-2 border-blue-600" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/donation">
              <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-medium px-6">
                Faire un don
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 backdrop-blur-md bg-white/90 border-t border-white/20">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-slate-700 hover:text-blue-600 transition-colors font-medium py-2 ${
                  pathname === item.href ? "text-blue-600" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/donation" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-medium">
                Faire un don
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}