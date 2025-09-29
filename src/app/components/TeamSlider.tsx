// components/TeamSlider.tsx
'use client'; // To jest komponent interaktywny, więc dyrektywa jest wymagana

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Importuj style Swipera - to kluczowe!
import 'swiper/css';
import 'swiper/css/navigation';

// Definiujemy typ dla członka zespołu dla lepszej organizacji
type TeamMember = {
  name: string;
  position: string;
  imageUrl: string;
  description: string;
};

type TeamSliderProps = {
  members: TeamMember[];
};

const TeamSlider: React.FC<TeamSliderProps> = ({ members }) => {
  return (
    <div className="relative">
      <Swiper
        // Włączamy moduły, których będziemy używać
        modules={[Navigation]}
        // Włączamy nawigację (strzałki)
        navigation
        // Odstęp między slajdami
        spaceBetween={30}
        // Ile slajdów widać na raz (domyślnie 1)
        slidesPerView={1}
        // Responsywne ustawienia
        breakpoints={{
          // dla ekranów >= 640px
          640: {
            slidesPerView: 2,
          },
          // dla ekranów >= 1024px
          1024: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper" // Możemy dodać klasę do stylizacji
      >
        {members.map((member) => (
          <SwiperSlide key={member.name}>
            {/* Tutaj wklejamy DOKŁADNIE ten sam kod karty, który już miałeś */}
            <div className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer">
              <div className="w-full h-full border-2 border-philippineSilver transition-transform duration-250 ease-in-out group-hover:scale-110 flex items-center justify-center">
                <span>Zdjęcie</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 to-transparent transition-opacity duration-250 group-hover:opacity-0">
                <h3 className="font-montserrat font-bold text-lg">{member.name}</h3>
                <p className="text-sm">{member.position}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-6 bg-raisinBlack/90 text-center opacity-0 transition-opacity duration-250 ease-in-out group-hover:opacity-100">
                <p className="text-sm">{member.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSlider;