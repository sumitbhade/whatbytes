import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button - Only visible on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-20 p-2 rounded-md bg-white shadow-sm"
      >
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-40
        transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0
        transition duration-200 ease-in-out
        w-64 min-h-screen bg-white border-r
      `}
      >
        <nav className="py-6">
          <Link
            href="/dashboard"
            className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
                fill="currentColor"
              />
            </svg>
            Dashboard
          </Link>

          <Link
            href="/skill-test"
            className="flex items-center px-6 py-3 text-blue-600 bg-blue-50 border-r-4 border-blue-600"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Skill Test
          </Link>

          <Link
            href="/internship"
            className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 6H3V4H21V6ZM15 11H3V9H15V11ZM15 16H3V14H15V16ZM15 21H3V19H15V21ZM19 11H17V9H19V11ZM19 16H17V14H19V16ZM19 21H17V19H19V21Z"
                fill="currentColor"
              />
            </svg>
            Internship
          </Link>
        </nav>
      </div>
    </>
  );
}
