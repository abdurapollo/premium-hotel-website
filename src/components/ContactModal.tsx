import { useState } from 'react';
import { X, Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('Room Reservation');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#C9A24D]/30 my-8">
        {/* Header */}
        <div className="bg-[#071A36] text-white px-6 sm:px-8 py-6 flex items-center justify-between border-b border-[#C9A24D]/30">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D8B867] font-semibold block">
              Contact & Concierge Desk
            </span>
            <h3 className="font-serif text-2xl font-bold tracking-wide mt-1">
              Connect With The Oakridge
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close contact modal"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {!isSubmitted ? (
            <div>
              {/* Hotel Contact Quick Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3 bg-[#F8F7F3] rounded-xl border border-neutral-200">
                  <div className="flex items-center gap-2 text-[#C9A24D] mb-1">
                    <Phone className="w-4 h-4" />
                    <span className="text-xs font-semibold text-[#172238]">Phone</span>
                  </div>
                  <p className="text-xs text-[#667085]">{HOTEL_INFO.phone}</p>
                </div>
                <div className="p-3 bg-[#F8F7F3] rounded-xl border border-neutral-200">
                  <div className="flex items-center gap-2 text-[#C9A24D] mb-1">
                    <Mail className="w-4 h-4" />
                    <span className="text-xs font-semibold text-[#172238]">Email</span>
                  </div>
                  <p className="text-xs text-[#667085] truncate">{HOTEL_INFO.email}</p>
                </div>
                <div className="p-3 bg-[#F8F7F3] rounded-xl border border-neutral-200">
                  <div className="flex items-center gap-2 text-[#C9A24D] mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-semibold text-[#172238]">Desk</span>
                  </div>
                  <p className="text-xs text-[#667085]">24/7 Front Office</p>
                </div>
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#172238] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Verma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F8F7F3] rounded-xl text-sm border border-neutral-200 focus:border-[#C9A24D] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#172238] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F8F7F3] rounded-xl text-sm border border-neutral-200 focus:border-[#C9A24D] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#172238] mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F8F7F3] rounded-xl text-sm border border-neutral-200 focus:border-[#C9A24D] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#172238] mb-1">
                      Inquiry Type
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#F8F7F3] rounded-xl text-sm border border-neutral-200 focus:border-[#C9A24D] focus:bg-white focus:outline-none cursor-pointer"
                    >
                      <option>Room Reservation</option>
                      <option>Corporate Group Rates</option>
                      <option>Banquet & Wedding Events</option>
                      <option>Dining & Table Reservation</option>
                      <option>Airport Chauffeur Transfer</option>
                      <option>Other Query</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#172238] mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about your dates, preferences, or event requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#F8F7F3] rounded-xl text-sm border border-neutral-200 focus:border-[#C9A24D] focus:bg-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-semibold text-xs tracking-wider uppercase text-[#071A36] bg-[#C9A24D] hover:bg-[#D8B867] transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Concierge</span>
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-8 animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#172238]">
                Message Received
              </h4>
              <p className="text-xs sm:text-sm text-[#667085] mt-2 max-w-md mx-auto">
                Thank you, <strong>{name}</strong>. Our guest relations executive will review your inquiry regarding <strong>{inquiryType}</strong> and reach out to you within 2 hours.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 rounded-full bg-[#071A36] text-white text-xs font-semibold hover:bg-[#102747] cursor-pointer"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
