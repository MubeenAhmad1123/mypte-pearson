"use client";

import React, { useState, useEffect } from 'react';
import { Menu, ShoppingCart, Info } from 'lucide-react';

interface CircleScoreProps {
  score: number;
  color: string;
  label: string;
  delay?: number;
}

const ScoreCardPage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateScores, setAnimateScores] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateScores(true), 300);
  }, []);

  const CircleScore: React.FC<CircleScoreProps> = ({ score, color, label, delay = 0 }) => {
    const [currentScore, setCurrentScore] = useState(0);

    useEffect(() => {
      if (animateScores) {
        let start = 0;
        const duration = 1000;
        const increment = score / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= score) {
            setCurrentScore(score);
            clearInterval(timer);
          } else {
            setCurrentScore(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [animateScores, score]);

    return (
      <div className="flex flex-col items-center" style={{ transitionDelay: `${delay}ms` }}>
        <div 
          className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-24 lg:h-24 rounded-full flex items-center justify-center transition-all duration-1000"
          style={{ 
            border: `5px solid ${color}`,
            transform: animateScores ? 'scale(1)' : 'scale(0)',
            opacity: animateScores ? 1 : 0
          }}
        >
          <span className="text-3xl sm:text-4xl lg:text-3xl font-bold text-gray-800">
            {currentScore}
          </span>
        </div>
        <p className="mt-2 text-gray-600 text-xs sm:text-base lg:text-xs font-medium">{label}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#e8e4f5]">
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
                  <span className="text-[#0d004d] font-bold text-sm sm:text-base">FA</span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden border-t border-[#3d4f8f] py-3">
            <div className="flex items-center justify-center gap-4 text-xs">
              <a href="/welcome" className="text-[#B7B3CA] hover:text-gray-200 font-bold">myPTE</a>
              <a href="/activity" className="text-[#B7B3CA] hover:text-gray-200 font-bold">My Activity</a>
              <a href="#" className="text-[#B7B3CA] hover:text-gray-200 font-bold">Smart Prep</a>
              <a href="#" className="text-[#B7B3CA] hover:text-gray-200 font-bold">Help</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl lg:max-w-6xl mx-auto px-4 py-6 sm:py-8">
        {/* MOBILE VIEW - Separate Cards */}
        <div className="lg:hidden space-y-6">
          {/* Main Score Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-50 border-b-2 border-gray-200 p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Scores Overview</h2>
                <button className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition-colors">
                  <Info className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>

            <div className="p-6">
              {/* Photo and Score side by side */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
                <div className="flex-shrink-0">
                  <div className="w-24 h-28 bg-gray-300 rounded overflow-hidden border-2 border-gray-200">
                    <img src="/faizan.webp" alt="Candidate" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <div className="relative w-24 h-28 shadow-lg overflow-hidden" style={{ borderRadius: '10px 10px 50% 50%' }}>
                    <div className="absolute top-0.5 left-0 right-0 h-8 bg-[#014B5F] flex items-center justify-center">
                      <span className="text-white text-[10px] font-semibold">Overall Score</span>
                    </div>
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-[#A1017C] flex items-center justify-center" 
                      style={{ height: 'calc(100% - 2rem)', borderRadius: '0px 0px 50% 50%' }}
                    >
                      <span className="text-5xl font-bold text-white">60</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Test Taker ID and Registration ID on same line */}
              <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                <div>
                  <p className="text-gray-500 text-xs mb-1">Test Taker ID</p>
                  <p className="text-gray-800 font-semibold text-sm">PTE004306581</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">Registration ID</p>
                  <p className="text-gray-800 font-semibold text-sm">516493257</p>
                </div>
              </div>

              {/* Test Centre Info */}
              <div className="space-y-2 text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <p className="text-gray-700 text-xs">
                    <span className="font-semibold">Test Centre Country:</span><br />Pakistan
                  </p>
                  <p className="text-gray-700 text-xs">
                    <span className="font-semibold">Test Date:</span><br />13 December 2025
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <p className="text-gray-700 text-xs">
                    <span className="font-semibold">Test Centre ID:</span><br />87625
                  </p>
                  <p className="text-gray-700 text-xs">
                    <span className="font-semibold">Valid Until:</span><br />13 December 2027
                  </p>
                </div>
                <p className="text-gray-700 text-xs">
                  <span className="font-semibold">Test Centre:</span><br />Pearson Professional Center Lahore
                </p>
              </div>
            </div>
          </div>

          {/* Communicative Skills Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-50 border-b-2 border-gray-200 p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Communicative Skills</h3>
                <button className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition-colors">
                  <Info className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
            
            <div className="p-6 sm:p-10">
              <div className="grid grid-cols-2 gap-8 sm:gap-10">
                <CircleScore score={64} color="#1e3a8a" label="Listening" delay={0} />
                <CircleScore score={52} color="#eab308" label="Reading" delay={200} />
                <CircleScore score={63} color="#6b7280" label="Speaking" delay={400} />
                <CircleScore score={63} color="#a855f7" label="Writing" delay={600} />
              </div>
            </div>
          </div>

          {/* Skill Breakdown Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-50 border-b-2 border-gray-200 p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Skill Breakdown</h3>
            </div>
            
            <div className="p-6 sm:p-8">
              <div className="space-y-3 md:space-y-4 relative">
                <div className="absolute left-[67%] top-0 bottom-0 flex flex-col items-center" style={{ transform: 'translateX(-50%)' }}>
                  <div className="text-xs md:text-sm font-semibold text-gray-700 mb-1 whitespace-nowrap">60 Overall</div>
                  <div className="relative h-full">
                    <div className="w-0.5 h-full bg-gray-400"></div>
                    <div className="absolute top-12 md:top-16 left-1/2 -translate-x-1/2">
                      <div className="bg-gray-700 text-white text-xs font-semibold px-2 py-0.5 rounded shadow-sm whitespace-nowrap">60</div>
                    </div>
                  </div>
                </div>

                <div className="h-4 md:h-6"></div>

                <div className="flex items-center gap-1 md:gap-1.5">
                  <span className="text-xs md:text-sm text-gray-600 w-14 md:w-16 text-right">Listening</span>
                  <span className="text-xs md:text-sm font-semibold text-gray-800 w-6">64</span>
                  <div className="flex-1 h-8 md:h-10 relative">
                    <div className="absolute h-full bg-[#1e3a8a] transition-all duration-1500 rounded" style={{ width: animateScores ? '71.1%' : '0%' }}></div>
                  </div>
                </div>

                <div className="flex items-center gap-1 md:gap-1.5">
                  <span className="text-xs md:text-sm text-gray-600 w-14 md:w-16 text-right">Reading</span>
                  <span className="text-xs md:text-sm font-semibold text-gray-800 w-6">52</span>
                  <div className="flex-1 h-8 md:h-10 relative">
                    <div className="absolute h-full bg-[#eab308] transition-all duration-1500 rounded" style={{ width: animateScores ? '57.8%' : '0%', transitionDelay: '200ms' }}></div>
                  </div>
                </div>

                <div className="flex items-center gap-1 md:gap-1.5">
                  <span className="text-xs md:text-sm text-gray-600 w-14 md:w-16 text-right">Speaking</span>
                  <span className="text-xs md:text-sm font-semibold text-gray-800 w-6">63</span>
                  <div className="flex-1 h-8 md:h-10 relative">
                    <div className="absolute h-full bg-[#6b7280] transition-all duration-1500 rounded" style={{ width: animateScores ? '70%' : '0%', transitionDelay: '400ms' }}></div>
                  </div>
                </div>

                <div className="flex items-center gap-1 md:gap-1.5">
                  <span className="text-xs md:text-sm text-gray-600 w-14 md:w-16 text-right">Writing</span>
                  <span className="text-xs md:text-sm font-semibold text-gray-800 w-6">63</span>
                  <div className="flex-1 h-8 md:h-10 relative">
                    <div className="absolute h-full bg-[#a855f7] transition-all duration-1500 rounded" style={{ width: animateScores ? '70%' : '0%', transitionDelay: '600ms' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Candidate Information Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-50 border-b-2 border-gray-200 p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Candidate Information</h3>
            </div>
            
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <p className="text-gray-700 text-sm">Date of Birth: <span className="font-medium">6 March 2004</span></p>
                <p className="text-gray-700 text-sm">Gender: <span className="font-medium">Male</span></p>
                <p className="text-gray-700 text-sm">Country of Citizenship: <span className="font-medium">Pakistan</span></p>
                <p className="text-gray-700 text-sm">Country of Residence: <span className="font-medium">Pakistan</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW - Single Card Layout */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Yellow Header */}
            <div className="bg-[#f9c642] p-6">
              <div className="flex items-center gap-1">
                <img 
                  src="/logo1.webp" 
                  alt="Logo" 
                  className="w-[50px] h-[70px] mb-0 object-contain" 
                />
                <div>
                  <h1 className="text-2xl font-bold text-[#0d004d]">
                    Pearson | PTE Core | Score Report
                  </h1>
                  <p className="text-sm text-[#0d004d]">Score Report Code: 43231HMWV</p>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="p-8">
              {/* Top Row with Photo, Info, and Badge */}
              <div className="flex items-center justify-between gap-6 mb-6 pb-6 border-b border-gray-200">
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="w-28 h-32 bg-gray-300 rounded overflow-hidden border-2 border-gray-200">
                    <img src="/faizan.webp" alt="Faizan Arshad" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Name and Info */}
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-800 mb-1">Faizan Arshad</h2>
                  <p className="text-xs text-gray-700 mb-0.5"><span className="font-semibold">Test Name:</span> PTE Core</p>
                  <p className="text-xs text-gray-700 mb-0.5"><span className="font-semibold">Test Taker ID:</span> PTE004306581</p>
                  <p className="text-xs text-gray-700"><span className="font-semibold">Registration ID:</span> 516493257</p>
                </div>

                {/* Overall Score Badge */}
                <div className="flex-shrink-0">
                  <div className="relative w-28 h-32 shadow-lg overflow-hidden" style={{ borderRadius: '10px 10px 50% 50%' }}>
                    <div className="absolute top-0.5 left-0 right-0 h-9 bg-[#014B5F] flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">Overall Score</span>
                    </div>
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-[#A1017C] flex items-center justify-center" 
                      style={{ height: 'calc(100% - 2.25rem)', borderRadius: '0px 0px 50% 50%' }}
                    >
                      <span className="text-5xl font-bold text-white">60</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Communicative Skills - Full Width */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Communicative Skills</h3>
                <div className="flex justify-center gap-8">
                  <CircleScore score={64} color="#1e3a8a" label="Listening" delay={0} />
                  <CircleScore score={52} color="#eab308" label="Reading" delay={200} />
                  <CircleScore score={63} color="#6b7280" label="Speaking" delay={400} />
                  <CircleScore score={63} color="#a855f7" label="Writing" delay={600} />
                </div>
              </div>

              {/* Skills Breakdown - Full Width */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Skills Breakdown</h3>
                <div className="space-y-3 relative">
                  <div className="absolute left-[67%] top-0 bottom-0 flex flex-col items-center" style={{ transform: 'translateX(-50%)' }}>
                    <div className="text-xs font-semibold text-gray-700 mb-1 whitespace-nowrap">Overall 60</div>
                    <div className="relative h-full"><div className="w-0.5 h-full bg-gray-400"></div></div>
                  </div>

                  <div className="h-5"></div>

                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-600 w-16 text-right">Listening</span>
                    <span className="text-xs font-semibold text-gray-800 w-6">64</span>
                    <div className="flex-1 h-12 relative">
                      <div className="absolute h-full bg-[#1e3a8a] transition-all duration-1500 rounded" style={{ width: animateScores ? '71.1%' : '0%' }}></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-600 w-16 text-right">Reading</span>
                    <span className="text-xs font-semibold text-gray-800 w-6">52</span>
                    <div className="flex-1 h-12 relative">
                      <div className="absolute h-full bg-[#eab308] transition-all duration-1500 rounded" style={{ width: animateScores ? '57.8%' : '0%', transitionDelay: '200ms' }}></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-600 w-16 text-right">Speaking</span>
                    <span className="text-xs font-semibold text-gray-800 w-6">63</span>
                    <div className="flex-1 h-12 relative">
                      <div className="absolute h-full bg-[#6b7280] transition-all duration-1500 rounded" style={{ width: animateScores ? '70%' : '0%', transitionDelay: '400ms' }}></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-600 w-16 text-right">Writing</span>
                    <span className="text-xs font-semibold text-gray-800 w-6">63</span>
                    <div className="flex-1 h-12 relative">
                      <div className="absolute h-full bg-[#a855f7] transition-all duration-1500 rounded" style={{ width: animateScores ? '70%' : '0%', transitionDelay: '600ms' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Further Information */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Further Information</h3>
                <p className="text-xs italic text-gray-700">PTE Core is designed to test English language proficiency for a range of general purposes.</p>
              </div>

              {/* Two Columns Below */}
              <div className="grid grid-cols-2 gap-8">
                {/* Left Column - Candidate Information */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Candidate Information</h3>
                  <div className="space-y-1.5">
                    <p className="text-xs text-gray-700"><span className="font-semibold">Date of Birth:</span> 6 March 2004</p>
                    <p className="text-xs text-gray-700"><span className="font-semibold">Gender:</span> Male</p>
                    <p className="text-xs text-gray-700"><span className="font-semibold">Country of Citizenship:</span> Pakistan</p>
                    <p className="text-xs text-gray-700"><span className="font-semibold">Country of Residence:</span> Pakistan</p>
                  </div>
                </div>

                {/* Right Column - Test Information */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Test Information</h3>
                  <div className="space-y-1.5">
                    <p className="text-xs text-gray-700"><span className="font-semibold">Test Date:</span> 13 December 2025</p>
                    <p className="text-xs text-gray-700"><span className="font-semibold">Valid Until:</span> 13 December 2027</p>
                  </div>
                </div>
              </div>

              {/* Test Center Information - Full Width */}
              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Test Center Information</h3>
                <div className="space-y-1.5">
                  <p className="text-xs text-gray-700"><span className="font-semibold">Test Center Country:</span> Pakistan</p>
                  <p className="text-xs text-gray-700"><span className="font-semibold">Test Center ID:</span> 87625</p>
                  <p className="text-xs text-gray-700"><span className="font-semibold">Test Center:</span> Pearson Professional Center Lahore</p>
                </div>
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
        <p className="text-gray-600 text-sm">Copyright © 1996–2025 Pearson. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ScoreCardPage;