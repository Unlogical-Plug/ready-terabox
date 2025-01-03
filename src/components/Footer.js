"use client";

export default function Footer() {
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden lg:flex flex-col">
        {/* Footer */}
        <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-white/5">
          <div className="max-w-7xl mx-auto px-8 py-6">
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-900">
              {[
                ["Privacy Policy", "/privacy"],
                ["About Us", "/about"],
                ["Terms of Service", "/tos"],
                ["Contact", "/contact"],
                ["DMCA", "/dmca"],
              ].map(([title, url]) => (
                <a
                  key={title}
                  href={url}
                  className="hover:text-white transition-colors duration-200"
                >
                  {title}
                </a>
              ))}
            </nav>
          </div>
        </footer>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden px-4 py-12">
        {/* Similar mobile content with adjusted styling */}
      </div>
    </div>
  );
}
