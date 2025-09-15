// components/Footer.tsx
import Link from 'next/link';
// ZMIANA: Usunęliśmy SiPatreon, dodaliśmy FaHeart
import { FaFacebook, FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-raisinBlack">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          <div className="md:col-span-2">
            <h3 className="text-4xl font-youngest text-white mb-4">Fundacja Maxime</h3>
            <p className="font-montserrat text-white  text-sm max-w-md">
              Dzielimy się pasją do muzyki klasycznej, inspirując i edukując kolejne pokolenia artystów i słuchaczy.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" target="_blank" title='Nasz Facebook'  rel="noopener noreferrer" className="text-2xl text-white hover:text-philippineSilver transition-colors duration-250"><FaFacebook /></a>
              <a href="#" target="_blank" title='Nasz Instagram' rel="noopener noreferrer" className="text-2xl text-white  hover:text-philippineSilver transition-colors duration-250"><FaInstagram /></a>
              <a href="#" target="_blank" title='Nasz kanał YouTube' rel="noopener noreferrer" className="text-2xl text-white  hover:text-philippineSilver transition-colors duration-250"><FaYoutube /></a>
              <a 
                href="https://patronite.pl/stowarzyszeniemaxime" // <-- ZMIEŃ NA SWÓJ LINK
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl text-white  hover:text-philippineSilver transition-colors duration-250"
                title="Wesprzyj nas na Patronite" // Dodatkowy opis dla SEO i dostępności
              >
                {/* ZMIANA: Używamy ikony serca */}
                <FaHeart />
              </a>
            </div>
          </div>

          {/* ... reszta kodu pozostaje bez zmian ... */}

          <div>
            <h4 className="text-lg font-montserrat font-bold text-white mb-4">Nawigacja</h4>
            <div className="flex flex-col gap-2 font-montserrat text-white text-sm">
              <Link href="/o-nas" className="hover:text-philippineSilver transition-colors duration-250">O nas</Link>
              <Link href="/wydarzenia" className="hover:text-philippineSilver transition-colors duration-250">Wydarzenia</Link>
              <Link href="/galeria" className="hover:text-philippineSilver transition-colors duration-250">Galeria</Link>
              <Link href="/kontakt" className="hover:text-philippineSilver transition-colors duration-250">Kontakt</Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-montserrat font-bold text-white mb-4">Kontakt</h4>
            <div className="text-sm font-montserrat text-white space-y-2">
              <p>ul. Kossaka 12, Dąbrowa Górnicza</p>
              <p>kontakt@maxime.pl</p>
              <p>(+48) 123 456 789</p>
            </div>
          </div>
          <div className="md:col-span-4 lg:col-span-1">
             <h4 className="text-lg font-montserrat font-bold text-white mb-4">Bądź na bieżąco</h4>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Twój adres e-mail" 
                className="w-full px-4 py-2 bg-black/50 text-white placeholder-philippineSilver rounded-3xl focus:outline-none focus:ring-2 focus:ring-philippineSilver font-montserrat"
              />
              <button type="submit" className="w-full bg-transparent border-2 border-philippineSilver text-white font-montserrat font-bold px-4 py-2 rounded-3xl hover:bg-philippineSilver hover:text-raisinBlack transition-colors duration-250">
                Zapisz się
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-philippineSilver mt-12 pt-8 text-center text-sm text-philippineSilver font-montserrat">
          <p>&copy; {new Date().getFullYear()} Fundacja Maxime. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;