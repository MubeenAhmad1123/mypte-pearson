"use client";

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Hardcoded users for authentication
const USERS = [
  { username: 'admin', password: 'admin123' },
  { username: 'testuser', password: 'test123' }
];

const PTELoginPage: React.FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleLogin = () => {
    setError('');

    // Check if credentials match any user
    const user = USERS.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Save to localStorage if remember me is checked
      if (rememberMe) {
        localStorage.setItem('rememberedUser', username);
      }
      // Save current session
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', username);
      
      // Redirect to welcome page
      router.push('/welcome');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
          {/* Logo - Centered */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <img 
                src="/logo.webp" 
                alt="Logo" 
                width={48} 
                height={48}
                className="object-contain"
              />
              <div className="flex items-center gap-2">
                <span className="text-gray-800 text-2xl font-light">Pearson</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-800 text-xl font-light">PTE</span>
              </div>
            </div>
          </div>

          {/* Welcome Text - Centered */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl text-gray-700 mb-2 font-light">
              Welcome to myPTE
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Book your tests and access your results.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          {/* Username Input - Floating Label */}
          <div className="mb-6 relative">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setUsernameFocused(true)}
              onBlur={() => setUsernameFocused(false)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 border-2 border-[#088BB4] rounded focus:outline-none focus:border-[#066a8a] peer placeholder-transparent"
              placeholder="Username"
              id="username"
            />
            <label
              htmlFor="username"
              className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                usernameFocused || username
                  ? '-top-2.5 text-xs bg-white px-1 text-[#088BB4]'
                  : 'top-3 text-gray-500 text-sm'
              }`}
            >
              Username
            </label>
          </div>

          {/* Password Input - Floating Label */}
          <div className="mb-6 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#088BB4] peer placeholder-transparent pr-12"
              placeholder="Password"
              id="password"
            />
            <label
              htmlFor="password"
              className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                passwordFocused || password
                  ? '-top-2.5 text-xs bg-white px-1 text-[#088BB4]'
                  : 'top-3 text-gray-500 text-sm'
              }`}
            >
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>

          {/* Log In Button */}
          <button 
            onClick={handleLogin}
            className="w-full bg-[#088BB4] hover:bg-[#066a8a] text-white font-medium py-3 rounded mb-4 transition-colors"
          >
            Log In
          </button>

          {/* Remember Me & Forgot Links - Single Line on Mobile */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 text-xs sm:text-sm gap-2 sm:gap-0">
            <label className="flex items-center gap-2 text-gray-700 whitespace-nowrap">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 border-2 border-gray-400 rounded"
              />
              Remember me
            </label>
            <div className="text-gray-700 whitespace-nowrap">
              Forgot your{' '}
              <a href="#" className="text-[#088BB4] hover:underline">
                username
              </a>{' '}
              or{' '}
              <a href="#" className="text-[#088BB4] hover:underline">
                password
              </a>
              ?
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">
              Need a myPTE account?
            </span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Sign Up Button */}
          <button className="w-full bg-white border-2 border-[#088BB4] text-[#088BB4] hover:bg-[#e6f4f7] font-medium py-3 rounded transition-colors">
            Sign up
          </button>

          {/* Footer Links - Single Line */}
          <div className="mt-8 text-center text-xs sm:text-sm">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[#088BB4] mb-2">
              <a href="#" className="hover:underline whitespace-nowrap">
                Privacy policy
              </a>
              <span className="text-gray-400">|</span>
              <a href="#" className="hover:underline whitespace-nowrap">
                Contact us
              </a>
            </div>
            <p className="text-gray-500 text-xs">
              Copyright © 1996-2024 Pearson. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PTELoginPage;