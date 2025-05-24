import React from "react";
import { CopyrightIcon, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Copyright Section */}
        <div className="flex items-center justify-between">
          <span>{new Date().getFullYear()} IntelliView AI. All Rights Reserved.</span>
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/intelliview"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://linkedin.com/company/intelliview"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://twitter.com/intelliview"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600"
            >
              <Twitter size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
