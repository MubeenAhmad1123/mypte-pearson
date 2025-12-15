"use client";

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function MyActivityPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleViewScore = () => {
    router.push('/scorecard');
  };

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
                <a href="/activity" className="text-[#088BB4] font-medium py-2 border-b-2 border-[#088BB4]">
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
                N
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
              <a href="/activity" className="text-[#088BB4] font-medium border-b-2 border-[#088BB4] pb-1">
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
        {/* Upcoming Test Section */}
        <section className="mb-8">
          <h1 className="text-2xl sm:text-3xl text-gray-700 mb-6 text-center font-light">
            Upcoming Test
          </h1>
          <div className="bg-white rounded border border-gray-300 shadow-sm p-6 max-w-2xl mx-auto text-center">
            <p className="text-gray-600 text-sm sm:text-base">
              You do not have an upcoming test
            </p>
          </div>
        </section>

        {/* Previous Tests Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl text-gray-700 mb-6 text-center font-light">
            Previous Tests
          </h2>

          {/* Test Card 1 */}
          <div className="bg-white rounded border border-gray-300 shadow-sm p-6 mb-6 max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <div className="mb-4">
                <span className="font-semibold text-gray-800">Test name: </span>
                <span className="text-gray-700">PTE Academic</span>
              </div>
              <div className="mb-4">
                <span className="font-semibold text-gray-800">Test date: </span>
                <span className="text-gray-700">July 4, 2022 - 8:45 PM IST</span>
              </div>
              <div className="mb-4">
                <span className="text-gray-600 text-sm">Registration ID: 424367356</span>
              </div>
              <div className="text-gray-700 text-sm leading-relaxed">
                <p className="font-semibold mb-1">Pearson Professional Centers-Chandigarh PUN</p>
                <p>A-401, 4th floor, Elante Offices Block</p>
                <p>Industrial Area, Phase 1, Chandigarh</p>
                <p>Punjab</p>
                <p>Chandigarh, PUN, IND 160002</p>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button 
                onClick={handleViewScore}
                className="px-6 py-2 text-[#0891b2] hover:text-[#0e7490] font-medium text-sm sm:text-base"
              >
                View score
              </button>
              <button className="px-6 py-2 text-[#0891b2] hover:text-[#0e7490] font-medium text-sm sm:text-base">
                Send score
              </button>
            </div>
          </div>

          {/* Test Card 2 */}
          <div className="bg-white rounded border border-gray-300 shadow-sm p-6 mb-6 max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <div className="mb-4">
                <span className="font-semibold text-gray-800">Test name: </span>
                <span className="text-gray-700">PTE Academic</span>
              </div>
              <div className="mb-4">
                <span className="font-semibold text-gray-800">Test date: </span>
                <span className="text-gray-700">June 15, 2022 - 2:30 PM IST</span>
              </div>
              <div className="mb-4">
                <span className="text-gray-600 text-sm">Registration ID: 423456789</span>
              </div>
              <div className="text-gray-700 text-sm leading-relaxed">
                <p className="font-semibold mb-1">Pearson Professional Centers-Lahore, Pakistan</p>
                <p>Pearson Vue</p>
                <p>Office Number 13</p>
                <p>First Floor, Mall Of Lahore</p>
                <p>Lahore 54000</p>
                <p>Punjab</p>
                <p>Pakistan</p>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button 
                onClick={handleViewScore}
                className="px-6 py-2 text-[#0891b2] hover:text-[#0e7490] font-medium text-sm sm:text-base"
              >
                View score
              </button>
              <button className="px-6 py-2 text-[#0891b2] hover:text-[#0e7490] font-medium text-sm sm:text-base">
                Send score
              </button>
            </div>
          </div>
        </section>

        {/* Accessibility Button - Bottom Left */}
        <button className="fixed bottom-6 left-6 w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors">
          <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
            <circle cx="10" cy="7" r="1.5"/>
            <path d="M10 9c-1.5 0-2 1-2 2v3h1v-3c0-.5.2-1 1-1s1 .5 1 1v3h1v-3c0-1-.5-2-2-2z"/>
          </svg>
        </button>
      </main>
    </div>
  );
}