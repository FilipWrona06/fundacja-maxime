'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  // Stan przechowujący informację, czy menu mobilne jest otwarte.
  const [isOpen, setIsOpen] = useState(false);

  // Funkcja do przełączania stanu menu mobilnego (otwarte/zamknięte).
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Używamy `sticky top-0 z-50`, aby nawigacja pozostawała na górze strony podczas przewijania.
    <nav className="bg-raisinBlack p-4 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          
          {/* Wersja desktopowa - widoczna tylko na dużych ekranach (lg i większe)    */}
          <div className="hidden lg:flex w-full items-center text-center">
            {/* Lewa strona linków / nawigacji*/}
            <div className="flex-1 flex justify-start space-x-0 [@media(min-width:1025px)]:space-x-2">
              <Link href="/" className="hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">
                Home
              </Link>
              <Link href="/about" className="hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">
                O nas
              </Link>
              <Link href="/gallery" className="hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">
                Galeria
              </Link>
            </div>

            {/* Logo / Nazwa fundacji na środku */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-3xl [@media(min-width:1025px)]:text-4xl p-0.74 font-youngest">
                Fundacja Maxime
              </Link>
            </div>

            {/* Prawa strona linków / nawigacji */}
            <div className="flex-1 flex justify-end items-center space-x-4">
              <Link href="/news" className="hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">
                Aktualności
              </Link>
              <Link href="/events" className="hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">
                Wydarzenia
              </Link>
              <Link href="/contact" className="hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">
                Kontakt
              </Link>
              
              {/* Przycisk "Wesprzyj nas" z osobnym stylem */}
              <Link href="https://patronite.pl/stowarzyszeniemaxime" target="_blank" rel="noopener noreferrer" className="ml-4 bg-transparent border-2 border-philippineSilver font-montserrat font-bold px-5 py-2 rounded-3xl text-sm hover:bg-philippineSilver hover:text-raisinBlack transition-colors duration-250">
                Wesprzyj nas
              </Link>
            </div>
          </div>

          {/* Wersja mobilna - widoczna tylko na małych ekranach (poniżej lg) */}
          <div className="lg:hidden flex justify-between items-center w-full">
            <div className="text-4xl pl-1.5 font-youngest">
              <Link href="/">
                Fundacja Maxime
              </Link>
            </div>

            {/* Przycisk "hamburger" do otwierania/zamykania menu */}
            <div>
              <button onClick={toggleMenu} className="focus:outline-none" aria-label="Otwórz menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {/* Zmienia ikonę w zależności od stanu `isOpen` (hamburger lub X) */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Rozwijane menu mobilne - wyświetlane warunkowo, gdy `isOpen` jest true */}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-2 flex flex-col items-center">
            {/* Przycisk "Wesprzyj nas" w wersji mobilnej - dla lepszej widoczności na górze */}
             <Link href="https://patronite.pl/stowarzyszeniemaxime" target="_blank" rel="noopener noreferrer" className="w-full text-center mb-2 bg-transparent border-2 border-philippineSilver font-montserrat font-bold px-5 py-3 rounded-3xl text-base hover:bg-philippineSilver hover:text-raisinBlack transition-colors duration-250">
                Wesprzyj nas
              </Link>
            
            {/* Po kliknięciu w link, menu jest zamykane (`setIsOpen(false)`), co poprawia UX */}
            <Link href="/" onClick={() => setIsOpen(false)} className="block w-full text-center hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block w-full text-center hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">
              O nas
            </Link>
            <Link href="/gallery" onClick={() => setIsOpen(false)} className="block w-full text-center hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">
              Galeria
            </Link>
            <Link href="/news" onClick={() => setIsOpen(false)} className="block w-full text-center hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">
              Aktualności
            </Link>
            <Link href="/events" onClick={() => setIsOpen(false)} className="block w-full text-center hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">
              Wydarzenia
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">
              Kontakt
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;