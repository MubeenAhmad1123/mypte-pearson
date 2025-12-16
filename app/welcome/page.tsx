"use client";

import React, { useState } from 'react';
import { Menu, ShoppingCart, FileText } from 'lucide-react';

export default function WelcomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F3F8]">
      {/* Header */}
      <header className="bg-[#0d004d] shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left Side - Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <img 
                src="/logo2.svg" 
                alt="Logo" 
                className="w-[160px] h-[60px] sm:w-[160px] sm:h-[60px] object-contain" 
              />
            </div>

            {/* Center - Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-sm h-full">
              <a href="/welcome" className="text-[#B7B3CA] hover:text-gray-200 h-full text-base font-bold flex items-center relative border-b-3 border-[#f9c642]">
                myPTE
              </a>
              <a href="/activity" className="text-[#B7B3CA] hover:text-gray-200 text-base h-full font-bold flex items-center relative">
                My Activity
              </a>
              <a href="#" className="text-[#B7B3CA] hover:text-gray-200 h-full text-base font-bold flex items-center relative">
                Smart Prep
              </a>
              <a href="#" className="text-[#B7B3CA] hover:text-gray-200 h-full text-base font-bold flex items-center relative">
                Help
              </a>
            </nav>

            {/* Right Side - Cart & Menu Button */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Shopping Cart */}
              <button className="p-1.5 sm:p-2 hover:bg-[#3d4f8f] rounded relative">
                <ShoppingCart size={20} className="sm:w-6 sm:h-6 text-white" />
              </button>

              {/* User Menu Button */}
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 bg-white hover:bg-gray-100 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors"
              >
                <Menu size={18} className="sm:w-5 sm:h-5 text-[#0d004d]" />
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E8E4F3] flex items-center justify-center">
                  <span className="text-[#0d004d] font-bold text-sm sm:text-base">MA</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        {/* Welcome Section */}
        <h1 className="text-3xl font-light sm:text-4xl text-[#0d004d] mb-4 text-center">Welcome</h1>

        {/* Banner under Welcome */}
        <div className="bg-[#56E2E1] py-4 px-4 text-center mb-6">
          <a href="#"><p className="text-[#0d004d]  font-bold text-sm sm:text-base hover:underline">
            Smart Prep: try our new free Study Plan for PTE Academic
          </p></a>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Your Results Card */}
            <div className="bg-white rounded-lg border border-[#C1BFFF] shadow-sm p-6 text-center">
              <h2 className="text-xl sm:text-2xl text-gray-800 mb-4 font-semibold">
                Your results are now available!
              </h2>
              
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <FileText className="w-16 h-16 sm:w-20 sm:h-20 text-[#5B3A9D]" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#5B3A9D] hover:bg-[#BAB8F8] text-white font-medium py-3 rounded-full transition-colors text-sm sm:text-xl">
                <a href="/activity">View your Score Report</a>
              </button>
            </div>

            {/* Re-book Test Card */}
            <div className="bg-white rounded-lg border border-[#C1BFFF] shadow-sm p-6 text-center order-2 lg:order-2">
              <h2 className="text-xl sm:text-2xl text-gray-800 mb-4 font-semibold">Re-book test</h2>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Click below to re-book your test
              </p>

              <div className="text-center mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">PTE Core</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Pearson professional centers-Lahore,
Vue,
                </p>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Office number 13,
                  Mall of Lahore,
                   Pakistan
                </p>
              </div>

              <button className="w-full bg-[#f9c642] hover:bg-[#e0b538] text-[#0d004d] font-medium py-3 rounded-full transition-colors text-sm sm:text-base">
                Re-book PTE Core
              </button>
            </div>

            {/* Feedback Card */}
            <div className="bg-white rounded-lg shadow-sm border border-[#C1BFFF] p-6 text-center order-5 lg:order-3">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                We want to hear from you
              </h2>
              <p className="text-gray-600 mb-6 text-sm">
                Help us improve by providing your suggestions and input.
              </p>
              
              <div className="flex justify-center mb-6">
                <img 
                  src="/feedback.png" 
                  alt="Feedback" 
                  className="w-20 h-20 object-contain"
                />
              </div>

              <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-50 px-8 py-2.5 rounded-full font-medium transition-colors">
                Give us your feedback
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {/* About the Test Card */}
            <div className="bg-white rounded-lg shadow-sm border border-[#C1BFFF] p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">About the test</h2>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <p className="text-gray-700 text-sm mb-3">
                    The test format depends on the test you have chosen. PTE Academic and PTE Core assess four skills: listening, reading, speaking and writing. PTE Home tests assess speaking and listening skills only.
                  </p>
                  <p className="text-gray-700 text-sm mb-4">
                    Before you take the test, you should familiarize yourself with the different question types contained within each test.
                  </p>
                </div>
                <img 
                  src="/Students1_1.png" 
                  alt="Students studying" 
                  className="w-full sm:w-40 h-32 object-cover rounded flex-shrink-0"
                />
              </div>

              <div className="space-y-2">
                <a href="#" className="block text-[#5B3A9D] hover:underline font-medium text-sm">
                  Learn about the PTE Academic test format
                </a>
                <a href="#" className="block text-[#5B3A9D] hover:underline font-medium text-sm">
                  Learn about the PTE Core test format
                </a>
                <a href="#" className="block text-[#5B3A9D] hover:underline font-medium text-sm">
                  Learn about the PTE Home test format
                </a>
              </div>
            </div>

            {/* Prepare for the Test Card */}
            <div className="bg-white rounded-lg shadow-sm border border-[#C1BFFF] p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Prepare for the test</h2>
              
              <p className="text-gray-700 text-sm mb-3">
                All test takers should prepare for their PTE test, even if English is your first language.
              </p>

              <p className="text-gray-700 text-sm mb-3">
                As well as familiarizing yourself with the test format, you can buy official PTE Academic preparation resources.
              </p>

              <a href="#" className="block text-[#5B3A9D] hover:underline font-medium mb-4 text-sm">
                Buy PTE Academic preparation resources
              </a>

              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <p className="text-gray-700 text-sm mb-2">
                    Already purchased your <strong>PTE Academic</strong> preparation resources? Access them{' '}
                    <a href="#" className="text-[#5B3A9D] hover:underline font-medium">here</a>
                  </p>
                  <p className="text-gray-700 text-sm mb-4">
                    For <strong>PTE Academic</strong>, <strong>PTE Core</strong> and <strong>PTE Home</strong> you can find a range of free preparation resources below.
                  </p>
                </div>
                <img 
                  src="/Students2_1.png" 
                  alt="Student preparing for test" 
                  className="w-full sm:w-40 h-32 object-cover rounded flex-shrink-0"
                />
              </div>

              <div className="space-y-2">
                <a href="#" className="block text-[#5B3A9D] hover:underline font-medium text-sm">
                  PTE Academic preparation resources
                </a>
                <a href="#" className="block text-[#5B3A9D] hover:underline font-medium text-sm">
                  PTE Core preparation resources
                </a>
                <a href="#" className="block text-[#5B3A9D] hover:underline font-medium text-sm">
                  PTE Home preparation resources
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 px-4 mt-8">
        <div className="mb-2">
          <a href="#" className="text-[#5B3A9D] hover:underline text-sm">Privacy policy</a>
          <span className="text-gray-600 mx-2">|</span>
          <a href="#" className="text-[#5B3A9D] hover:underline text-sm">Cookies</a>
          <span className="text-gray-600 mx-2">|</span>
          <a href="#" className="text-[#5B3A9D] hover:underline text-sm">Contact us</a>
        </div>
        <p className="text-gray-600 text-sm">
          Copyright © 1996–2025 Pearson. All rights reserved.
        </p>
      </footer>
    </div>
  );
}