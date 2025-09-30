'use client'; // KROK 1: Oznaczamy jako komponent kliencki

import { useState, useEffect } from 'react'; // ZAKTUALIZOWANA LINIA
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa';
import jsonp from 'jsonp'; // Importujemy zainstalowaną bibliotekę

const Footer = () => {
  // KROK 2: Definiujemy stany do zarządzania formularzem
  const [email, setEmail] = useState(''); // Zainicjuj stan pustym stringiem
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000); // 5 sekund

      return () => clearTimeout(timer);
    }
  }, [status]); // Uruchom tylko, gdy `status` się zmieni

  // KROK 3: Tworzymy funkcję obsługującą wysyłkę
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Zatrzymujemy domyślne przeładowanie strony
    setStatus('loading');
    setMessage('');

    // UWAGA: Wklej tutaj swój URL akcji z Mailchimp
    const mailchimpUrl = 'https://interia.us22.list-manage.com/subscribe/post?u=571c8b619e1df84cb6ac15b70&id=c4775cb68a&f_id=00f3c2e1f0';

    // Mailchimp do zapytań JSONP wymaga specjalnie zmodyfikowanego URL
    const url = mailchimpUrl.replace('/post?', '/post-json?');

    // Wysyłamy dane za pomocą jsonp
    jsonp(`${url}&EMAIL=${email}`, { param: 'c' }, (err, data) => {
      if (err || (data && data.result !== 'success')) {
        setStatus('error');
        setMessage('Wystąpił błąd. Sprawdź adres e-mail i spróbuj ponownie.');
      } else {
        setStatus('success');
        setMessage('Dziękujemy! Sprawdź skrzynkę, by potwierdzić subskrypcję.');
        setEmail(''); // Czyścimy pole po sukcesie
      }
    });
  };

  return (
    <footer className="bg-raisinBlack">
      <div className="container mx-auto px-6 py-12">

        {/* Główna siatka (grid) stopki. Jest responsywna:                                        */}
        {/* - Na najmniejszych ekranach: 1 kolumna (`grid-cols-1`)                                */}
        {/* - Na średnich ekranach (md): 4 kolumny (`md:grid-cols-4`)                             */}
        {/* - Na dużych ekranach (lg): 5 kolumn (`lg:grid-cols-5`)                                 */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          {/* Kolumna 1: Branding i media społecznościowe */}
          {/* Na ekranach `md` i większych, ta kolumna zajmuje dwie pozycje w siatce (`md:col-span-2`). */}
          <div className="md:col-span-2">
            <h3 className="text-4xl font-youngest mb-4">
              Fundacja Maxime
            </h3>
            <p className="font-montserrat text-sm max-w-md">
              Dzielimy się pasją do muzyki klasycznej, inspirując i edukując kolejne pokolenia artystów i słuchaczy.
            </p>

            {/* Linki do mediów społecznościowych */}
            <div className="flex gap-4 mt-6">
              {/* `target="_blank"` otwiera link w nowej karcie. `rel="noopener noreferrer"` jest ważne ze względów bezpieczeństwa. */}
              <a href="https://www.facebook.com/stowarzyszeniemaxime" target="_blank" title='Nasz Facebook'  rel="noopener noreferrer" className="text-2xl hover:text-philippineSilver transition-colors duration-250">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/maxime.orchestra/" target="_blank" title='Nasz Instagram' rel="noopener noreferrer" className="text-2xl  hover:text-philippineSilver transition-colors duration-250">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/@stowarzyszeniemaxime" target="_blank" title='Nasz kanał YouTube' rel="noopener noreferrer" className="text-2xl hover:text-philippineSilver transition-colors duration-250">
                <FaYoutube />
              </a>
              <a href="https://patronite.pl/stowarzyszeniemaxime" target="_blank" rel="noopener noreferrer" className="text-2xl  hover:text-philippineSilver transition-colors duration-250" title="Wesprzyj nas na Patronite">
                <FaHeart />
              </a>
            </div>
          </div>

          {/* Kolumna 2: Nawigacja */}
          <div>
            <h4 className="text-lg font-montserrat font-bold mb-4">
              Nawigacja
            </h4>
            <div className="flex flex-col gap-2 font-montserrat text-sm">
              <Link href="/o-nas" className="hover:text-philippineSilver transition-colors duration-250">
                O nas
              </Link>
              <Link href="/wydarzenia" className="hover:text-philippineSilver transition-colors duration-250">
                Wydarzenia
              </Link>
              <Link href="/galeria" className="hover:text-philippineSilver transition-colors duration-250">
                Galeria
              </Link>
              <Link href="/kontakt" className="hover:text-philippineSilver transition-colors duration-250">
                Kontakt
              </Link>
            </div>
          </div>

          {/* Kolumna 3: Kontakt */}
          <div>
            <h4 className="text-lg font-montserrat font-bold mb-4">
              Kontakt
            </h4>
            <div className="text-sm font-montserrat space-y-2">
              <p>ul. Kossaka 12, Dąbrowa Górnicza</p>
              <p>kontakt@maxime.pl</p>
              <p>(+48) 123 456 789</p>
            </div>
          </div>

          {/* Kolumna 4: Newsletter */}
          {/* Ciekawy przykład responsywności: na ekranach `md` ta kolumna rozciąga się na całą szerokość (`md:col-span-4`), */}
          {/* a na `lg` wraca do bycia jedną z pięciu kolumn (`lg:col-span-1`). */}
          <div className="md:col-span-4 lg:col-span-1">
            <h4 className="text-lg font-montserrat font-bold mb-4">
              Bądź na bieżąco
            </h4>
                        {/* KROK 4: Aktualizujemy JSX formularza */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Twój adres e-mail"
                value={email} // Wartość kontrolowana przez stan
                onChange={(e) => setEmail(e.target.value)} // Aktualizacja stanu przy wpisywaniu
                required
                className="w-full px-4 py-2 bg-black/50 placeholder-philippineSilver rounded-3xl focus:outline-none focus:ring-2 focus:ring-philippineSilver font-montserrat" 
              />
              <button 
                type="submit" 
                disabled={status === 'loading'} // Blokada przycisku podczas wysyłania
                className="w-full bg-transparent border-2 border-philippineSilver font-montserrat font-bold px-4 py-2 rounded-3xl hover:bg-philippineSilver hover:text-raisinBlack transition-colors duration-250 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Zapisywanie...' : 'Zapisz się'}
              </button>
            </form>
            
            {/* Wyświetlanie komunikatów zwrotnych */}
            {status === 'success' && <p className="text-sm mt-2 font-montserrat font-bold text-green-400">{message}</p>}
            {status === 'error' && <p className="text-sm mt-2 font-montserrat font-bold text-red-400">{message}</p>}
          </div>
        </div>

        {/* Sekcja Copyright i autor - oddzielona wizualnie górną krawędzią.      */}
        <div className="border-t border-philippineSilver mt-12 pt-8 text-center text-sm font-montserrat">
          <p>
            {/* Użycie `{new Date().getFullYear()}` sprawia, że rok w prawach autorskich jest zawsze aktualny. */}
            &copy; {new Date().getFullYear()} Fundacja Maxime. Wszelkie prawa zastrzeżone | Wykonanie: <a href="https://www.instagram.com/filip_wrona/" target="_blank" rel="noopener noreferrer" className="hover:text-philippineSilver transition-colors duration-250">
              Filip Wrona
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;