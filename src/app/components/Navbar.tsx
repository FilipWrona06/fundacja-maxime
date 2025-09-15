'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-raisinBlack p-4 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          
          {/* ---- Wersja na duże ekrany (Desktop) ---- */}
          <div className="hidden lg:flex w-full items-center text-center">
            {/* Lewa strona linków */}
            <div className="flex-1 flex justify-start space-x-0 [@media(min-width:1025px)]:space-x-2">
              <Link href="/" className="hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">Home</Link>
              <Link href="/about" className="hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">O nas</Link>
              <Link href="/gallery" className="hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">Galeria</Link>
            </div>

            {/* Logo na środku */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-3xl [@media(min-width:1025px)]:text-4xl p-0.74 font-youngest">
                Fundacja Maxime
              </Link>
            </div>

            {/* Prawa strona linków + NOWY PRZYCISK */}
            <div className="flex-1 flex justify-end items-center space-x-4">
              <Link href="/news" className="hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">Aktualności</Link>
              <Link href="/events" className="hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">Wydarzenia</Link>
              <Link href="/contact" className="hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">Kontakt</Link>
              
              {/* ZMIANA STYLU PRZYCISKU "WESPRZYJ NAS" */}
              <Link 
                href="https://patronite.pl/stowarzyszeniemaxime" // <-- ZMIEŃ NA SWÓJ LINK
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-4 bg-transparent border-2 border-philippineSilver text-white font-montserrat font-bold px-5 py-2 rounded-3xl text-sm hover:bg-philippineSilver hover:text-raisinBlack transition-colors duration-250"
              >
                Wesprzyj nas
              </Link>
            </div>
          </div>

          {/* ---- Wersja na małe ekrany (Mobile) ---- */}
          <div className="lg:hidden flex justify-between items-center w-full">
            <div className="text-4xl pl-1.5 font-youngest">
              <Link href="/">Fundacja Maxime</Link>
            </div>
            <div>
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Rozwijane menu mobilne */}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-2 flex flex-col items-center">
            {/* ZMIANA STYLU PRZYCISKU "WESPRZYJ NAS" W MENU MOBILNYM */}
             <Link 
                href="https://patronite.pl/stowarzyszeniemaxime" // <-- ZMIEŃ NA SWÓJ LINK
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full text-center mb-2 bg-transparent border-2 border-philippineSilver text-white font-montserrat font-bold px-5 py-3 rounded-3xl text-base hover:bg-philippineSilver hover:text-raisinBlack transition-colors duration-250"
              >
                Wesprzyj nas
              </Link>
            
            <Link href="/" onClick={() => setIsOpen(false)} className="block w-full text-center hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block w-full text-center hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">O nas</Link>
            <Link href="/gallery" onClick={() => setIsOpen(false)} className="block w-full text-center hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">Galeria</Link>
            <Link href="/news" onClick={() => setIsOpen(false)} className="block w-full text-center hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">Aktualności</Link>
            <Link href="/events" onClick={() => setIsOpen(false)} className="block w-full text-center hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">Wydarzenia</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">Kontakt</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;