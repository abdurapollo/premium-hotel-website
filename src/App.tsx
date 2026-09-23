import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingForm, { BookingSearchParams } from './components/BookingForm';
import RoomsSection from './components/RoomsSection';
import AmenitiesSection from './components/AmenitiesSection';
import DiningSection from './components/DiningSection';
import LocationSection from './components/LocationSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import MenuModal from './components/MenuModal';
import AmenitiesModal from './components/AmenitiesModal';
import GalleryModal from './components/GalleryModal';
import ContactModal from './components/ContactModal';
import { Room, ROOMS } from './data/hotelData';

export default function App() {
  // Modal states
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState<Room | null>(null);
  const [currentSearchParams, setCurrentSearchParams] = useState<BookingSearchParams | null>(null);

  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [initialMenuCategory, setInitialMenuCategory] = useState<string>('All');

  const [amenitiesModalOpen, setAmenitiesModalOpen] = useState(false);
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Triggered when user submits booking search bar
  const handleCheckAvailability = (params: BookingSearchParams) => {
    setCurrentSearchParams(params);
    setSelectedRoomForBooking(ROOMS[0]);
    setBookingModalOpen(true);
  };

  // Triggered from "Book Now" buttons in header or CTA
  const handleOpenGeneralBooking = () => {
    setSelectedRoomForBooking(ROOMS[0]);
    setBookingModalOpen(true);
  };

  // Triggered when clicking a specific room card or "Book Now →" on a room
  const handleSelectRoom = (room: Room) => {
    setSelectedRoomForBooking(room);
    setBookingModalOpen(true);
  };

  // Triggered when clicking "View Menu →" or a food card
  const handleOpenMenu = (category?: string) => {
    setInitialMenuCategory(category || 'All');
    setMenuModalOpen(true);
  };

  // Triggered from "Explore All Amenities →"
  const handleOpenAmenities = () => {
    setAmenitiesModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F7F3] text-[#172238] flex flex-col font-sans selection:bg-[#C9A24D]/25 selection:text-[#071A36]">
      {/* 1. Header / Navigation */}
      <Header
        onBookNowClick={handleOpenGeneralBooking}
        onOpenGallery={() => setGalleryModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section + 3. Booking Search Bar */}
        <Hero>
          <BookingForm onCheckAvailability={handleCheckAvailability} />
        </Hero>

        {/* 4. Rooms Section */}
        <RoomsSection onSelectRoom={handleSelectRoom} />

        {/* 5. Amenities Section */}
        <AmenitiesSection onExploreAmenities={handleOpenAmenities} />

        {/* 6. Dining Section */}
        <DiningSection onViewMenu={handleOpenMenu} />

        {/* 7. Location Section */}
        <LocationSection />

        {/* 8. Testimonials Section */}
        <TestimonialsSection />

        {/* 9. Call to Action Section */}
        <CTASection onBookNow={handleOpenGeneralBooking} />
      </main>

      {/* 10. Footer */}
      <Footer
        onOpenGallery={() => setGalleryModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialRoom={selectedRoomForBooking}
        searchParams={currentSearchParams}
      />

      <MenuModal
        isOpen={menuModalOpen}
        onClose={() => setMenuModalOpen(false)}
        initialCategory={initialMenuCategory}
        onBookTable={handleOpenGeneralBooking}
      />

      <AmenitiesModal
        isOpen={amenitiesModalOpen}
        onClose={() => setAmenitiesModalOpen(false)}
        onBookNow={handleOpenGeneralBooking}
      />

      <GalleryModal
        isOpen={galleryModalOpen}
        onClose={() => setGalleryModalOpen(false)}
        onBookNow={handleOpenGeneralBooking}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
