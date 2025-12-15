"use client";

import React, { useState } from 'react';
import { Menu } from 'lucide-react';

export default function WelcomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Left Side - Logo and Navigation */}
            <div className="flex items-center gap-6">
              {/* Logo */}
              <div className="flex items-center gap-2 sm:gap-3">
                <img 
                  src="/logo.webp" 
                  alt="Logo" 
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-gray-800 text-lg sm:text-xl font-light">Pearson</span>
                  <span className="text-gray-400 text-sm sm:text-base">|</span>
                  <span className="text-gray-800 text-base sm:text-lg font-light">PTE</span>
                </div>
              </div>

              {/* Desktop Navigation - Next to Logo */}
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <a href="/welcome" className="text-gray-600 hover:text-[#088BB4] py-2">
                  myPTE
                </a>
                <a href="/activity" className="text-gray-600 hover:text-[#088BB4] py-2">
                  My Activity
                </a>
                <a href="#" className="text-gray-600 hover:text-[#088BB4] py-2">
                  Prepare
                </a>
                <a href="#" className="text-gray-600 hover:text-[#088BB4] py-2">
                  Help
                </a>
              </nav>
            </div>

            {/* Right Side - User and Menu */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="w-9 h-9 sm:w-10 sm:h-10 bg-[#088BB4] rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                F
              </button>
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-1.5 sm:p-2 hover:bg-gray-100 rounded"
              >
                <Menu size={20} className="sm:w-6 sm:h-6 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Below Header */}
          <nav className="md:hidden border-t border-gray-200 mt-3 pt-3">
            <div className="flex items-center justify-center gap-4 text-xs">
              <a href="/welcome" className="text-gray-600 hover:text-[#088BB4]">
                myPTE
              </a>
              <a href="/activity" className="text-gray-600 hover:text-[#088BB4]">
                My Activity
              </a>
              <a href="#" className="text-gray-600 hover:text-[#088BB4]">
                Prepare
              </a>
              <a href="#" className="text-gray-600 hover:text-[#088BB4]">
                Help
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        {/* Welcome Section */}
        <h1 className="text-2xl sm:text-3xl text-gray-800 mb-6 sm:mb-8 text-center">Welcome</h1>

        {/* Re-book Test Card */}
        <div className="bg-white rounded border border-gray-300 shadow-sm p-5 sm:p-6 mb-6 max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl text-gray-800 mb-3 sm:mb-4 text-center">Re-book test</h2>
          <p className="text-gray-600 mb-5 sm:mb-6 text-center text-sm sm:text-base">
            Click below to re-book your test
          </p>

          <div className="text-center mb-5 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">PTE Academic</h3>
            <p className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
              Pearson Professional Centers-Lahore, Pakistan
            </p>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Pearson Vue<br />
              Office Number 13<br />
              First Floor, Mall Of Lahore<br />
              Lahore 54000<br />
              Punjab<br />
              Pakistan
            </p>
          </div>

          <button className="w-full bg-[#088BB4] hover:bg-[#066a8a] text-white font-medium py-2.5 sm:py-3 rounded transition-colors text-sm sm:text-base">
            Re-book PTE Academic
          </button>
        </div>

        {/* Find Your Test Card */}
        <div className="bg-white rounded border border-gray-300 shadow-sm p-5 sm:p-6 max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl text-gray-800 mb-5 sm:mb-6 text-center">Find your Test</h2>
          
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48">
              {/* Globe Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-green-400 to-blue-500 relative overflow-hidden">
                  {/* Continents */}
                  <div className="absolute top-6 sm:top-8 left-6 sm:left-8 w-12 sm:w-16 h-10 sm:h-12 bg-green-600 rounded-full opacity-80"></div>
                  <div className="absolute bottom-10 sm:bottom-12 right-5 sm:right-6 w-16 sm:w-20 h-12 sm:h-16 bg-green-600 rounded-tl-full opacity-80"></div>
                  <div className="absolute top-1/2 left-1/4 w-10 sm:w-12 h-6 sm:h-8 bg-green-600 rounded-full opacity-80"></div>
                  
                  {/* Clouds */}
                  <div className="absolute -top-1 sm:-top-2 right-3 sm:right-4 w-10 sm:w-12 h-5 sm:h-6 bg-white/30 rounded-full"></div>
                  <div className="absolute top-3 sm:top-4 -left-1 sm:-left-2 w-8 sm:w-10 h-4 sm:h-5 bg-white/30 rounded-full"></div>
                  <div className="absolute bottom-5 sm:bottom-6 right-1 sm:right-2 w-11 sm:w-14 h-5 sm:h-6 bg-white/30 rounded-full"></div>
                </div>
              </div>

              {/* Accessibility Icon */}
              <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
                  <circle cx="10" cy="7" r="1.5"/>
                  <path d="M10 9c-1.5 0-2 1-2 2v3h1v-3c0-.5.2-1 1-1s1 .5 1 1v3h1v-3c0-1-.5-2-2-2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}