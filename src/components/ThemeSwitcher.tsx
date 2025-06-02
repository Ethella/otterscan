import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex h-7 w-16 items-center rounded-full border
        transition-colors focus:outline-none
        ${theme === 'dark'
          ? 'bg-[#181312] border-[#a38a5a]'
          : 'bg-gray-200 border-gray-400'}
      `}
      role="switch"
      aria-checked={theme === 'dark'}
    >
      {/* Sun icon (left) */}
      <span className={`absolute left-2 text-[#a38a5a] transition-opacity duration-200 ${theme === 'light' ? 'opacity-0' : 'opacity-100'}`}>
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="4" />
          <g>
            <line x1="10" y1="2" x2="10" y2="4" stroke="currentColor" strokeWidth="1.5" />
            <line x1="10" y1="16" x2="10" y2="18" stroke="currentColor" strokeWidth="1.5" />
            <line x1="4" y1="10" x2="2" y2="10" stroke="currentColor" strokeWidth="1.5" />
            <line x1="18" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.5" />
            <line x1="5.64" y1="5.64" x2="4.22" y2="4.22" stroke="currentColor" strokeWidth="1.5" />
            <line x1="14.36" y1="14.36" x2="15.78" y2="15.78" stroke="currentColor" strokeWidth="1.5" />
            <line x1="5.64" y1="14.36" x2="4.22" y2="15.78" stroke="currentColor" strokeWidth="1.5" />
            <line x1="14.36" y1="5.64" x2="15.78" y2="4.22" stroke="currentColor" strokeWidth="1.5" />
          </g>
        </svg>
      </span>
      {/* Moon icon (right) */}
      <span className={`absolute right-2 text-[#a38a5a] transition-opacity duration-200 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}>
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M15.5 13.5A7 7 0 1 1 13.5 4.5a5 5 0 1 0 2 9z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {/* Toggle circle with selected icon */}
      <span
        className={`
          inline-block h-5 w-5 transform rounded-full transition-transform
          ${theme === 'dark'
            ? 'bg-[#2a231b] translate-x-9'
            : 'bg-white translate-x-1'}
          flex items-center justify-center absolute
          top-1
        `}
      >
        {theme === 'dark' ? (
          // Moon icon inside toggle
          <svg
            className="h-5 w-5 text-[#a38a5a] fill-current"
            viewBox="0 0 20 20"
          >
            <path
              d="M15.5 13.5A7 7 0 1 1 13.5 4.5a5 5 0 1 0 2 9z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          // Sun icon inside toggle
          <svg
            className="h-5 w-5 text-[#a38a5a] fill-current"
            viewBox="0 0 20 20"
          >
            <circle cx="10" cy="10" r="4" />
            <g>
              <line x1="10" y1="2" x2="10" y2="4" stroke="currentColor" strokeWidth="1.5" />
              <line x1="10" y1="16" x2="10" y2="18" stroke="currentColor" strokeWidth="1.5" />
              <line x1="4" y1="10" x2="2" y2="10" stroke="currentColor" strokeWidth="1.5" />
              <line x1="18" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.5" />
              <line x1="5.64" y1="5.64" x2="4.22" y2="4.22" stroke="currentColor" strokeWidth="1.5" />
              <line x1="14.36" y1="14.36" x2="15.78" y2="15.78" stroke="currentColor" strokeWidth="1.5" />
              <line x1="5.64" y1="14.36" x2="4.22" y2="15.78" stroke="currentColor" strokeWidth="1.5" />
              <line x1="14.36" y1="5.64" x2="15.78" y2="4.22" stroke="currentColor" strokeWidth="1.5" />
            </g>
          </svg>
        )}
      </span>
    </button>
  );
}; 