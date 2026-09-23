import { useState, useEffect } from 'react';
import { Menu, X, Phone, CalendarCheck } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface HeaderProps {
  onBookNowClick: () => void;
  onOpenGallery?: () => void;
  onOpenContact?: () => void;
}

export default function Header({
  onBookNowClick,
  onOpenGallery,
  onOpenContact,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = ['home', 'rooms', 'dining', 'amenities', 'location'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNav(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'gallery' && onOpenGallery) {
      onOpenGallery();
      return;
    }
    if (id === 'contact' && onOpenContact) {
      onOpenContact();
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveNav(id);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'dining', label: 'Dining' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'location', label: 'Location' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#071A36]/95 backdrop-blur-md shadow-lg shadow-[#071A36]/20 py-3 border-b border-[#C9A24D]/20'
            : 'bg-gradient-to-b from-[#071A36]/80 via-[#071A36]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Elegant lotus/leaf hotel logo + Brand Name */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="flex items-center gap-3.5 group text-left cursor-pointer"
            >
              {/* Elegant Lotus / Leaf Gold Hotel Crest Icon */}
              <div className="w-10 h-10 rounded-full border border-[#C9A24D]/60 flex items-center justify-center bg-[#071A36]/60 backdrop-blur-sm group-hover:border-[#D8B867] transition-colors shrink-0">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  className="w-6 h-6 text-[#C9A24D] transition-transform duration-300 group-hover:scale-110"
                >
                  {/* Stylized Lotus Petals */}
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
                  <circle cx="20" cy="32" r="1.5" fill="#D8B867" />
                </svg>
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.18em] text-white leading-tight uppercase group-hover:text-[#D8B867] transition-colors">
                  {HOTEL_INFO.name}
                </span>
                <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] tracking-[0.25em] text-[#C9A24D] font-medium uppercase leading-none mt-0.5">
                  <span>{HOTEL_INFO.subtitle}</span>
                  <span className="text-[#C9A24D]/50">•</span>
                  <span>{HOTEL_INFO.location}</span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-9">
              {navLinks.map((link) => {
                const isActive = activeNav === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`relative py-1 text-sm font-medium tracking-wider transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A24D] rounded-full transition-all duration-300" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right: Gold rounded "Book Now" button & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={onBookNowClick}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#071A36] bg-[#C9A24D] hover:bg-[#D8B867] transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#C9A24D]/20 transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Book Now</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                className="lg:hidden p-2 rounded-lg text-white hover:text-[#C9A24D] hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#071A36]/98 backdrop-blur-xl border-b border-[#C9A24D]/20 px-6 py-6 mt-3 shadow-2xl animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left py-2 text-base font-medium tracking-wide transition-colors flex items-center justify-between ${
                    activeNav === link.id
                      ? 'text-[#C9A24D] font-semibold pl-2 border-l-2 border-[#C9A24D]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {activeNav === link.id && (
                    <span className="text-xs text-[#C9A24D] uppercase tracking-wider">Active</span>
                  )}
                </button>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookNowClick();
                  }}
                  className="w-full py-3 rounded-full text-center text-xs font-semibold tracking-wider uppercase text-[#071A36] bg-[#C9A24D] hover:bg-[#D8B867] transition-all duration-200 shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Book Now</span>
                </button>

                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="w-full py-2.5 rounded-full text-center text-xs font-medium tracking-wider text-white/80 border border-white/20 hover:border-[#C9A24D] hover:text-[#C9A24D] transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Concierge: {HOTEL_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
