"use client";  // Make sure it's a client component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for Next.js 13+
import { Eye, EyeOff } from 'lucide-react';

const MyPTELoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();  // Correct usage of useRouter in a client component

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Check if the username and password are correct
    if (username === 'admin' && password === 'admin123') {
      // Simulate login success and redirect to the welcome page
      setTimeout(() => {
        router.push('/welcome'); // Redirect to the welcome page
        setIsLoading(false);
      }, 1000);
    } else {
      setIsLoading(false);
      alert('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center ">
      <div className="w-full max-w-[640px] mx-auto">
        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 min-w-[640px] min-h-[710px] mx-auto">
          
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src="/logo.svg"  // Path to your SVG file in the public directory
              alt="Pearson Logo"
              className="h-auto max-w-[60%] max-h-[16rem]"
            />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-center text-[#0d004d] font-ja mb-2">
            Welcome to myPTE
          </h1>

          {/* Subtitle */}
          <p className="text-center text-[#666] text-sm mb-8">
            Book your tests and access your results.
          </p>

          {/* Username Field */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-[#999] rounded bg-white text-base outline-none focus:border-[#5A3D98] focus:border-2 transition-colors peer placeholder-transparent"
                placeholder="Username"
                autoComplete="off"
              />
              <label
                htmlFor="username"
                className={`absolute left-3 transition-all text-[#666] pointer-events-none ${
                  username
                    ? '-top-2.5 text-xs bg-white px-1'
                    : 'top-3 text-base peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1'
                }`}
              >
                Username
              </label>
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-[#999] rounded bg-white text-base outline-none focus:border-[#5A3D98] focus:border-2 transition-colors peer placeholder-transparent"
                placeholder="Password"
                autoComplete="off"
              />
              <label
                htmlFor="password"
                className={`absolute left-3 transition-all text-[#666] pointer-events-none ${
                  password
                    ? '-top-2.5 text-xs bg-white px-1'
                    : 'top-3 text-base peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1'
                }`}
              >
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666] hover:text-[#333] transition-colors"
                tabIndex={-1}
              >
                {showPassword ? (
                  <Eye size={20} />
                ) : (
                  <EyeOff size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Log in Button */}
          <div className="mb-4">
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-[#5A3D98] hover:bg-[#c1bfff] text-white font-medium py-3 px-6 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-3xl"
            >
              {isLoading ? 'Logging in...' : 'Log in'}
            </button>
          </div>

          {/* Remember Me & Forgot Links - Single Row */}
          <div className="flex items-center justify-between mb-6 text-sm">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 mr-2 accent-[#5A3D98] cursor-pointer"
              />
              <label htmlFor="remember" className="text-[#333] cursor-pointer select-none">
                Remember me
              </label>
            </div>
            <div className="text-sm text-[#666]">
              Forgot your{' '}
              <a href="#" className="text-[#5A3D98] hover:underline">
                username
              </a>
              {' '}or{' '}

              <a href="#" className="text-[#5A3D98] hover:underline">
                password
              </a>
              ?
            </div>
          </div>

          {/* Separator with Lines */}
          <div className="relative flex items-center mb-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-[#512EAB] text-sm font-medium whitespace-nowrap">
              Need a myPTE account?
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Sign Up Button */}
          <div>
            <a
              href="#"
              className="block w-full text-center bg-white border-2 border-[#5A3D98] text-[#5A3D98] hover:bg-[#0d004d] hover:text-[#fff] font-medium py-3 px-6 rounded-3xl transition-colors"
            >
              Sign up
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-[#666]">
          <div className="mb-2 flex items-center justify-center gap-2">
            <a href="#" className="hover:underline">
              Privacy policy
            </a>
            <span>|</span>
            <button className="hover:underline">
              Cookies
            </button>
            <span>|</span>
            <a href="#" className="hover:underline">
              Contact us
            </a>
          </div>
          <div>
            Copyright © 1996-2025 Pearson. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPTELoginPage;
