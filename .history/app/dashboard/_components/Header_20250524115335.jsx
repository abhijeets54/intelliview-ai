"use client";
import { SignInButton, UserButton, SignedOut, SignedIn } from "@clerk/nextjs";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Bot } from "lucide-react";
import Image from "next/image";

function Header() {
  const path = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [controlNavbar]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    
    // Prevent body scrolling when menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/about-us", label: "About us" },
  ];

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 
          flex justify-between items-center 
          p-4 sm:p-5 
          bg-white/90 backdrop-blur-md 
          shadow-md z-50 
          transition-all duration-500 ease-in-out
          ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-3 hover-grow"
          aria-label="IntelliView AI Home"
          onClick={closeMobileMenu}
        >
          <Image 
            src="/logo.webp" 
            alt="IntelliView AI Logo" 
            width={48} 
            height={48} 
            className="object-contain"
            priority
          />
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent hover:from-indigo-500 hover:to-indigo-300 transition-all duration-300">
            IntelliView AI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav 
          className="hidden md:flex gap-4 lg:gap-6"
          aria-label="Main Navigation"
        >
          {navItems.map((item, index) => (
            <NavItem
              key={item.href}
              path={path}
              href={item.href}
              label={item.label}
              onClick={closeMobileMenu}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="focus:outline-none text-gray-600 hover:text-indigo-600 p-2 rounded-lg hover:bg-indigo-50 smooth-transform"
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} className="animate-scale-in" /> : <Menu size={24} className="animate-scale-in" />}
          </button>
        </div>

        {/* Desktop Authentication */}
        <div className="hidden md:block animate-fade-in">
          <SignedOut>
            <SignInButton mode="modal">
              <button 
                className="
                  px-4 py-2 
                  bg-gradient-to-r from-indigo-600 to-indigo-500
                  text-white 
                  rounded-md 
                  hover:from-indigo-500 hover:to-indigo-400
                  transition-all duration-300
                  transform hover:scale-105
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-indigo-500 
                  focus:ring-offset-2
                  shadow-md hover:shadow-lg
                "
              >
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton 
              afterSignOutUrl="/" 
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-10 h-10 hover:scale-110 transition-transform duration-300",
                },
              }} 
            />
          </SignedIn>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="
            fixed inset-0 top-0 
            bg-white/95 backdrop-blur-md z-40 md:hidden 
            overflow-hidden
            pt-16
            animate-fade-in
          "
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="h-full overflow-y-auto pb-16">
            <nav className="space-y-6 p-6">
              {navItems.map((item, index) => (
                <NavItem
                  key={item.href}
                  path={path}
                  href={item.href}
                  label={item.label}
                  mobile
                  onClick={closeMobileMenu}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              ))}

              {/* Mobile Authentication */}
              <div className="pt-6 border-t animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <SignedOut>
                  <SignInButton mode="modal">
                    <button 
                      className="
                        w-full px-4 py-2 
                        bg-gradient-to-r from-indigo-600 to-indigo-500
                        text-white 
                        rounded-md 
                        hover:from-indigo-500 hover:to-indigo-400
                        transition-all duration-300
                        transform hover:scale-105
                        focus:outline-none 
                        focus:ring-2 
                        focus:ring-indigo-500 
                        focus:ring-offset-2
                        shadow-md hover:shadow-lg
                      "
                      onClick={closeMobileMenu}
                    >
                      Sign In
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <div className="flex justify-center">
                    <UserButton 
                      afterSignOutUrl="/" 
                      appearance={{
                        elements: {
                          userButtonAvatarBox: "w-12 h-12 mx-auto hover:scale-110 transition-transform duration-300",
                        },
                      }} 
                    />
                  </div>
                </SignedIn>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

function NavItem({ path, href, label, mobile, onClick }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`
        block 
        transition-all duration-300 ease-in-out 
        cursor-pointer 
        rounded-lg 
        focus:outline-none 
        focus:ring-2 
        focus:ring-indigo-500
        ${mobile
          ? "w-full text-lg py-3 text-center"
          : "px-3 py-2 hover:bg-indigo-100 hover:text-indigo-600"
        }
        ${path === href
          ? "text-indigo-600 font-bold bg-indigo-100"
          : "text-gray-700 hover:text-indigo-600"
        }
      `}
    >
      {label}
    </Link>
  );
}

export default Header;