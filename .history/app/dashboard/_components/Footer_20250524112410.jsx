import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start space-y-4 animate-slide-in">
            <Link href="/" className="flex items-center gap-3 hover-scale">
              <Image 
                src="/logo.webp"
                alt="IntelliView AI Logo"
                width={48}
                height={48}
                className="object-contain animate-float"
              />
              <span className="text-xl font-bold smooth-transition hover:text-indigo-400">IntelliView AI</span>
            </Link>
            <p className="text-gray-400 text-center md:text-left animate-slide-in" style={{ animationDelay: '0.1s' }}>
              Revolutionizing interview preparation with AI-powered coaching
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-4 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-2 relative">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-indigo-500 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
            </h3>
            <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform smooth-transition flex items-center gap-2">
              <span>→</span> Dashboard
            </Link>
            <Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform smooth-transition flex items-center gap-2">
              <span>→</span> How it Works
            </Link>
            <Link href="/about-us" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform smooth-transition flex items-center gap-2">
              <span>→</span> About Us
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start space-y-4 animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white smooth-transition hover-scale"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white smooth-transition hover-scale"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white smooth-transition hover-scale"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center animate-slide-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-gray-400">
            © {new Date().getFullYear()} IntelliView AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
