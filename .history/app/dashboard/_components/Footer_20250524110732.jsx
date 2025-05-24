import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/logo.webp"
                alt="IntelliView AI Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <span className="text-xl font-bold">IntelliView AI</span>
            </Link>
            <p className="text-gray-400 text-center md:text-left">
              Revolutionizing interview preparation with AI-powered coaching
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors">
              How it Works
            </Link>
            <Link href="/about-us" className="text-gray-400 hover:text-white transition-colors">
              About Us
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/intelliview"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://linkedin.com/company/intelliview"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="https://twitter.com/intelliview"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:text-left">
          <p className="text-gray-400">
            © {new Date().getFullYear()} IntelliView AI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
