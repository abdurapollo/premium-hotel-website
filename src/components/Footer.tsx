import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface FooterProps {
  onOpenGallery?: () => void;
  onOpenContact?: () => void;
}

export default function Footer({ onOpenGallery, onOpenContact }: FooterProps) {
  const [emailInput, setEmailInput] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim() && emailInput.includes('@')) {
      setNewsletterSubscribed(true);
      setEmailInput('');
    }
  };

  const scrollTo = (id: string) => {
    if (id === 'gallery' && onOpenGallery) {
      onOpenGallery();
      return;
    }
    if (id === 'contact' && onOpenContact) {
      onOpenContact();
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#071A36] text-white border-t border-[#C9A24D]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Left Column: Brand Lockup & Description */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-full border border-[#C9A24D]/60 flex items-center justify-center bg-[#102747] text-[#C9A24D]">
                <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
                  <path
                    d="M20 7C20 7 24 14 24 19C24 21.2 22.2 23 20 23C17.8 23 16 21.2 16 19C16 14 20 7 20 7Z"
                    fill="currentColor"
                  />
                  <path
                    d="M20 23C18 23 12 21 10 16C13.5 15.5 17.5 18 19 21.5C19.3 22.1 19.6 22.6 20 23Z"
                    fill="#D8B867"
                    opacity="0.85"
                  />
                  <path
                    d="M20 23C22 23 28 21 30 16C26.5 15.5 22.5 18 21 21.5C20.7 22.1 20.4 22.6 20 23Z"
                    fill="#D8B867"
                    opacity="0.85"
                  />
                  <path
                    d="M13 25C15.5 24 18 24 20 25C22 24 24.5 24 27 25C24.5 28 21.5 29 20 29C18.5 29 15.5 28 13 25Z"
                    fill="#C9A24D"
                  />
                </svg>
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-[0.18em] text-white block">
                  {HOTEL_INFO.name}
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#C9A24D] uppercase">
                  {HOTEL_INFO.subtitle} • {HOTEL_INFO.location}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-sm mb-6">
              A boutique luxury sanctuary delivering world-class hospitality, gourmet gastronomy, and refined comfort in the heart of Bangalore.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#C9A24D] hover:bg-[#C9A24D] hover:text-[#071A36] text-white/80 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#C9A24D] hover:bg-[#C9A24D] hover:text-[#071A36] text-white/80 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#C9A24D] hover:bg-[#C9A24D] hover:text-[#071A36] text-white/80 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#C9A24D] hover:bg-[#C9A24D] hover:text-[#071A36] text-white/80 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Middle Column: Navigation Mirror */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A24D] mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-white/75">
              <button
                onClick={() => scrollTo('home')}
                className="text-left py-1 hover:text-[#C9A24D] transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => scrollTo('rooms')}
                className="text-left py-1 hover:text-[#C9A24D] transition-colors cursor-pointer"
              >
                Rooms & Suites
              </button>
              <button
                onClick={() => scrollTo('dining')}
                className="text-left py-1 hover:text-[#C9A24D] transition-colors cursor-pointer"
              >
                Fine Dining
              </button>
              <button
                onClick={() => scrollTo('amenities')}
                className="text-left py-1 hover:text-[#C9A24D] transition-colors cursor-pointer"
              >
                Amenities
              </button>
              <button
                onClick={() => scrollTo('location')}
                className="text-left py-1 hover:text-[#C9A24D] transition-colors cursor-pointer"
              >
                Location & Map
              </button>
              <button
                onClick={() => scrollTo('gallery')}
                className="text-left py-1 hover:text-[#C9A24D] transition-colors cursor-pointer"
              >
                Photo Gallery
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="text-left py-1 hover:text-[#C9A24D] transition-colors cursor-pointer"
              >
                Contact & Inquiries
              </button>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 space-y-2 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C9A24D] shrink-0" />
                <span>MG Road, Bengaluru 560001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C9A24D] shrink-0" />
                <span>{HOTEL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C9A24D] shrink-0" />
                <span>{HOTEL_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Exclusive Newsletter Offers */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A24D] mb-4">
              Private Offers & News
            </h4>
            <p className="text-xs text-white/70 mb-4 leading-relaxed font-light">
              Receive secret promotional member rates, private tasting invitations, and seasonal Bengaluru getaway packages.
            </p>

            {newsletterSubscribed ? (
              <div className="p-4 bg-[#C9A24D]/15 border border-[#C9A24D]/40 rounded-xl text-xs text-[#D8B867] flex items-center gap-2 animate-fade-in">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Thank you. You are enrolled for private member rates!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <div className="relative">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 bg-white/10 rounded-xl text-xs text-white placeholder-white/40 border border-white/15 focus:border-[#C9A24D] focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#C9A24D] text-[#071A36] hover:bg-[#D8B867] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Subscribe For Offers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Navigation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            <p>© 2025 The Oakridge Hotel & Suites. All rights reserved.</p>
          </div>

          <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-white/60">
            <button onClick={() => scrollTo('home')} className="hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            <span>•</span>
            <button onClick={() => scrollTo('rooms')} className="hover:text-white transition-colors cursor-pointer">
              Rooms
            </button>
            <span>•</span>
            <button onClick={() => scrollTo('dining')} className="hover:text-white transition-colors cursor-pointer">
              Dining
            </button>
            <span>•</span>
            <button onClick={() => scrollTo('amenities')} className="hover:text-white transition-colors cursor-pointer">
              Amenities
            </button>
            <span>•</span>
            <button onClick={() => scrollTo('location')} className="hover:text-white transition-colors cursor-pointer">
              Location
            </button>
            <span>•</span>
            <button onClick={() => scrollTo('gallery')} className="hover:text-white transition-colors cursor-pointer">
              Gallery
            </button>
            <span>•</span>
            <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors cursor-pointer">
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
