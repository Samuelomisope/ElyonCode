import { Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const footerLinks = {
  Product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Security", href: "/security" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Changelog", href: "/changelog" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Partners", href: "/partners" },
    { name: "Press", href: "/press" },
  ],
  Resources: [
    { name: "Documentation", href: "/docs" },
    { name: "Community", href: "/community" },
    { name: "Help Center", href: "/help" },
    { name: "API Reference", href: "/api" },
    { name: "Status", href: "/status" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Licenses", href: "/licenses" },
    { name: "Compliance", href: "/compliance" },
  ],
};

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Desktop footer */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div className="col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left">
            <div className="flex items-center sm:justify-start space-x-2 sm:mb-4">
              <div className="rounded-lg">
                <img
                  src="/logo.jpg"
                  alt="ElyonCode Logo"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>
              <span className="text-lg font-bold sm:text-xl">
                <span className="text-white">Elyon</span>
                <span className="text-blue-400">Flow</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 max-w-xs mx-auto">
              ElyonFlow is a platform for developers to build and deploy
              applications using AI-powered tools and automation. Built for
              modern teams.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our GitHub page"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <Github className="w-5 h-5 sm:w-5 sm:h-5" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter profile"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5 sm:w-5 sm:h-5" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn profile"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5 sm:w-5 sm:h-5" aria-hidden="true" />
              </a>
              <a
                href="mailto:contact@elyoncode.com"
                aria-label="Send us an email"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 sm:w-5 sm:h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Footer links for desktop */}
          <div className="col-span-1 sm:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base">
                    {category}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          aria-label={`Navigate to ${link.name}`}
                          className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile footer (accordion style) */}
        <div className="sm:hidden space-y-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="border-b border-slate-800 pb-2">
              <button
                onClick={() =>
                  setOpenSection(openSection === category ? null : category)
                }
                className="w-full flex justify-between items-center text-white font-semibold text-base"
                aria-expanded={openSection === category}
                aria-controls={`${category}-links`}
              >
                {category}
                <span className="text-gray-400">
                  {openSection === category ? "-" : "+"}
                </span>
              </button>
              {openSection === category && (
                <ul
                  id={`${category}-links`}
                  className="mt-2 space-y-2"
                  aria-label={`${category} links`}
                >
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        aria-label={`Navigate to ${link.name}`}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Back to Top button with fade + scale + pulse */}
      {showButton && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 flex items-center space-x-2 px-4 py-2 bg-slate-800 text-white rounded-full shadow-lg hover:bg-slate-700 transition duration-300 transform hover:scale-105 animate-fadeInScale animate-pulseSlow"
        >
          <ArrowUp className="w-5 h-5" aria-hidden="true" />
          <span className="hidden sm:inline">Back to Top</span>
        </button>
      )}
    </footer>
  );
}

