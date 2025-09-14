'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'O nas' },
    { href: '/gallery', label: 'Galeria' },
    { href: '/news', label: 'Aktualności' },
    { href: '/events', label: 'Wydarzenia' },
    { href: '/contact', label: 'Kontakt' },
  ];

  return (
    <nav className="bg-raisinBlack p-4 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          
          {/* ---- Wersja na duże ekrany (Desktop) ---- */}
          <div className="hidden lg:flex w-full items-center text-center">
            {/* Lewa strona linków */}
            <div className="flex-1 flex justify-start space-x-4">
              <Link href="/" className="hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">Home</Link>
              <Link href="/about" className="hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">O nas</Link>
              <Link href="/gallery" className="hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">Galeria</Link>
            </div>

            {/* Logo na środku */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-4xl p-5 font-youngest">
                Fundacja Maxime
              </Link>
            </div>

            {/* Prawa strona linków */}
            <div className="flex-1 flex justify-end space-x-4">
              <Link href="/news" className="hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">Aktualności</Link>
              <Link href="/events" className="hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">Wydarzenia</Link>
              <Link href="/contact" className="hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">Kontakt</Link>
            </div>
          </div>

          {/* ---- Wersja na małe ekrany (Mobile) ---- */}
          <div className="lg:hidden flex justify-between items-center w-full">
            {/* Logo po lewej na mobilnych */}
            <div className="text-4xl font-youngest">
              <Link href="/">Fundacja Maxime</Link>
            </div>
            
            {/* Ikonka hamburgera */}
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
          <div className="lg:hidden mt-2.5 space-y-1">
            <Link href="/" onClick={() => setIsOpen(false)} className="block hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">O nas</Link>
            <Link href="/gallery" onClick={() => setIsOpen(false)} className="block hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">Galeria</Link>
            <Link href="/news" onClick={() => setIsOpen(false)} className="block hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">Aktualności</Link>
            <Link href="/events" onClick={() => setIsOpen(false)} className="block hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">Wydarzenia</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:bg-philippineSilver px-3 py-2 rounded-3xl text-lg font-montserrat font-bold duration-250">Kontakt</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;