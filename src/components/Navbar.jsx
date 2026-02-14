import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar({ scrolled }) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav
      className={`${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800"
          : "bg-slate-950/20 backdrop-blur-sm"
      } fixed top-0 w-full z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img
                src="/logo.jpg"
                alt="ElyonCode Logo"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-white">Elyon</span>
              <span className="text-blue-400">Code</span>
            </span>
          </div>

          {/* Nav links (desktop) */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#feature"
              className="text-white hover:text-blue-400 transition-colors duration-300 text-sm lg:text-base"
            >
              Feature
            </a>
            <a
              href="#pricing"
              className="text-white hover:text-blue-400 transition-colors duration-300 text-sm lg:text-base"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-white hover:text-blue-400 transition-colors duration-300 text-sm lg:text-base"
            >
              Testimonials
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuIsOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuIsOpen && (
        <div className="md:hidden bg-slate-900/95 border-t border-slate-800 backdrop-blur-lg animate-in slide-in-from-top">
          <div className="flex flex-col items-center px-4 py-4 sm:py-6 space-y-3">
            <a
              href="#feature"
              onClick={() => setMobileMenuIsOpen(false)}
              className="text-white hover:text-blue-400 transition-colors duration-300 text-sm lg:text-base"
            >
              Feature
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuIsOpen(false)}
              className="text-white hover:text-blue-400 transition-colors duration-300 text-sm lg:text-base"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuIsOpen(false)}
              className="text-white hover:text-blue-400 transition-colors duration-300 text-sm lg:text-base"
            >
              Testimonials
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
