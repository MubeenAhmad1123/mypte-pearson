"use client";

import React, { useEffect, useState } from 'react';

export default function ScorecardPage() {
  const [animated, setAnimated] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setAnimated(true), 100);
  }, []);

  const getCircleProgress = (score: number, max: number = 90) => {
    const percentage = (score / max) * 100;
    const circumference = 2 * Math.PI * 45;
    return circumference - (percentage / 100) * circumference;
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#c5dfe0] to-[#e8f4f5]">
      {/* Header */}
      <header className="bg-[#c5dfe0] py-4 md:py-6">
        <div className="max-w-6xl mx-auto px-3 md:px-4">
          <div className="flex items-center gap-2 md:gap-4">
            <img 
              src="/logo.webp" 
              alt="Pearson Logo" 
              className="w-10 h-10 md:w-16 md:h-16 object-contain"
            />
            <div>
              <h1 className="text-sm md:text-2xl font-light text-gray-800">
                <span className="font-normal">Pearson</span> | PTE Academic | Score Reports
              </h1>
              <p className="text-xs md:text-sm text-gray-700">
                <span className="font-semibold">Score Report Code:</span> 42kEW5625l
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-3 md:px-4 py-4 md:py-8">
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
          {/* Top Section - Photo, Name, Overall Score */}
          <div className="flex items-start justify-between mb-6 md:mb-8 gap-2">
            {/* Left - Photo and Name */}
            <div className="flex gap-2 md:gap-4 items-start flex-1">
              <div className="bg-white">
                <img 
                  src="/student.webp" 
                  alt="Test Taker" 
                  className="w-16 h-20 md:w-24 md:h-32 object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-sm md:text-lg font-semibold text-gray-800 mb-1 md:mb-2">Faizan Arshad</h2>
                <p className="text-[10px] md:text-xs text-gray-700 mb-0.5">
                  <span className="font-bold">Test Taker ID:</span> PTE110000014
                </p>
                <p className="text-[10px] md:text-xs text-gray-700">
                  <span className="font-bold">Registration ID:</span> 410000014
                </p>
              </div>
            </div>

            {/* Right - Overall Score Badge (Shield Shape) */}
            <div className="flex flex-col items-center">
              <div className="relative w-20 h-24 md:w-28 md:h-32 shadow-lg overflow-hidden" style={{ 
                borderRadius: '10px 10px 50% 50%'
              }}>
                {/* Top part - Green with "Overall Score" */}
                <div className="absolute top-0.5 left-0 right-0 h-7 md:h-10 bg-[#014B5F] flex items-center justify-center">
                  <span className="text-white text-[9px] md:text-[11px] font-semibold">Overall Score</span>
                </div>
                {/* Bottom part - Purple with "60" */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#A1017C] flex items-center justify-center" style={{ height: 'calc(100% - 1.75rem)', borderRadius: '0 0 50% 50%' }}>
                  <span className="text-4xl md:text-5xl font-bold text-white">60</span>
                </div>
              </div>
            </div>

            {/* Right Side Text */}
            <div className="text-right text-xs text-gray-600 md:block hidden" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
              Example Test Taker - 410000014
            </div>
          </div>

          {/* Communicative Skills */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-base md:text-2xl font-semibold text-gray-800 mb-2">Communicative Skills</h3>
            <hr className="border-t border-gray-300 mb-4 md:mb-6" />
            <div className="grid grid-cols-4 gap-3 md:gap-8">
              {/* Listening */}
              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 md:w-28 md:h-28 mb-1 md:mb-3">
                  <svg className="transform -rotate-90 w-full h-full">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="40%"
                      stroke="#e5e7eb"
                      strokeWidth="4"
                      fill="none"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="40%"
                      stroke="#1e3a8a"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 45}
                      strokeDashoffset={animated ? getCircleProgress(64, 90) : 2 * Math.PI * 45}
                      className="transition-all duration-[4000ms] ease-out"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl md:text-3xl font-bold text-gray-800">64</span>
                  </div>
                </div>
                <span className="text-xs md:text-base text-gray-700">Listening</span>
              </div>

              {/* Reading */}
              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 md:w-28 md:h-28 mb-1 md:mb-3">
                  <svg className="transform -rotate-90 w-full h-full">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="40%"
                      stroke="#e5e7eb"
                      strokeWidth="4"
                      fill="none"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="40%"
                      stroke="#eab308"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 45}
                      strokeDashoffset={animated ? getCircleProgress(51, 90) : 2 * Math.PI * 45}
                      className="transition-all duration-2000 ease-out"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl md:text-3xl font-bold text-gray-800">51</span>
                  </div>
                </div>
                <span className="text-xs md:text-base text-gray-700">Reading</span>
              </div>

              {/* Speaking */}
              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 md:w-28 md:h-28 mb-1 md:mb-3">
                  <svg className="transform -rotate-90 w-full h-full">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="40%"
                      stroke="#e5e7eb"
                      strokeWidth="4"
                      fill="none"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="40%"
                      stroke="#6b7280"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 45}
                      strokeDashoffset={animated ? getCircleProgress(63, 90) : 2 * Math.PI * 45}
                      className="transition-all duration-2000 ease-out"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl md:text-3xl font-bold text-gray-800">63</span>
                  </div>
                </div>
                <span className="text-xs md:text-base text-gray-700">Speaking</span>
              </div>

              {/* Writing */}
              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 md:w-28 md:h-28 mb-1 md:mb-3">
                  <svg className="transform -rotate-90 w-full h-full">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="40%"
                      stroke="#e5e7eb"
                      strokeWidth="4"
                      fill="none"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="40%"
                      stroke="#a855f7"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 45}
                      strokeDashoffset={animated ? getCircleProgress(63, 90) : 2 * Math.PI * 45}
                      className="transition-all duration-2000 ease-out"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl md:text-3xl font-bold text-gray-800">63</span>
                  </div>
                </div>
                <span className="text-xs md:text-base text-gray-700">Writing</span>
              </div>
            </div>
          </div>

          {/* Skills Breakdown and Candidate Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Skills Breakdown */}
            <div>
              <h3 className="text-base md:text-2xl font-semibold text-gray-800 mb-2">Skills Breakdown</h3>
              <hr className="border-t border-gray-300 mb-4 md:mb-6" />
              <div className="space-y-3 md:space-y-4 relative">
                {/* Overall Marker with Flag */}
                <div className="absolute left-[67%] top-0 bottom-0 flex flex-col items-center" style={{ transform: 'translateX(-50%)' }}>
                  <div className="text-[10px] md:text-xs font-semibold text-gray-700 mb-1 whitespace-nowrap">60 Overall</div>
                  <div className="relative h-full">
                    <div className="w-0.5 h-full bg-gray-400"></div>
                    {/* Flag Marker */}
                    <div className="absolute top-12 md:top-16 left-1/2 -translate-x-1/2">
                      <div className="bg-gray-700 text-white text-[10px] md:text-xs font-semibold px-1.5 md:px-2 py-0.5 rounded shadow-sm whitespace-nowrap">
                        60
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-4 md:h-6"></div>

                {/* Listening Bar */}
                <div className="flex items-center gap-1 md:gap-1">
                  <span className="text-[10px] md:text-sm text-gray-600 w-12 md:w-14 text-right">Listening</span>
                  <span className="text-[10px] md:text-sm font-semibold text-gray-800 w-5 md:w-6">64</span>
                  <div className="flex-1 bg-gray-200 h-8 md:h-10 rounded relative overflow-hidden">
                    <div 
                      className="h-full bg-[#1e3a8a] transition-all duration-1500 ease-out rounded"
                      style={{ width: animated ? '71.1%' : '0%' }}
                    ></div>
                  </div>
                </div>

                {/* Reading Bar */}
                <div className="flex items-center gap-1 md:gap-1.5">
                  <span className="text-[10px] md:text-sm text-gray-600 w-12 md:w-14 text-right">Reading</span>
                  <span className="text-[10px] md:text-sm font-semibold text-gray-800 w-5 md:w-6">51</span>
                  <div className="flex-1 bg-gray-200 h-8 md:h-10 rounded relative overflow-hidden">
                    <div 
                      className="h-full bg-[#eab308] transition-all duration-1500 ease-out rounded"
                      style={{ width: animated ? '56.7%' : '0%' }}
                    ></div>
                  </div>
                </div>

                {/* Speaking Bar */}
                <div className="flex items-center gap-1 md:gap-1.5">
                  <span className="text-[10px] md:text-sm text-gray-600 w-12 md:w-14 text-right">Speaking</span>
                  <span className="text-[10px] md:text-sm font-semibold text-gray-800 w-5 md:w-6">63</span>
                  <div className="flex-1 bg-gray-200 h-8 md:h-10 rounded relative overflow-hidden">
                    <div 
                      className="h-full bg-[#6b7280] transition-all duration-1500 ease-out rounded"
                      style={{ width: animated ? '70%' : '0%' }}
                    ></div>
                  </div>
                </div>

                {/* Writing Bar */}
                <div className="flex items-center gap-1 md:gap-1.5">
                  <span className="text-[10px] md:text-sm text-gray-600 w-12 md:w-14 text-right">Writing</span>
                  <span className="text-[10px] md:text-sm font-semibold text-gray-800 w-5 md:w-6">63</span>
                  <div className="flex-1 bg-gray-200 h-8 md:h-10 rounded relative overflow-hidden">
                    <div 
                      className="h-full bg-[#a855f7] transition-all duration-1500 ease-out rounded"
                      style={{ width: animated ? '70%' : '0%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Candidate Information */}
            <div>
              <h3 className="text-base md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">Candidate Information</h3>
               <hr className="border-t border-gray-300 mb-3 md:mb-5" />
              <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
                <div className="flex">
                  <span className="font-semibold text-gray-800 w-36 md:w-48">Date of Birth:</span>
                  <span className="text-gray-700">15 Jan 1994</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-gray-800 w-36 md:w-48">Gender:</span>
                  <span className="text-gray-700">Male</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-gray-800 w-36 md:w-48">Country of Citizenship:</span>
                  <span className="text-gray-700">China</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-gray-800 w-36 md:w-48">Country of Residence:</span>
                  <span className="text-gray-700">China</span>
                </div>
              </div>
            </div>
          </div>

          {/* Test Centre Information */}
          <div>
            <h3 className="text-base md:text-2xl font-semibold text-gray-800 mb-2">Test Centre Information</h3>
            <hr className="border-t border-gray-300 mb-4 md:mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 md:gap-y-3 text-xs md:text-sm">
              <div className="flex">
                <span className="font-semibold text-gray-800 w-36 md:w-48">Test Centre Country:</span>
                <span className="text-gray-700">China</span>
              </div>
              <div className="flex">
                <span className="font-semibold text-gray-800 w-36 md:w-48">Test Date:</span>
                <span className="text-gray-700">16 Nov 2021</span>
              </div>
              <div className="flex">
                <span className="font-semibold text-gray-800 w-36 md:w-48">Test Centre ID:</span>
                <span className="text-gray-700">50404</span>
              </div>
              <div className="flex">
                <span className="font-semibold text-gray-800 w-36 md:w-48">Valid Until:</span>
                <span className="text-gray-700">16 Nov 2023</span>
              </div>
              <div className="flex md:col-span-2">
                <span className="font-semibold text-gray-800 w-36 md:w-48">Test Centre:</span>
                <span className="text-gray-700">TestLab - UK PPC</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}