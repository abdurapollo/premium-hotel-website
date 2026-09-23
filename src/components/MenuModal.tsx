import { useState } from 'react';
import { X, Sparkles, Utensils, Award } from 'lucide-react';
import { MENU_ITEMS } from '../data/hotelData';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  onBookTable?: () => void;
}

export default function MenuModal({
  isOpen,
  onClose,
  initialCategory,
  onBookTable,
}: MenuModalProps) {
  const [activeTab, setActiveTab] = useState<string>(
    initialCategory || 'All'
  );

  if (!isOpen) return null;

  const tabs = ['All', 'South Indian', 'North Indian', 'Continental', 'Beverages & Wine'];

  const filteredItems =
    activeTab === 'All'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) =>
          item.category.toLowerCase().includes(activeTab.toLowerCase())
        );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#C9A24D]/30 my-8">
        {/* Modal Header */}
        <div className="bg-[#071A36] text-white px-6 sm:px-8 py-6 flex items-center justify-between border-b border-[#C9A24D]/30">
          <div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#D8B867] font-semibold">
              <Utensils className="w-3.5 h-3.5" />
              <span>The Oakridge Culinary Experience</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide mt-1">
              Restaurant & Dining Menu
            </h3>
            <p className="text-xs text-[#F8F7F3]/75 mt-0.5">
              Multi-cuisine restaurant • Breakfast 06:30–10:30 • All-Day 11:00–23:30
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="bg-[#F8F7F3] px-6 sm:px-8 py-3.5 border-b border-neutral-200 overflow-x-auto flex items-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#071A36] text-[#D8B867] shadow-sm'
                  : 'text-[#667085] hover:text-[#172238] hover:bg-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Menu Items List */}
        <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#F8F7F3]/60 hover:bg-[#F8F7F3] p-4 rounded-2xl border border-neutral-200/80 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      {/* Veg / Non-Veg Indicator Icon */}
                      <span
                        title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                        className={`w-3.5 h-3.5 border flex items-center justify-center rounded-[3px] shrink-0 ${
                          item.isVeg
                            ? 'border-emerald-600'
                            : 'border-red-600'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.isVeg ? 'bg-emerald-600' : 'bg-red-600'
                          }`}
                        />
                      </span>
                      <h4 className="font-serif text-base font-semibold text-[#172238] leading-snug">
                        {item.name}
                      </h4>
                    </div>
                    <span className="font-bold text-sm text-[#071A36] whitespace-nowrap">
                      ₹{item.price}
                    </span>
                  </div>

                  {item.isChefSpecial && (
                    <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#C9A24D] uppercase tracking-wider mt-1 ml-5">
                      <Award className="w-3 h-3" />
                      <span>Chef's Signature</span>
                    </div>
                  )}

                  <p className="text-xs text-[#667085] mt-1.5 leading-relaxed font-light ml-5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dietary notice */}
          <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#667085]">
            <p>
              Please inform our servers if you have any dietary restrictions or food allergies.
            </p>
            <button
              onClick={() => {
                onClose();
                if (onBookTable) onBookTable();
              }}
              className="px-5 py-2.5 rounded-full bg-[#C9A24D] text-[#071A36] font-semibold text-xs uppercase tracking-wider hover:bg-[#D8B867] transition-colors whitespace-nowrap cursor-pointer shadow-sm"
            >
              Reserve a Dining Table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
